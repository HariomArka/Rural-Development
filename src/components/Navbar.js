import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLink = (path, label, mobile = false) => (
    <Link
      to={path}
      onClick={() => setIsMenuOpen(false)}
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
        mobile ? "block w-full text-left" : ""
      } ${
        location.pathname === path
          ? "bg-white/20 text-white backdrop-blur-sm shadow-lg"
          : "text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm"
      }`}
    >
      {label}
    </Link>
  );

  const handleAllClassesClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToClasses: true } });
    } else {
      document.getElementById('classes-section')?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const allClassesLink = (mobile = false) => (
    <a
      href="#"
      onClick={handleAllClassesClick}
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
        mobile ? "block w-full text-left" : ""
      } text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm`}
    >
      All Classes
    </a>
  );

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 shadow-2xl sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center space-x-2 group"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            src="/logo.png"
            alt="Gurukul Logo"
            className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300 rounded-full"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-300 hover:to-indigo-300 transition-all duration-300">
            Gurukul
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-3">
          {navLink("/", "Home")}
          {allClassesLink()}
          {navLink("/contact", "Contact Us")}
          {navLink("/team", "Our Team")}
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 border-t border-white/10">
          <div className="px-6 py-4 space-y-2">
            {navLink("/", "Home", true)}
            {allClassesLink(true)}
            {navLink("/contact", "Contact Us", true)}
            {navLink("/team", "Our Team", true)}
          </div>
        </div>
      </div>
    </nav>
  );
}