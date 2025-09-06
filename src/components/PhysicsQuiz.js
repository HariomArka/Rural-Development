import React, { useState } from "react";

export default function PhysicsQuiz() {
  const [score, setScore] = useState(0);
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState("");

  const questions = [
    {
      q: "What is the SI unit of electric current?",
      options: ["Volt", "Ampere", "Ohm", "Watt"],
      ans: "Ampere"
    },
    {
      q: "What force keeps planets in orbit around the Sun?",
      options: ["Magnetic Force", "Friction", "Gravity", "Nuclear Force"],
      ans: "Gravity"
    },
    {
      q: "Sound travels fastest in which medium?",
      options: ["Air", "Vacuum", "Water", "Steel"],
      ans: "Steel"
    }
  ];

  function checkAnswer() {
    if (selected === questions[qIndex].ans) {
      setScore(score + 10);
    }
    setSelected("");
    setQIndex(qIndex + 1);
  }

  if (qIndex >= questions.length) {
    return (
      <div className="p-6 bg-white rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl font-bold text-green-600">
          🎉 Done! Your score: {score}
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

      <div className="space-y-2 mb-4">
        {questions[qIndex].options.map((option, i) => (
          <label
            key={i}
            className={`block p-2 border rounded-lg cursor-pointer ${
              selected === option ? "bg-purple-100 border-purple-500" : ""
            }`}
          >
            <input
              type="radio"
              name="answer"
              value={option}
              checked={selected === option}
              onChange={() => setSelected(option)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>

      <button
        onClick={checkAnswer}
        disabled={!selected}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition disabled:bg-gray-400"
      >
        Submit
      </button>

      <p className="mt-4 text-gray-600">Score: {score}</p>
    </div>
  );
}
