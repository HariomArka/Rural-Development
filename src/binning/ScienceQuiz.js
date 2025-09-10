import React, { useState } from "react";

export default function ScienceQuiz() {
  const [score, setScore] = useState(0);
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);

  const questions = [
    {
      q: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      ans: "Mars",
      correct: "Correct! Mars gets its red color from iron oxide (rust) on its surface.",
      wrong: "Not quite! Mars is called the Red Planet due to iron oxide on its surface."
    },
    {
      q: "What is the chemical symbol for water?",
      options: ["O2", "H2O", "CO2", "HO"],
      ans: "H2O",
      correct: "Excellent! H2O represents 2 hydrogen atoms bonded to 1 oxygen atom.",
      wrong: "Almost! Water is H2O - two hydrogen atoms and one oxygen atom."
    },
    // continue with rest...
  ];

  function checkAnswer() {
    const isCorrect = selected === questions[qIndex].ans;

    if (isCorrect) {
      setScore(score + 10);
      setFeedback(questions[qIndex].correct);
    } else {
      setFeedback(questions[qIndex].wrong);
    }

    setShowFeedback(true);

    // Auto advance after showing feedback
    setTimeout(() => {
      setSelected("");
      setQIndex(qIndex + 1);
      setShowFeedback(false);
      setFeedback("");
    }, 3000);
  }

  function restartQuiz() {
    setScore(0);
    setQIndex(0);
    setSelected("");
    setFeedback("");
    setShowFeedback(false);
  }

  if (qIndex >= questions.length) {
    const percentage = (score / (questions.length * 10)) * 100;
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-center max-w-md w-full">
          <div className="mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto flex items-center justify-center mb-4">
              <span className="text-3xl">🎉</span>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Quiz Complete!
            </h2>
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-4">
              <p className="text-gray-600 text-sm uppercase tracking-wide">Your Score</p>
              <p className="text-4xl font-bold text-gray-800">
                {score} / {questions.length * 10}
              </p>
              <p className="text-lg font-semibold text-gray-600">{percentage}%</p>
            </div>
          </div>

          <button
            onClick={restartQuiz}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-xl hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
        
        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>
              Question {qIndex + 1} of {questions.length}
            </span>
            <span>Score: {score}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((qIndex + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Feedback section */}
        {showFeedback && (
          <div
            className={`mb-6 p-4 rounded-xl border-2 text-center animate-pulse ${
              selected === questions[qIndex].ans
                ? "bg-green-50 border-green-300 text-green-800"
                : "bg-red-50 border-red-300 text-red-800"
            }`}
          >
            <div className="flex items-center justify-center mb-2">
              <span className="text-2xl mr-2">
                {selected === questions[qIndex].ans ? "🎉" : "🤔"}
              </span>
              <span className="font-bold">
                {selected === questions[qIndex].ans ? "Correct!" : "Not quite!"}
              </span>
            </div>
            <p className="font-medium">{feedback}</p>
          </div>
        )}

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 leading-relaxed">
            {questions[qIndex].q}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {questions[qIndex].options.map((option, i) => (
            <label
              key={i}
              className={`block p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md transform hover:scale-[1.02] ${
                selected === option
                  ? "bg-gradient-to-r from-blue-50 to-purple-50 border-blue-400 shadow-lg"
                  : "bg-white hover:bg-gray-50 border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center">
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={selected === option}
                  onChange={() => setSelected(option)}
                  className="w-4 h-4 text-blue-600 mr-3"
                />
                <span className="text-gray-800 font-medium">{option}</span>
              </div>
            </label>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={checkAnswer}
            disabled={!selected || showFeedback}
            className={`px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-200 transform ${
              selected && !showFeedback
                ? "bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg hover:scale-105"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {showFeedback
              ? "Loading next..."
              : qIndex === questions.length - 1
              ? "Finish Quiz"
              : "Next Question"}
          </button>
        </div>
      </div>
    </div>
  );
}
