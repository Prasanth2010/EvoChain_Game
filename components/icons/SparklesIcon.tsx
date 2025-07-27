import React from 'react';

export const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-1.09-2.524l-2.846-.813L5.25 9l2.846.813a4.5 4.5 0 002.524 1.09l.813 2.846zm4.374 0L15 18.75l.813-2.846a4.5 4.5 0 001.09-2.524l2.846-.813L18.75 9l-2.846.813a4.5 4.5 0 00-2.524 1.09l-.813 2.846zM12 2.25l1.09 2.22 2.45.36-1.78 1.73.42 2.44L12 7.75l-2.18 1.15.42-2.44-1.78-1.73 2.45-.36L12 2.25z" />
  </svg>
);