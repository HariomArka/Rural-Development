import React from "react";
import { Link } from "react-router-dom";

export default function MathPage() {
  return (
    <div className="h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 px-6">
      
      {/* Left - Hero with Image & Quote */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left justify-center">
        <img
          src="/ramanujan.jpg"
          alt="Srinivasa Ramanujan"
          className="w-52 h-64 object-cover rounded-xl shadow-lg border-4 border-white mb-4"
        />
        <blockquote className="text-base italic text-gray-800 leading-relaxed max-w-sm">
          “An equation means nothing to me unless it expresses a thought of God.”
        </blockquote>
        <p className="mt-1 text-sm font-medium text-gray-600">
          – Srinivasa Ramanujan
        </p>
      </div>

      {/* Right - Options */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start gap-4">
        <h2 className="text-3xl font-extrabold text-blue-900">
          Mathematics
        </h2>
        <p className="text-gray-700 max-w-xs text-center md:text-left text-sm mb-2">
          Explore math your way — choose from videos, quizzes, or theory.
        </p>

        {/* Smaller Buttons */}
        <div className="flex flex-col gap-3 w-full max-w-xs">
          <Link
            to="/math/videos"
            className="px-4 py-3 rounded-lg shadow-md border border-blue-200 bg-white hover:bg-blue-600 hover:text-white transition text-center text-sm font-medium"
          >
            Videos
          </Link>

          <Link
            to="/math/quiz"
            className="px-4 py-3 rounded-lg shadow-md border border-green-200 bg-white hover:bg-green-600 hover:text-white transition text-center text-sm font-medium"
          >
            Quiz
          </Link>

          <Link
            to="/math/theory"
            className="px-4 py-3 rounded-lg shadow-md border border-purple-200 bg-white hover:bg-purple-600 hover:text-white transition text-center text-sm font-medium"
          >
            Theory
          </Link>
        </div>
      </div>
    </div>
  );
}
