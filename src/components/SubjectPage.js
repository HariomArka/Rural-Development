// // import { useParams, Link } from "react-router-dom";

// // export default function SubjectPage() {
// //   const { grade, subject } = useParams();

// //   return (
// //     <div className="flex h-screen">
// //       {/* Left half - Quote */}
// //       <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100">
// //         <h2 className="text-3xl font-bold">{subject.toUpperCase()}</h2>
// //         <p className="italic mt-4">"Some inspiring quote by an Indian {subject} expert"</p>
// //       </div>

// //       {/* Right half - Buttons */}
// //       <div className="w-1/2 flex flex-col items-center justify-center space-y-4">
// //         <Link to={`/${grade}/${subject}/videos`} className="px-6 py-3 bg-blue-500 text-white rounded-lg">
// //           Videos
// //         </Link>
// //         <Link to={`/${grade}/${subject}/quiz`} className="px-6 py-3 bg-green-500 text-white rounded-lg">
// //           Quizzes
// //         </Link>
// //         <Link to={`/${grade}/${subject}/theory`} className="px-6 py-3 bg-purple-500 text-white rounded-lg">
// //           Theory
// //         </Link>
// //         <Link to={`/${grade}/${subject}/games`} className="px-6 py-3 bg-red-500 text-white rounded-lg">
// //           Games
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // }


// import { useParams, Link } from "react-router-dom";
// import { Play, BookOpen, Brain, Gamepad2, Quote, ArrowRight } from "lucide-react";

// export default function SubjectPage() {
//   const { grade, subject } = useParams();

//   // Famous Indian scientists/mathematicians with their quotes
//   const subjectExperts = {
//     mathematics: {
//       name: "Srinivasa Ramanujan",
//       quote: "An equation means nothing to me unless it expresses a thought of God.",
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Srinivasa_Ramanujan_-_OPC_-_1.jpg/220px-Srinivasa_Ramanujan_-_OPC_-_1.jpg",
//       profession: "Mathematician"
//     },
//     physics: {
//       name: "C.V. Raman",
//       quote: "Ask the right questions, and nature will open the doors to her secrets.",
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Sir_CV_Raman.jpg/220px-Sir_CV_Raman.jpg",
//       profession: "Physicist"
//     },
//     chemistry: {
//       name: "C.N.R. Rao",
//       quote: "Science is about asking questions and finding answers through systematic investigation.",
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/CNR_Rao_2.jpg/220px-CNR_Rao_2.jpg",
//       profession: "Chemist"
//     },
//     biology: {
//       name: "Janaki Ammal",
//       quote: "Nature is the greatest teacher, and we must learn to observe and understand her ways.",
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Janaki_Ammal_1894-1984.jpg/220px-Janaki_Ammal_1894-1984.jpg",
//       profession: "Botanist"
//     },
//     "basic-science": {
//       name: "A.P.J. Abdul Kalam",
//       quote: "Science is a beautiful gift to humanity; we should not distort it.",
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/A._P._J._Abdul_Kalam.jpg/220px-A._P._J._Abdul_Kalam.jpg",
//       profession: "Scientist"
//     },
//     geography: {
//       name: "Madhav Gadgil",
//       quote: "Understanding our environment is the key to sustainable development.",
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Madhav_Gadgil.jpg/220px-Madhav_Gadgil.jpg",
//       profession: "Ecologist"
//     }
//   };

//   const expert = subjectExperts[subject] || subjectExperts["basic-science"];

