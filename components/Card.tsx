
import type { CardProps } from '../types';
import React from 'react';

const Card: React.FC<CardProps> = ({ icon, title, description, className = '' }) => {
  return (
    <div className={`bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 h-full transition-all duration-300 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-500/50 hover:-translate-y-1 ${className}`}>
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
          <p className="mt-1 text-slate-600 dark:text-slate-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
