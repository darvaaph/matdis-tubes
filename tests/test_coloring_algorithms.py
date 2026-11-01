import unittest
from pathlib import Path
from algorithms.registry import AlgorithmRegistry
from algorithms.coloring.greedy_coloring import GreedyColoring
from algorithms.coloring.dsatur import DSATURColoring
from cases.scenario_loader import ScenarioLoader
from core.simulation_runner import SimulationRunner


class TestColoringAlgorithms(unittest.TestCase):
    def setUp(self):
        self.loader = ScenarioLoader(Path("cases/scenarios/case_10_pawai_obor.yaml"))
        self.model = self.loader.build_graph_model()
        self.plan = self.loader.get_execution_plan()
        self.metadata = self.loader.get_metadata()
        self.undirected = self.model.nx_graph.to_undirected()

    def _assert_valid_coloring(self, colors: dict):
        self.assertEqual(len(colors), 20)
        for u, v in self.undirected.edges():
            self.assertNotEqual(
                colors[u],
                colors[v],
                f"Conflict violation on edge ({u}, {v}): both have color {colors[u]}",
            )

    def test_greedy_coloring_valid_and_4_colors(self):
        solver = GreedyColoring(self.model)
        colors = solver.color_graph()
        self._assert_valid_coloring(colors)
        chromatic = len(set(colors.values()))
        self.assertEqual(chromatic, 4)
        self.assertGreater(solver.step_count, 0)

    def test_dsatur_coloring_valid_and_optimal_4_colors(self):
        solver = DSATURColoring(self.model)
        colors = solver.color_graph()
        self._assert_valid_coloring(colors)
        chromatic = len(set(colors.values()))
        self.assertEqual(chromatic, 4)
        self.assertGreater(solver.step_count, 0)

    def test_registry_resolves_dsatur_and_greedy(self):
        dsatur_solver = AlgorithmRegistry.create("dsatur", self.model)
        coloring_solver = AlgorithmRegistry.create("coloring", self.model)
        greedy_solver = AlgorithmRegistry.create("greedy_coloring", self.model)
        self.assertIsInstance(dsatur_solver, DSATURColoring)
        self.assertIsInstance(coloring_solver, DSATURColoring)
        self.assertIsInstance(greedy_solver, GreedyColoring)

    def test_simulation_runner_executes_dsatur_with_conflict_node_triggers(self):
        solver = AlgorithmRegistry.create("dsatur", self.model)
        runner = SimulationRunner(solver=solver, plan=self.plan, metadata=self.metadata)
        result = runner.execute()
        self.assertEqual(result.initial_path[0], 0)
        self.assertEqual(result.initial_path[-1], 10)
        self.assertEqual(result.initial_cost, 4.0)
        self.assertEqual(len(result.reroutes), 10)
        self.assertEqual(len(result.skipped_events), 0)

    def test_isolated_node_graph_coloring(self):
        from core.graph_model import SpatialGraphModel

        m = SpatialGraphModel()
        m.add_spatial_node(0, "Isolated A")
        m.add_spatial_node(1, "Isolated B")
        solver = DSATURColoring(m)
        colors = solver.color_graph()
        self.assertEqual(colors[0], 0)
        self.assertEqual(colors[1], 0)


if __name__ == "__main__":
    unittest.main()
