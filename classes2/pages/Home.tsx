import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Check, Heart, BookOpen, Target, Users2, Users, Award, Clock, Lightbulb, Apple, Star } from 'lucide-react';
import { BRAND_NAME, FEATURES, ACHIEVEMENTS, PROGRAMS, TESTIMONIALS } from '../constants';
import { Testimonial } from '../types';
import Button from '../components/Button';
import WaveSeparator from '../components/WaveSeparator';
import EnquiryForm from '../components/EnquiryForm';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Home: React.FC = () => {
  const navigate = useNavigate();
  
  // Scroll animation hooks for different sections
  const statsAnimation = useScrollAnimation();
  const featuresAnimation = useScrollAnimation();
  const experiencesAnimation = useScrollAnimation();
  const programsAnimation = useScrollAnimation();
  const testimonialsAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  // Dynamic testimonial filling for seamless marquee
  const CARD_WIDTH = 300 + 24; // card width + gap
  const MIN_TRACK_WIDTH = typeof window !== 'undefined' ? window.innerWidth * 2 : 3840; // fallback for SSR
  const filledTestimonials: Testimonial[] = [];
  let index = 0;
  
  while (filledTestimonials.length * CARD_WIDTH < MIN_TRACK_WIDTH) {
    filledTestimonials.push(TESTIMONIALS[index % TESTIMONIALS.length]);
    index++;
  }

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-light via-white to-blue-50 pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent font-semibold text-sm mb-6 animate-fade-in-up">
                Start Your Learning Journey Today
              </span>
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 leading-[1.15] mb-6">
                Where Young Minds <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Rise With Purpose</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Expert coaching for Class 9-12. Specializing in Mathematics and Commerce to help students grow with clarity, confidence, and consistency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button onClick={() => navigate('/contact')}>
                  Book Free Demo
                </Button>
                <Button variant="outline" onClick={() => navigate('/about')}>
                  Know More
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-purple rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              
              <div className="relative rounded-4xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Student learning" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <WaveSeparator position="bottom" color="fill-white" />
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-purple-100 via-pink-50 to-purple-100 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={statsAnimation.ref}
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 scroll-animate ${statsAnimation.isVisible ? 'visible' : ''}`}
          >
            {/* Left side - Title and description */}
            <div className="lg:w-2/5 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4 leading-tight">
                Numbers That Tell Our Story
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                Behind every number is a student smile, a parent's peace of mind.
              </p>
            </div>

            {/* Right side - Stats */}
            <div className="lg:w-3/5">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                {ACHIEVEMENTS.map((stat, idx) => (
                  <div 
                    key={stat.id} 
                    className={`text-center scroll-animate delay-${(idx + 1) * 100} ${statsAnimation.isVisible ? 'visible' : ''}`}
                  >
                    <div className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-2">
                      {stat.count}
                    </div>
                    <div className="text-gray-600 font-medium text-sm lg:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Redesigned with vibrant cards */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top section with title, description and image */}
          <div 
            ref={featuresAnimation.ref}
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20 scroll-animate ${featuresAnimation.isVisible ? 'visible' : ''}`}
          >
            {/* Left side - Title and description */}
            <div className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
                Why Students Love Learning With Us
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                We believe every student deserves personalized attention and a learning environment that makes complex concepts simple and enjoyable.
              </p>
            </div>

            {/* Right side - Image with decorative background */}
            <div className="lg:w-1/2 relative order-1 lg:order-2">
              <div className="relative">
                {/* Decorative blob background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-green-100 to-yellow-200 rounded-[3rem] transform rotate-6"></div>
                
                {/* Image container */}
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Happy student learning" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature cards - Redesigned with vibrant colors */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Personal Attention Card */}
            <div className={`bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 border border-blue-200 group hover:-translate-y-1 scroll-animate ${featuresAnimation.isVisible ? 'visible' : ''}`}>
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personal Attention</h3>
              <p className="text-gray-700 leading-relaxed">Small batch sizes ensure every student gets the guidance they need.</p>
            </div>

            {/* Result Oriented Card */}
            <div className={`bg-gradient-to-br from-purple-100 to-purple-200 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 border border-purple-200 group hover:-translate-y-1 scroll-animate delay-100 ${featuresAnimation.isVisible ? 'visible' : ''}`}>
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Result Oriented</h3>
              <p className="text-gray-700 leading-relaxed">Consistent improvement in scores and strong board exam results.</p>
            </div>

            {/* Flexible Learning Card */}
            <div className={`bg-gradient-to-br from-yellow-100 to-yellow-200 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 border border-yellow-200 group hover:-translate-y-1 scroll-animate delay-200 ${featuresAnimation.isVisible ? 'visible' : ''}`}>
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Learning</h3>
              <p className="text-gray-700 leading-relaxed">Offline classes in Mumbai with online options available for convenience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Student Experiences */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-pink-200/30 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-200/30 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-200/30 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
            {/* Left side - Title */}
            <div className="lg:w-2/5">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
                What Student Experiences
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every day is filled with wonder, discovery, and joyful moments that gently nurture, inspire, and lovingly guide your student to grow, learn, and flourish into their amazing self.
              </p>
            </div>

            {/* Right side - Experience cards */}
            <div className="lg:w-3/5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Row 1 */}
                {/* <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Warm Welcome</h3>
                  </div>
                </div> */}

                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Engaging Learning</h3>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Goal Achievement</h3>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Daily Parent Connection</h3>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Celebrating Milestones</h3>
                  </div>
                </div>

                {/* <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Comforting Routines</h3>
                  </div>
                </div> */}

               <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Healthy Study Habits</h3>
                </div>
              </div>


                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Creative Problem Solving</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview - Redesigned Pastel Cards */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6 tracking-tight">
              Tailored Programs<br />
              <span className="text-brand-blue">For Academic Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Structured learning paths designed to build confidence and deliver results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {PROGRAMS.map((program, index) => {
               // Define pastel colors based on index matching the inspiration vibe
               const styles = [
                 { bg: 'bg-blue-100', iconColor: 'text-blue-600' }, 
                 { bg: 'bg-purple-100', iconColor: 'text-purple-600' },
                 { bg: 'bg-yellow-100', iconColor: 'text-yellow-600' },
               ][index % 3];

               return (
                <div 
                  key={program.id} 
                  onClick={() => navigate('/programs')}
                  className={`${styles.bg} rounded-[2.5rem] p-10 text-center transition-all duration-300 hover:-translate-y-2 cursor-pointer group`}
                >
                  <div className="relative flex justify-center mb-8">
                    {/* White blob-like background for icon */}
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm relative z-10 group-hover:scale-110 transition-transform duration-300">
                       {/* Clone icon to apply specific color and size */}
                       {React.isValidElement(program.icon) && React.cloneElement(program.icon as React.ReactElement, { 
                         className: `w-10 h-10 ${styles.iconColor}` 
                       })}
                    </div>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-700 font-semibold mb-4 text-lg opacity-80">{program.grade}</p>
                  
                  <p className="text-gray-600 leading-relaxed mb-8 text-base">
                    {program.description}
                  </p>
                </div>
               );
            })}
          </div>
          
          <div className="mt-12 text-center">
             <Button 
              variant="outline" 
              onClick={() => navigate('/programs')}
              className="rounded-full"
             >
               View All Programs
             </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
