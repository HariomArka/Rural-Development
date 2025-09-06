import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navLink = (path, label) => (
    <Link
      to={path}
      className={`px-3 py-2 rounded-md ${
        location.pathname === path ? "bg-blue-600 text-white" : "text-gray-700 hover:text-blue-600"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">EduGamify</h1>
        <div className="flex gap-4">
          {navLink("/", "Home")}
          {navLink("/math", "Math")}
          {navLink("/science", "Science")}
          {navLink("/physics", "Physics")}
        </div>
      </div>
    </nav>
  );
}