//   const contentTypes = [
//     {
//       type: "videos",
//       title: "Videos",
//       description: "Interactive video lessons",
//       icon: <Play className="w-8 h-8" />,
//       color: "from-red-500 to-red-600",
//       hoverColor: "hover:from-red-600 hover:to-red-700"
//     },
//     {
//       type: "quiz",
//       title: "Quizzes",
//       description: "Test your knowledge",
//       icon: <Brain className="w-8 h-8" />,
//       color: "from-green-500 to-green-600",
//       hoverColor: "hover:from-green-600 hover:to-green-700"
//     },
//     {
//       type: "theory",
//       title: "Theory",
//       description: "Comprehensive notes",
//       icon: <BookOpen className="w-8 h-8" />,
//       color: "from-blue-500 to-blue-600",
//       hoverColor: "hover:from-blue-600 hover:to-blue-700"
//     },
//     {
//       type: "games",
//       title: "Games",
//       description: "Learn through play",
//       icon: <Gamepad2 className="w-8 h-8" />,
//       color: "from-purple-500 to-purple-600",
//       hoverColor: "hover:from-purple-600 hover:to-purple-700"
//     }
//   ];

//   const formatGrade = (grade) => {
//     const gradeMap = {
//       sixth: "6th",
//       seventh: "7th",
//       eighth: "8th",
//       ninth: "9th",
//       tenth: "10th",
//       eleventh: "11th",
//       twelfth: "12th"
//     };
//     return gradeMap[grade] || grade;
//   };

//   const formatSubject = (subject) => {
//     return subject.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase());
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
//       {/* Header */}
//       <div className="bg-white shadow-sm border-b">
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <div className="flex items-center space-x-2 text-sm text-gray-600">
//             <span>Home</span>
//             <ArrowRight className="w-4 h-4" />
//             <span>{formatGrade(grade)} Grade</span>
//             <ArrowRight className="w-4 h-4" />
//             <span className="text-gray-900 font-medium">{formatSubject(subject)}</span>
//           </div>
//         </div>
//       </div>

//       <div className="flex min-h-screen">
//         {/* Left Half - Expert Profile */}
//         <div className="w-1/2 relative overflow-hidden">
//           {/* Background Pattern */}
//           <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
//             <div className="absolute inset-0 bg-black/20"></div>
//             <div className="absolute inset-0 opacity-10">
//               <div className="absolute inset-0" style={{
//                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//                 backgroundRepeat: 'repeat'
//               }}></div>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="relative z-10 h-full flex flex-col justify-center items-center p-12 text-white">
//             <div className="text-center max-w-md">
//               {/* Subject Badge */}
//               <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
//                 <span className="text-sm font-medium">{formatGrade(grade)} Grade</span>
//               </div>

//               {/* Subject Title */}
//               <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
//                 {formatSubject(subject)}
//               </h1>

//               {/* Expert Profile */}
//               <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
//                 <div className="w-24 h-24 rounded-full bg-white/20 mx-auto mb-6 overflow-hidden">
//                   <img 
//                     src={expert.image} 
//                     alt={expert.name}
//                     className="w-full h-full object-cover"
//                     onError={(e) => {
//                       e.target.src = "https://via.placeholder.com/96x96/6366f1/ffffff?text=" + expert.name.charAt(0);
//                     }}
//                   />
//                 </div>
                
//                 <h3 className="text-2xl font-bold mb-2">{expert.name}</h3>
//                 <p className="text-gray-300 mb-6">{expert.profession}</p>
                
//                 <div className="relative">
//                   <Quote className="w-8 h-8 text-white/40 absolute -top-2 -left-2" />
//                   <p className="text-lg italic leading-relaxed pl-6">
//                     "{expert.quote}"
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Half - Action Buttons */}
//         <div className="w-1/2 flex flex-col justify-center items-center p-12 bg-white">
//           <div className="w-full max-w-md">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
//               Choose Learning Path
//             </h2>
//             <p className="text-gray-600 text-center mb-12">
//               Select your preferred way to explore {formatSubject(subject)}
//             </p>

