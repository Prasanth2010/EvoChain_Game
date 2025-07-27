import { useState, useEffect, useRef, useCallback } from 'react';

const GRID_SIZE = 50;
const INITIAL_CRITTERS = 100;
const INITIAL_FOOD = 150;
const MAX_ENERGY = 100;
const ENERGY_PER_FOOD = 50;
const REPRODUCTION_COST = 25;
const REPRODUCTION_THRESHOLD = 80;
const ENERGY_DECAY = 0.2;
const SENSE_RADIUS = 5;

interface Position {
  x: number;
  y: number;
}

interface Critter extends Position {
  id: number;
  energy: number;
  color: number; // Hue value
  target: Position | null;
  lineageId: number;
  parentId: number | null;
  generation: number;
}

export interface Lineage {
  id: number;
  originalColor: number;
  memberCount: number;
  peakPopulation: number;
  maxGeneration: number;
}

export interface ExtinctLineage extends Omit<Lineage, 'memberCount'> {
  diedAtTick: number;
}

type GameStatus = 'running' | 'paused' | 'stopped';

let nextId = 0;

const createCritter = (
  pos: Position,
  energy: number,
  color: number,
  lineageId: number,
  parentId: number | null,
  generation: number
): Critter => ({
  id: nextId++,
  ...pos,
  energy,
  color,
  target: null,
  lineageId,
  parentId,
  generation,
});

const getRandomPosition = (): Position => ({
  x: Math.floor(Math.random() * GRID_SIZE),
  y: Math.floor(Math.random() * GRID_SIZE),
});

