import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { BRAND_NAME, NAVIGATION } from '../constants';
import Button from './Button';
import EnrollmentModal from './EnrollmentModal';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleEnrollClick = () => {
    setIsEnrollModalOpen(true);
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigate('/')}>
              <div className="bg-brand-blue p-2 rounded-xl text-white mr-2">
                <GraduationCap size={24} />
              </div>
              <span className="font-display font-bold text-2xl text-gray-800 tracking-tight">
                {BRAND_NAME}
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {NAVIGATION.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-base font-medium transition-colors duration-200 ${
                      isActive ? 'text-brand-blue' : 'text-gray-600 hover:text-brand-blue'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <Button 
                variant="primary" 
                className="px-6 py-2 text-sm"
                onClick={handleEnrollClick}
              >
                Enroll Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-brand-blue focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAVIGATION.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-lg text-base font-medium ${
                    isActive ? 'bg-brand-light text-brand-blue' : 'text-gray-600 hover:bg-gray-50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="pt-4">
               <Button 
                variant="primary" 
                fullWidth
                onClick={handleEnrollClick}
              >
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Enrollment Popup */}
      <EnrollmentModal 
        isOpen={isEnrollModalOpen} 
        onClose={() => setIsEnrollModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;