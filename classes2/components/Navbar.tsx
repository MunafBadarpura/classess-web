import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { BRAND_NAME, NAVIGATION } from '../constants';
import EnrollmentModal from './EnrollmentModal';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state for background change
      setScrolled(currentScrollY > 20);
      
      // Hide/show navbar based on scroll direction
      if (currentScrollY < 10) {
        // Always show navbar at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px - hide navbar
        setIsVisible(false);
        setIsOpen(false); // Close mobile menu when hiding
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleEnrollClick = () => {
    setIsEnrollModalOpen(true);
    setIsOpen(false); // Close mobile menu if open
  };

  const handleLogoClick = () => {
    navigate('/');
    // Smooth scroll to top
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100); // Small delay to ensure navigation completes
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false); // Close mobile menu if open
    // Smooth scroll to top with animation
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        {/* Main navbar with gradient fade */}
        <div className={`relative transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={handleLogoClick}>
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
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.path)}
                    className={`text-sm font-medium transition-all duration-200 ${
                      location.pathname === item.path 
                        ? 'text-gray-900' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <button 
                  className="bg-brand-purple hover:bg-purple-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-200"
                  onClick={handleEnrollClick}
                >
                  Enquire for free
                </button>
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
          
          {/* Gradient shadow at bottom - only shows when scrolled */}
          <div className={`absolute -bottom-6 left-0 right-0 h-6 bg-gradient-to-b from-black/[0.06] to-transparent pointer-events-none transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}></div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAVIGATION.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`block w-full text-left px-3 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  location.pathname === item.path 
                    ? 'bg-brand-light text-brand-blue' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4">
               <button 
                className="w-full bg-brand-purple hover:bg-purple-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200"
                onClick={handleEnrollClick}
              >
                Enquire for free
              </button>
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