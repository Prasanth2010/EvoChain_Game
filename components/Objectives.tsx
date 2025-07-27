
import React from 'react';
import Section from './Section';
import Card from './Card';
import { SparklesIcon } from './icons/SparklesIcon';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';
import { BrainCircuitIcon } from './icons/BrainCircuitIcon';

const objectivesData = [
  {
    icon: <SparklesIcon className="w-6 h-6" />,
    title: 'Self-Evolving Metaverse',
    description: 'A persistent, ever-changing world controlled by smart contracts, where the environment and its inhabitants co-evolve without central control.'
  },
  {
    icon: <ShieldCheckIcon className="w-6 h-6" />,
    title: 'True Digital Ownership',
    description: 'Breed, own, and trade genuinely unique creatures as living NFTs. Your assets learn, adapt, and pass down their genetic legacy on the blockchain.'
  },
  {
    icon: <BrainCircuitIcon className="w-6 h-6" />,
    title: 'Simulated Ecology & Strategy',
    description: 'Engage in a deep strategic experience blending biology, survival tactics, and resource management in a completely blockchain-native game world.'
  }
];

const Objectives: React.FC = () => {
  return (
    <Section
      id="objectives"
      title="Core Objectives"
      subtitle="Our vision is built on three foundational pillars that redefine interactive entertainment."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {objectivesData.map((objective, index) => (
          <Card key={index} {...objective} />
        ))}
      </div>
    </Section>
  );
};

export default Objectives;
