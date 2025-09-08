// import { useParams, Link } from "react-router-dom";
// import { Play, BookOpen, Brain, Gamepad2, Quote, ArrowRight, Home, User } from "lucide-react";

// export default function SubjectPage() {
//   const { grade, subject } = useParams();

//   // Famous Indian scientists/mathematicians with their quotes
//   const subjectExperts = {
//     mathematics: {
//       name: "Srinivasa Ramanujan",
//       quote: "An equation means nothing to me unless it expresses a thought of God.",
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Srinivasa_Ramanujan_-_OPC_-_1.jpg/220px-Srinivasa_Ramanujan_-_OPC_-_1.jpg",
//       profession: "Mathematician",
//       achievement: "Known for his extraordinary contributions to mathematical analysis, number theory, and continued fractions."
//     },
//     physics: {
//       name: "C.V. Raman",
//       quote: "Ask the right questions, and nature will open the doors to her secrets.",
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Sir_CV_Raman.jpg/220px-Sir_CV_Raman.jpg",
//       profession: "Physicist",
//       achievement: "Nobel Prize winner for his work on the scattering of light - the Raman Effect."
//     },
//     chemistry: {
//       name: "C.N.R. Rao",
//       quote: "Science is about asking questions and finding answers through systematic investigation.",
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/CNR_Rao_2.jpg/220px-CNR_Rao_2.jpg",
//       profession: "Chemist",
//       achievement: "Pioneering work in solid-state and structural chemistry, materials science."
//     },
//     biology: {
//       name: "Janaki Ammal",
//       quote: "Nature is the greatest teacher, and we must learn to observe and understand her ways.",
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Janaki_Ammal_1894-1984.jpg/220px-Janaki_Ammal_1894-1984.jpg",
//       profession: "Botanist",
//       achievement: "Pioneer in cytogenetics and phytogeography, known for her work on plant breeding."
//     },
//     "basic-science": {
//       name: "A.P.J. Abdul Kalam",
//       quote: "Science is a beautiful gift to humanity; we should not distort it.",
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/A._P._J._Abdul_Kalam.jpg/220px-A._P._J._Abdul_Kalam.jpg",
//       profession: "Scientist & Former President",
//       achievement: "Aerospace scientist known as the Missile Man of India and People's President."
//     },
//     geography: {
//       name: "Madhav Gadgil",
//       quote: "Understanding our environment is the key to sustainable development.",
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Madhav_Gadgil.jpg/220px-Madhav_Gadgil.jpg",
//       profession: "Ecologist",
//       achievement: "Leading expert in ecology and environmental science, known for biodiversity conservation work."
//     }
//   };

//   const expert = subjectExperts[subject] || subjectExperts["basic-science"];

//   const contentTypes = [
//     {
//       type: "videos",
//       title: "Video Lessons",
//       description: "Interactive video content with explanations",
//       icon: <Play className="w-6 h-6" />,
//       color: "bg-red-50 border-red-200 hover:bg-red-100",
//       iconColor: "text-red-600",
//       textColor: "text-red-700"
//     },
//     {
//       type: "quiz",
//       title: "Practice Quizzes",
//       description: "Test your understanding with assessments",
//       icon: <Brain className="w-6 h-6" />,
//       color: "bg-green-50 border-green-200 hover:bg-green-100",
//       iconColor: "text-green-600",
//       textColor: "text-green-700"
//     },
//     {
//       type: "theory",
//       title: "Theory Notes",
//       description: "Comprehensive study materials and concepts",
//       icon: <BookOpen className="w-6 h-6" />,
//       color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
//       iconColor: "text-blue-600",
//       textColor: "text-blue-700"
//     },
//     {
//       type: "games",
//       title: "Learning Games",
//       description: "Educational games and interactive activities",
//       icon: <Gamepad2 className="w-6 h-6" />,
//       color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
//       iconColor: "text-purple-600",
//       textColor: "text-purple-700"
//     }
//   ];

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

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white shadow-sm border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
//           <div className="flex items-center space-x-2 text-xs sm:text-sm overflow-x-auto">
//             <Link to="/" className="text-blue-600 hover:text-blue-800 flex items-center gap-1 whitespace-nowrap">
//               <Home className="w-3 h-3 sm:w-4 sm:h-4" />
//               <span>Home</span>
//             </Link>
//             <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
//             <span className="text-gray-600 whitespace-nowrap">{formatGrade(grade)} Grade</span>
//             <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
//             <span className="text-gray-900 font-medium">{formatSubject(subject)}</span>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col lg:flex-row min-h-screen">
//         {/* Expert Profile Section */}
//         <div className="w-full lg:w-1/2 bg-slate-800 min-h-[60vh] lg:min-h-screen">
//           <div className="h-full flex flex-col justify-center items-center p-6 sm:p-8 lg:p-12 text-white">
//             <div className="text-center max-w-lg w-full">
//               {/* Subject Badge */}
//               <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 lg:mb-8">
//                 <span className="text-xs sm:text-sm font-medium">{formatGrade(grade)} Grade</span>
//               </div>

