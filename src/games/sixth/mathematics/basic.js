import React, { useState } from "react";
import { motion } from "framer-motion";

export default function MathRunnerGame() {
  const MAX_MOVES = 13; // 🔹 total moves allowed
  const STEP = 100;     // 🔹 distance per move (px)
  const FINISH_LINE = 900; // 🔹 winning position (px from left)

  const [question, setQuestion] = useState(generateQuestion());
  const [answer, setAnswer] = useState("");
  const [position, setPosition] = useState(0); // starting at 0px
  const [feedback, setFeedback] = useState("");
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [result, setResult] = useState("");

  function generateQuestion() {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const ops = ["+", "×"];
    const op = ops[Math.floor(Math.random() * ops.length)];
    const correct = op === "+" ? a + b : a * b;
    return { text: `${a} ${op} ${b}`, correct };
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (gameOver) return;

    let newPos = position;
    if (parseInt(answer) === question.correct) {
      setFeedback("✅ Correct! Moving forward");
      newPos += STEP; // move forward
    } else {
      setFeedback("❌ Wrong! Moving backward");
      newPos -= STEP; // move backward
      if (newPos < 0) newPos = 0; // don’t go off screen
    }

    setPosition(newPos);
    setMoves((prev) => prev + 1);
    setAnswer("");
    setQuestion(generateQuestion());

    // Check win/lose
    if (newPos >= FINISH_LINE) {
      setGameOver(true);
      setResult("🎉 You Win!");
    } else if (moves + 1 >= MAX_MOVES) {
      setGameOver(true);
      setResult("😢 You Lose! Out of moves");
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 p-6">
      <h1 className="text-3xl font-bold mb-6">🏃 Math Runner</h1>

      {/* Game board */}
      <div className="relative w-[1000px] h-40 bg-green-100 border-4 border-green-400 rounded-xl overflow-hidden mb-8">
        {/* Finish Line */}
        <div className="absolute right-4 top-0 h-full w-2 bg-red-500"></div>

        {/* Character */}
        <motion.div
          animate={{ x: position }}
          transition={{ type: "spring", stiffness: 120 }}
          className="absolute bottom-4 left-4 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center shadow-lg"
        >
          🐱
        </motion.div>
      </div>

      {/* Moves left */}
      <p className="mb-4 font-semibold">
        Moves: {moves} / {MAX_MOVES}
      </p>

      {/* Question */}
      {!gameOver ? (
        <form onSubmit={handleSubmit} className="flex items-center space-x-4">
          <span className="text-xl font-semibold">{question.text} = ?</span>
          <input
            type="number"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="px-4 py-2 border rounded-lg w-24 text-center"
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
