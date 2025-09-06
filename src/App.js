import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MathPage from "./pages/MathPage";
import SciencePage from "./pages/SciencePage";
import PhysicsPage from "./pages/PhysicsPage";
import ScienceQuiz from "./components/ScienceQuiz";
import PhysicsQuiz from "./components/PhysicsQuiz";
import MathQuiz from "./components/MathQuiz"; // Import the enhanced MathQuiz component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/math" element={<MathPage />} />
        <Route path="/math/quiz" element={<MathQuiz />} />
        <Route path="/science" element={<SciencePage />} />
        <Route path="/science/quiz" element={<ScienceQuiz />} />
        <Route path="/physics" element={<PhysicsPage />} />
        <Route path="/physics/quiz" element={<PhysicsQuiz />} />
      </Routes>
    </Router>
  );
}

export default App;