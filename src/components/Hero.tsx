import React from 'react';

interface HeroProps {
  children: React.ReactNode;
}

export function Hero({ children }: HeroProps) {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.7)' }}
      >
        <source src="https://r2.maze.lv/public/background-video.webm" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        {children}
      </div>
    </div>
  );
}