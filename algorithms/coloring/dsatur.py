from typing import Any, Dict, List, Optional, Tuple
import networkx as nx
from algorithms.registry import AlgorithmRegistry
from core.base_algorithm import BaseGraphAlgorithm
from core.graph_model import SpatialGraphModel


class DSATURColoring(BaseGraphAlgorithm):
    """Algoritma Pewarnaan Simpul Graf Brelaz DSATUR (Degree of Saturation)."""

    SUPPORTED_EVENT_TYPES = frozenset({"CONFLICT_NODE_TRIGGER"})

    def __init__(self, model: SpatialGraphModel):
        super().__init__(model)
        self.colors: Dict[int, Optional[int]] = {}
        self.chromatic_number: int = 0

    def color_graph(self) -> Dict[int, int]:
        undirected = self.graph.to_undirected()
        nodes = sorted(list(undirected.nodes()))
        self.colors = {node: None for node in nodes}
        degrees = {node: undirected.degree(node) for node in nodes}

        self.log_step(
            event_type="INITIALIZATION",
            state_mutations={
                "total_nodes": len(nodes),
                "degrees": degrees.copy(),
                "colors": self.colors.copy(),
            },
        )

        if not nodes:
            self.chromatic_number = 0
            return {}

        uncolored = set(nodes)

        while uncolored:
            # Hitung derajat kejenuhan (saturation degree) untuk setiap simpul yang belum diwarnai
            sat_degrees = {}
            uncolored_degrees = {}
            for u in uncolored:
                neighbor_colors = {
                    self.colors[v]
                    for v in undirected.neighbors(u)
                    if self.colors.get(v) is not None
                }
                sat_degrees[u] = len(neighbor_colors)
                uncolored_degrees[u] = sum(
                    1 for v in undirected.neighbors(u) if self.colors.get(v) is None
                )

            # Pilih simpul dengan D_sat tertinggi; tie-break: derajat belum berwarna, derajat total, ID terkecil
            selected = max(
                uncolored,
                key=lambda u: (sat_degrees[u], uncolored_degrees[u], degrees[u], -u),
            )

            used_neighbor_colors = {
                self.colors[v]
                for v in undirected.neighbors(selected)
                if self.colors.get(v) is not None
            }

            color = 0
            while color in used_neighbor_colors:
                color += 1

            self.colors[selected] = color
            uncolored.remove(selected)

            self.log_step(
                event_type="COLOR_ASSIGNED",
                state_mutations={
                    "current_node": selected,
                    "assigned_color": color,
                    "saturation_degree": sat_degrees[selected],
                    "degree": degrees[selected],
                    "neighbor_colors": sorted(list(used_neighbor_colors)),
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


AlgorithmRegistry.register("dsatur", DSATURColoring)
AlgorithmRegistry.register_alias("coloring", "dsatur")
