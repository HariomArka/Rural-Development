// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { ArrowLeft, PlayCircle } from "lucide-react";
// import videosData from '../data/videos.json';

// export default function VideoLessonsPage() {
//   const { grade, subject } = useParams();
//   const topicGroups = videosData[grade]?.[subject];

//   if (!topicGroups) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col items-center justify-center px-4">
//         <div className="text-center space-y-6">
//           <h2 className="text-2xl font-bold text-slate-800">Video Lessons Not Found</h2>
//           <p className="text-slate-600 max-w-md">
//             No video lessons available for this subject. Please navigate from the home page.
//           </p>
//           <Link 
//             to="/" 
//             className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
//           >
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             Return Home
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const displayGrade = grade.charAt(0).toUpperCase() + grade.slice(1);
//   const displaySubject = subject.replace('_', ' ').split(' ')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ');

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <Link to={`/${grade}/${subject}`} className="flex items-center text-blue-600 mb-6">
//         <ArrowLeft className="w-5 h-5 mr-2" /> Back to Subject Page
//       </Link>

//       <h1 className="text-4xl font-bold text-slate-800 text-center mb-4">
//         Class: {displayGrade}
//       </h1>
      
//       <h2 className="text-2xl font-semibold text-slate-700 text-center mb-8">
//         Subject: {displaySubject}
//       </h2>

//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {Object.entries(topicGroups).map(([topic, videos], index) => (
//           <div key={index} className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-slate-800 mb-4">
//                 {topic.replace('_', ' ').toUpperCase()}
//               </h3>

//               {videos.map((video, idx) => {
//                 const videoIdMatch = video.videoUrl.match(/(?:v=|youtu\.be\/)([^&]+)/);
//                 const videoId = videoIdMatch ? videoIdMatch[1] : '';

//                 return (
//                   <div key={idx} className="mb-6 border rounded-lg p-4 shadow-sm bg-slate-50">
//                     <div className="aspect-w-16 aspect-h-9 mb-4">
//                       {videoId ? (
//                         <iframe 
//                           src={`https://www.youtube.com/embed/${videoId}`} 
//                           title={video.title}
//                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                           allowFullScreen
//                           className="w-full h-full rounded-lg"
//                         ></iframe>
//                       ) : (
//                         <p className="text-red-500">Invalid video URL</p>
//                       )}
//                     </div>

//                     <h4 className="text-lg font-medium text-slate-800">{video.title}</h4>

//                     <Link
//                       to={video.videoUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                     >
//                       <PlayCircle className="w-5 h-5 mr-2" /> Watch on YouTube
//                     </Link>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, PlayCircle, Clock, BookOpen } from "lucide-react";
import videosData from '../data/videos.json';

export default function VideoLessonsPage() {
  const { grade, subject } = useParams();
  const topicGroups = videosData[grade]?.[subject];

  if (!topicGroups) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 mx-auto bg-red-100 rounded-full flex items-center justify-center">
            <PlayCircle className="w-10 h-10 text-red-600" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-800">Video Lessons Not Found</h2>
            <p className="text-slate-600 max-w-md">
              No video lessons available for this subject. Please navigate from the home page.
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header Navigation */}
      <div className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to={`/${grade}/${subject}`} 
            className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-medium">Back to Subject Page</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 mb-6">
            <BookOpen className="w-4 h-4 text-slate-600" />
            <span className="text-sm font-medium text-slate-600">Class: {displayGrade}</span>
            <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
            <span className="text-sm font-medium text-slate-600">Subject: {displaySubject}</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 leading-tight">
            Video Lessons
          </h1>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Master {displaySubject} with our comprehensive video library
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center space-x-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{Object.keys(topicGroups).length}</div>
              <div className="text-sm text-slate-600">Topics</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">
                {Object.values(topicGroups).flat().length}
              </div>
              <div className="text-sm text-slate-600">Videos</div>
            </div>
          </div>
        </div>

        {/* Video Topics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {Object.entries(topicGroups).map(([topic, videos], index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
              {/* Topic Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {topic.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </h3>
                    <p className="text-blue-100 text-sm">
                      {videos.length} video{videos.length > 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
              </div>

              {/* Videos List */}
              <div className="p-6 space-y-6">
                {videos.map((video, idx) => {
                  const videoIdMatch = video.videoUrl.match(/(?:v=|youtu\.be\/)([^&]+)/);
                  const videoId = videoIdMatch ? videoIdMatch[1] : '';

                  return (
                    <div key={idx} className="group">
                      {/* Video Embed */}
                      <div className="relative overflow-hidden rounded-xl shadow-lg mb-4 bg-slate-100">
                        <div className="aspect-w-16 aspect-h-9">
                          {videoId ? (
                            <iframe 
                              src={`https://www.youtube.com/embed/${videoId}`} 
                              title={video.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="w-full h-full"
                            ></iframe>
                          ) : (
                            <div className="flex items-center justify-center h-full">
                              <p className="text-red-500 font-medium">Invalid video URL</p>
                            </div>
                          )}
                        </div>
                        
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Video Info */}
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors duration-200 leading-tight">
                          {video.title}
                        </h4>

                        {/* Action Button */}
                        <Link
                          to={video.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl group-hover:scale-105"
                        >
                          <PlayCircle className="w-4 h-4 mr-2" />
                          Watch on YouTube
                        </Link>
                      </div>
                      
                      {/* Divider for multiple videos */}
                      {idx < videos.length - 1 && (
                        <div className="mt-6 pt-6 border-t border-slate-200"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 sm:p-12 text-center max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <PlayCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Keep Learning!
            </h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Ready to test your knowledge? Try our practice quizzes and interactive learning materials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to={`/${grade}/${subject}/practice-quizzes`}
                className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Practice Quizzes
              </Link>
              <Link 
                to={`/${grade}/${subject}/theory-notes`}
                className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Theory Notes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}