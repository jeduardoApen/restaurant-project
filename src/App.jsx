import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StyleGuide from "./pages/StyleGuide";
import Home from "./pages/Home";
import AppContent from "./content/app-content";

const ROUTES = {
  home: "/",
  styleguide: "/styleguide",
};
function App() {
  const APP_CONTENT = AppContent;

  return (
    <Router>
      <Routes>
        <Route
          path={ROUTES.styleguide}
          element={<StyleGuide content={APP_CONTENT} />}
        />
        <Route
          path={ROUTES.home}
          element={<Home content={APP_CONTENT} />}
        />
      </Routes>
    </Router>
  );
}
export default App;
