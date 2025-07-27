import React from 'react';
import Section from './Section';
import Card from './Card';
import { FlaskIcon } from './icons/FlaskIcon';
import { BookOpenIcon } from './icons/BookOpenIcon';
import { TrophyIcon } from './icons/TrophyIcon';
import { CubeTransparentIcon } from './icons/CubeTransparentIcon';
import { ChartBarIcon } from './icons/ChartBarIcon';
import { CurrencyDollarIcon } from './icons/CurrencyDollarIcon';

const applicationsData = [
  { 
    icon: <FlaskIcon className="w-6 h-6" />,
    title: "On-Chain AI Labs", 
    description: "Experiment with emergent intelligence, adaptivity, and collective behavior in a decentralized sandbox." 
  },
  { 
    icon: <BookOpenIcon className="w-6 h-6" />,
    title: "Educational Gaming", 
    description: "Teach genetics, ecology, and evolution through a fully interactive and engaging simulation." 
  },
  { 
    icon: <TrophyIcon className="w-6 h-6" />,
    title: "Decentralized Esports", 
    description: "Host 'Battle of the Fittest' tournaments with transparent, on-chain leaderboards and provably fair outcomes." 
  },
  { 
    icon: <CubeTransparentIcon className="w-6 h-6" />,
    title: "Living NFT Collections", 
    description: "Collect, curate, and trade NFTs that evolve, age, and form traceable genetic lineages over time." 
  },
  { 
    icon: <ChartBarIcon className="w-6 h-6" />,
    title: "Research Simulations", 
    description: "Model and test complex optimization strategies for real-world problems in AI, biology, and economics." 
  },
  { 
    icon: <CurrencyDollarIcon className="w-6 h-6" />,
    title: "Gamified DeFi", 
    description: "Integrate decentralized finance mechanics where creature traits can influence yield farming or resource generation." 
  }
];

const Applications: React.FC = () => {
  return (
    <Section
      id="applications"
      title="More Than a Game"
      subtitle="EvoChain's foundational technology unlocks a universe of possibilities."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {applicationsData.map((app, index) => (
          <Card key={index} {...app} />
        ))}
      </div>
    </Section>
  );
};

export default Applications;
