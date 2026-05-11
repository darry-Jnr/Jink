import React from 'react';

interface LogoProps {
  variant?: "white" | "black";
}

const Logo = ({ variant = "white" }: LogoProps) => {
  const textColor = variant === "black" ? "text-black" : "text-white";

  return (
    <div className={`text-xl md:text-2xl font-black tracking-tighter select-none transition-colors ${textColor}`}>
      Jink.
    </div>
  );
};

export default Logo;