import React from 'react';

export interface Program {
  id: string;
  title: string;
  grade: string;
  subjects: string[];
  description: string;
  // Fix: Explicitly import React to use React.ReactNode as a type
  icon: React.ReactNode;
  color: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
}

export interface Achievement {
  id: string;
  count: string;
  label: string;
}

export interface NavigationItem {
  name: string;
  path: string;
}