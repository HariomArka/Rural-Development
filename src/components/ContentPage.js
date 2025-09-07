// import { useParams, Link } from "react-router-dom";
// import { ArrowLeft, Play, Brain, BookOpen, Gamepad2, Clock, Star, CheckCircle, Award, ArrowRight } from "lucide-react";

// export default function ContentPage() {
//   const { grade, subject, type } = useParams();

//   const formatGrade = (grade) => {
//     const gradeMap = {
//       sixth: "6th", seventh: "7th", eighth: "8th", ninth: "9th",
//       tenth: "10th", eleventh: "11th", twelfth: "12th"
//     };
//     return gradeMap[grade] || grade;
//   };

//   const formatSubject = (subject) => {
//     return subject.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase());
//   };

//   const getTypeIcon = (type) => {
//     switch (type) {
//       case "videos": return <Play className="w-6 h-6" />;
//       case "quiz": return <Brain className="w-6 h-6" />;
//       case "theory": return <BookOpen className="w-6 h-6" />;
//       case "games": return <Gamepad2 className="w-6 h-6" />;
//       default: return <BookOpen className="w-6 h-6" />;
//     }
//   };

//   const getTypeColor = (type) => {
//     switch (type) {
//       case "videos": return "from-red-500 to-red-600";
//       case "quiz": return "from-green-500 to-green-600";
//       case "theory": return "from-blue-500 to-blue-600";
//       case "games": return "from-purple-500 to-purple-600";
//       default: return "from-gray-500 to-gray-600";
//     }
//   };

//   // Sample content data
//   const sampleContent = {
//     videos: [
//       { id: 1, title: "Introduction to Concepts", duration: "12:45", completed: true },
//       { id: 2, title: "Basic Principles", duration: "18:20", completed: true },
//       { id: 3, title: "Advanced Topics", duration: "15:30", completed: false },
//       { id: 4, title: "Problem Solving", duration: "22:10", completed: false },
//     ],
//     quiz: [
//       { id: 1, title: "Basic Concepts Quiz", questions: 10, completed: true, score: 85 },
//       { id: 2, title: "Intermediate Challenge", questions: 15, completed: false, score: null },
//       { id: 3, title: "Advanced Assessment", questions: 20, completed: false, score: null },
//       { id: 4, title: "Final Test", questions: 25, completed: false, score: null },
//     ],
//     theory: [
//       { id: 1, title: "Fundamental Concepts", pages: 12, completed: true },
//       { id: 2, title: "Key Principles", pages: 18, completed: false },
//       { id: 3, title: "Advanced Theory", pages: 24, completed: false },
//       { id: 4, title: "Case Studies", pages: 15, completed: false },
//     ],
//     games: [
//       { id: 1, title: "Concept Explorer", difficulty: "Easy", completed: true, stars: 3 },
//       { id: 2, title: "Problem Solver", difficulty: "Medium", completed: false, stars: 0 },
//       { id: 3, title: "Advanced Challenge", difficulty: "Hard", completed: false, stars: 0 },
//       { id: 4, title: "Master Quest", difficulty: "Expert", completed: false, stars: 0 },
//     ]
//   };

