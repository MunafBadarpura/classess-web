import React, { useState } from 'react';
import { TUTOR_NAME, LOCATION, TESTIMONIALS } from '../constants';
import { Testimonial } from '../types';
import WaveSeparator from '../components/WaveSeparator';
import EnrollmentModal from '../components/EnrollmentModal';
import { CheckCircle2, Heart, Shield, Users, Building, Star, HelpCircle, Clock, TrendingUp, Award } from 'lucide-react';

const About: React.FC = () => {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  
  // Dynamic testimonial filling for seamless marquee
  const CARD_WIDTH = 300 + 24;
  const MIN_TRACK_WIDTH = typeof window !== 'undefined' ? window.innerWidth * 2 : 3840;
  const filledTestimonials: Testimonial[] = [];
  let index = 0;
  
  while (filledTestimonials.length * CARD_WIDTH < MIN_TRACK_WIDTH) {
    filledTestimonials.push(TESTIMONIALS[index % TESTIMONIALS.length]);
    index++;
  }

  return (
    <div>
      {/* Header */}
      <section className="relative bg-gradient-to-br from-brand-light via-white to-blue-50 pt-52 pb-20 lg:pt-60 lg:pb-32 overflow-x-clip">
        <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-brand-purple rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent font-semibold text-sm mb-6">
            Our Story
          </span>
          <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 leading-[1.15] mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">MindRise</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Building strong fundamentals and academic confidence since 2021. Where every student's potential is nurtured with care and expertise.
          </p>
        </div>
      </section>

      {/* Meet Your Tutor */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
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
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">Meet Your Tutor</h2>
              <h3 className="text-2xl text-brand-blue font-semibold mb-6">{TUTOR_NAME}</h3>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>Hello! I am {TUTOR_NAME}, an educator passionate about simplifying complex concepts. Based in {LOCATION}, I specialize in Mathematics and Commerce subjects.</p>
                <p>With a score of <strong>90% in my 12th Board exams</strong>, I understand exactly what it takes to excel in academics—not just hard work, but smart work.</p>
                <p>At MindRise, we don't just chase marks. We chase mastery. When a student understands the 'Why' and 'How' behind a concept, the marks follow automatically.</p>
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
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200/30 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-200/30 rounded-full"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-pink-200/30 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">Our mission & core values</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">Nurture each student's curiosity, creativity, and love of learning while offering families peace of mind, guidance, and exceptional education in a safe, supportive environment.</p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">Love & Respect</h3>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">Safety First</h3>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">Family Partnership</h3>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">Community Hub</h3>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200 rounded-[3rem] transform rotate-6"></div>
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Student learning with joy" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200/30 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-200/30 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue font-semibold text-sm mb-6">Why Choose Us</span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Why Parents Trust <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">MindRise</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">We're committed to providing the best learning experience for your child.</p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, title: 'Proven Results', text: 'Consistent academic improvement', bg: 'bg-gradient-to-br from-blue-100 to-blue-200', iconColor: 'text-blue-600' },
              { icon: Clock, title: 'Personal Attention', text: 'Limited batch size', bg: 'bg-gradient-to-br from-purple-100 to-purple-200', iconColor: 'text-purple-600' },
              { icon: Award, title: 'Experienced Teaching', text: '3+ years of excellence', bg: 'bg-gradient-to-br from-yellow-100 to-yellow-200', iconColor: 'text-yellow-600' },
              { icon: Shield, title: 'Safe Environment', text: 'Supportive & disciplined', bg: 'bg-gradient-to-br from-green-100 to-green-200', iconColor: 'text-green-600' },
            ].map(({ icon: Icon, title, text, bg, iconColor }) => (
              <div key={title} className={`${bg} p-8 rounded-3xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-1`}>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <Icon className={`w-8 h-8 ${iconColor}`} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-700 text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-purple via-purple-600 to-brand-blue text-white text-center relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/5 rounded-full"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white font-semibold text-sm mb-6">🚀 Start Today</span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">Let's Build Your Child's Confidence Together</h2>
          <p className="text-xl text-purple-100 max-w-xl mx-auto mb-8 leading-relaxed">Join MindRise and experience learning that truly makes a difference.</p>
          <button 
            onClick={() => setIsEnrollModalOpen(true)}
            className="bg-white text-brand-purple px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Enquire for Free
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900">
            Parent & Student{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">Love</span>
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-pink-200 rounded-full"></span>
            </span>
          </h2>
        </div>
        <div className="relative overflow-hidden w-full">
          <div className="marquee-track flex gap-6">
            {[...filledTestimonials, ...filledTestimonials].map((testimonial, i) => (
              <div key={`${testimonial.id}-${i}`} className="bg-white p-6 rounded-2xl shadow-sm w-[300px] flex-shrink-0 text-center">
                <p className="text-gray-800 text-sm leading-relaxed mb-6 h-20 overflow-hidden">{testimonial.text}</p>
                <div className="flex justify-center gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (<Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />))}
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: `hsl(${(i % 3) * 120}, 70%, 60%)` }}>{testimonial.author.charAt(0)}</div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 text-sm">{testimonial.author}</h4>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200/30 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-200/30 rounded-full"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent font-semibold text-sm mb-6">Got Questions?</span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Which classes do you teach?', a: 'We teach Class 9-12 students, specializing in Mathematics and Commerce subjects.' },
              { q: 'Do you provide personal attention?', a: 'Yes! We maintain small batch sizes to ensure every student gets individual attention.' },
              { q: 'Are regular tests conducted?', a: 'Absolutely. Regular assessments help track progress and identify areas for improvement.' },
              { q: 'How can parents track progress?', a: 'We provide regular updates and progress reports to keep parents informed.' },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="text-brand-blue w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{q}</h3>
                    <p className="text-gray-600">{a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

export default About;
