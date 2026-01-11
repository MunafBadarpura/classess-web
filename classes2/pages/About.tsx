import React from 'react';
import { TUTOR_NAME, LOCATION } from '../constants';
import WaveSeparator from '../components/WaveSeparator';
import { CheckCircle2, Heart, Shield, Users, Building } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-brand-light pt-20 pb-36 md:pb-48 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">About MindRise</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Building strong fundamentals and academic confidence since 2021.</p>
        </div>
        <WaveSeparator position="bottom" color="fill-white" />
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Image Side */}
            <div className="lg:w-1/2 relative">
               <div className="absolute top-4 -left-4 w-full h-full border-2 border-brand-accent rounded-3xl"></div>
               <img 
                 src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                 alt={TUTOR_NAME} 
                 className="w-full h-[500px] object-cover rounded-3xl shadow-xl relative z-10"
               />
               <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg z-20 max-w-xs">
                 <p className="font-display font-bold text-2xl text-brand-purple">3+ Years</p>
                 <p className="text-gray-600">of Teaching Excellence</p>
               </div>
            </div>

            {/* Text Side */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">Meet Your Tutor</h2>
              <h3 className="text-2xl text-brand-blue font-semibold mb-6">{TUTOR_NAME}</h3>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Hello! I am {TUTOR_NAME}, an educator passionate about simplifying complex concepts. 
                  Based in {LOCATION}, I specialize in Mathematics and Commerce subjects.
                </p>
                <p>
                  With a score of <strong>90% in my 12th Board exams</strong>, I understand exactly what it takes to 
                  excel in academics—not just hard work, but smart work. My teaching philosophy goes beyond 
                  textbooks; I believe in practical learning that stays with students for life.
                </p>
                <p>
                  At MindRise, we don't just chase marks. We chase mastery. When a student understands the 'Why' 
                  and 'How' behind a concept, the marks follow automatically.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Mathematics Specialist', 'Concept-Oriented', 'Doubt Clearing', 'Result Focused'].map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <CheckCircle2 className="text-brand-accent w-5 h-5" />
                    <span className="font-medium text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Core Values */}
      <section className="pt-36 pb-20 md:pt-48 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <WaveSeparator position="top" color="fill-white" />
        
        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200/30 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-200/30 rounded-full"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-pink-200/30 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left side - Mission & Values */}
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
                Our mission & core values
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Nurture each student's curiosity, creativity, and love of learning while offering families peace of mind, guidance, and exceptional education in a safe, supportive environment.
              </p>

              {/* Core Values */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Love & Respect</h3>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Safety First</h3>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Family Partnership</h3>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Community Hub</h3>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg">
                  Enquire for Free
                </button>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="lg:w-1/2 relative order-1 lg:order-2">
              <div className="relative">
                {/* Decorative background shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200 rounded-[3rem] transform rotate-6"></div>
                
                {/* Image container */}
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Student learning with joy" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent & Student Love */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">What the parents say</h2>
          </div>

          {/* Scrolling testimonials container */}
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex gap-6 animate-scroll-left">
                {/* First set of testimonials */}
                {[
                  {
                    id: '1',
                    text: "MindRise helped my child gain confidence in maths. The fear of numbers is gone!",
                    author: "Priya Sharma",
                    role: "Parent of Class 10 Student"
                  },
                  {
                    id: '2',
                    text: "Concepts are explained very clearly with real examples. Ayesha Ma'am is very patient.",
                    author: "Rahul Verma",
                    role: "Class 12 Commerce Student"
                  },
                  {
                    id: '3',
                    text: "Personal attention makes a big difference. My grades improved significantly in Accounts.",
                    author: "Sneha Patel",
                    role: "Class 11 Student"
                  }
                ].map((testimonial) => (
                  <div key={testimonial.id} className="bg-white p-6 rounded-2xl shadow-sm min-w-[300px] max-w-[300px] flex-shrink-0 text-center">
                    {/* Testimonial text at top */}
                    <p className="text-gray-800 text-sm leading-relaxed mb-6 h-20 overflow-hidden">
                      {testimonial.text}
                    </p>
                    
                    {/* Star rating */}
                    <div className="flex gap-0.5 mb-4 justify-center">
                      {[...Array(5)].map((_, i) => (
                        <CheckCircle2 key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    {/* Author info */}
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" 
                           style={{backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`}}>
                        {testimonial.author.charAt(0)}
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-gray-900 text-sm">{testimonial.author}</h4>
                        <p className="text-xs text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Duplicate set for seamless scrolling */}
                {[
                  {
                    id: '1',
                    text: "MindRise helped my child gain confidence in maths. The fear of numbers is gone!",
                    author: "Priya Sharma",
                    role: "Parent of Class 10 Student"
                  },
                  {
                    id: '2',
                    text: "Concepts are explained very clearly with real examples. Ayesha Ma'am is very patient.",
                    author: "Rahul Verma",
                    role: "Class 12 Commerce Student"
                  },
                  {
                    id: '3',
                    text: "Personal attention makes a big difference. My grades improved significantly in Accounts.",
                    author: "Sneha Patel",
                    role: "Class 11 Student"
                  }
                ].map((testimonial) => (
                  <div key={`duplicate-${testimonial.id}`} className="bg-white p-6 rounded-2xl shadow-sm min-w-[300px] max-w-[300px] flex-shrink-0 text-center">
                    {/* Testimonial text at top */}
                    <p className="text-gray-800 text-sm leading-relaxed mb-6 h-20 overflow-hidden">
                      {testimonial.text}
                    </p>
                    
                    {/* Star rating */}
                    <div className="flex gap-0.5 mb-4 justify-center">
                      {[...Array(5)].map((_, i) => (
                        <CheckCircle2 key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    {/* Author info */}
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" 
                           style={{backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`}}>
                        {testimonial.author.charAt(0)}
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-gray-900 text-sm">{testimonial.author}</h4>
                        <p className="text-xs text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;