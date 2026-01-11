import React from 'react';
import { CONTACT_INFO } from '../constants';
import EnquiryForm from '../components/EnquiryForm';
import WaveSeparator from '../components/WaveSeparator';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-brand-purple pt-20 pb-36 md:pb-48 text-center relative text-white">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">Have questions? We are here to help you start your learning journey.</p>
        </div>
        <WaveSeparator position="bottom" color="fill-white" />
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
            <div>
              <EnquiryForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;