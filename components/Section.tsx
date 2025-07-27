
import type { SectionProps } from '../types';
import React from 'react';

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            {subtitle}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
