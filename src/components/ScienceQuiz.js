import React, { useState } from "react";

export default function ScienceQuiz() {
  const [score, setScore] = useState(0);
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState("");

  const questions = [
    {
      q: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      ans: "Mars"
    },
    {
      q: "What is the chemical symbol for water?",
      options: ["O2", "H2O", "CO2", "HO"],
      ans: "H2O"
    },
    {
      q: "What is the center of our solar system?",
      options: ["Earth", "Sun", "Moon", "Saturn"],
      ans: "Sun"
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

      <div className="space-y-2 mb-4">
        {questions[qIndex].options.map((option, i) => (
          <label
            key={i}
            className={`block p-2 border rounded-lg cursor-pointer ${
              selected === option ? "bg-blue-100 border-blue-500" : ""
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
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
      >
        Submit
      </button>

      <p className="mt-4 text-gray-600">Score: {score}</p>
    </div>
  );
}
