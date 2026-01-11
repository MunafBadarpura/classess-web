import React from 'react';
import { 
  BookOpen, 
  Calculator, 
  TrendingUp, 
  Users, 
  Award, 
  Clock, 
  MapPin, 
  Phone, 
  Mail 
} from 'lucide-react';
import { Program, Testimonial, Achievement, NavigationItem } from './types';

export const BRAND_NAME = "MindRise";
export const TUTOR_NAME = "Ayesha Badhara";
export const TAGLINE = "Where young minds rise with purpose";
export const LOCATION = "Mumbai, India";

export const NAVIGATION: NavigationItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Contact', path: '/contact' },
];

export const PROGRAMS: Program[] = [
  {
    id: '1',
    title: 'Secondary Foundation',
    grade: 'Class 9 - 10',
    subjects: ['All Subjects', 'Mathematics Specialization'],
    description: 'Building strong fundamentals for board exams with a focus on concept clarity.',
    // Fix: Added React import to ensure JSX is handled correctly in this configuration
    icon: <BookOpen className="w-6 h-6 text-white" />,
    color: 'bg-blue-500'
  },
  {
    id: '2',
    title: 'Higher Secondary Math',
    grade: 'Class 11 - 12 (Science/Comm)',
    subjects: ['Mathematics'],
    description: 'Advanced problem solving, board-focused preparation and concept-oriented teaching.',
    icon: <Calculator className="w-6 h-6 text-white" />,
    color: 'bg-purple-500'
  },
  {
    id: '3',
    title: 'Commerce Expert',
    grade: 'Class 11 - 12 (Commerce)',
    subjects: ['Accounts', 'Business Studies'],
    description: 'Master the language of business. Practical approach to accounting and business management.',
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    color: 'bg-emerald-500'
  }
];

export const FEATURES = [
  {
    title: "Personal Attention",
    description: "Small batch sizes ensure every student gets the guidance they need.",
    icon: <Users className="w-6 h-6 text-brand-purple" />
  },
  {
    title: "Result Oriented",
    description: "Consistent improvement in scores and strong board exam results.",
    icon: <Award className="w-6 h-6 text-brand-purple" />
  },
  {
    title: "Flexible Learning",
    description: "Offline classes in Mumbai with online options available for convenience.",
    icon: <Clock className="w-6 h-6 text-brand-purple" />
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    text: "MindRise helped my child gain confidence in maths. The fear of numbers is gone!",
    author: "Priya Sharma",
    role: "Parent of Class 10 Student"
  },
  {
    id: '2',
    text: "Concepts are explained very clearly with real examples. Ayesha Ma'am is very patient.",
    author: "Rahul Verma",
    role: "Class 12 Commerce Student"
  },
  {
    id: '3',
    text: "Personal attention makes a big difference. My grades improved significantly in Accounts.",
    author: "Sneha Patel",
    role: "Class 11 Student"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { id: '1', count: '3+', label: 'Years Experience' },
  { id: '2', count: '90%', label: 'Avg. Board Score' },
  { id: '3', count: '100+', label: 'Happy Students' },
  { id: '4', count: '100%', label: 'Concept Clarity' },
];

export const CONTACT_INFO = {
  address: "Jogeshwari West, Mumbai, Maharashtra, India",
  phone: "+91 99877 31407",
  email: "badharaayesha@gmail.com",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15081.049448378938!2d72.83582655!3d19.1328655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6238b753c03%3A0x368536f947963d33!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1625574000000!5m2!1sen!2sin"
};