import React, { useState, useEffect } from "react";

export default function QuadraticSolverGame() {
  const [equation, setEquation] = useState({ a: 1, b: 0, c: 0 });
  const [root1, setRoot1] = useState("");
  const [root2, setRoot2] = useState("");
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    generateEquation();
  }, []);

  const generateEquation = () => {
    let a = Math.floor(Math.random() * 9) + 1; // 1 to 9
    let b = Math.floor(Math.random() * 20) - 10; // -10 to 10
    let c = Math.floor(Math.random() * 20) - 10; // -10 to 10

    // Ensure discriminant is non-negative for real roots
    while (b * b - 4 * a * c < 0) {
      b = Math.floor(Math.random() * 20) - 10;
      c = Math.floor(Math.random() * 20) - 10;
    }

    setEquation({ a, b, c });
    setRoot1("");
    setRoot2("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { a, b, c } = equation;
    const discriminant = b * b - 4 * a * c;
    const actualRoot1 = ((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
    const actualRoot2 = ((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(2);

    const entered1 = parseFloat(root1).toFixed(2);
    const entered2 = parseFloat(root2).toFixed(2);

    if (
      (entered1 === actualRoot1 && entered2 === actualRoot2) ||
      (entered1 === actualRoot2 && entered2 === actualRoot1)
    ) {
      setScore(prev => prev + 1);
      setMessage("Correct! 🎉");
    } else {
      setMessage(`Incorrect. Correct roots are ${actualRoot1} and ${actualRoot2}`);
    }

    setTimeout(generateEquation, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-orange-600 mb-6">Quadratic Solver Challenge</h1>
        <p className="text-xl mb-4">
          Solve for real roots of the equation:
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          {equation.a}x² + {equation.b}x + {equation.c} = 0
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="number"
            step="0.01"
            value={root1}
            onChange={(e) => setRoot1(e.target.value)}
            placeholder="Root 1"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            required
          />
          <input
            type="number"
            step="0.01"
            value={root2}
            onChange={(e) => setRoot2(e.target.value)}
            placeholder="Root 2"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            required
          />
          <button type="submit" className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition">
            Submit Answer
          </button>
        </form>

        {message && (
          <p className={`mt-4 font-medium ${message.startsWith("Correct") ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}

        <p className="mt-6 text-lg text-gray-700">
          Score: <span className="font-bold">{score}</span>
        </p>
      </div>
    </div>
  );
}
