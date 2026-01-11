import React, { useState } from 'react';
import { PROGRAMS } from '../constants';
import Button from '../components/Button';
import EnrollmentModal from '../components/EnrollmentModal';
import { Check, BookOpen, Users, Clock, Award, Target, Lightbulb, CheckCircle2 } from 'lucide-react';

const Programs: React.FC = () => {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <section className="relative bg-gradient-to-br from-brand-light via-white to-blue-50 pt-52 pb-20 lg:pt-60 lg:pb-32 overflow-x-clip">
        <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-brand-purple rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent font-semibold text-sm mb-6">
            Learn With Us
          </span>
          <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 leading-[1.15] mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Programs</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Structured courses designed to help you excel in your exams and build a strong foundation for your future.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {PROGRAMS.map((program, index) => {
              const styles = [
                { bg: 'bg-gradient-to-br from-blue-100 to-blue-200', iconColor: 'text-blue-600', border: 'border-blue-200' },
                { bg: 'bg-gradient-to-br from-purple-100 to-purple-200', iconColor: 'text-purple-600', border: 'border-purple-200' },
                { bg: 'bg-gradient-to-br from-yellow-100 to-yellow-200', iconColor: 'text-yellow-600', border: 'border-yellow-200' },
              ][index % 3];

              return (
                <div key={program.id} className={`${styles.bg} rounded-3xl p-8 border ${styles.border} hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 flex flex-col h-full`}>
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    {React.isValidElement(program.icon) && React.cloneElement(program.icon as React.ReactElement, { className: `w-8 h-8 ${styles.iconColor}` })}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">{program.title}</h3>
                  <p className="text-brand-blue font-semibold mb-4">{program.grade}</p>
                  <p className="text-gray-700 mb-6 leading-relaxed flex-grow">{program.description}</p>
                  <div className="space-y-2 mb-6 min-h-[72px]">
                    {program.subjects.slice(0, 3).map((subj, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{subj}</span>
                      </div>
                    ))}
                  </div>
                  <Button onClick={() => setIsEnrollModalOpen(true)} className="w-full mt-auto">Enroll Now</Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200/30 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-200/30 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue font-semibold text-sm mb-6">
              Everything You Need
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              What's <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Included</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every program comes with comprehensive support to ensure your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: 'Study Materials', desc: 'Comprehensive notes & worksheets', bg: 'from-blue-100 to-blue-200', iconColor: 'text-blue-600' },
              { icon: Users, title: 'Small Batches', desc: 'Maximum 10 students per batch', bg: 'from-purple-100 to-purple-200', iconColor: 'text-purple-600' },
              { icon: Clock, title: 'Flexible Timing', desc: 'Morning & evening batches', bg: 'from-yellow-100 to-yellow-200', iconColor: 'text-yellow-600' },
              { icon: Target, title: 'Regular Tests', desc: 'Weekly assessments & feedback', bg: 'from-green-100 to-green-200', iconColor: 'text-green-600' },
              { icon: Lightbulb, title: 'Doubt Sessions', desc: 'Dedicated doubt clearing time', bg: 'from-pink-100 to-pink-200', iconColor: 'text-pink-600' },
              { icon: Award, title: 'Progress Reports', desc: 'Monthly performance updates', bg: 'from-orange-100 to-orange-200', iconColor: 'text-orange-600' },
              { icon: CheckCircle2, title: 'Exam Prep', desc: 'Board exam focused preparation', bg: 'from-teal-100 to-teal-200', iconColor: 'text-teal-600' },
              { icon: Users, title: 'Parent Connect', desc: 'Regular parent-teacher meetings', bg: 'from-indigo-100 to-indigo-200', iconColor: 'text-indigo-600' },
            ].map(({ icon: Icon, title, desc, bg, iconColor }) => (
              <div key={title} className={`bg-gradient-to-br ${bg} p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group hover:-translate-y-1`}>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                  <Icon className={`w-6 h-6 ${iconColor}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-700 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent font-semibold text-sm mb-6">
              Explore In Detail
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900">
              Program <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Details</span>
            </h2>
          </div>

          <div className="space-y-12">
            {PROGRAMS.map((program, index) => (
              <div 
                key={program.id} 
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-lg border border-gray-100`}
              >
                <div className="lg:w-1/2 w-full">
                  <div className={`${program.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md`}>
                    {program.icon}
                  </div>
                  <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">{program.title}</h2>
                  <h3 className="text-xl text-brand-blue font-semibold mb-4">{program.grade}</h3>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">{program.description}</p>
                  
                  <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                    <h4 className="font-bold text-gray-900 mb-4">Subjects Covered:</h4>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {program.subjects.map((subj, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="text-green-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{subj}</span>
                        </li>
                      ))}
                      <li className="flex items-start">
                        <Check className="text-green-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Regular Tests</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-green-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Doubt Sessions</span>
                      </li>
                    </ul>
                  </div>

                  <Button onClick={() => setIsEnrollModalOpen(true)}>Enroll in {program.title}</Button>
                </div>
                
                <div className="lg:w-1/2 w-full relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200 rounded-[2rem] transform rotate-3"></div>
                  <img 
                    src={`https://picsum.photos/seed/${program.id}edu/800/600`} 
                    alt={program.title} 
                    className="relative rounded-[2rem] shadow-xl w-full h-[300px] lg:h-[400px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-pink-200/30 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-200/30 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent font-semibold text-sm mb-6">
                Our Approach
              </span>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
                How We Make Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Effective</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our teaching methodology focuses on building strong fundamentals and developing problem-solving skills that last a lifetime.
              </p>
              
              <div className="space-y-4">
                {[
                  { num: '01', title: 'Concept Clarity', desc: 'We ensure students understand the "why" behind every concept' },
                  { num: '02', title: 'Practice & Application', desc: 'Regular practice with real-world problem solving' },
                  { num: '03', title: 'Continuous Assessment', desc: 'Regular tests to track progress and identify gaps' },
                ].map(({ num, title, desc }) => (
                  <div key={num} className="flex gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-purple rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0">
                      {num}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                      <p className="text-gray-600 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200 rounded-[3rem] transform rotate-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Students learning" 
                className="relative rounded-[3rem] shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-purple via-purple-600 to-brand-blue text-white text-center relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/5 rounded-full"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white font-semibold text-sm mb-6">
            🎯 Ready to Start?
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
            Begin Your Journey to Academic Excellence
          </h2>
          <p className="text-xl text-purple-100 max-w-xl mx-auto mb-8 leading-relaxed">
            Join MindRise today and experience the difference personalized coaching can make.
          </p>
          <button 
            onClick={() => setIsEnrollModalOpen(true)}
            className="bg-white text-brand-purple px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Enquire for Free
          </button>
        </div>
      </section>

      {/* Enrollment Modal */}
      <EnrollmentModal 
        isOpen={isEnrollModalOpen} 
        onClose={() => setIsEnrollModalOpen(false)} 
      />
    </div>
  );
};

export default Programs;
