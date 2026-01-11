import React, { useState, useRef, useEffect } from 'react';
import Button from './Button';
import { Send, CheckCircle, ChevronDown, Check } from 'lucide-react';

const GRADE_OPTIONS = [
  { value: '9', label: 'Class 9' },
  { value: '10', label: 'Class 10' },
  { value: '11-science', label: 'Class 11 (Science)' },
  { value: '11-commerce', label: 'Class 11 (Commerce)' },
  { value: '12-science', label: 'Class 12 (Science)' },
  { value: '12-commerce', label: 'Class 12 (Commerce)' },
];

interface EnquiryFormProps {
  title?: string;
  className?: string;
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({ 
  title = "Book a Free Demo Class",
  className = "" 
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    grade: '',
    message: ''
  });

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleGradeSelect = (value: string) => {
    setFormData(prev => ({ ...prev, grade: value }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.grade) {
      // If grade is not selected, open the dropdown to prompt user
      setIsDropdownOpen(true);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', phone: '', grade: '', message: '' });
    }, 1000);
  };

  if (submitted) {
    return (
      <div className={`bg-white p-8 rounded-3xl shadow-xl text-center border-2 border-brand-light ${className}`}>
        <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-2xl font-display font-bold text-gray-800 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-6">We have received your enquiry. Ayesha Ma'am or our team will contact you shortly.</p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>Send Another</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-white p-8 rounded-3xl shadow-xl border border-gray-100 ${className}`}>
      <h3 className="text-2xl font-display font-bold text-gray-800 mb-6">{title}</h3>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-brand-blue focus:bg-white focus:ring-0 transition-colors placeholder-gray-400"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-brand-blue focus:bg-white focus:ring-0 transition-colors placeholder-gray-400"
            placeholder="9876543210"
          />
        </div>

        {/* Custom Dropdown for Grade */}
        <div className="relative" ref={dropdownRef}>
          <label className="block text-sm font-medium text-gray-700 mb-1">Class / Grade</label>
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`w-full px-4 py-3 rounded-xl text-left flex justify-between items-center transition-all duration-200 border-2 ${
              isDropdownOpen 
                ? 'border-brand-blue bg-white ring-4 ring-brand-blue/10' 
                : 'border-transparent bg-gray-50 hover:bg-gray-100'
            }`}
          >
            <span className={`block truncate ${formData.grade ? "text-gray-900 font-medium" : "text-gray-400"}`}>
              {formData.grade 
                ? GRADE_OPTIONS.find(g => g.value === formData.grade)?.label 
                : "Select Grade"}
            </span>
            <ChevronDown 
              size={20} 
              className={`text-gray-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-brand-blue' : ''}`} 
            />
          </button>

          {/* Hidden input for HTML5 validation support if needed, though we handle onSubmit manually */}
          <input 
            type="text" 
            className="sr-only" 
            value={formData.grade} 
            onChange={() => {}} 
            required 
            tabIndex={-1} 
          />

          {/* Dropdown Menu */}
          <div 
            className={`absolute z-50 w-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden origin-top transition-all duration-200 ease-out ${
              isDropdownOpen 
                ? 'opacity-100 scale-100 translate-y-0' 
                : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
            }`}
          >
            <div className="max-h-64 overflow-y-auto py-2 custom-scrollbar">
              {GRADE_OPTIONS.map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleGradeSelect(option.value)}
                  className={`px-4 py-3 cursor-pointer transition-colors flex items-center justify-between group ${
                    formData.grade === option.value 
                      ? 'bg-brand-light text-brand-blue font-medium' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span>{option.label}</span>
                  {formData.grade === option.value && (
                    <Check size={18} className="text-brand-blue" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-brand-blue focus:bg-white focus:ring-0 transition-colors placeholder-gray-400 resize-none"
            placeholder="Any specific subjects or questions?"
          ></textarea>
        </div>

        <Button type="submit" fullWidth className="mt-2 group">
          <span>Submit Enquiry</span>
          <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </form>
  );
};

export default EnquiryForm;