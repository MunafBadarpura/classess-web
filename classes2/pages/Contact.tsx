import React from 'react';
import { CONTACT_INFO } from '../constants';
import EnquiryForm from '../components/EnquiryForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-brand-light via-white to-blue-50 pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background decorative elements */}
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
            Have questions? We are here to help you start your learning journey.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-light p-3 rounded-full text-brand-blue">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Visit Us</h3>
                    <p className="text-gray-600">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-light p-3 rounded-full text-brand-blue">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Call Us</h3>
                    <p className="text-gray-600">{CONTACT_INFO.phone}</p>
                    <p className="text-sm text-gray-500 mt-1">Mon-Sat, 9am - 7pm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-light p-3 rounded-full text-brand-blue">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Email Us</h3>
                    <p className="text-gray-600">{CONTACT_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-light p-3 rounded-full text-brand-blue">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Classes Mode</h3>
                    <p className="text-gray-600">Offline (Center based) & Online available</p>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="mt-12 rounded-3xl overflow-hidden shadow-lg h-64 border border-gray-100">
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

            {/* Enquiry Form */}
            <div className="w-full">
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

export default Contact;