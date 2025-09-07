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
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <div className="flex items-center space-x-2 text-sm">
//             <Link to="/" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
//               <Home className="w-4 h-4" />
//               <span>Home</span>
//             </Link>
//             <ArrowRight className="w-4 h-4 text-gray-400" />
//             <span className="text-gray-600">{formatGrade(grade)} Grade</span>
//             <ArrowRight className="w-4 h-4 text-gray-400" />
//             <span className="text-gray-900 font-medium">{formatSubject(subject)}</span>
//           </div>
//         </div>
//       </div>

//       <div className="flex min-h-screen">
//         {/* Left Half - Expert Profile */}
//         <div className="w-1/2 bg-slate-800">
//           <div className="h-full flex flex-col justify-center items-center p-12 text-white">
//             <div className="text-center max-w-lg">
//               {/* Subject Badge */}
//               <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
//                 <span className="text-sm font-medium">{formatGrade(grade)} Grade</span>
//               </div>

//               {/* Subject Title */}
//               <h1 className="text-5xl font-bold mb-12 text-white">
//                 {formatSubject(subject)}
//               </h1>

//               {/* Expert Profile Card */}
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
//                 {/* Expert Image */}
//                 <div className="w-32 h-32 rounded-full bg-white/10 mx-auto mb-6 overflow-hidden border-4 border-white/20">
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
//                 <div className="mb-6">
//                   <h3 className="text-2xl font-bold mb-2 text-white">{expert.name}</h3>
//                   <div className="flex items-center justify-center gap-2 mb-3">
//                     <User className="w-4 h-4 text-gray-300" />
//                     <p className="text-gray-200 font-medium">{expert.profession}</p>
//                   </div>
//                   <p className="text-gray-300 text-sm leading-relaxed">
//                     {expert.achievement}
//                   </p>
//                 </div>
                
//                 {/* Quote */}
//                 <div className="relative pt-6 border-t border-white/20">
//                   <Quote className="w-6 h-6 text-white/40 absolute -top-3 left-1/2 transform -translate-x-1/2 bg-slate-800 px-1" />
//                   <p className="text-lg italic leading-relaxed text-gray-100">
//                     "{expert.quote}"
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Half - Learning Options */}
//         <div className="w-1/2 bg-white">
//           <div className="h-full flex flex-col justify-center items-center p-12">
//             <div className="w-full max-w-lg">
//               {/* Section Header */}
//               <div className="text-center mb-12">
//                 <h2 className="text-3xl font-bold text-gray-900 mb-4">
//                   Choose Your Learning Path
//                 </h2>
//                 <p className="text-gray-600 text-lg">
//                   Select how you'd like to explore {formatSubject(subject)}
//                 </p>
//               </div>

//               {/* Learning Options */}
//               <div className="space-y-4">
//                 {contentTypes.map((content, index) => (
//                   <Link
//                     key={content.type}
//                     to={`/${grade}/${subject}/${content.type}`}
//                     className={`group block p-6 rounded-xl border-2 transition-all duration-200 ${content.color}`}
//                   >
//                     <div className="flex items-center space-x-4">
//                       {/* Icon */}
//                       <div className={`flex-shrink-0 p-3 rounded-lg bg-white shadow-sm ${content.iconColor}`}>
//                         {content.icon}
//                       </div>
                      
//                       {/* Content */}
//                       <div className="flex-1">
//                         <h3 className={`text-xl font-bold mb-1 ${content.textColor}`}>
//                           {content.title}
//                         </h3>
//                         <p className="text-gray-600 text-sm">
//                           {content.description}
//                         </p>
//                       </div>
                      
//                       {/* Arrow */}
//                       <ArrowRight className={`w-5 h-5 ${content.iconColor} group-hover:translate-x-1 transition-transform duration-200`} />
//                     </div>
//                   </Link>
//                 ))}
//               </div>

//               {/* Bottom Note */}
//               <div className="mt-12 text-center">
//                 <p className="text-gray-500 text-sm">
//                   Complete all learning paths to master {formatSubject(subject)}
//                 </p>
//                 <div className="mt-4 flex justify-center gap-2">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center space-x-2 text-xs sm:text-sm overflow-x-auto">
            <Link to="/" className="text-blue-600 hover:text-blue-800 flex items-center gap-1 whitespace-nowrap">
              <Home className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Home</span>
            </Link>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
            <span className="text-gray-600 whitespace-nowrap">{formatGrade(grade)} Grade</span>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
            <span className="text-gray-900 font-medium">{formatSubject(subject)}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Expert Profile Section */}
        <div className="w-full lg:w-1/2 bg-slate-800 min-h-[60vh] lg:min-h-screen">
          <div className="h-full flex flex-col justify-center items-center p-6 sm:p-8 lg:p-12 text-white">
            <div className="text-center max-w-lg w-full">
              {/* Subject Badge */}
              <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 lg:mb-8">
                <span className="text-xs sm:text-sm font-medium">{formatGrade(grade)} Grade</span>
              </div>

              {/* Subject Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12 text-white">
                {formatSubject(subject)}
              </h1>

              {/* Expert Profile Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10">
                {/* Expert Image */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-white/10 mx-auto mb-4 lg:mb-6 overflow-hidden border-4 border-white/20">
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
                <div className="mb-4 lg:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">{expert.name}</h3>
                  <div className="flex items-center justify-center gap-2 mb-2 lg:mb-3">
                    <User className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300" />
                    <p className="text-gray-200 font-medium text-sm sm:text-base">{expert.profession}</p>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {expert.achievement}
                  </p>
                </div>
                
                {/* Quote */}
                <div className="relative pt-4 lg:pt-6 border-t border-white/20">
                  <Quote className="w-5 h-5 lg:w-6 lg:h-6 text-white/40 absolute -top-2 lg:-top-3 left-1/2 transform -translate-x-1/2 bg-slate-800 px-1" />
                  <p className="text-sm sm:text-base lg:text-lg italic leading-relaxed text-gray-100">
                    "{expert.quote}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Options Section */}
        <div className="w-full lg:w-1/2 bg-white min-h-[40vh] lg:min-h-screen">
          <div className="h-full flex flex-col justify-center items-center p-6 sm:p-8 lg:p-12">
            <div className="w-full max-w-lg">
              {/* Section Header */}
              <div className="text-center mb-8 lg:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">
                  Choose Your Learning Path
                </h2>
                <p className="text-gray-600 text-base sm:text-lg">
                  Select how you'd like to explore {formatSubject(subject)}
                </p>
              </div>

              {/* Learning Options */}
              <div className="space-y-3 sm:space-y-4">
                {contentTypes.map((content, index) => (
                  <Link
                    key={content.type}
                    to={`/${grade}/${subject}/${content.type}`}
                    className={`group block p-4 sm:p-6 rounded-xl border-2 transition-all duration-200 ${content.color}`}
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      {/* Icon */}
                      <div className={`flex-shrink-0 p-2 sm:p-3 rounded-lg bg-white shadow-sm ${content.iconColor}`}>
                        {content.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-lg sm:text-xl font-bold mb-1 ${content.textColor}`}>
                          {content.title}
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          {content.description}
                        </p>
                      </div>
                      
                      {/* Arrow */}
                      <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 ${content.iconColor} group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0`} />
                    </div>
                  </Link>
                ))}
              </div>

              {/* Bottom Note */}
              <div className="mt-8 lg:mt-12 text-center">
                <p className="text-gray-500 text-xs sm:text-sm">
                  Complete all learning paths to master {formatSubject(subject)}
                </p>
                <div className="mt-3 lg:mt-4 flex justify-center gap-2">
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