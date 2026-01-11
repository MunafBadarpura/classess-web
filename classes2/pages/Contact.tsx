import React from 'react';
import { CONTACT_INFO } from '../constants';
import EnquiryForm from '../components/EnquiryForm';
import { MapPin, Phone, Mail, Clock, MessageCircle, Users, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <section className="relative bg-gradient-to-br from-brand-light via-white to-blue-50 pt-52 pb-20 lg:pt-60 lg:pb-32 overflow-x-clip">
        <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-brand-purple rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent font-semibold text-sm mb-6">
            Get In Touch
          </span>
          <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 leading-[1.15] mb-6">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Us</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions? We're here to help you start your learning journey. Reach out and let's talk!
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: MapPin, title: 'Visit Us', info: CONTACT_INFO.address, bg: 'from-blue-100 to-blue-200', iconColor: 'text-blue-600' },
              { icon: Phone, title: 'Call Us', info: CONTACT_INFO.phone, sub: 'Mon-Sat, 9am - 7pm', bg: 'from-purple-100 to-purple-200', iconColor: 'text-purple-600' },
              { icon: Mail, title: 'Email Us', info: CONTACT_INFO.email, bg: 'from-yellow-100 to-yellow-200', iconColor: 'text-yellow-600' },
              { icon: Clock, title: 'Class Modes', info: 'Offline & Online', sub: 'Flexible options available', bg: 'from-green-100 to-green-200', iconColor: 'text-green-600' },
            ].map(({ icon: Icon, title, info, sub, bg, iconColor }) => (
              <div key={title} className={`bg-gradient-to-br ${bg} p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group hover:-translate-y-1`}>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                  <Icon className={`w-6 h-6 ${iconColor}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-700 text-sm">{info}</p>
                {sub && <p className="text-gray-500 text-xs mt-1">{sub}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200/30 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-200/30 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side - Info & Map */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue font-semibold text-sm mb-6">
                We'd Love to Hear From You
              </span>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
                Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Conversation</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Whether you have questions about our programs, want to schedule a demo class, or just want to say hello — we're here for you.
              </p>

              {/* Quick Info Cards */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Quick Response</h3>
                    <p className="text-gray-600 text-sm">We typically respond within 2-4 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Free Consultation</h3>
                    <p className="text-gray-600 text-sm">Book a free demo class to experience our teaching</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">No Commitment</h3>
                    <p className="text-gray-600 text-sm">Try before you decide — no pressure</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-64 border border-gray-100">
                <iframe 
                  src={CONTACT_INFO.mapUrl}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  title="MindRise Location"
                ></iframe>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:sticky lg:top-32">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-accent rounded-3xl p-0.5">
                  <div className="bg-white rounded-3xl h-full w-full"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent font-semibold text-xs mb-4">
                      📚 Free Demo Available
                    </span>
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent font-semibold text-sm mb-6">
              Why MindRise?
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              What Makes Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Different</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Personalized Learning', 
                desc: 'Small batch sizes ensure every student gets individual attention and customized guidance.',
                bg: 'from-blue-100 to-blue-200'
              },
              { 
                title: 'Proven Results', 
                desc: 'Our students consistently show improvement in their academic performance and confidence.',
                bg: 'from-purple-100 to-purple-200'
              },
              { 
                title: 'Flexible Options', 
                desc: 'Choose between offline classes at our center or convenient online sessions from home.',
                bg: 'from-yellow-100 to-yellow-200'
              },
            ].map(({ title, desc, bg }) => (
              <div key={title} className={`bg-gradient-to-br ${bg} p-8 rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
                <p className="text-gray-700 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<section className="py-20 bg-gradient-to-br from-brand-purple via-purple-600 to-brand-blue text-white text-center relative overflow-hidden">
  {/* Decorative circles */}
  <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
  <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full"></div>
  <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/5 rounded-full"></div>

  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white font-semibold text-sm mb-6">
      📞 Ready to Connect?
    </span>

    <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
      Don't Wait, Start Your Journey Today
    </h2>

    <p className="text-xl text-purple-100 max-w-xl mx-auto mb-8 leading-relaxed">
      Every great achievement starts with a single step. Take yours now by reaching out to us.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      
      {/* Call Now Button */}
      <a
        href="tel:+919987731407"
        className="bg-white text-brand-purple px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2"
      >
        <Phone className="w-5 h-5" />
        Call Now
      </a>

      {/* Send Email Button */}
      <a
        href="mailto:badharaayesha@gmail.com?subject=Tuition%20Enquiry&body=Hello%20Ayesha%20Ma'am,%0A%0AI%20would%20like%20to%20enquire%20about%20tuition%20classes.%0A%0AThank%20you."
        className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
      >
        <Mail className="w-5 h-5" />
        Send Email
      </a>

    </div>
  </div>
</section>

    </div>
  );
};

export default Contact;
