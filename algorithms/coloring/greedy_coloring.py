from typing import Any, Dict, List, Optional, Tuple
import networkx as nx
from algorithms.registry import AlgorithmRegistry
from core.base_algorithm import BaseGraphAlgorithm
from core.graph_model import SpatialGraphModel


class GreedyColoring(BaseGraphAlgorithm):
    """Algoritma Dasar Pewarnaan Graf (Greedy Sequential Approach)."""

    SUPPORTED_EVENT_TYPES = frozenset({"CONFLICT_NODE_TRIGGER"})

    def __init__(self, model: SpatialGraphModel):
        super().__init__(model)
        self.colors: Dict[int, Optional[int]] = {}
        self.chromatic_number: int = 0

    def color_graph(self) -> Dict[int, int]:
        undirected = self.graph.to_undirected()
        nodes = sorted(list(undirected.nodes()))
        self.colors = {node: None for node in nodes}

        self.log_step(
            event_type="INITIALIZATION",
            state_mutations={
                "total_nodes": len(nodes),
                "colors": self.colors.copy(),
            },
        )

        if not nodes:
            self.chromatic_number = 0
            return {}

        for node in nodes:
            neighbor_colors = {
                self.colors[neighbor]
                for neighbor in undirected.neighbors(node)
                if self.colors.get(neighbor) is not None
            }

            color = 0
            while color in neighbor_colors:
                color += 1

            self.colors[node] = color

            self.log_step(
                event_type="COLOR_ASSIGNED",
                state_mutations={
                    "current_node": node,
                    "assigned_color": color,
                    "neighbor_colors": sorted(list(neighbor_colors)),
                    "colors": self.colors.copy(),
                },
            )

        self.chromatic_number = len(set(self.colors.values()))
        return self.colors

    def _compute_parade_path(self, start_node: int, goal_node: int) -> List[int]:
        undirected = self.graph.to_undirected()
        if start_node in undirected and goal_node in undirected:
            try:
                return nx.shortest_path(undirected, source=start_node, target=goal_node)
            except nx.NetworkXNoPath:
                return [start_node, goal_node]
        return [start_node, goal_node]

    def run(
        self, start_node: Optional[int] = None, goal_node: Optional[int] = None
    ) -> Any:
        colors = self.color_graph()
        if start_node is None and goal_node is None:
            return colors
        path = self._compute_parade_path(start_node, goal_node)
        return path, float(self.chromatic_number)

    def handle_dynamic_event(
        self, event_data: Dict[str, Any]
    ) -> Tuple[List[int], float]:
        target_node = event_data.get("target_node")
        if target_node is None and "edge" in event_data:
            target_node = event_data["edge"][0]

        undirected = self.graph.to_undirected()
        active_phase = self.colors.get(target_node, 0)
        blocked_neighbors = (
            sorted(list(undirected.neighbors(target_node)))
            if target_node in undirected
            else []
        )

        self.log_step(
            event_type="CONFLICT_NODE_RESOLVED",
            state_mutations={
                "target_node": target_node,
                "active_phase_color": active_phase,
                "blocked_conflicting_neighbors": blocked_neighbors,
                "chromatic_number": self.chromatic_number,
                "colors": self.colors.copy(),
            },
        )

        start = event_data.get("start", 0)
        goal = event_data.get("goal", 10)
        path = self._compute_parade_path(start, goal)
        return path, float(self.chromatic_number)


AlgorithmRegistry.register("greedy_coloring", GreedyColoring)
