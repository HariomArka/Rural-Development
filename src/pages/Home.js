// import React, { useState } from "react";
// import MathQuiz from "../components/MathQuiz";
// import ScienceQuiz from "../components/ScienceQuiz";
// import PhysicsQuiz from "../components/PhysicsQuiz";

// export default function Home() {
//   const [subject, setSubject] = useState("");

//   const videos = {
//     math: "/maths.webm",
//     science: "/science.mp4",
//     physics: "/physics.webm"
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Video */}
//       {subject && (
//         <video
//           key={subject}
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute top-0 left-0 w-full h-full object-cover z-0"
//         >
//           <source src={videos[subject]} type="video/mp4" />
//         </video>
//       )}

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40 z-10" />

//       {/* Main Content - Two Column Layout */}
//       <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl p-6">
//         {/* Left Column */}
//         <div className="flex flex-col justify-center text-left">
//           <h1 className="text-4xl font-bold text-white mb-4">
//             Welcome Student!
//           </h1>
//           <p className="mb-6 text-gray-200 text-lg">
//             Select a subject to start learning:
//           </p>

//           <div className="flex flex-wrap gap-4">
//             <button
//               onClick={() => setSubject("math")}
//               className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
//             >
//               Math
//             </button>
//             <button
//               onClick={() => setSubject("science")}
//               className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition"
//             >
//               Science
//             </button>
//             <button
//               onClick={() => setSubject("physics")}
//               className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700 transition"
//             >
//               Physics
//             </button>
//           </div>
//         </div>

//         {/* Right Column (Quiz Section) */}
//         <div className="flex items-center justify-center">
//           <div className="w-full max-w-md bg-white/90 rounded-2xl shadow-lg p-6">
//             {subject === "math" && <MathQuiz />}
//             {subject === "science" && <ScienceQuiz />}
//             {subject === "physics" && <PhysicsQuiz />}
//             {!subject && (
//               <p className="text-gray-600 text-center">
//                 Select a subject to start your quiz
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React from "react";

// export default function Home() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-100 to-blue-300 px-6">
//       <h2 className="text-5xl font-bold text-blue-900 mb-6">Welcome to EduGamify</h2>
//       <p className="text-lg text-gray-700 max-w-2xl">
//         A gamified learning platform to make Math, Science, and Physics interactive 
//         with videos, quizzes, and progress tracking.
//       </p>
//     </div>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-100 to-blue-300 px-6">
      <h2 className="text-5xl font-bold text-blue-900 mb-6">
        Welcome to EduGamify
      </h2>
      <p className="text-lg text-gray-700 max-w-2xl mb-8">
        A gamified learning platform to make Math, Science, and Physics interactive 
        with videos, quizzes, and progress tracking.
      </p>

      {/* Buttons for navigation */}
      <div className="flex gap-6">
        <Link
          to="/math"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          Math
        </Link>
        <Link
          to="/science"
          className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition"
        >
          Science
        </Link>
        <Link
          to="/physics"
          className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700 transition"
        >
          Physics
        </Link>
      </div>
    </div>
  );
}

