'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, LucideIcon } from 'lucide-react';
import { experiences } from '@/data/experience';

const ANIMATION_DURATION = 0.7;
const ANIMATION_EASE = "easeInOut";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
  icon: LucideIcon;
}

const ExperienceCard = ({ 
  experience, 
  index, 
  isExpanded, 
  onToggle 
}: { 
  experience: Experience;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  const Icon = experience.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      className={`group relative backdrop-blur-xl bg-zinc-950/30 rounded-2xl border border-zinc-800/50
        hover:border-zinc-600/50 transition-all duration-700 cursor-pointer
        ${isExpanded ? 'p-8' : 'p-6'}`}
      onClick={onToggle}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-700" />
      <div className="relative">
        <div className="flex items-center gap-4">
          <motion.div
            className="p-2.5 bg-zinc-900/80 rounded-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Icon className="w-5 h-5 text-zinc-400" />
          </motion.div>
          <div className="flex-1">
            <h2 className="text-lg tracking-wide font-light text-white">{experience.title}</h2>
            <p className="text-zinc-500 text-sm tracking-wide font-light">{experience.company}</p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-zinc-500" />
          </motion.div>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-6 space-y-6">
                <p className="text-zinc-500 text-sm tracking-wide font-light">{experience.period}</p>
                <ul className="space-y-3">
                  {experience.description.map((desc, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
                      className="flex items-start gap-3 text-zinc-400"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-700 shrink-0" />
                      <span className="leading-relaxed tracking-wide font-light">{desc}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
                      className="px-3 py-1 bg-zinc-900/80 text-zinc-400 rounded-full text-sm tracking-wider font-light hover:bg-zinc-800/80 transition-colors duration-700"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const OrbitalTimeline = ({ 
  data, 
  activeId, 
  setActiveId 
}: { 
  data: Experience[];
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}) => {
  const [orbitSize, setOrbitSize] = useState({ width: 0, height: 0 });
  const [screenSize, setScreenSize] = useState('large'); // 'small', 'medium', 'large'

  useEffect(() => {
    const updateSize = () => {
      const container = document.getElementById('orbit-container');
      if (container) {
        const width = container.offsetWidth;
        const height = container.offsetHeight;
        setOrbitSize({ width, height });

        // Update screen size category
        if (window.innerWidth < 640) {
          setScreenSize('small');
        } else if (window.innerWidth < 1024) {
          setScreenSize('medium');
        } else {
          setScreenSize('large');
        }
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const calculateOrbitDimensions = () => {
    const centerX = orbitSize.width / 2;
    const centerY = orbitSize.height / 2;

    // Adjust radius based on screen size
    let radius;
    switch (screenSize) {
      case 'small':
        radius = Math.min(centerX, centerY) - 60;
        break;
      case 'medium':
        radius = Math.min(centerX, centerY) - 80;
        break;
      default: // large
        radius = Math.min(centerX, centerY) - 120;
    }

    return { centerX, centerY, radius };
  };

  const getNodeSize = () => {
    switch (screenSize) {
      case 'small':
        return 32; // Slightly larger than before for small screens
      case 'medium':
        return 48;
      default:
        return 64; // Much larger for desktop
    }
  };

  const getCoreSize = () => {
    switch (screenSize) {
      case 'small':
        return 'w-16 h-16';
      case 'medium':
        return 'w-20 h-20';
      default:
        return 'w-24 h-24';
    }
  };

  const { centerX, centerY, radius } = calculateOrbitDimensions();
  const nodeSize = getNodeSize();
  const coreSize = getCoreSize();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: ANIMATION_DURATION, ease: ANIMATION_EASE }}
      className="h-full backdrop-blur-xl bg-zinc-950/30 rounded-2xl p-6 border border-zinc-800/50 relative overflow-hidden"
    >
      <div id="orbit-container" className="w-full h-full relative">
        {/* Central Core */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          <div className={`${coreSize} rounded-full bg-gradient-to-r from-zinc-800/50 to-zinc-700/50 backdrop-blur-xl border border-zinc-600/30 flex items-center justify-center`}>
            <div className="w-3/4 h-3/4 rounded-full bg-zinc-900/80 flex items-center justify-center">
              <div className="w-1/2 h-1/2 rounded-full bg-zinc-700" />
            </div>
          </div>
        </motion.div>

        {/* Orbital Paths */}
        <svg className="absolute inset-0 w-full h-full">
          <motion.circle
            cx={centerX}
            cy={centerY}
            r={radius}
            fill="none"
            stroke="url(#orbital-gradient)"
            strokeWidth={screenSize === 'large' ? 2 : 1}
            strokeDasharray="4 4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: ANIMATION_DURATION }}
          />
          <defs>
            <linearGradient id="orbital-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#27272a" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#52525b" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#27272a" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>

        {/* Experience Nodes */}
        {data.map((exp, index) => {
          const angle = (index * (360 / data.length) * Math.PI) / 180;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);

          return (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: ANIMATION_DURATION,
                delay: index * 0.2,
                ease: ANIMATION_EASE
              }}
              className="absolute"
              style={{
                left: x - (nodeSize / 2),
                top: y - (nodeSize / 2),
                width: nodeSize,
                height: nodeSize
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                animate={{
                  boxShadow: activeId === exp.title
                    ? '0 0 20px rgba(161, 161, 170, 0.3)'
                    : '0 0 0 rgba(161, 161, 170, 0)'
                }}
                transition={{ duration: ANIMATION_DURATION }}
                className={`w-full h-full rounded-full backdrop-blur-xl cursor-pointer
                  ${activeId === exp.title
                    ? 'bg-zinc-800/40 border-zinc-600/50'
                    : 'bg-zinc-900/30 border-zinc-800/30'
                  } border transition-all duration-500`}
                onClick={() => setActiveId(activeId === exp.title ? null : exp.title)}
              >
                <div className="w-full h-full flex flex-col items-center justify-center p-2">
                  <motion.div
                    className={`${screenSize === 'small' ? 'p-1.5' : 'p-2.5'} bg-zinc-900/80 rounded-xl`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {exp.icon && (
                      <exp.icon
                        className={`${screenSize === 'small'
                            ? 'w-3 h-3'
                            : screenSize === 'medium'
                              ? 'w-4 h-4'
                              : 'w-5 h-5'
                          } text-zinc-400`}
                      />
                    )}
                  </motion.div>
                  {screenSize !== 'small' && (
                    <p className="text-zinc-400 text-xs mt-1 line-clamp-1">
                      {exp.title}
                    </p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          );
        })}

        {/* Active Experience Details */}
        <AnimatePresence>
          {activeId && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: ANIMATION_DURATION, ease: ANIMATION_EASE }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 text-center"
            >
              {data.map(exp => exp.title === activeId && (
                <div key={exp.title} className="space-y-2">
                  <p className="text-zinc-300 font-light">{exp.company}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {exp.technologies.slice(0, 3).map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-zinc-900/80 text-zinc-500 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeOrbitalId, setActiveOrbitalId] = useState(null);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATION_DURATION, ease: ANIMATION_EASE }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl tracking-wider font-light mb-4 text-white">
            EXPERIENCE
          </h1>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="h-[600px] md:h-[700px] lg:h-[800px]">
            <OrbitalTimeline
              data={experiences}
              activeId={activeOrbitalId}
              setActiveId={setActiveOrbitalId as (id: string | null) => void}
            />
          </div>
          <div className="space-y-4">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.title}
                experience={experience}
                index={index}
                isExpanded={expandedId === experience.title}
                onToggle={() => setExpandedId(
                  expandedId === experience.title ? null : experience.title
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}