import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, BookOpen, CheckCircle } from "lucide-react";
import quizData from '../data/quizs.json';

export default function Quizzes() {
  const { grade, subject } = useParams();
  const subtopics = quizData[grade]?.[subject];

  const displayGrade = grade.charAt(0).toUpperCase() + grade.slice(1);
  const displaySubject = subject.replace('_', ' ').split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  if (!subtopics) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">No quizzes available for this subject.</p>
        <Link to="/" className="text-blue-600 mt-4">Go Back Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Link to={`/${grade}/${subject}`} className="flex items-center text-blue-600 mb-6">
        <ArrowLeft className="w-5 h-5 mr-2" /> Back to Subject Page
      </Link>

      <h1 className="text-4xl font-bold text-center mb-4">Class: {displayGrade}</h1>
      <h2 className="text-2xl font-semibold text-center mb-8">Subject: {displaySubject}</h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(subtopics).map(([subtopic, questions], idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {subtopic.replace('_', ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
            </h3>
            <p className="text-gray-600 mb-6">{questions.length} Questions</p>
            <Link
              to={`/${grade}/${subject}/practice-quizzes/${subtopic}`}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Attempt Quiz
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
