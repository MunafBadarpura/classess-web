import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import EnquiryForm from './EnquiryForm';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-lg transform transition-all scale-100">
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 md:-right-8 text-white/90 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
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