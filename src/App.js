// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import TeacherDashboard from "./pages/TeacherDashboard";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/teacher" element={<TeacherDashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MathPage from "./pages/MathPage";
import SciencePage from "./pages/SciencePage";
import PhysicsPage from "./pages/PhysicsPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/math" element={<MathPage />} />
        <Route path="/science" element={<SciencePage />} />
        <Route path="/physics" element={<PhysicsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
