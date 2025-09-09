import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import quizData from '../data/quizs.json';

export default function QuizInterface() {
  const { grade, subject, subtopic } = useParams();
  const questions = quizData[grade]?.[subject]?.[subtopic];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const displayGrade = grade.charAt(0).toUpperCase() + grade.slice(1);
  const displaySubject = subject.replace('_', ' ').split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  if (!questions) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">Quiz not found.</p>
        <Link to="/" className="text-blue-600 mt-4">Go Back Home</Link>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctAnswer = questions[currentIndex].answer.trim().toLowerCase();
    const userAnswer = selectedOption.trim().toLowerCase();

    if (userAnswer === correctAnswer) {
      setScore(prev => prev + 1);
    }

    setShowExplanation(true);
  };

  const handleNext = () => {
    setCurrentIndex(prev => prev + 1);
    setSelectedOption("");
    setShowExplanation(false);
  };

  const isLastQuestion = currentIndex === questions.length - 1;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Link to={`/${grade}/${subject}/practice-quizzes`} className="flex items-center text-blue-600 mb-6">
        <ArrowLeft className="w-5 h-5 mr-2" /> Back to Quizzes
      </Link>

      <h1 className="text-4xl font-bold text-center mb-4">Class: {displayGrade}</h1>
      <h2 className="text-2xl font-semibold text-center mb-8">Subject: {displaySubject} | Subtopic: {subtopic.replace('_', ' ')}</h2>

      {currentIndex < questions.length ? (
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Q{currentIndex + 1}. {questions[currentIndex].question}
          </h3>

          {questions[currentIndex].type === "mcq" ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {questions[currentIndex].options.map((option, idx) => (
                <label key={idx} className="block bg-slate-100 p-3 rounded-lg cursor-pointer">
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="mr-3"
                    required
                  />
                  {option}
                </label>
              ))}

              {!showExplanation ? (
                <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Submit
                </button>
              ) : (
                <div className="mt-4">
                  <p className="text-gray-700 mb-2">
                    Correct Answer: <span className="font-semibold">{questions[currentIndex].answer}</span>
                  </p>
                  <p className="italic text-gray-500">{questions[currentIndex].explanation}</p>
                  <button onClick={handleNext} className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    Next Question
                  </button>
                </div>
              )}
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                placeholder="Your Answer"
                className="w-full px-4 py-2 border rounded-lg"
                required
              />

              {!showExplanation ? (
                <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Submit
                </button>
              ) : (
                <div className="mt-4">
                  <p className="text-gray-700 mb-2">
                    Correct Answer: <span className="font-semibold">{questions[currentIndex].answer}</span>
                  </p>
                  <p className="italic text-gray-500">{questions[currentIndex].explanation}</p>
                  <button onClick={handleNext} className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    Next Question
                  </button>
                </div>
              )}
            </form>
          )}
        </div>
      ) : (
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Quiz Completed!</h2>
          <p className="text-xl text-gray-700">Your Score: {score} / {questions.length}</p>
          <Link
            to={`/${grade}/${subject}/practice-quizzes`}
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Back to Quizzes
          </Link>
        </div>
      )}
    </div>
  );
}
