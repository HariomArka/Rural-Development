import React from "react";
import { Users, Linkedin, Mail, ExternalLink, MapPin, Award } from "lucide-react";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Mr Arka Ghosh",
      position: "Project Lead",
      institute: "IIT Kharagpur",
      image: "/arkaghosh.jpg",
      linkedin: "https://linkedin.com/in/sarah-johnson",
      email: "sarah.johnson@stanford.edu",
      expertise: "Educational Technology",
      location: "Kharagpur, West Bengal, India"
    },
    {
      name: "Ms Soumily Nayek",
      position: "Research Head",
      institute: "IIT Kharagpur",
      image: "/soumily.jpg",
      linkedin: "https://linkedin.com/in/raj-patel",
      email: "raj.patel@mit.edu",
      expertise: "Machine Learning",
      location: "Massachusetts, USA"
    },
    {
      name: "Dr. Emily Chen",
      position: "Data Scientist",
      institute: "Harvard University",
      image: "/elon.jpg",
      linkedin: "https://linkedin.com/in/emily-chen",
      email: "emily.chen@harvard.edu",
      expertise: "Data Analytics",
      location: "Massachusetts, USA"
    },
    {
      name: "Michael Brooks",
      position: "Software Architect",
      institute: "Berkeley",
      image: "/elon.jpg",
      linkedin: "https://linkedin.com/in/michael-brooks",
      email: "m.brooks@berkeley.edu",
      expertise: "System Design",
      location: "California, USA"
    },
    {
      name: "Dr. Lisa Wong",
      position: "UX Researcher",
      institute: "CMU",
      image: "/elon.jpg",
      linkedin: "https://linkedin.com/in/lisa-wong",
      email: "lisa.wong@cmu.edu",
      expertise: "User Experience",
      location: "Pennsylvania, USA"
    },
    {
      name: "James Wilson",
      position: "Full Stack Developer",
      institute: "Georgia Tech",
      image: "/elon.jpg",
      linkedin: "https://linkedin.com/in/james-wilson",
      email: "j.wilson@gatech.edu",
      expertise: "Web Development",
      location: "Georgia, USA"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Our Team
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated professionals who are passionate about transforming education through innovative technology solutions
            </p>
          </div>
        </div>
      </div>

      {/* Team Grid Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=3b82f6&color=ffffff&size=400`;
                  }}
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-medium text-gray-700">{member.expertise}</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold text-lg mb-2">
                    {member.position}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <ExternalLink className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="truncate">{member.institute}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>{member.location}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm font-medium">Email</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">50+</h3>
              <p className="text-gray-600 font-medium">Years Combined Experience</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">10K+</h3>
              <p className="text-gray-600 font-medium">Students Impacted</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">25+</h3>
              <p className="text-gray-600 font-medium">Research Publications</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Interested in contributing to educational innovation? We're always looking for passionate individuals to join our team.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Open Positions
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}