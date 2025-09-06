import React from "react";
import { Link } from "react-router-dom";
import { Play, Brain, FileText, ArrowRight, Zap } from "lucide-react";

export default function PhysicsPage() {
  const handleNavigation = (path) => {
    console.log(`Navigating to: ${path}`);
    // Replace with your routing logic
  };

  return (
    <div className="h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="/maths.webm" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-emerald-900/60 to-teal-900/60"></div>
      </div>

      {/* Floating Physics Elements */}
      <div className="absolute top-16 left-8 text-emerald-300 text-5xl font-light opacity-20 rotate-12">⚡</div>
      <div className="absolute top-32 right-12 text-green-300 text-4xl font-light opacity-20 -rotate-12">E=mc²</div>
      <div className="absolute bottom-24 left-16 text-teal-300 text-3xl font-light opacity-20 rotate-45">F=ma</div>
      <div className="absolute bottom-16 right-24 text-lime-300 text-4xl font-light opacity-20">∆</div>
      <div className="absolute top-1/2 left-4 text-emerald-200 text-2xl font-light opacity-15">ℏ</div>

      <div className="relative z-10 h-screen flex flex-col md:flex-row items-center justify-center px-6 py-8">
        {/* Left - Hero with Image & Quote */}
        <div className="flex-1 flex flex-col items-center justify-center mb-4 md:mb-0">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative">
              <img
                src="/ramanujan.jpg"
                alt="Albert Einstein"
                className="w-48 h-60 object-cover rounded-xl shadow-2xl border-4 border-white/20 backdrop-blur-sm transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
            </div>
          </div>

          <div className="mt-4 max-w-sm text-center">
            <blockquote className="text-base italic text-white/90 leading-relaxed font-medium">
              "An equation means nothing to me unless it expresses a thought of God."
            </blockquote>
            <div className="flex items-center justify-center mt-2">
              <div className="w-10 h-px bg-gradient-to-r from-green-400 to-teal-400 mr-2"></div>
              <p className="text-sm font-semibold text-white/80 tracking-wide">
                Srinivasa Ramanujan
              </p>
            </div>
            <p className="text-xs text-white/60 mt-1 font-medium">
              Indian Mathematician (1887-1920)
            </p>
          </div>
        </div>

        {/* Right - Options */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start max-w-lg">
          <div className="text-center md:text-left mb-6">
            <div className="flex items-center justify-center md:justify-start mb-3">
              <Zap className="w-8 h-8 text-yellow-400 mr-3" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                Mathematics
              </h1>
            </div>
            <p className="text-white/80 text-base leading-relaxed max-w-md">
              Discover the fundamental laws that govern our universe. From quantum mechanics to relativity, explore the wonders of physics.
            </p>
          </div>

          {/* Buttons */}
          <div className="w-full max-w-sm space-y-3">
            <Link
              to="/math/videos"
              className="group flex items-center justify-between w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-purple-300/30 shadow-lg hover:shadow-xl hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-lg bg-purple-400/20 group-hover:bg-white/20 flex items-center justify-center mr-4 transition-colors duration-300">
                  <Play className="w-5 h-5 text-purple-300 group-hover:text-white" fill="currentColor" />
                </div>
                <div>
                  <div className="font-semibold text-lg text-white">Videos</div>
                  <div className="text-sm text-white/60 group-hover:text-white/80">Interactive experiments</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-white/60 group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300" />
            </Link>

            <Link
              to="/math/quiz"
              className="group flex items-center justify-between w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-blue-300/30 shadow-lg hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-lg bg-blue-400/20 group-hover:bg-white/20 flex items-center justify-center mr-4 transition-colors duration-300">
                  <Brain className="w-5 h-5 text-blue-300 group-hover:text-white" />
                </div>
                <div>
                  <div className="font-semibold text-lg text-white">Quiz</div>
                  <div className="text-sm text-white/60 group-hover:text-white/80">Test your understanding</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-white/60 group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300" />
            </Link>

            <Link
              to="/math/theory"
              className="group flex items-center justify-between w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-indigo-300/30 shadow-lg hover:shadow-xl hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-lg bg-indigo-400/20 group-hover:bg-white/20 flex items-center justify-center mr-4 transition-colors duration-300">
                  <FileText className="w-5 h-5 text-indigo-300 group-hover:text-white" />
                </div>
                <div>
                  <div className="font-semibold text-lg text-white">Theory</div>
                  <div className="text-sm text-white/60 group-hover:text-white/80">Fundamental concepts</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-white/60 group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300" />
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center md:text-left">
            <p className="text-sm text-white/60 italic">
              "Mathematics is the language with which God has written the universe." — Galileo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
