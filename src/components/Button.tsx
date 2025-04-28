import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = "px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2 text-base md:text-lg";
  const variantStyles = {
    primary: "bg-pink-600 text-white hover:bg-pink-700",
    secondary: "bg-white/10 text-white hover:bg-white/20"
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}