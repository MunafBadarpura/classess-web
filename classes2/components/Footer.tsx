import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { BRAND_NAME, CONTACT_INFO, NAVIGATION } from '../constants';
import WaveSeparator from './WaveSeparator';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-900 text-white pt-24 pb-12 mt-auto">
      <WaveSeparator position="top" color="fill-gray-900" className="-top-1 md:-top-[60px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-brand-blue p-2 rounded-lg text-white">
                <GraduationCap size={24} />
              </div>
              <span className="font-display font-bold text-2xl">{BRAND_NAME}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering students with concept clarity, confidence, and consistent results. Join us to reshape your academic journey.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-brand-light">Quick Links</h3>
            <ul className="space-y-2">
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-400 hover:text-brand-accent transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-brand-accent transition-colors text-sm">
                  Book Demo Class
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-brand-light">Programs</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white transition-colors">Class 9-10 (All Subjects)</li>
              <li className="hover:text-white transition-colors">Class 11-12 Commerce</li>
              <li className="hover:text-white transition-colors">Mathematics Specialization</li>
              <li className="hover:text-white transition-colors">Board Exam Prep</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-brand-light">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 text-brand-blue" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-blue" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-blue" />
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;