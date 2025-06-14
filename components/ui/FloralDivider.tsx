import React from 'react';

const FloralDivider: React.FC = () => (
  <div className="w-full flex justify-center my-8">
    <svg width="200" height="24" viewBox="0 0 200 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 12 Q 50 2, 100 12 Q 150 22, 190 12" stroke="#D1A1D1" strokeWidth="2" fill="none"/>
      <circle cx="100" cy="12" r="4" fill="#F472B6" />
      <ellipse cx="100" cy="12" rx="12" ry="4" fill="#FDE68A" opacity="0.5" />
    </svg>
  </div>
);

export default FloralDivider; 