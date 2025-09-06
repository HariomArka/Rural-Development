import React from "react";
import { Link } from "react-router-dom";
import { Play, Brain, FileText, ArrowRight, Microscope } from "lucide-react";

export default function SciencePage() {
  const handleNavigation = (path) => {
    console.log(`Navigating to: ${path}`);
    // Replace with your routing logic
  };

  return (
    <div className="h-screen bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900 relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-25"
        >
          <source
            src="science.mp4"
            type="video/mp4"
          />
          {/* Fallback for nature/science themed video */}
        </video>
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/70 via-green-900/70 to-teal-900/70"></div>
      </div>

      {/* Floating Science Elements */}
      <div className="absolute top-16 left-8 text-green-300 text-5xl font-light opacity-20 rotate-12">🔬</div>
      <div className="absolute top-32 right-12 text-emerald-300 text-4xl font-light opacity-20 -rotate-12">DNA</div>
      <div className="absolute bottom-24 left-16 text-teal-300 text-3xl font-light opacity-20 rotate-45">H₂O</div>
      <div className="absolute bottom-16 right-24 text-green-300 text-4xl font-light opacity-20">CO₂</div>
      <div className="absolute top-1/2 left-4 text-emerald-200 text-2xl font-light opacity-15">⚛</div>
      <div className="absolute top-20 right-32 text-teal-200 text-3xl font-light opacity-15">🧬</div>

      <div className="relative z-10 h-screen flex flex-col md:flex-row items-center justify-center px-6 py-8">

        {/* Left - Hero with Image & Quote */}
        <div className="flex-1 flex flex-col items-center justify-center mb-4 md:mb-0">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Marie_Curie_c1920.jpg/256px-Marie_Curie_c1920.jpg"
                alt="Marie Curie"
                className="w-48 h-60 object-cover rounded-xl shadow-2xl border-4 border-white/20 backdrop-blur-sm transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
            </div>
          </div>

          <div className="mt-4 max-w-sm text-center">
            <blockquote className="text-base italic text-white/90 leading-relaxed font-medium">
              "Science is a way of thinking much more than it is a body of knowledge. It is about understanding the natural world."
            </blockquote>
            <div className="flex items-center justify-center mt-2">
              <div className="w-10 h-px bg-gradient-to-r from-emerald-400 to-teal-400 mr-2"></div>
              <p className="text-sm font-semibold text-white/80 tracking-wide">
                Marie Curie
              </p>
            </div>
            <p className="text-xs text-white/60 mt-1 font-medium">
              Physicist & Chemist (1867-1934)
            </p>
          </div>
        </div>

        {/* Right - Options */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start max-w-lg">
          <div className="text-center md:text-left mb-6">
            <div className="flex items-center justify-center md:justify-start mb-3">
              <Microscope className="w-8 h-8 text-emerald-400 mr-3" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-300 via-green-300 to-teal-300 bg-clip-text text-transparent">
                Science
              </h1>
            </div>
            <p className="text-white/80 text-base leading-relaxed max-w-md">
              Explore the wonders of the natural world. From biology to chemistry, discover how science shapes our understanding of life.
            </p>
          </div>

          {/* Enhanced Buttons */}
          <div className="w-full max-w-sm space-y-3">
            <Link
              to="/science/videos"
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
              to="/science/quiz"
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
              to="/science/theory"
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
              "The scientist is not a person who gives the right answers, but one who asks the right questions." — Claude Lévi-Strauss
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}