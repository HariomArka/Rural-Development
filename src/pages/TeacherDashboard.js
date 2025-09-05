import React from "react";

export default function TeacherDashboard() {
  const mathScore = localStorage.getItem("math_score") || 0;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Teacher Dashboard 📊
        </h1>
        <p className="text-gray-700">Math Score: {mathScore}</p>
        <button className="mt-6 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
          Export as CSV
        </button>
      </div>
    </div>
  );
}
