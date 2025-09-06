import React, { useState } from "react";

export default function VideoSection() {
  const [subject, setSubject] = useState("math");
  const [language, setLanguage] = useState("english");

  const videos = {
    math: {
      english: [
        { topic: "Algebra Basics", url: "https://www.youtube.com/embed/5ANcspdYh_U" },
        { topic: "Geometry", url: "https://www.youtube.com/embed/ZCplrR6aD_w" }
      ],
      odia: [
        { topic: "Algebra Basics (Odia)", url: "/videos/math/algebra-odia.mp4" }
      ]
    },
    science: {
      english: [
        { topic: "Photosynthesis", url: "https://www.youtube.com/embed/D1YMC7uW4F8" },
        { topic: "Human Digestive System", url: "https://www.youtube.com/embed/1vW8hsvY0Xo" }
      ]
    },
    physics: {
      english: [
        { topic: "Motion and Speed", url: "https://www.youtube.com/embed/9rPjSRfj4x4" },
        { topic: "Newton’s Laws", url: "https://www.youtube.com/embed/kKKM8Y-u7ds" }
      ]
    }
  };

  return (
    <div className="p-6 bg-white/90 rounded-2xl shadow-lg">
      {/* Subject Selector */}
      <div className="flex gap-4 mb-4">
        <button onClick={() => setSubject("math")} className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          Math
        </button>
        <button onClick={() => setSubject("science")} className="px-4 py-2 bg-green-600 text-white rounded-lg">
          Science
        </button>
        <button onClick={() => setSubject("physics")} className="px-4 py-2 bg-purple-600 text-white rounded-lg">
          Physics
        </button>
      </div>

      {/* Language Selector */}
      <div className="mb-4">
        <label className="mr-2">Language:</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="p-2 border rounded-lg"
        >
          <option value="english">English</option>
          <option value="odia">Odia</option>
          <option value="hindi">Hindi</option>
        </select>
      </div>

      {/* Videos */}
      <div className="space-y-6">
        {videos[subject][language]?.map((video, i) => (
          <div key={i} className="p-4 bg-gray-100 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">{video.topic}</h3>
            <iframe
              width="100%"
              height="315"
              src={video.url}
              title={video.topic}
              frameBorder="0"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        )) || <p>No videos available in this language.</p>}
      </div>
    </div>
  );
}
