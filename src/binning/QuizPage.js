// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";

// export default function QuizPage() {
//   const { grade, subject, level } = useParams();
//   const [quizzes, setQuizzes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchQuiz = async () => {
//       try {
//         const response = await fetch(`/data/${grade}/${subject}-quiz.json`);
//         if (!response.ok) throw new Error("Failed to fetch quiz data");

//         const data = await response.json();
//         const levelData = data.levels.find(l => l.level === level);
//         setQuizzes(levelData ? levelData.quizzes : []);
//       } catch (err) {
//         console.error(err);
//         setQuizzes([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchQuiz();
//   }, [grade, subject, level]);

//   if (loading) return <p>Loading quizzes...</p>;
//   if (quizzes.length === 0) return <p>No quizzes found for this level.</p>;

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">{`${subject.toUpperCase()} - ${level.toUpperCase()} Level Quizzes`}</h1>

//       {quizzes.map((quiz) => (
//         <div key={quiz.id} className="mb-8 bg-white rounded-lg shadow p-6">
//           <h2 className="text-xl font-semibold mb-4">{quiz.title}</h2>

//           {quiz.questions.map((q, idx) => (
//             <div key={idx} className="mb-4">
//               <p className="font-medium">{idx + 1}. {q.question}</p>
//               <div className="flex flex-col space-y-2 mt-2">
//                 {q.options.map((option, i) => (
//                   <label key={i} className="inline-flex items-center">
//                     <input type="radio" name={`quiz-${quiz.id}-q-${idx}`} className="form-radio" />
//                     <span className="ml-2">{option}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>
//           ))}

//           <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//             Submit Quiz
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }


import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function QuizPage() {
  const { grade, subject, level } = useParams();
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userAnswers, setUserAnswers] = useState({});
  const [currentQuizIdx, setCurrentQuizIdx] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await fetch(`/data/${grade}/${subject}-quiz.json`);
        if (!response.ok) throw new Error("Failed to fetch quiz data");

        const data = await response.json();
        const levelData = data.levels.find(l => l.level === level);
        setQuizzes(levelData ? levelData.quizzes : []);
      } catch (err) {
        console.error(err);
        setQuizzes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [grade, subject, level]);

  if (loading) return <p>Loading quizzes...</p>;
  if (quizzes.length === 0) return <p>No quizzes found for this level.</p>;

  const quiz = quizzes[currentQuizIdx];
  const question = quiz.questions[0];
  const userAnswer = userAnswers[currentQuizIdx]?.[0] || "";

  const handleInputChange = (questionIdx, value) => {
    setUserAnswers(prev => ({
      ...prev,
      [currentQuizIdx]: {
        ...prev[currentQuizIdx],
        [questionIdx]: value
      }
    }));
  };

  const handleSubmit = () => {
    const trimmedUserAnswer = userAnswer.trim().toLowerCase();
    const correctAnswer = question.answer.trim().toLowerCase();

    const answerIsCorrect = trimmedUserAnswer === correctAnswer;
    setIsCorrect(answerIsCorrect);

    if (answerIsCorrect) {
      setScore(prev => prev + 1);
    }

    setShowAnswer(true);  // Always show explanation, never block
  };


  const handleNext = () => {
    setShowAnswer(false);
    setIsCorrect(false);
    setCurrentQuizIdx(prev => prev + 1);
    setUserAnswers(prev => ({
      ...prev,
      [currentQuizIdx + 1]: { 0: "" }
    }));
  };

  if (currentQuizIdx >= quizzes.length) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-3xl font-semibold">🎉 Quiz Completed!</h2>
        <p className="mt-4 text-xl">Your Score: {score} / {quizzes.length}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{`${subject.toUpperCase()} - ${level.toUpperCase()} Level Quiz`}</h1>

      <div className="mb-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">{quiz.title}</h2>

        <p className="font-medium">{1}. {question.question}</p>

        <div className="flex flex-col space-y-2 mt-2">
          {question.type === "mcq" ? (
            question.options.map((option, i) => (
              <label key={i} className="inline-flex items-center">
                <input
                  type="radio"
                  name={`q-${currentQuizIdx}`}
                  className="form-radio"
                  value={option}
                  checked={userAnswer === option}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                />
                <span className="ml-2">{option}</span>
              </label>
            ))
          ) : (
            <input
              type="text"
              className="form-input border rounded p-2"
              value={userAnswer}
              onChange={(e) => handleInputChange(0, e.target.value)}
              placeholder="Type your answer here"
            />
          )}
        </div>

        {!showAnswer ? (
          <button
            type="button"
            onClick={handleSubmit}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit Answer
          </button>
        ) : (
          <div className="mt-4 p-4 bg-gray-100 rounded">
            <p className={`font-semibold ${isCorrect ? "text-green-600" : "text-red-600"}`}>
              {isCorrect ? "✔ Correct!" : "✖ Wrong!"}
            </p>
            <p><strong>Correct Answer:</strong> {question.answer}</p>
            <p><em>{question.explanation}</em></p>

            <button
              type="button"
              onClick={handleNext}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Next Question
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
