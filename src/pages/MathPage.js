import React from "react";
import MathQuiz from "../components/MathQuiz";
import VideoSection from "../components/VideoSection";

export default function MathPage() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">📘 Math</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">Videos</h3>
          <VideoSection subject="math" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Quiz</h3>
          <MathQuiz />
        </div>
      </div>
    </div>
  );
}