//               {/* Subject Title */}
//               <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12 text-white">
//                 {formatSubject(subject)}
//               </h1>

//               {/* Expert Profile Card */}
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10">
//                 {/* Expert Image */}
//                 <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-white/10 mx-auto mb-4 lg:mb-6 overflow-hidden border-4 border-white/20">
//                   <img 
//                     src={expert.image} 
//                     alt={expert.name}
//                     className="w-full h-full object-cover"
//                     onError={(e) => {
//                       e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(expert.name)}&background=64748b&color=ffffff&size=200`;
//                     }}
//                   />
//                 </div>
                
//                 {/* Expert Info */}
//                 <div className="mb-4 lg:mb-6">
//                   <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">{expert.name}</h3>
//                   <div className="flex items-center justify-center gap-2 mb-2 lg:mb-3">
//                     <User className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300" />
//                     <p className="text-gray-200 font-medium text-sm sm:text-base">{expert.profession}</p>
//                   </div>
//                   <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
//                     {expert.achievement}
//                   </p>
//                 </div>
                
//                 {/* Quote */}
//                 <div className="relative pt-4 lg:pt-6 border-t border-white/20">
//                   <Quote className="w-5 h-5 lg:w-6 lg:h-6 text-white/40 absolute -top-2 lg:-top-3 left-1/2 transform -translate-x-1/2 bg-slate-800 px-1" />
//                   <p className="text-sm sm:text-base lg:text-lg italic leading-relaxed text-gray-100">
//                     "{expert.quote}"
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Learning Options Section */}
//         <div className="w-full lg:w-1/2 bg-white min-h-[40vh] lg:min-h-screen">
//           <div className="h-full flex flex-col justify-center items-center p-6 sm:p-8 lg:p-12">
//             <div className="w-full max-w-lg">
//               {/* Section Header */}
//               <div className="text-center mb-8 lg:mb-12">
//                 <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">
//                   Choose Your Learning Path
//                 </h2>
//                 <p className="text-gray-600 text-base sm:text-lg">
//                   Select how you'd like to explore {formatSubject(subject)}
//                 </p>
//               </div>

//               {/* Learning Options */}
//               <div className="space-y-3 sm:space-y-4">
//                 {contentTypes.map((content, index) => (
//                   <Link
//                     key={content.type}
//                     to={`/${grade}/${subject}/${content.type}`}
//                     className={`group block p-4 sm:p-6 rounded-xl border-2 transition-all duration-200 ${content.color}`}
//                   >
//                     <div className="flex items-center space-x-3 sm:space-x-4">
//                       {/* Icon */}
//                       <div className={`flex-shrink-0 p-2 sm:p-3 rounded-lg bg-white shadow-sm ${content.iconColor}`}>
//                         {content.icon}
//                       </div>
                      
//                       {/* Content */}
//                       <div className="flex-1 min-w-0">
//                         <h3 className={`text-lg sm:text-xl font-bold mb-1 ${content.textColor}`}>
//                           {content.title}
//                         </h3>
//                         <p className="text-gray-600 text-xs sm:text-sm">
//                           {content.description}
//                         </p>
//                       </div>
                      
