
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-slate-950 -z-10">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:8rem_8rem] animate-grid-pan [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#f0f0f00e_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f00e_1px,transparent_1px)]"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          <span className="block">EvoChain</span>
          <span className="block text-primary-600 dark:text-primary-400">Evolutionary Gaming Reimagined On-Chain</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 dark:text-slate-300">
          Create, evolve, and compete with autonomous digital life in a decentralized metaverse.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#sandbox"
            className="inline-block px-8 py-3 text-base font-semibold text-white bg-primary-600 rounded-lg shadow-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 focus:ring-offset-white dark:focus:ring-offset-slate-900 transition-transform transform hover:scale-105"
          >
            Try Sandbox
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;