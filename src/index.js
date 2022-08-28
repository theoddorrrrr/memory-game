import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.scss";

import GamePage from "./pages/GamePage";
import Layout from "./pages/LayoutPage";
import LeaderboardsPage from "./pages/Leadearboards";
import LoginPage from "./pages/LoginPage";
import RulesPage from "./pages/RulesPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout children={<LoginPage />} />} />
      <Route path="/game" element={<Layout children={<GamePage />} />} />
      <Route path="/rules" element={<Layout children={<RulesPage />} />} />
      <Route
        path="/leaderboards"
        element={<Layout children={<LeaderboardsPage />} />}
      />
    </Routes>
  </BrowserRouter>
);
