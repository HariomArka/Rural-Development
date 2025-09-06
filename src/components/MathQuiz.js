import React, { useState } from "react";

export default function MathQuiz() {
  const [score, setScore] = useState(0);
  const [qIndex, setQIndex] = useState(0);
  const [input, setInput] = useState("");

  const questions = [
    { q: "5 + 3 =", ans: 8 },
    { q: "7 × 2 =", ans: 14 },
    { q: "12 – 4 =", ans: 8 }
  ];

  function checkAnswer() {
    if (parseInt(input) === questions[qIndex].ans) {
      setScore(score + 10);
    }
    setInput("");
    setQIndex(qIndex + 1);
  }

  if (qIndex >= questions.length) {
    return (
      <div className="p-6 bg-white rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl font-bold text-green-600">
          Done! Your score: {score}
        </h2>
        <p className="mt-2 text-gray-500">XP earned: {score * 2}</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {questions[qIndex].q}
      </h2>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-2 border rounded-lg mb-4"
        placeholder="Enter your answer"
        onKeyDown={(e) => e.key === "Enter" && checkAnswer()}
      />
      <button
        onClick={checkAnswer}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Submit
      </button>
      <p className="mt-4 text-gray-600">Score: {score}</p>
    </div>
  );
}
