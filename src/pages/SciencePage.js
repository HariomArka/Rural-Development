import React from "react";
import ScienceQuiz from "../components/ScienceQuiz";
import VideoSection from "../components/VideoSection";

export default function SciencePage() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-green-700 mb-6">🔬 Science</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">Videos</h3>
          <VideoSection subject="science" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Quiz</h3>
          <ScienceQuiz />
        </div>
      </div>
    </div>
  );
}
