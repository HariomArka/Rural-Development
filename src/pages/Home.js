import React from "react";
import MathQuiz from "../components/MathQuiz";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">
        Welcome Student 👩‍🎓
      </h1>
      <p className="mb-6 text-gray-700">Select a subject to start learning:</p>

      <div className="flex gap-4">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition">
          Math
        </button>
        <button className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition">
          Science
        </button>
        <button className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700 transition">
          Physics
        </button>
      </div>

      <div className="mt-10 w-full max-w-md">
        <MathQuiz />
      </div>
    </div>
  );
}
