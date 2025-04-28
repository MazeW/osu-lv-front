import React from 'react';

interface StatItemProps {
  icon?: React.ReactNode;
  text?: string;
  value: string;
  suffix: string;
  className?: string;
}

export function StatItem({ 
  icon, 
  text, 
  value, 
  suffix,
  className = ''
}: StatItemProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {icon}
      <span className="font-medium text-sm md:text-base">
        {text && <>{text}{' '}</>}
        <span className="text-green-400">{value}</span>
        {' '}{suffix}
      </span>
    </div>
  );
}