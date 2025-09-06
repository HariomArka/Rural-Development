import React from "react";
import PhysicsQuiz from "../components/PhysicsQuiz";
import VideoSection from "../components/VideoSection";

export default function PhysicsPage() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-purple-700 mb-6">⚡ Physics</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">Videos</h3>
          <VideoSection subject="physics" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Quiz</h3>
          <PhysicsQuiz />
        </div>
      </div>
    </div>
  );
}
