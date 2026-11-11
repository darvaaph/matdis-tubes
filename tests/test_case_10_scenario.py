import unittest
from pathlib import Path
from cases.scenario_loader import ScenarioLoader


class TestCase10Scenario(unittest.TestCase):
    def setUp(self):
        self.yaml_path = Path("cases/scenarios/case_10_pawai_obor.yaml")
        self.loader = ScenarioLoader(self.yaml_path)

    def test_has_20_nodes_and_32_edges(self):
        model = self.loader.build_graph_model()
        G = model.nx_graph
        self.assertEqual(len(G.nodes), 20)
        self.assertEqual(len(G.edges), 32)

    def test_execution_plan_start_0_goal_8_and_8_events(self):
        plan = self.loader.get_execution_plan()
        self.assertEqual(plan["start_node"], 0)
        self.assertEqual(plan["goal_node"], 8)
        self.assertEqual(len(plan["events"]), 8)
        expected_targets = [1, 2, 3, 4, 5, 6, 7, 8]
        for idx, (ev, exp_t) in enumerate(zip(plan["events"], expected_targets), 1):
            self.assertEqual(ev["step"], idx)
            self.assertEqual(ev["type"], "CONFLICT_NODE_TRIGGER")
            self.assertEqual(ev["target_node"], exp_t)


if __name__ == "__main__":
    unittest.main()
