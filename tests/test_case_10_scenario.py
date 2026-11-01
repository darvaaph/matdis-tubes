import unittest
from pathlib import Path
from cases.scenario_loader import ScenarioLoader


class TestCase10Scenario(unittest.TestCase):
    def setUp(self):
        self.yaml_path = Path("cases/scenarios/case_10_pawai_obor.yaml")
        self.loader = ScenarioLoader(self.yaml_path)

    def test_has_20_nodes_and_35_edges(self):
        model = self.loader.build_graph_model()
        G = model.nx_graph
        self.assertEqual(len(G.nodes), 20)
        self.assertEqual(len(G.edges), 35)

    def test_execution_plan_start_0_goal_10_and_10_events(self):
        plan = self.loader.get_execution_plan()
        self.assertEqual(plan["start_node"], 0)
        self.assertEqual(plan["goal_node"], 10)
        self.assertEqual(len(plan["events"]), 10)
        for idx, ev in enumerate(plan["events"], 1):
            self.assertEqual(ev["step"], idx)
            self.assertEqual(ev["type"], "CONFLICT_NODE_TRIGGER")
            self.assertEqual(ev["target_node"], idx)


if __name__ == "__main__":
    unittest.main()
