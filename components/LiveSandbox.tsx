
import React from 'react';
import Section from './Section';
import { useGameLogic, Lineage, ExtinctLineage } from '../hooks/useGameLogic';
import { PlayIcon } from './icons/PlayIcon';
import { PauseIcon } from './icons/PauseIcon';
import { ResetIcon } from './icons/ResetIcon';
import { PlusCircleIcon } from './icons/PlusCircleIcon';

const StatCard: React.FC<{ label: string; value: string | number; className?: string }> = ({ label, value, className }) => (
  <div className={`bg-slate-100 dark:bg-slate-800/50 p-3 rounded-lg ${className}`}>
    <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">{label}</div>
    <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">{value}</div>
  </div>
);

const ControlButton: React.FC<{ onClick: () => void; children: React.ReactNode; label: string }> = ({ onClick, children, label }) => (
    <button onClick={onClick} aria-label={label} className="flex-1 flex flex-col items-center justify-center p-3 bg-slate-200 dark:bg-slate-800 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-500/20 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500">
        {children}
        <span className="text-xs mt-1">{label}</span>
    </button>
);

const LiveSandbox: React.FC = () => {
  const {
    critters,
    food,
    tick,
    gameStatus,
    stats,
    togglePlayPause,
    resetGame,
    addFood,
    GRID_SIZE,
    speed,
    setSpeed,
    lineages,
    extinctLineages,
  } = useGameLogic();

  const averageEnergy = critters.length > 0 ? (critters.reduce((acc, c) => acc + c.energy, 0) / critters.length).toFixed(0) : 0;
  
  const dominantLineages = Array.from(lineages.values())
    .sort((a, b) => b.memberCount - a.memberCount)
    .slice(0, 5);

  return (
    <Section
      id="sandbox"
      title="Live Evolution Sandbox"
      subtitle="A playable MVP of the EvoChain world. Witness evolution, track dominant lineages, and watch as entire species rise and fall in this interactive simulation."
      className="bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        
        {/* Simulation Grid */}
        <div className="lg:col-span-2 aspect-square bg-slate-950 rounded-xl overflow-hidden p-2 border border-slate-200 dark:border-slate-800 relative shadow-2xl shadow-primary-500/10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:1rem_1rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] dark:bg-[linear-gradient(to_right,#f0f0f00e_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f00e_1px,transparent_1px)]"></div>
            <div
                className="relative w-full h-full grid"
                style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`, gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`}}
            >
                {food.map((f, i) => (
                    <div
                        key={`food-${i}-${f.x}-${f.y}`}
                        className="w-full h-full flex items-center justify-center"
                        style={{ gridColumn: f.x + 1, gridRow: f.y + 1 }}
                    >
                        <div className="w-1/2 h-1/2 bg-accent-400 rounded-sm shadow-[0_0_8px] shadow-accent-400 animate-pulse" />
                    </div>
                ))}
                {critters.map((c) => (
                    <div
                        key={c.id}
                        className="w-full h-full flex items-center justify-center transition-transform duration-500 ease-linear"
                        style={{ 
                            gridColumn: c.x + 1, 
                            gridRow: c.y + 1,
                            transform: `scale(${(c.energy / 100) * 0.7 + 0.6})`,
                        }}
                    >
                         <div
                            className="w-full h-full rounded-full transition-all"
                            style={{ 
                                backgroundColor: `hsl(${c.color}, 80%, 60%)`,
                                opacity: Math.max(0.2, c.energy / 100),
                                boxShadow: `0 0 12px hsl(${c.color}, 80%, 60%)`,
                            }}
                         />
                    </div>
                ))}
            </div>
        </div>

        {/* Controls & Stats Panel */}
        <div className="flex flex-col gap-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Controls</h3>
                <div className="flex gap-2 mb-4">
                   <ControlButton onClick={togglePlayPause} label={gameStatus === 'running' ? 'Pause' : 'Play'}>
                        {gameStatus === 'running' ? <PauseIcon className="w-6 h-6"/> : <PlayIcon className="w-6 h-6"/>}
                    </ControlButton>
                    <ControlButton onClick={resetGame} label="Reset">
                        <ResetIcon className="w-6 h-6" />
                    </ControlButton>
                     <ControlButton onClick={() => addFood(10)} label="Add Food">
                        <PlusCircleIcon className="w-6 h-6" />
                    </ControlButton>
                </div>
                <div>
                  <label htmlFor="speed-slider" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Simulation Speed</label>
                  <input
                    id="speed-slider"
                    type="range"
                    min="1"
                    max="30"
                    value={speed}
                    onChange={(e) => setSpeed(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                </div>
            </div>
            
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Live Stats</h3>
                <div className="grid grid-cols-2 gap-3">
                    <StatCard label="Tick" value={tick} />
                    <StatCard label="Population" value={critters.length} />
                    <StatCard label="Births" value={stats.births} />
                    <StatCard label="Extinctions" value={stats.deaths} />
                    <StatCard label="Peak Population" value={stats.peakPopulation} />
                    <StatCard label="Avg. Energy" value={`${averageEnergy}%`} />
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Evolution Leaderboard</h3>
                <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Dominant Lineages</h4>
                    <ul className="space-y-2">
                        {dominantLineages.length > 0 ? dominantLineages.map((lineage) => (
                            <li key={lineage.id} className="flex items-center justify-between p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/50">
                                <div className="flex items-center gap-3">
                                    <div className="w-4 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: `hsl(${lineage.originalColor}, 80%, 60%)`, boxShadow: `0 0 8px hsl(${lineage.originalColor}, 80%, 60%)` }}></div>
                                    <span className="font-semibold text-slate-800 dark:text-slate-200">Lineage #{lineage.id}</span>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold text-slate-900 dark:text-white">{lineage.memberCount} members</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400">Gen: {lineage.maxGeneration} / Peak: {lineage.peakPopulation}</div>
                                </div>
                            </li>
                        )) : <li className="text-slate-500 dark:text-slate-400 text-sm p-2">No dominant lineages yet.</li>}
                    </ul>
                </div>
                <div className="mt-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Notable Extinctions</h4>
                    <ul className="space-y-2">
                        {extinctLineages.length > 0 ? extinctLineages.map((lineage) => (
                           <li key={lineage.id} className="flex items-center justify-between p-2 rounded-md opacity-70">
                                <div className="flex items-center gap-3">
                                    <div className="w-4 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: `hsl(${lineage.originalColor}, 70%, 50%)` }}></div>
                                    <span className="font-semibold text-slate-500 dark:text-slate-400 line-through">Lineage #{lineage.id}</span>
                                </div>
                                <div className="text-right text-xs text-slate-500 dark:text-slate-400">
                                    <div>Died at Tick {lineage.diedAtTick}</div>
                                    <div>Peak: {lineage.peakPopulation} / Gen: {lineage.maxGeneration}</div>
                                </div>
                            </li>
                        )) : <li className="text-slate-500 dark:text-slate-400 text-sm p-2">No extinctions yet.</li>}
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default LiveSandbox;