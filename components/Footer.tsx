
import React from 'react';
import { TwitterIcon } from './icons/TwitterIcon';
import { DiscordIcon } from './icons/DiscordIcon';
import { GithubIcon } from './icons/GithubIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About & Socials */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">EvoChain</h3>
            <p className="text-slate-600 dark:text-slate-400">The first on-chain evolutionary game with genetic smart contracts.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-primary-500 dark:hover:text-primary-400"><span className="sr-only">Twitter</span><TwitterIcon className="w-6 h-6" /></a>
              <a href="#" className="text-slate-500 hover:text-primary-500 dark:hover:text-primary-400"><span className="sr-only">Discord</span><DiscordIcon className="w-6 h-6" /></a>
              <a href="https://github.com/Prasanth2010" className="text-slate-500 hover:text-primary-500 dark:hover:text-primary-400"><span className="sr-only">GitHub</span><GithubIcon className="w-6 h-6" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400">About</a></li>
              <li><a href="#implementation" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400">Docs</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400">Partnerships</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Join the Beta</h3>
            <p className="text-slate-600 dark:text-slate-400">Get notified when we launch and receive exclusive updates.</p>
            <form className="flex gap-2">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="flex-auto min-w-0 px-3.5 py-2 text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                placeholder="Enter your email"
              />
              <button type="submit" className="px-4 py-2 text-sm font-semibold text-white bg-primary-600 rounded-md shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>&copy; {new Date().getFullYear()} EvoChain. All rights reserved.</p>
          <p className="mt-1">
            <a href="#" className="hover:underline">Privacy Policy</a> &middot; <a href="#" className="hover:underline">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
