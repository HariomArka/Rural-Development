import React, { useState } from "react";
import { Trophy, Star, Zap, CheckCircle, X } from "lucide-react";

export default function PhysicsQuiz() {
  const [score, setScore] = useState(0);
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const questions = [
    {
      q: "What is the SI unit of electric current?",
      options: ["Volt", "Ampere", "Ohm", "Watt"],
      ans: "Ampere",
      difficulty: "Easy"
    },
    {
      q: "What force keeps planets in orbit around the Sun?",
      options: ["Magnetic Force", "Friction", "Gravity", "Nuclear Force"],
      ans: "Gravity",
      difficulty: "Easy"
    },
    {
      q: "Sound travels fastest in which medium?",
      options: ["Air", "Vacuum", "Water", "Steel"],
      ans: "Steel",
      difficulty: "Medium"
    },
    {
      q: "What is the speed of light in vacuum?",
      options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10¹⁰ m/s", "3 × 10⁷ m/s"],
      ans: "3 × 10⁸ m/s",
      difficulty: "Medium"
    },
    {
      q: "Which particle has no electric charge?",
      options: ["Proton", "Electron", "Neutron", "Ion"],
      ans: "Neutron",
      difficulty: "Hard"
    },
    {
      q: "What is the formula for kinetic energy?",
      options: ["mgh", "½mv²", "mc²", "Fd"],
      ans: "½mv²",
      difficulty: "Hard"
    }
  ];

  function checkAnswer() {
    const correctAnswer = questions[qIndex].ans;
    
    if (selected === correctAnswer) {
      const points = questions[qIndex].difficulty === "Easy" ? 10 : 
                    questions[qIndex].difficulty === "Medium" ? 15 : 20;
      setScore(score + points);
      setFeedback(`Correct! +${points} points`);
      setIsCorrect(true);
    } else {
      setFeedback(`Incorrect. The answer is ${correctAnswer}`);
      setIsCorrect(false);
    }

    setTimeout(() => {
      setSelected("");
      setQIndex(qIndex + 1);
      setFeedback("");
      setIsCorrect(null);
    }, 1500);
  }

  if (qIndex >= questions.length) {
    const percentage = Math.round((score / 90) * 100); // Max possible score is 90
    const grade = percentage >= 90 ? "A+" : percentage >= 80 ? "A" : 
                  percentage >= 70 ? "B" : percentage >= 60 ? "C" : "D";

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center p-6 relative overflow-hidden">
        {/* Background Video Effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-purple-800/20 via-indigo-800/20 to-blue-800/20"></div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 text-center max-w-md w-full border border-white/20 relative z-10">
          <div className="mb-6">
            <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent mb-2">
              Quiz Complete!
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-6 h-6 ${i < Math.floor(percentage/20) ? 'text-yellow-400 fill-current' : 'text-white/30'}`} 
                />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <p className="text-2xl font-bold text-white">Score: {score}/90</p>
              <p className="text-lg text-white/80">Grade: {grade}</p>
              <p className="text-sm text-white/60">{percentage}% Accuracy</p>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-4 border border-purple-300/30">
              <p className="text-lg font-semibold text-purple-200">XP Earned</p>
              <p className="text-3xl font-bold text-purple-100">{score * 2}</p>
            </div>

            <button
              onClick={() => window.location.reload()}
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[qIndex];
  const progress = ((qIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Video Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-purple-800/20 via-indigo-800/20 to-blue-800/20"></div>
      </div>

      {/* Floating physics elements */}
      <div className="absolute top-20 left-10 text-purple-300 text-4xl font-light opacity-20 rotate-12">⚡</div>
      <div className="absolute top-40 right-16 text-blue-300 text-3xl font-light opacity-20 -rotate-12">E=mc²</div>
      <div className="absolute bottom-32 left-20 text-indigo-300 text-5xl font-light opacity-20 rotate-45">F=ma</div>

      <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 max-w-lg w-full border border-white/20 relative z-10">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-white/80">Progress</span>
            <span className="text-sm font-medium text-white/80">{qIndex + 1}/{questions.length}</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-400 to-blue-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-8 h-8 text-yellow-400 mr-3" />
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              currentQuestion.difficulty === "Easy" ? "bg-green-500/20 text-green-300 border border-green-400/30" :
              currentQuestion.difficulty === "Medium" ? "bg-yellow-500/20 text-yellow-300 border border-yellow-400/30" :
              "bg-red-500/20 text-red-300 border border-red-400/30"
            }`}>
              {currentQuestion.difficulty}
            </span>
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-2">
            {currentQuestion.q}
          </h2>
          <p className="text-white/60">Question {qIndex + 1} of {questions.length}</p>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, i) => (
            <label
              key={i}
              className={`block p-4 rounded-xl cursor-pointer transition-all duration-300 border ${
                selected === option 
                  ? "bg-purple-500/30 border-purple-400/50 text-white backdrop-blur-sm" 
                  : "bg-white/5 border-white/20 text-white/80 hover:bg-white/10 hover:border-white/30"
              } ${feedback ? "pointer-events-none" : ""}`}
            >
              <div className="flex items-center">
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={selected === option}
                  onChange={() => setSelected(option)}
                  className="mr-3 accent-purple-500"
                  disabled={feedback}
                />
                <span className="font-medium">{option}</span>
              </div>
            </label>
          ))}
        </div>

        {/* Feedback */}
        {feedback && (
          <div className={`mb-6 p-4 rounded-xl flex items-center justify-center gap-2 backdrop-blur-sm ${
            isCorrect 
              ? 'bg-green-500/20 text-green-300 border border-green-400/30' 
              : 'bg-red-500/20 text-red-300 border border-red-400/30'
          }`}>
            {isCorrect ? <CheckCircle className="w-5 h-5" /> : <X className="w-5 h-5" />}
            <span className="font-semibold">{feedback}</span>
          </div>
        )}

        {/* Submit Button */}
        <button
          onClick={checkAnswer}
          disabled={!selected || feedback}
          className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {feedback ? "Next Question..." : "Submit Answer"}
        </button>

        {/* Score Display */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="font-semibold text-white">Score: {score}</span>
          </div>
        </div>
      </div>
    </div>
  );
}