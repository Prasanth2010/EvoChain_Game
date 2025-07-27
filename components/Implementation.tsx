import React from 'react';
import Section from './Section';
import Card from './Card';
import { DnaIcon } from './icons/DnaIcon';
import { ChainIcon } from './icons/ChainIcon';
import { LifeEssenceIcon } from './icons/LifeEssenceIcon';
import { EvolutionOreIcon } from './icons/EvolutionOreIcon';

const Implementation: React.FC = () => {
  const timelineSteps = [
    { name: 'Tick Start', description: 'An on-chain clock triggers a new simulation step for all creatures.' },
    { name: 'Sense & Decide', description: 'Creatures read on-chain state (food, foes, mates) to make decisions.' },
    { name: 'Act', description: 'Behaviors (move, eat, mate, defend) are executed as transactions.' },
    { name: 'Evolution', description: 'The fittest survive and reproduce, passing on their genetic code. Natural selection occurs.' }
  ];

  return (
    <Section
      id="implementation"
      title="How It Works: The On-Chain Engine"
      subtitle="EvoChain combines cutting-edge blockchain technology to create truly autonomous life."
      className="bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="space-y-24">
        {/* Genetic Smart Contracts & World */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          <Card
            icon={<DnaIcon className="w-6 h-6" />}
            title="Genetic Smart Contracts"
            description="Traits like movement, aggression, and fertility are encoded as DNA in ERC-721 NFTs. This DNA is readable, mutable, and inherited—driving real genetic evolution on-chain."
          />
          <Card
            icon={<ChainIcon className="w-6 h-6" />}
            title="On-Chain Dynamic World"
            description="The world is a grid-based terrain where resources and hazards spawn dynamically, governed by decentralized oracles like Chainlink VRF, ensuring unpredictable and fair environments."
          />
        </div>

        {/* Autonomous Simulation Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12 text-slate-900 dark:text-white">Autonomous Simulation Cycle</h3>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 w-0.5 h-full bg-primary-200 dark:bg-primary-800 -translate-x-1/2" aria-hidden="true"></div>
            
            {timelineSteps.map((step, index) => (
              <div key={step.name} className="relative pl-12 md:pl-0 md:flex md:items-center mb-12 last:mb-0">
                {/* Circle */}
                <div className="absolute left-6 md:relative md:left-1/2 top-1 md:-top-0 md:translate-x-0 w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-xl z-10 flex-shrink-0 md:transform-none md:-translate-x-1/2">
                  {index + 1}
                </div>
                
                {/* Content Box */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto md:text-left'}`}>
                  <div className="p-4 bg-white dark:bg-slate-800/80 rounded-lg border border-slate-200 dark:border-slate-700/80 shadow-md">
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white">{step.name}</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Game Economy */}
        <div className="max-w-4xl mx-auto">
           <h3 className="text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white">Game Economy</h3>
           <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
               <Card
                    icon={<LifeEssenceIcon className="w-6 h-6" />}
                    title="LifeEssence (LFE)"
                    description="The primary in-game utility token earned through survival and foraging. Used for essential actions like breeding, healing, and basic creature enhancements."
                />
                <Card
                    icon={<EvolutionOreIcon className="w-6 h-6" />}
                    title="EvolutionOre (EVO)"
                    description="A rare resource token required for advanced evolutionary actions, such as gene splicing, cloning, and unlocking special traits in the marketplace."
                />
           </div>
        </div>
      </div>
    </Section>
  );
};

export default Implementation;
