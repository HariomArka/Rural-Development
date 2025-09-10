// import React, { useState } from "react";
// import { Trophy, Star, Calculator, CheckCircle } from "lucide-react";

// export default function MathQuiz() {
//   const [score, setScore] = useState(0);
//   const [qIndex, setQIndex] = useState(0);
//   const [input, setInput] = useState("");
//   const [feedback, setFeedback] = useState("");
//   const [isCorrect, setIsCorrect] = useState(null);

//   const questions = [
//     { q: "5 + 3 =", ans: 8, difficulty: "Easy" },
//     { q: "7 × 2 =", ans: 14, difficulty: "Easy" },
//     { q: "12 – 4 =", ans: 8, difficulty: "Easy" },
//     { q: "15 ÷ 3 =", ans: 5, difficulty: "Medium" },
//     { q: "8² =", ans: 64, difficulty: "Medium" },
//     { q: "√49 =", ans: 7, difficulty: "Hard" }
//   ];

//   function checkAnswer() {
//     const userAnswer = parseInt(input);
//     const correctAnswer = questions[qIndex].ans;
    
//     if (userAnswer === correctAnswer) {
//       const points = questions[qIndex].difficulty === "Easy" ? 10 : 
//                     questions[qIndex].difficulty === "Medium" ? 15 : 20;
//       setScore(score + points);
//       setFeedback(`Correct! +${points} points`);
//       setIsCorrect(true);
//     } else {
//       setFeedback(`Incorrect. The answer is ${correctAnswer}`);
//       setIsCorrect(false);
//     }

//     setTimeout(() => {
//       setInput("");
//       setQIndex(qIndex + 1);
//       setFeedback("");
//       setIsCorrect(null);
//     }, 1500);
//   }

//   if (qIndex >= questions.length) {
//     const percentage = Math.round((score / 90) * 100); // Max possible score is 90
//     const grade = percentage >= 90 ? "A+" : percentage >= 80 ? "A" : 
//                   percentage >= 70 ? "B" : percentage >= 60 ? "C" : "D";

//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 flex items-center justify-center p-6">
//         <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-center max-w-md w-full border border-blue-200/50">
//           <div className="mb-6">
//             <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
//             <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
//               Quiz Complete!
//             </h2>
//             <div className="flex items-center justify-center gap-2 mb-4">
//               {[...Array(5)].map((_, i) => (
//                 <Star 
//                   key={i} 
//                   className={`w-6 h-6 ${i < Math.floor(percentage/20) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
//                 />
//               ))}
//             </div>
//           </div>

//           <div className="space-y-4">
//             <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-4">
//               <p className="text-2xl font-bold text-gray-800">Score: {score}/90</p>
//               <p className="text-lg text-gray-600">Grade: {grade}</p>
//               <p className="text-sm text-gray-500">{percentage}% Accuracy</p>
//             </div>

//             <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-4">
//               <p className="text-lg font-semibold text-green-800">XP Earned</p>
//               <p className="text-3xl font-bold text-green-600">{score * 2}</p>
//             </div>

//             <button
//               onClick={() => window.location.reload()}
//               className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
//             >
//               Try Again
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   const currentQuestion = questions[qIndex];
//   const progress = ((qIndex + 1) / questions.length) * 100;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 flex items-center justify-center p-6">
//       {/* Floating mathematical elements */}
//       <div className="absolute top-20 left-10 text-blue-200 text-4xl font-light opacity-30 rotate-12">∑</div>
//       <div className="absolute top-40 right-16 text-purple-200 text-3xl font-light opacity-30 -rotate-12">π</div>
//       <div className="absolute bottom-32 left-20 text-indigo-200 text-5xl font-light opacity-30 rotate-45">∞</div>

//       <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-lg w-full border border-blue-200/50 relative">
//         {/* Progress Bar */}
//         <div className="mb-6">
//           <div className="flex justify-between items-center mb-2">
//             <span className="text-sm font-medium text-gray-600">Progress</span>
//             <span className="text-sm font-medium text-gray-600">{qIndex + 1}/{questions.length}</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2">
//             <div 
//               className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
//               style={{ width: `${progress}%` }}
//             ></div>
//           </div>
//         </div>

//         {/* Question */}
//         <div className="text-center mb-8">
//           <div className="flex items-center justify-center mb-4">
//             <Calculator className="w-8 h-8 text-blue-600 mr-3" />
//             <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
//               currentQuestion.difficulty === "Easy" ? "bg-green-100 text-green-800" :
//               currentQuestion.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800" :
//               "bg-red-100 text-red-800"
//             }`}>
//               {currentQuestion.difficulty}
//             </span>
//           </div>
          
//           <h2 className="text-4xl font-bold text-gray-800 mb-2">
//             {currentQuestion.q}
//           </h2>
//           <p className="text-gray-500">Question {qIndex + 1} of {questions.length}</p>
//         </div>

//         {/* Input */}
//         <div className="mb-6">
//           <input
//             type="number"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             className="w-full p-4 text-2xl text-center border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300"
//             placeholder="Your answer..."
//             onKeyDown={(e) => e.key === "Enter" && input && checkAnswer()}
//             disabled={feedback}
//           />
//         </div>

//         {/* Feedback */}
//         {feedback && (
//           <div className={`mb-6 p-4 rounded-xl flex items-center justify-center gap-2 ${
//             isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//           }`}>
//             {isCorrect && <CheckCircle className="w-5 h-5" />}
//             <span className="font-semibold">{feedback}</span>
//           </div>
//         )}

//         {/* Submit Button */}
//         <button
//           onClick={checkAnswer}
//           disabled={!input || feedback}
//           className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
//         >
//           {feedback ? "Next Question..." : "Submit Answer"}
//         </button>

//         {/* Score Display */}
//         <div className="mt-6 text-center">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
//             <Star className="w-5 h-5 text-yellow-500" />
//             <span className="font-semibold text-gray-700">Score: {score}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { Trophy, Star, Calculator, CheckCircle } from "lucide-react";
import mathsData from "./maths.json";  // Import the data

export default function MathQuiz({ level = "Basic" }) {
  const [score, setScore] = useState(0);
  const [qIndex, setQIndex] = useState(0);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const questions = mathsData[level];  // Get questions by level

  function checkAnswer() {
    const userAnswer = parseInt(input);
    const correctAnswer = questions[qIndex].ans;
    
    if (userAnswer === correctAnswer) {
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
      setInput("");
      setQIndex(qIndex + 1);
      setFeedback("");
      setIsCorrect(null);
    }, 1500);
  }

  if (qIndex >= questions.length) {
    const maxScore = questions.reduce((sum, q) => {
      const pts = q.difficulty === "Easy" ? 10 : q.difficulty === "Medium" ? 15 : 20;
      return sum + pts;
    }, 0);

    const percentage = Math.round((score / maxScore) * 100);
    const grade = percentage >= 90 ? "A+" : percentage >= 80 ? "A" : 
                  percentage >= 70 ? "B" : percentage >= 60 ? "C" : "D";

    return (
      <div className="min-h-screen ...">
        {/* Quiz complete UI (same as before) */}
      </div>
    );
  }

  const currentQuestion = questions[qIndex];
  const progress = ((qIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen ...">
      {/* Quiz UI (same as before, using currentQuestion and progress) */}
    </div>
  );
}