//                       {/* Arrow */}
//                       <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 ${content.iconColor} group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0`} />
//                     </div>
//                   </Link>
//                 ))}
//               </div>

//               {/* Bottom Note */}
//               <div className="mt-8 lg:mt-12 text-center">
//                 <p className="text-gray-500 text-xs sm:text-sm">
//                   Complete all learning paths to master {formatSubject(subject)}
//                 </p>
//                 <div className="mt-3 lg:mt-4 flex justify-center gap-2">
//                   {contentTypes.map((_, index) => (
//                     <div key={index} className="w-2 h-2 bg-gray-300 rounded-full"></div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from "react";
// import { useLocation, Link } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";

// export default function SubjectPage() {
//   const location = useLocation();
//   const expert = location.state;

//   if (!expert) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-xl">Expert data not found. Please navigate from home.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <Link to="/" className="flex items-center text-blue-600 mb-6">
//         <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
//       </Link>

//       <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
//         <div className="flex items-center space-x-6 mb-8">
//           <img src={expert.image} alt={expert.expert} className="w-32 h-32 rounded-full object-cover"/>
//           <div>
//             <h2 className="text-3xl font-bold">{expert.expert}</h2>
//             <p className="text-gray-600">{expert.designation}</p>
//           </div>
//         </div>

//         <blockquote className="italic text-lg text-gray-700 mb-10">
//           "{expert.quote}"
//         </blockquote>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <Link to={`${expert.link}/video-lessons`} className="p-4 bg-blue-100 rounded-lg text-center hover:bg-blue-200">🎥 Video Lessons</Link>
//           <Link to={`${expert.link}/practice-quizzes`} className="p-4 bg-green-100 rounded-lg text-center hover:bg-green-200">📝 Practice Quizzes</Link>
//           <Link to={`${expert.link}/theory-notes`} className="p-4 bg-purple-100 rounded-lg text-center hover:bg-purple-200">📚 Theory Notes</Link>
//           <Link to={`${expert.link}/learning-games`} className="p-4 bg-pink-100 rounded-lg text-center hover:bg-pink-200">🎮 Learning Games</Link>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";
// import expertsData from '../data/grade.json';

// export default function SubjectPage() {
//   const { grade, subject } = useParams();
//   const expert = expertsData[grade]?.[subject];

//   if (!expert) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-xl text-red-500">
//           Expert data not found. Please navigate from home.
//         </p>
//         <Link to="/" className="text-blue-600 mt-4">Go Back</Link>
//       </div>
//     );
//   }

//   const displayGrade = grade.charAt(0).toUpperCase() + grade.slice(1);
//   const displaySubject = subject.replace('_', ' ').split(' ')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ');

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <Link to="/" className="flex items-center text-blue-600 mb-6">
//         <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
//       </Link>

//       <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
//         Class: {displayGrade} | Subject: {displaySubject}
//       </h1>

//       <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
//         <div className="flex items-center space-x-6 mb-8">
//           <img src={expert.image} alt={expert.expert} className="w-32 h-32 rounded-full object-cover"/>
//           <div>
//             <h2 className="text-3xl font-bold">{expert.expert}</h2>
//             <p className="text-gray-600">{expert.designation}</p>
//           </div>
//         </div>

//         <blockquote className="italic text-lg text-gray-700 mb-10">
//           "{expert.quote}"
//         </blockquote>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <Link to={`${expert.link}/video-lessons`} className="p-4 bg-blue-100 rounded-lg text-center hover:bg-blue-200">
//             Video Lessons
//           </Link>
//           <Link to={`${expert.link}/practice-quizzes`} className="p-4 bg-green-100 rounded-lg text-center hover:bg-green-200">
//             Practice Quizzes
//           </Link>
//           <Link to={`${expert.link}/theory-notes`} className="p-4 bg-purple-100 rounded-lg text-center hover:bg-purple-200">
//             Theory Notes
//           </Link>
//           <Link to={`${expert.link}/learning-games`} className="p-4 bg-pink-100 rounded-lg text-center hover:bg-pink-200">
//             Learning Games
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }



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