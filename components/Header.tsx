
import React from 'react';
import ThemeToggle from './ThemeToggle';
import { DnaIcon } from './icons/DnaIcon';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#objectives', label: 'Objectives' },
    { href: '#implementation', label: 'How It Works' },
    { href: '#applications', label: 'Applications' },
    { href: '#sandbox', label: 'Sandbox' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center space-x-2 text-xl font-bold text-primary-600 dark:text-primary-400">
            <DnaIcon className="h-6 w-6"/>
            <span>EvoChain</span>
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;