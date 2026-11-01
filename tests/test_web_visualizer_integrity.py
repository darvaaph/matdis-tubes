import json
import re
import unittest
from pathlib import Path


class TestWebVisualizerIntegrity(unittest.TestCase):
    def setUp(self):
        self.data_js_path = Path("visualizer/scenario_data.js")
        self.index_html_path = Path("visualizer/index.html")

    def test_scenario_data_js_exists_and_contains_20_nodes_35_edges(self):
        self.assertTrue(self.data_js_path.exists(), "scenario_data.js missing")
        content = self.data_js_path.read_text(encoding="utf-8")
        match = re.search(
            r"window\.SCENARIO_DATA\s*=\s*(\{.*\});?\s*$", content, re.DOTALL
        )
        self.assertIsNotNone(match, "window.SCENARIO_DATA assignment not found")
        payload = json.loads(match.group(1).rstrip(";"))
        self.assertEqual(len(payload["nodes"]), 20)
        self.assertEqual(len(payload["edges"]), 35)
        self.assertEqual(len(payload["execution_plan"]["events"]), 10)
        for node in payload["nodes"]:
            self.assertIn("lat", node)
            self.assertIn("lng", node)
            self.assertIn("fishbone_cause", node)

    def test_index_html_loads_leaflet_and_scenario_data_without_fetch_cors(self):
        self.assertTrue(self.index_html_path.exists(), "index.html missing")
        html = self.index_html_path.read_text(encoding="utf-8")
        self.assertGreater(len(html), 5000, "index.html is empty or stub")
        self.assertIn('src="scenario_data.js"', html)
        self.assertIn("leaflet.js", html)
        self.assertIn("runDSATUR", html)
        self.assertIn("runGreedy", html)
        self.assertIn("inspector-drawer", html)
        self.assertIn("data-editor-modal", html)


if __name__ == "__main__":
    unittest.main()