//   const renderVideoContent = () => (
//     <div className="grid gap-6">
//       {sampleContent.videos.map((video) => (
//         <div key={video.id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-all duration-300 overflow-hidden">
//           <div className="p-6">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-4">
//                 <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center">
//                   <Play className="w-8 h-8 text-red-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-1">{video.title}</h3>
//                   <div className="flex items-center space-x-4 text-sm text-gray-500">
//                     <div className="flex items-center space-x-1">
//                       <Clock className="w-4 h-4" />
//                       <span>{video.duration}</span>
//                     </div>
//                     {video.completed && (
//                       <div className="flex items-center space-x-1 text-green-600">
//                         <CheckCircle className="w-4 h-4" />
//                         <span>Completed</span>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//               <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
//                 {video.completed ? "Rewatch" : "Watch"}
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   const renderQuizContent = () => (
//     <div className="grid gap-6">
//       {sampleContent.quiz.map((quiz) => (
//         <div key={quiz.id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-all duration-300 overflow-hidden">
//           <div className="p-6">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-4">
//                 <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
//                   <Brain className="w-8 h-8 text-green-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-1">{quiz.title}</h3>
//                   <div className="flex items-center space-x-4 text-sm text-gray-500">
//                     <span>{quiz.questions} Questions</span>
//                     {quiz.completed && quiz.score && (
//                       <div className="flex items-center space-x-1 text-green-600">
//                         <Award className="w-4 h-4" />
//                         <span>{quiz.score}% Score</span>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//               <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
//                 {quiz.completed ? "Retake" : "Start Quiz"}
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   const renderTheoryContent = () => (
//     <div className="grid gap-6">
//       {sampleContent.theory.map((theory) => (
//         <div key={theory.id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-all duration-300 overflow-hidden">
//           <div className="p-6">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-4">
//                 <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
//                   <BookOpen className="w-8 h-8 text-blue-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-1">{theory.title}</h3>
//                   <div className="flex items-center space-x-4 text-sm text-gray-500">
//                     <span>{theory.pages} Pages</span>
//                     {theory.completed && (
//                       <div className="flex items-center space-x-1 text-green-600">
//                         <CheckCircle className="w-4 h-4" />
//                         <span>Read</span>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//               <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
//                 {theory.completed ? "Review" : "Read"}
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   const renderGamesContent = () => (
//     <div className="grid gap-6">
//       {sampleContent.games.map((game) => (
//         <div key={game.id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-all duration-300 overflow-hidden">
//           <div className="p-6">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-4">
//                 <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
//                   <Gamepad2 className="w-8 h-8 text-purple-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-1">{game.title}</h3>
//                   <div className="flex items-center space-x-4 text-sm text-gray-500">
//                     <span className={`px-2 py-1 rounded text-xs font-medium ${
//                       game.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
//                       game.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
//                       game.difficulty === 'Hard' ? 'bg-orange-100 text-orange-700' :
//                       'bg-red-100 text-red-700'
//                     }`}>
//                       {game.difficulty}
//                     </span>
//                     {game.completed && (
//                       <div className="flex items-center space-x-1">
//                         {[...Array(3)].map((_, i) => (
//                           <Star key={i} className={`w-4 h-4 ${i < game.stars ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//               <button className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
//                 {game.completed ? "Replay" : "Play"}
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   const renderContent = () => {
//     switch (type) {
//       case "videos": return renderVideoContent();
//       case "quiz": return renderQuizContent();
//       case "theory": return renderTheoryContent();
//       case "games": return renderGamesContent();
//       default: return <div className="text-center py-12"><p>Content type not found</p></div>;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
//       {/* Header */}
//       <div className="bg-white shadow-sm border-b">
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <Link
//                 to={`/${grade}/${subject}`}
//                 className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
//               >
//                 <ArrowLeft className="w-4 h-4" />
//                 <span>Back to {formatSubject(subject)}</span>
//               </Link>
//               <div className="flex items-center space-x-2 text-sm text-gray-500">
//                 <ArrowRight className="w-4 h-4" />
//                 <span className="capitalize font-medium text-gray-900">{type}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="max-w-6xl mx-auto px-6 py-8">
//         {/* Page Title */}
//         <div className="mb-8">
//           <div className={`inline-flex items-center space-x-3 px-4 py-2 rounded-xl bg-gradient-to-r ${getTypeColor(type)} text-white mb-4`}>
//             {getTypeIcon(type)}
//             <span className="font-medium capitalize">{type}</span>
//           </div>
//           <h1 className="text-4xl font-bold text-gray-900 mb-2">
//             {formatGrade(grade)} Grade {formatSubject(subject)}
//           </h1>
//           <p className="text-gray-600">
//             {type === "videos" && "Watch interactive video lessons to understand concepts visually"}
//             {type === "quiz" && "Test your knowledge and track your progress with quizzes"}
//             {type === "theory" && "Study comprehensive theory notes and explanations"}
//             {type === "games" && "Learn through fun, interactive educational games"}
//           </p>
//         </div>

//         {/* Progress Bar */}
//         <div className="bg-white rounded-xl p-6 mb-8 shadow-sm border">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="font-semibold text-gray-900">Your Progress</h3>
//             <span className="text-sm text-gray-500">2 of 4 completed</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-3">
//             <div className="bg-gradient-to-r from-green-400 to-green-500 h-3 rounded-full" style={{ width: '50%' }}></div>
//           </div>
//         </div>

//         {/* Content Grid */}
//         {renderContent()}

//         {/* Navigation */}
//         <div className="mt-12 flex justify-center">
//           <div className="flex space-x-4">
//             {["videos", "quiz", "theory", "games"].filter(t => t !== type).map((otherType) => (
//               <Link
//                 key={otherType}
//                 to={`/${grade}/${subject}/${otherType}`}
//                 className="px-4 py-2 bg-white text-gray-600 rounded-lg border hover:bg-gray-50 transition-colors capitalize"
//               >
//                 Switch to {otherType}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play, Brain, BookOpen, Gamepad2, Clock, Star, CheckCircle, Award, ArrowRight } from "lucide-react";

export default function ContentPage() {
  const { grade, subject, type } = useParams();

  const formatGrade = (grade) => {
    const gradeMap = {
      sixth: "6th", seventh: "7th", eighth: "8th", ninth: "9th",
      tenth: "10th", eleventh: "11th", twelfth: "12th"
    };
    return gradeMap[grade] || grade;
  };

  const formatSubject = (subject) => {
    return subject.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase());
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "videos": return <Play className="w-5 h-5 sm:w-6 sm:h-6" />;
      case "quiz": return <Brain className="w-5 h-5 sm:w-6 sm:h-6" />;
      case "theory": return <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />;
      case "games": return <Gamepad2 className="w-5 h-5 sm:w-6 sm:h-6" />;
      default: return <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "videos": return "from-red-500 to-red-600";
      case "quiz": return "from-green-500 to-green-600";
      case "theory": return "from-blue-500 to-blue-600";
      case "games": return "from-purple-500 to-purple-600";
      default: return "from-gray-500 to-gray-600";
    }
  };

  // Sample content data
  const sampleContent = {
    videos: [
      { id: 1, title: "Introduction to Concepts", duration: "12:45", completed: true },
      { id: 2, title: "Basic Principles", duration: "18:20", completed: true },
      { id: 3, title: "Advanced Topics", duration: "15:30", completed: false },
      { id: 4, title: "Problem Solving", duration: "22:10", completed: false },
    ],
    quiz: [
      { id: 1, title: "Basic Concepts Quiz", questions: 10, completed: true, score: 85 },
      { id: 2, title: "Intermediate Challenge", questions: 15, completed: false, score: null },
      { id: 3, title: "Advanced Assessment", questions: 20, completed: false, score: null },
      { id: 4, title: "Final Test", questions: 25, completed: false, score: null },
    ],
    theory: [
      { id: 1, title: "Fundamental Concepts", pages: 12, completed: true },
      { id: 2, title: "Key Principles", pages: 18, completed: false },
      { id: 3, title: "Advanced Theory", pages: 24, completed: false },
      { id: 4, title: "Case Studies", pages: 15, completed: false },
    ],
    games: [
      { id: 1, title: "Concept Explorer", difficulty: "Easy", completed: true, stars: 3 },
      { id: 2, title: "Problem Solver", difficulty: "Medium", completed: false, stars: 0 },
      { id: 3, title: "Advanced Challenge", difficulty: "Hard", completed: false, stars: 0 },
      { id: 4, title: "Master Quest", difficulty: "Expert", completed: false, stars: 0 },
    ]
  };

  const renderVideoContent = () => (
    <div className="grid gap-4 sm:gap-6">
      {sampleContent.videos.map((video) => (
        <div key={video.id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-all duration-300 overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 leading-tight">{video.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-xs sm:text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{video.duration}</span>
                    </div>
                    {video.completed && (
                      <div className="flex items-center space-x-1 text-green-600">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Completed</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <button className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm sm:text-base">
                {video.completed ? "Rewatch" : "Watch"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderQuizContent = () => (
    <div className="grid gap-4 sm:gap-6">
      {sampleContent.quiz.map((quiz) => (
        <div key={quiz.id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-all duration-300 overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 leading-tight">{quiz.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-xs sm:text-sm text-gray-500">
                    <span>{quiz.questions} Questions</span>
                    {quiz.completed && quiz.score && (
                      <div className="flex items-center space-x-1 text-green-600">
                        <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{quiz.score}% Score</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <button className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm sm:text-base">
                {quiz.completed ? "Retake" : "Start Quiz"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderTheoryContent = () => (
    <div className="grid gap-4 sm:gap-6">
      {sampleContent.theory.map((theory) => (
        <div key={theory.id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-all duration-300 overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 leading-tight">{theory.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-xs sm:text-sm text-gray-500">
                    <span>{theory.pages} Pages</span>
                    {theory.completed && (
                      <div className="flex items-center space-x-1 text-green-600">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Read</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <button className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base">
                {theory.completed ? "Review" : "Read"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderGamesContent = () => (
    <div className="grid gap-4 sm:gap-6">
      {sampleContent.games.map((game) => (
        <div key={game.id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-all duration-300 overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Gamepad2 className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 leading-tight">{game.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-xs sm:text-sm text-gray-500">
                    <span className={`inline-flex px-2 py-1 rounded text-xs font-medium ${
                      game.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                      game.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      game.difficulty === 'Hard' ? 'bg-orange-100 text-orange-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {game.difficulty}
                    </span>
                    {game.completed && (
                      <div className="flex items-center space-x-1">
                        {[...Array(3)].map((_, i) => (
                          <Star key={i} className={`w-3 h-3 sm:w-4 sm:h-4 ${i < game.stars ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <button className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm sm:text-base">
                {game.completed ? "Replay" : "Play"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (type) {
      case "videos": return renderVideoContent();
      case "quiz": return renderQuizContent();
      case "theory": return renderTheoryContent();
      case "games": return renderGamesContent();
      default: return <div className="text-center py-12"><p>Content type not found</p></div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2 sm:space-x-4 overflow-x-auto">
              <Link
                to={`/${grade}/${subject}`}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap text-sm sm:text-base"
              >
                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="hidden sm:inline">Back to {formatSubject(subject)}</span>
                <span className="sm:hidden">Back</span>
              </Link>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="capitalize font-medium text-gray-900">{type}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Page Title */}
        <div className="mb-6 sm:mb-8">
          <div className={`inline-flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r ${getTypeColor(type)} text-white mb-3 sm:mb-4`}>
            {getTypeIcon(type)}
            <span className="font-medium capitalize text-sm sm:text-base">{type}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 leading-tight">
            {formatGrade(grade)} Grade {formatSubject(subject)}
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {type === "videos" && "Watch interactive video lessons to understand concepts visually"}
            {type === "quiz" && "Test your knowledge and track your progress with quizzes"}
            {type === "theory" && "Study comprehensive theory notes and explanations"}
            {type === "games" && "Learn through fun, interactive educational games"}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-sm border">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Your Progress</h3>
            <span className="text-xs sm:text-sm text-gray-500">2 of 4 completed</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
            <div className="bg-gradient-to-r from-green-400 to-green-500 h-2 sm:h-3 rounded-full transition-all duration-300" style={{ width: '50%' }}></div>
          </div>
        </div>

        {/* Content Grid */}
        {renderContent()}

        {/* Navigation */}
        <div className="mt-8 sm:mt-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {["videos", "quiz", "theory", "games"].filter(t => t !== type).map((otherType) => (
              <Link
                key={otherType}
                to={`/${grade}/${subject}/${otherType}`}
                className="px-3 sm:px-4 py-2 bg-white text-gray-600 rounded-lg border hover:bg-gray-50 transition-colors capitalize text-sm sm:text-base whitespace-nowrap"
              >
                <span className="hidden sm:inline">Switch to </span>{otherType}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}