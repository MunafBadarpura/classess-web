import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:-translate-y-0.5";
  
  const variants = {
    primary: "bg-brand-blue hover:bg-indigo-700 text-white focus:ring-indigo-500",
    secondary: "bg-brand-accent hover:bg-pink-500 text-white focus:ring-pink-400",
    outline: "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white focus:ring-indigo-500",
    white: "bg-white text-brand-blue hover:bg-gray-50 focus:ring-white",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;