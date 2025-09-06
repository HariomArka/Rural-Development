import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Book, Calculator, Beaker, Atom, ChevronRight } from "lucide-react";

export default function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Welcome to EduGamify";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100); // Adjust speed here (100ms per character)

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const classes = [
    {
      grade: "6th Grade",
      link: 'sixth',
      subjects: ["Mathematics", "Basic Science", "Geography"]
    },
    {
      grade: "7th Grade",
      link: 'seventh',
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology"]
    },
    {
      grade: "8th Grade",
      link: 'eighth',
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology"]
    },
    {
      grade: "9th Grade",
      link: 'ninth',
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology"]
    },
    {
      grade: "10th Grade",
      link: 'tenth',
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology"]
    },
    {
      grade: "11th Grade",
      link: 'eleventh',
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology"]
    },
    {
      grade: "12th Grade",
      link: 'twelfth',
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology"]
    }
  ];

  const getSubjectIcon = (subject) => {
    switch (subject.toLowerCase()) {
      case "mathematics":
        return <Calculator className="w-5 h-5" />;
      case "physics":
        return <Atom className="w-5 h-5" />;
      case "chemistry":
        return <Beaker className="w-5 h-5" />;
      default:
        return <Book className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-screen">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-6xl font-bold text-white mb-6 min-h-[1.2em]">
          {displayedText}
          <span className={`inline-block w-1 h-16 bg-white ml-1 ${currentIndex < fullText.length ? 'animate-pulse' : 'opacity-0'}`}>
          </span>
        </h2>
        <p className="text-xl text-gray-200 max-w-2xl mb-8">
          A gamified learning platform to make Math, Science, and Physics interactive
          with videos, quizzes, and progress tracking.
        </p>
      </div>
      
      {/* Class Selection Section */}
      <div className="relative bg-gradient-to-b from-black/90 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-white text-center mb-12">
            Choose Your Class
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((grade, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <h4 className="text-2xl font-bold text-white mb-4">
                  {grade.grade}
                </h4>
                <div className="space-y-3">
                  {grade.subjects.map((subject, idx) => (
                    <Link
                      key={idx}
                      to={`/${grade.link}/${subject.toLowerCase().replace(' ', '-')}`}
                      className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/15 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3 text-white">
                        {getSubjectIcon(subject)}
                        <span>{subject}</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}