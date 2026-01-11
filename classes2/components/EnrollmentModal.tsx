import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import EnquiryForm from './EnquiryForm';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsVisible(true);
      // Trigger animation after modal is visible
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      // Hide modal after animation completes
      setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop with fade animation */}
      <div 
        className={`absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity duration-300 ease-out ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* Modal Content with scale and fade animation */}
      <div className={`relative w-full max-w-lg transition-all duration-300 ease-out ${
        isAnimating 
          ? 'transform scale-100 opacity-100 translate-y-0' 
          : 'transform scale-95 opacity-0 translate-y-4'
      }`}>
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 md:-right-8 text-white/90 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
          aria-label="Close modal"
        >
          <X size={32} />
        </button>
        <EnquiryForm title="Enroll Now" />
      </div>
    </div>
  );
};

export default EnrollmentModal;