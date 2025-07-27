import React from 'react';

export const TrophyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 01-4.874-1.956l-.445-.333a2.25 2.25 0 01-.861-1.956V5.25a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 5.25v9.289a2.25 2.25 0 01-.861 1.956l-.445.333A9.75 9.75 0 0116.5 18.75z" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M12 15V3.75m0 11.25a2.25 2.25 0 01-2.25-2.25v-1.5a2.25 2.25 0 014.5 0v1.5a2.25 2.25 0 01-2.25 2.25z" />
  </svg>
);