export const useGameLogic = () => {
  const [critters, setCritters] = useState<Critter[]>([]);
  const [food, setFood] = useState<Position[]>([]);
  const [tick, setTick] = useState(0);
  const [gameStatus, setGameStatus] = useState<GameStatus>('stopped');
  const [stats, setStats] = useState({ births: 0, deaths: 0, peakPopulation: 0 });
  const [speed, setSpeed] = useState(5); // Updates per second
  const [lineages, setLineages] = useState<Map<number, Lineage>>(new Map());
  const [extinctLineages, setExtinctLineages] = useState<ExtinctLineage[]>([]);

  const gameLoopRef = useRef<number | null>(null);
  const lastUpdateTimeRef = useRef<number>(0);

  const resetGame = useCallback(() => {
    setGameStatus('paused');
    nextId = 0;
    
    const initialCritters: Critter[] = [];
    const newLinages = new Map<number, Lineage>();
    for (let i = 0; i < INITIAL_CRITTERS; i++) {
        const color = Math.random() * 360;
        const critterId = nextId; // This will be the ID assigned in createCritter
        const critter = createCritter(getRandomPosition(), MAX_ENERGY / 2, color, critterId, null, 1);
        initialCritters.push(critter);
        newLinages.set(critter.id, {
            id: critter.id,
            originalColor: color,
            memberCount: 1,
            peakPopulation: 1,
            maxGeneration: 1
        });
    }

    const initialFood = Array.from({ length: INITIAL_FOOD }, getRandomPosition);
    setCritters(initialCritters);
    setFood(initialFood);
    setTick(0);
    setStats({ births: 0, deaths: 0, peakPopulation: initialCritters.length });
    setLineages(newLinages);
    setExtinctLineages([]);
  }, []);

  useEffect(() => {
    resetGame();
  }, [resetGame]);

  const addFood = useCallback((count: number) => {
    setFood(f => [...f, ...Array.from({ length: count }, getRandomPosition)]);
  }, []);

  const update = useCallback(() => {
    if (gameStatus !== 'running') return;
    
    setTick(t => t + 1);
    let newBirths = 0;
    let newDeaths = 0;

    // Food logic: 5% chance to spawn new food each tick
    if (Math.random() < 0.05) {
        addFood(1);
    }

    setCritters(prevCritters => {
      const newCritters = new Set(prevCritters);
      const foodPositions = new Set(food.map(f => `${f.x},${f.y}`));
      const foodCopy = [...food];
      let crittersToAdd: Critter[] = [];

      newCritters.forEach(critter => {
        let { x, y, energy, color, target } = critter;

        energy -= ENERGY_DECAY;

        if (!target) {
            let closestFood: Position | null = null;
            let minDistance = Infinity;
            foodCopy.forEach(f => {
                const distance = Math.sqrt(Math.pow(f.x - x, 2) + Math.pow(f.y - y, 2));
                if (distance < SENSE_RADIUS && distance < minDistance) {
                    minDistance = distance;
                    closestFood = f;
                }
            });
            target = closestFood;
        }

        let dx = 0;
        let dy = 0;
        if (target) {
            dx = Math.sign(target.x - x);
            dy = Math.sign(target.y - y);
            if (x + dx === target.x && y + dy === target.y) {
                target = null;
            }
        } else {
            dx = Math.floor(Math.random() * 3) - 1;
            dy = Math.floor(Math.random() * 3) - 1;
        }

        x = (x + dx + GRID_SIZE) % GRID_SIZE;
        y = (y + dy + GRID_SIZE) % GRID_SIZE;

        const foodKey = `${x},${y}`;
        if (foodPositions.has(foodKey)) {
          energy = Math.min(MAX_ENERGY, energy + ENERGY_PER_FOOD);
          foodPositions.delete(foodKey);
        }

        if (energy > REPRODUCTION_THRESHOLD) {
          energy -= REPRODUCTION_COST;
          const newColor = (color + (Math.random() - 0.5) * 20 + 360) % 360;
          crittersToAdd.push(createCritter({ x, y }, REPRODUCTION_COST, newColor, critter.lineageId, critter.id, critter.generation + 1));
          newBirths++;
        }
        
        critter.x = x;
        critter.y = y;
        critter.energy = energy;
        critter.target = target;

        if (energy <= 0) {
          newDeaths++;
          newCritters.delete(critter);
        }
      });
      
      const updatedFood = foodCopy.filter(f => foodPositions.has(`${f.x},${f.y}`));
      setFood(updatedFood);
      
      const finalCritters = [...Array.from(newCritters), ...crittersToAdd];
      
      setStats(s => ({
          births: s.births + newBirths,
          deaths: s.deaths + newDeaths,
          peakPopulation: Math.max(s.peakPopulation, finalCritters.length)
      }));

      return finalCritters;
    });
  }, [gameStatus, food, addFood]);
  
  useEffect(() => {
    if (gameStatus !== 'running' || tick === 0) return;

    const prevLineages = lineages;
    const newLineageStats = new Map<number, Lineage>();

    critters.forEach(c => {
        const { lineageId, generation } = c;
        const current = newLineageStats.get(lineageId) || {
            id: lineageId,
            originalColor: prevLineages.get(lineageId)?.originalColor || c.color,
            memberCount: 0,
            peakPopulation: prevLineages.get(lineageId)?.peakPopulation || 0,
            maxGeneration: prevLineages.get(lineageId)?.maxGeneration || 0,
        };

        current.memberCount++;
        current.maxGeneration = Math.max(current.maxGeneration, generation);
        // Peak population for a lineage is calculated within the same object
        current.peakPopulation = Math.max(current.peakPopulation, current.memberCount);
        newLineageStats.set(lineageId, current);
    });

    const newExtinctions = [...extinctLineages];
    for (const [id, lineage] of prevLineages.entries()) {
        if (!newLineageStats.has(id) && !newExtinctions.some(ext => ext.id === id)) {
            const extinctLineage: ExtinctLineage = {
                id: lineage.id,
                originalColor: lineage.originalColor,
                peakPopulation: lineage.peakPopulation,
                maxGeneration: lineage.maxGeneration,
                diedAtTick: tick,
            };
            newExtinctions.unshift(extinctLineage);
        }
    }
    
    setLineages(newLineageStats);
    setExtinctLineages(newExtinctions.slice(0, 5)); // Keep last 5
  }, [critters, gameStatus, tick]);

  const gameLoop = useCallback((timestamp: number) => {
    if (gameStatus !== 'running') {
        if(gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current);
        return;
    }

    const interval = 1000 / speed;
    if (timestamp - lastUpdateTimeRef.current > interval) {
        update();
        lastUpdateTimeRef.current = timestamp;
    }

    gameLoopRef.current = requestAnimationFrame(gameLoop);
  }, [gameStatus, speed, update]);

  useEffect(() => {
    if (gameStatus === 'running') {
      lastUpdateTimeRef.current = performance.now();
      gameLoopRef.current = requestAnimationFrame(gameLoop);
    } else {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    }
    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [gameStatus, gameLoop]);

  const togglePlayPause = () => {
    setGameStatus(s => (s === 'running' ? 'paused' : 'running'));
  };
  
  return {
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
  };
};