<section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 overflow-hidden">
  <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-4xl font-display font-bold text-gray-900">
      Parent & Student{" "}
        <span className="relative inline-block">
          <span className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
            Love
          </span>
          <span className="absolute left-0 -bottom-1 w-full h-1 bg-pink-200 rounded-full"></span>
        </span>
      </h2>

  </div>

  {/* Marquee */}
  <div className="relative overflow-hidden w-full">
    <div className="marquee-track flex gap-6">
      {[...filledTestimonials, ...filledTestimonials].map((testimonial, i) => (
        <div
          key={`${testimonial.id}-${i}`}
          className="bg-white p-6 rounded-2xl shadow-sm w-[300px] flex-shrink-0 text-center"
        >
          {/* Text */}
          <p className="text-gray-800 text-sm leading-relaxed mb-6 h-20 overflow-hidden">
            {testimonial.text}
          </p>

          {/* Stars */}
          <div className="flex justify-center gap-0.5 mb-4">
            {[...Array(5)].map((_, j) => (
              <Star
                key={j}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          {/* Author */}
          <div className="flex items-center justify-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{
                backgroundColor: `hsl(${(i % 3) * 120}, 70%, 60%)`,
              }}
            >
              {testimonial.author.charAt(0)}
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 text-sm">
                {testimonial.author}
              </h4>
              <p className="text-xs text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    

      {/* CTA Section - Redesigned */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300/20 rounded-full animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-300/20 rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-blue-300/20 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            {/* Left side - Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-block px-4 py-2 bg-brand-accent/10 text-brand-accent rounded-full text-sm font-semibold mb-6">
                🚀 Start Your Journey Today
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Excel</span> in Your Studies?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                Join MindRise today and experience personalized learning that transforms your academic journey. Limited seats available for the upcoming batch.
              </p>
              
              {/* Benefits list */}
              <div className="flex flex-row gap-4 sm:gap-6 mb-8 justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Free Demo Class</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Small Batches</span>
                </div>
              </div>
            </div>

            {/* Right side - Enhanced Form Card */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative">
                {/* Decorative gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-accent rounded-3xl p-0.5">
                  <div className="bg-white rounded-3xl h-full w-full"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                      Book Your Free Demo Class
                    </h3>
                    <p className="text-gray-600">
                      Experience our teaching methodology firsthand
                    </p>
                  </div>
                  <EnquiryForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;