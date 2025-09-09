import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, FileText, Globe, Users, BookOpen, Settings } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: 'general',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      category: 'general',
      message: ''
    });
  };

  const contactCards = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      details: ["info@ruraleducation.odisha.gov.in", "support@ruraleducation.odisha.gov.in"],
      bgColor: "bg-gray-100",
      iconColor: "text-black"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      details: ["+91-674-2345-678", "Toll-free: 1800-XXX-XXXX"],
      bgColor: "bg-gray-100",
      iconColor: "text-black"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office Location",
      details: ["Electronics & IT Department", "Secretariat, Bhubaneswar", "Odisha - 751001"],
      bgColor: "bg-gray-100",
      iconColor: "text-black"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: ["Mon-Fri: 10:00 AM - 6:00 PM", "Sat: 10:00 AM - 2:00 PM", "Sun: Closed"],
      bgColor: "bg-gray-100",
      iconColor: "text-black"
    }
  ];

  const departments = [
    {
      icon: <Settings className="w-5 h-5" />,
      name: "Technical Support",
      description: "Platform issues, bugs, technical queries",
      email: "tech@ruraleducation.odisha.gov.in",
      color: "text-black"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      name: "Content Team",
      description: "Educational materials, curriculum questions",
      email: "content@ruraleducation.odisha.gov.in",
      color: "text-black"
    },
    {
      icon: <Users className="w-5 h-5" />,
      name: "Training & Support",
      description: "Teacher training, workshops, onboarding",
      email: "training@ruraleducation.odisha.gov.in",
      color: "text-black"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      name: "Partnerships",
      description: "Collaborations, integrations, partnerships",
      email: "partners@ruraleducation.odisha.gov.in",
      color: "text-black"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Connect with our team for support, partnerships, or questions about the 
              <span className="font-semibold text-white"> Rural Education Platform</span>
            </p>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactCards.map((card, index) => (
            <div key={index} className="bg-white border-2 border-black rounded-lg hover:shadow-xl transition-all duration-300 p-6">
              <div className={`w-12 h-12 ${card.bgColor} border border-black rounded-lg flex items-center justify-center mb-4`}>
                <div className={card.iconColor}>
                  {card.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-black mb-3">{card.title}</h3>
              <div className="space-y-1">
                {card.details.map((detail, idx) => (
                  <p key={idx} className="text-sm text-gray-600">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border-2 border-black rounded-lg p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-black mb-4">Send us a Message</h2>
                <p className="text-gray-600">
                  Have questions about the platform? Need technical support? We're here to help!
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-black mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black transition-colors bg-white"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-black mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black transition-colors bg-white"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-black mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black transition-colors bg-white"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-black mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black transition-colors bg-white"
                      required
                    >
                      <option value="general">General Inquiry</option>
                      <option value="technical">Technical Support</option>
                      <option value="content">Content Related</option>
                      <option value="training">Training Request</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-black mb-2">
                    Subject *
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black transition-colors bg-white"
                      placeholder="Brief description of your inquiry"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-black mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black transition-colors resize-none bg-white"
                      placeholder="Please provide detailed information about your inquiry..."
                      required
                    />
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 border-2 border-black"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Department Contacts */}
            <div className="bg-white border-2 border-black rounded-lg p-6">
              <h3 className="text-xl font-bold text-black mb-6">Department Contacts</h3>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="border-l-4 border-gray-200 pl-4 py-3 hover:border-black transition-colors">
                    <div className="flex items-start space-x-3">
                      <div className={`${dept.color} mt-1`}>
                        {dept.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-bold ${dept.color}`}>{dept.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{dept.description}</p>
                        <p className="text-sm text-black hover:underline cursor-pointer font-medium">{dept.email}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Access */}
            <div className="bg-white border-2 border-black rounded-lg p-6">
              <h3 className="text-xl font-bold text-black mb-6">Quick Access</h3>
              <div className="space-y-3">
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-gray-700 hover:text-black font-medium">Platform Demo</span>
                  </div>
                </a>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <span className="text-gray-700 hover:text-black font-medium">Teacher Resources</span>
                  </div>
                </a>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                    <span className="text-gray-700 hover:text-black font-medium">Technical Documentation</span>
                  </div>
                </a>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-gray-700 hover:text-black font-medium">FAQ & Support</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gray-100 border-2 border-black rounded-lg p-6">
              <h3 className="text-lg font-bold text-black mb-3">Emergency Support</h3>
              <p className="text-sm text-gray-700 mb-3">
                For critical platform issues affecting multiple schools
              </p>
              <div className="space-y-2">
                <p className="text-sm font-bold text-black">24/7 Emergency Line:</p>
                <p className="text-lg font-bold text-black">1800-XXX-XXXX</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Rural Education Platform</h3>
              <p className="text-gray-300">Government of Odisha - Electronics & IT Department</p>
            </div>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-300 text-sm">
                © 2024 Government of Odisha. All rights reserved. | 
                <span className="mx-2 hover:text-white cursor-pointer">Privacy Policy</span> | 
                <span className="mx-2 hover:text-white cursor-pointer">Terms of Service</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}