//             <div className="space-y-6">
//               {contentTypes.map((content, index) => (
//                 <Link
//                   key={content.type}
//                   to={`/${grade}/${subject}/${content.type}`}
//                   className={`group relative overflow-hidden rounded-xl bg-gradient-to-r ${content.color} ${content.hoverColor} transform transition-all duration-300 hover:scale-105 hover:shadow-2xl block`}
//                   style={{
//                     animationDelay: `${index * 150}ms`
//                   }}
//                 >
//                   <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300"></div>
                  
//                   <div className="relative p-6 flex items-center space-x-4">
//                     <div className="flex-shrink-0 text-white group-hover:scale-110 transition-transform duration-300">
//                       {content.icon}
//                     </div>
                    
//                     <div className="flex-1 text-white">
//                       <h3 className="text-xl font-bold mb-1">{content.title}</h3>
//                       <p className="text-white/80 text-sm">{content.description}</p>
//                     </div>
                    
//                     <ArrowRight className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
//                   </div>
//                 </Link>
//               ))}
//             </div>

//             <div className="mt-12 text-center">
//               <p className="text-gray-500 text-sm">
//                 Complete all sections to master {formatSubject(subject)}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useParams, Link } from "react-router-dom";
import { Play, BookOpen, Brain, Gamepad2, Quote, ArrowRight, Home, User } from "lucide-react";

