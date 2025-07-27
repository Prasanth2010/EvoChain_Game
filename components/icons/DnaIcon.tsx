import React from 'react';

export const DnaIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 14.5A4.5 4.5 0 0 0 8.5 10" />
    <path d="M20 9.5A4.5 4.5 0 0 0 15.5 14" />
    <path d="M8.5 4A4.5 4.5 0 0 0 4 8.5" />
    <path d="M15.5 20a4.5 4.5 0 0 0 4.5-4.5" />
    <path d="m14 4-2.5 2.5" />
    <path d="m10 8-2.5 2.5" />
    <path d="m10 16 2.5-2.5" />
    <path d="m6 12 2.5 2.5" />
  </svg>
);