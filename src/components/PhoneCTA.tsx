"use client";
import React from 'react';
import { Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/data/site-data';

interface PhoneCTAProps {
  variant?: 'primary' | 'secondary' | 'dark' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showIcon?: boolean;
}

export default function PhoneCTA({
  variant = 'primary',
  size = 'md',
  className = '',
  showIcon = true,
}: PhoneCTAProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-md transition-all duration-300 group";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm gap-2",
    md: "px-5 py-2.5 text-base gap-2.5 shadow-sm hover:shadow-md",
    lg: "px-7 py-3.5 text-lg gap-3 shadow-md hover:shadow-lg hover:-translate-y-0.5"
  };

  const variantStyles = {
    primary: "bg-terracotta-500 hover:bg-terracotta-600 text-white active:scale-95",
    secondary: "bg-white hover:bg-sand-100 text-forest-800 border border-sand-400 active:scale-95",
    dark: "bg-forest-800 hover:bg-forest-700 text-white active:scale-95",
    outline: "border-2 border-terracotta-500 text-terracotta-600 hover:bg-terracotta-500 hover:text-white active:scale-95"
  };

  return (
    <a
      href={`tel:${COMPANY_INFO.phoneRaw}`}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      title={`Call Tidewater SR22 Insurance at ${COMPANY_INFO.phone}`}
    >
      {showIcon && (
        <Phone className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
      )}
      <span>{COMPANY_INFO.phone}</span>
    </a>
  );
}