export default function SubjectPage() {
  const { grade, subject } = useParams();

  // Famous Indian scientists/mathematicians with their quotes
  const subjectExperts = {
    mathematics: {
      name: "Srinivasa Ramanujan",
      quote: "An equation means nothing to me unless it expresses a thought of God.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Srinivasa_Ramanujan_-_OPC_-_1.jpg/220px-Srinivasa_Ramanujan_-_OPC_-_1.jpg",
      profession: "Mathematician",
      achievement: "Known for his extraordinary contributions to mathematical analysis, number theory, and continued fractions."
    },
    physics: {
      name: "C.V. Raman",
      quote: "Ask the right questions, and nature will open the doors to her secrets.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Sir_CV_Raman.jpg/220px-Sir_CV_Raman.jpg",
      profession: "Physicist",
      achievement: "Nobel Prize winner for his work on the scattering of light - the Raman Effect."
    },
    chemistry: {
      name: "C.N.R. Rao",
      quote: "Science is about asking questions and finding answers through systematic investigation.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/CNR_Rao_2.jpg/220px-CNR_Rao_2.jpg",
      profession: "Chemist",
      achievement: "Pioneering work in solid-state and structural chemistry, materials science."
    },
    biology: {
      name: "Janaki Ammal",
      quote: "Nature is the greatest teacher, and we must learn to observe and understand her ways.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Janaki_Ammal_1894-1984.jpg/220px-Janaki_Ammal_1894-1984.jpg",
      profession: "Botanist",
      achievement: "Pioneer in cytogenetics and phytogeography, known for her work on plant breeding."
    },
    "basic-science": {
      name: "A.P.J. Abdul Kalam",
      quote: "Science is a beautiful gift to humanity; we should not distort it.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/A._P._J._Abdul_Kalam.jpg/220px-A._P._J._Abdul_Kalam.jpg",
      profession: "Scientist & Former President",
      achievement: "Aerospace scientist known as the Missile Man of India and People's President."
    },
    geography: {
      name: "Madhav Gadgil",
      quote: "Understanding our environment is the key to sustainable development.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Madhav_Gadgil.jpg/220px-Madhav_Gadgil.jpg",
      profession: "Ecologist",
      achievement: "Leading expert in ecology and environmental science, known for biodiversity conservation work."
    }
  };

  const expert = subjectExperts[subject] || subjectExperts["basic-science"];

  const contentTypes = [
    {
      type: "videos",
      title: "Video Lessons",
      description: "Interactive video content with explanations",
      icon: <Play className="w-6 h-6" />,
      color: "bg-red-50 border-red-200 hover:bg-red-100",
      iconColor: "text-red-600",
      textColor: "text-red-700"
    },
    {
      type: "quiz",
      title: "Practice Quizzes",
      description: "Test your understanding with assessments",
      icon: <Brain className="w-6 h-6" />,
      color: "bg-green-50 border-green-200 hover:bg-green-100",
      iconColor: "text-green-600",
      textColor: "text-green-700"
    },
    {
      type: "theory",
      title: "Theory Notes",
      description: "Comprehensive study materials and concepts",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
      iconColor: "text-blue-600",
      textColor: "text-blue-700"
    },
    {
      type: "games",
      title: "Learning Games",
      description: "Educational games and interactive activities",
      icon: <Gamepad2 className="w-6 h-6" />,
      color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
      iconColor: "text-purple-600",
      textColor: "text-purple-700"
    }
  ];

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <ArrowRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">{formatGrade(grade)} Grade</span>
            <ArrowRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">{formatSubject(subject)}</span>
          </div>
        </div>
      </div>

      <div className="flex min-h-screen">
        {/* Left Half - Expert Profile */}
        <div className="w-1/2 bg-slate-800">
          <div className="h-full flex flex-col justify-center items-center p-12 text-white">
            <div className="text-center max-w-lg">
              {/* Subject Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
                <span className="text-sm font-medium">{formatGrade(grade)} Grade</span>
              </div>

              {/* Subject Title */}
              <h1 className="text-5xl font-bold mb-12 text-white">
                {formatSubject(subject)}
              </h1>

              {/* Expert Profile Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                {/* Expert Image */}
                <div className="w-32 h-32 rounded-full bg-white/10 mx-auto mb-6 overflow-hidden border-4 border-white/20">
                  <img 
                    src={expert.image} 
                    alt={expert.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(expert.name)}&background=64748b&color=ffffff&size=200`;
                    }}
                  />
                </div>
                
                {/* Expert Info */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">{expert.name}</h3>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <User className="w-4 h-4 text-gray-300" />
                    <p className="text-gray-200 font-medium">{expert.profession}</p>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {expert.achievement}
                  </p>
                </div>
                
                {/* Quote */}
                <div className="relative pt-6 border-t border-white/20">
                  <Quote className="w-6 h-6 text-white/40 absolute -top-3 left-1/2 transform -translate-x-1/2 bg-slate-800 px-1" />
                  <p className="text-lg italic leading-relaxed text-gray-100">
                    "{expert.quote}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Half - Learning Options */}
        <div className="w-1/2 bg-white">
          <div className="h-full flex flex-col justify-center items-center p-12">
            <div className="w-full max-w-lg">
              {/* Section Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Choose Your Learning Path
                </h2>
                <p className="text-gray-600 text-lg">
                  Select how you'd like to explore {formatSubject(subject)}
                </p>
              </div>

              {/* Learning Options */}
              <div className="space-y-4">
                {contentTypes.map((content, index) => (
                  <Link
                    key={content.type}
                    to={`/${grade}/${subject}/${content.type}`}
                    className={`group block p-6 rounded-xl border-2 transition-all duration-200 ${content.color}`}
                  >
                    <div className="flex items-center space-x-4">
                      {/* Icon */}
                      <div className={`flex-shrink-0 p-3 rounded-lg bg-white shadow-sm ${content.iconColor}`}>
                        {content.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold mb-1 ${content.textColor}`}>
                          {content.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {content.description}
                        </p>
                      </div>
                      
                      {/* Arrow */}
                      <ArrowRight className={`w-5 h-5 ${content.iconColor} group-hover:translate-x-1 transition-transform duration-200`} />
                    </div>
                  </Link>
                ))}
              </div>

              {/* Bottom Note */}
              <div className="mt-12 text-center">
                <p className="text-gray-500 text-sm">
                  Complete all learning paths to master {formatSubject(subject)}
                </p>
                <div className="mt-4 flex justify-center gap-2">
                  {contentTypes.map((_, index) => (
                    <div key={index} className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}