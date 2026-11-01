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

    def test_data_editor_validates_coordinates_and_events_before_mutating(self):
        html = self.index_html_path.read_text(encoding="utf-8")
        self.assertIn("Number.isFinite(Number(n.lat))", html)
        self.assertIn("Number.isFinite(Number(n.lng))", html)
        self.assertIn("parsed.execution_plan", html)
        self.assertIn("sliderEl.max = events.length", html)

    def test_timeline_supports_step_0_and_parade_nodes_progress(self):
        html = self.index_html_path.read_text(encoding="utf-8")
        self.assertIn('min="0"', html)
        self.assertIn("parade_nodes", html)

    def test_inspector_drawer_classes_match_open_and_close_handlers(self):
        html = self.index_html_path.read_text(encoding="utf-8")
        drawer_match = re.search(r'<aside[^>]*id=["\']inspector-drawer["\'][^>]*class=["\']([^"\']+)["\']', html)
        self.assertIsNotNone(drawer_match, "inspector-drawer element not found")
        drawer_classes = drawer_match.group(1).split()
        
        # Must use standard translate-x-full or consistent translate class
        has_translate = any("translate-x-" in c for c in drawer_classes)
        self.assertTrue(has_translate, "inspector-drawer missing offscreen translate class")
        
        # Verify that whatever class is in HTML is the exact class removed in openInspectorDrawer
        open_match = re.search(r"openInspectorDrawer\s*\([^)]*\)\s*\{[\s\S]*?classList\.remove\(['\"]([^'\"]+)['\"]\)", html)
        self.assertIsNotNone(open_match, "classList.remove call not found in openInspectorDrawer")
        removed_class = open_match.group(1)
        self.assertIn(removed_class, drawer_classes, f"openInspectorDrawer removes '{removed_class}' which is not in inspector-drawer classes: {drawer_classes}")


if __name__ == "__main__":
    unittest.main()
