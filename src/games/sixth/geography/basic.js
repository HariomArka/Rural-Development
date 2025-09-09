import React, { useState } from "react";
import { motion } from "framer-motion";

export default function GeographyExplorerGame() {
  const MAX_MOVES = 13;
  const STEP = 100;
  const FINISH_LINE = 900;

  const [question, setQuestion] = useState(generateQuestion());
  const [answer, setAnswer] = useState("");
  const [position, setPosition] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [result, setResult] = useState("");

  function generateQuestion() {
    const questions = [
      { q: "Capital of India?", a: "New Delhi" },
      { q: "Largest continent?", a: "Asia" },
      { q: "River flowing through Egypt?", a: "Nile" },
      { q: "Highest mountain in the world?", a: "Everest" },
      { q: "Capital of France?", a: "Paris" },
      { q: "Which ocean is the largest?", a: "Pacific" },
      { q: "Which desert is the largest?", a: "Sahara" },
    ];
    return questions[Math.floor(Math.random() * questions.length)];
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (gameOver) return;

    let newPos = position;
    if (answer.trim().toLowerCase() === question.a.toLowerCase()) {
      setFeedback("✅ Correct! Moving forward");
      newPos += STEP;
    } else {
      setFeedback("❌ Wrong! Moving backward");
      newPos -= STEP;
      if (newPos < 0) newPos = 0;
    }

    setPosition(newPos);
    const newMoves = moves + 1;
    setMoves(newMoves);
    setAnswer("");
    setQuestion(generateQuestion());

    if (newPos >= FINISH_LINE) {
      setGameOver(true);
      setResult("🎉 You Win! Explorer reached the destination.");
    } else if (newMoves >= MAX_MOVES) {
      setGameOver(true);
      setResult("😢 You Lose! Out of moves.");
    }
  };

  const restartGame = () => {
    setPosition(0);
    setMoves(0);
    setGameOver(false);
    setResult("");
    setFeedback("");
    setQuestion(generateQuestion());
    setAnswer("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-100 to-blue-200 p-6">
      <h1 className="text-3xl font-bold mb-6">🌍 Geography Explorer</h1>

      {/* Game Board */}
      <div className="relative w-[1000px] h-40 bg-blue-50 border-4 border-blue-400 rounded-xl overflow-hidden mb-8">
        {/* Finish Line */}
        <div className="absolute right-4 top-0 h-full w-2 bg-red-500"></div>

        {/* Character */}
        <motion.div
          animate={{ x: position }}
          transition={{ type: "spring", stiffness: 120 }}
          className="absolute bottom-4 left-4 w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center shadow-lg text-2xl"
        >
          🧭
        </motion.div>
      </div>

      {/* Moves Counter */}
      <p className="mb-4 font-semibold">
        Moves: {moves} / {MAX_MOVES}
      </p>

      {/* Question */}
      {!gameOver ? (
        <form onSubmit={handleSubmit} className="flex items-center space-x-4">
          <span className="text-xl font-semibold">{question.q}</span>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="px-4 py-2 border rounded-lg w-48 text-center"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Go
          </button>
        </form>
      ) : (
        <div className="text-center">
          <p
            className={`text-2xl font-bold ${
              result.includes("Win") ? "text-green-600" : "text-red-600"
            }`}
          >
            {result}
          </p>
          <button
            onClick={restartGame}
            className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Restart
          </button>
        </div>
      )}

      {/* Feedback */}
      {feedback && !gameOver && (
        <p
          className={`mt-4 text-lg font-bold ${
            feedback.includes("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {feedback}
        </p>
      )}
    </div>
  );
}
