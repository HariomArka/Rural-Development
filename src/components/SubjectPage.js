import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, BookOpen, PlayCircle, FileText, Gamepad2 } from "lucide-react";
import expertsData from '../data/grade.json';

export default function SubjectPage() {
  const { grade, subject } = useParams();
  const expert = expertsData[grade]?.[subject];

  if (!expert) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 mx-auto bg-red-100 rounded-full flex items-center justify-center">
            <BookOpen className="w-10 h-10 text-red-600" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-800">Expert Data Not Found</h2>
            <p className="text-slate-600 max-w-md">
              The requested expert information could not be found. Please navigate from the home page.
            </p>
          </div>
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const displayGrade = grade.charAt(0).toUpperCase() + grade.slice(1);
  const displaySubject = subject.replace('_', ' ').split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const learningOptions = [
    {
      title: "Video Lessons",
      description: "Interactive video content with expert instruction",
      icon: PlayCircle,
      path: `${expert.link}/video-lessons`,
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      textColor: "text-blue-700",
      borderColor: "border-blue-200"
    },
    {
      title: "Practice Quizzes",
      description: "Test your knowledge with adaptive quizzes",
      icon: FileText,
      path: `${expert.link}/practice-quizzes`,
      gradient: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50 hover:bg-emerald-100",
      textColor: "text-emerald-700",
      borderColor: "border-emerald-200"
    },
    {
      title: "Theory Notes",
      description: "Comprehensive study materials and references",
      icon: BookOpen,
      path: `${expert.link}/theory-notes`,
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 hover:bg-purple-100",
      textColor: "text-purple-700",
      borderColor: "border-purple-200"
    },
    {
      title: "Learning Games",
      description: "Gamified learning for better retention",
      icon: Gamepad2,
      path: `${expert.link}/learning-games`,
      gradient: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50 hover:bg-pink-100",
      textColor: "text-pink-700",
      borderColor: "border-pink-200"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header Navigation */}
      <div className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 mb-6">
            <span className="text-sm font-medium text-slate-600">Class: {displayGrade}</span>
            <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
            <span className="text-sm font-medium text-slate-600">Subject: {displaySubject}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 leading-tight">
            Expert Learning Hub
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Master {displaySubject} with comprehensive resources and expert guidance
          </p>
        </div>

        {/* Expert Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden mb-12">
          {/* Gradient Background Section */}
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 sm:px-8 lg:px-12 py-10 lg:py-16">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-10">
              {/* Expert Image */}
              <div className="flex-shrink-0">
                <div className="relative group">
                  <img 
                    src={expert.image} 
                    alt={expert.expert} 
                    className="w-36 h-36 lg:w-44 lg:h-44 rounded-2xl object-cover border-4 border-white shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Expert Information */}
              <div className="text-center lg:text-left flex-1 space-y-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
                    {expert.expert}
                  </h2>
                  <p className="text-blue-100 text-lg font-medium">
                    {expert.designation}
                  </p>
                </div>
                <blockquote className="text-white/95 text-lg lg:text-xl italic leading-relaxed max-w-3xl border-l-4 border-white/30 pl-6">
                  "{expert.quote}"
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Options Grid */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
              Choose Your Learning Path
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Select from our comprehensive learning resources designed to help you excel
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {learningOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Link
                  key={index}
                  to={option.path}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-slate-300 transform hover:-translate-y-2"
                >
                  {/* Content Section */}
                  <div className={`${option.bgColor} transition-colors duration-300 p-6 sm:p-8`}>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${option.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className={`text-xl font-bold ${option.textColor} mb-3 group-hover:text-opacity-80 transition-colors duration-200`}>
                      {option.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {option.description}
                    </p>
                  </div>

                  {/* Action Section */}
                  <div className="px-6 sm:px-8 py-5 bg-gradient-to-r from-slate-50 to-slate-100 group-hover:from-slate-100 group-hover:to-slate-200 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900">
                        Start Learning
                      </span>
                      <ArrowLeft className="w-4 h-4 text-slate-400 rotate-180 group-hover:translate-x-2 group-hover:text-slate-600 transition-all duration-300" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}