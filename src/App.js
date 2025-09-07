import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import useScrollToTop from "./hooks/scrollToTop"
import Home from "./pages/Home";
import Team from "./pages/Team";

// New dynamic pages
import SubjectPage from "./components/SubjectPage";
import ContentPage from "./components/ContentPage";

function App() {
  return (
    <Router>
      <useScrollToTop/>
      <Navbar />
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Home />} />

        {/* Dynamic subject page: /sixth/physics */}
        <Route path="/:grade/:subject" element={<SubjectPage />} />

        {/* Nested content pages: /sixth/physics/quiz */}
        <Route path="/:grade/:subject/:type" element={<ContentPage />} />

        {/* Static Team Page */}
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
