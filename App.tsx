
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Objectives from './components/Objectives';
import Implementation from './components/Implementation';
import Applications from './components/Applications';
import LiveSandbox from './components/LiveSandbox';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
    body.classList.remove(theme === 'dark' ? 'light' : 'dark');
    body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 transition-colors duration-300 font-sans">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Objectives />
        <Implementation />
        <Applications />
        <LiveSandbox />
      </main>
      <Footer />
    </div>
  );
};

export default App;