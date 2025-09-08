import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function QuizPage() {
  const { grade, subject, level } = useParams();
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{`${subject.toUpperCase()} - ${level.toUpperCase()} Level Quizzes`}</h1>

      {quizzes.map((quiz) => (
        <div key={quiz.id} className="mb-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">{quiz.title}</h2>

          {quiz.questions.map((q, idx) => (
            <div key={idx} className="mb-4">
              <p className="font-medium">{idx + 1}. {q.question}</p>
              <div className="flex flex-col space-y-2 mt-2">
                {q.options.map((option, i) => (
                  <label key={i} className="inline-flex items-center">
                    <input type="radio" name={`quiz-${quiz.id}-q-${idx}`} className="form-radio" />
                    <span className="ml-2">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Submit Quiz
          </button>
        </div>
      ))}
    </div>
  );
}
