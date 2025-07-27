
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section
      id="about"
      title="The Genesis of On-Chain Life"
      subtitle="Welcome to the dawn of a new era in gaming and artificial intelligence."
      className="bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="max-w-4xl mx-auto text-center text-lg sm:text-xl text-slate-600 dark:text-slate-300 space-y-6">
        <p>
          EvoChain is the world's first fully on-chain evolutionary simulation game. It's not just a game; it's a persistent, self-evolving digital metaverse governed by the principles of natural selection. Here, every creature is a living, learning entity—a unique smart contract with its own genetic code.
        </p>
        <p>
          Players don't just control characters; they become digital geneticists. You will breed, trade, and unleash autonomous lifeforms that adapt and evolve in a world driven by code. We are pioneering a new form of digital ownership where your assets are alive, with traceable lineages and emergent behaviors. Join us in building a decentralized world where you have true agency over a continuously evolving ecosystem.
        </p>
      </div>
    </Section>
  );
};

export default About;
