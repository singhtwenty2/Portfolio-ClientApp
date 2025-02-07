import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, useSpring, useScroll, useTransform } from 'framer-motion';
import { Music } from 'lucide-react';
import { songs as originalSongs } from '@/data/songs';

interface Song {
  name: string;
  artist: string;
  album: string;
  progress: number;
}

const MARQUEE_CONFIG = {
  BASE_VELOCITY: -25,
  MAX_VELOCITY: -50,
  ACCELERATION_RATE: 0.8,
  DECELERATION_RATE: 0.95,
  SPRING_CONFIG: {
    stiffness: 20,
    damping: 30,
    mass: 1.2
  },
  VELOCITY_SPRING: {
    stiffness: 50,
    damping: 50,
    mass: 1
  },
  CARD_HOVER: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

const SongCard = ({ song }: { song: Song }) => (
  <motion.div 
    className="relative min-w-[280px] sm:min-w-[340px] p-4 sm:p-5 group"
    whileHover={MARQUEE_CONFIG.CARD_HOVER}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40 rounded-2xl backdrop-blur-xl" />
    <div className="absolute inset-0 border border-white/10 rounded-2xl" />
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    
    <div className="relative flex items-center gap-4 sm:gap-5">
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-black/60 to-black/40 p-0.5 group-hover:shadow-lg group-hover:shadow-white/10 transition-all duration-700">
        <div className="w-full h-full rounded-xl bg-gradient-to-br from-white/15 to-white/10 flex items-center justify-center backdrop-blur-xl border border-white/10">
          <Music className="w-5 h-5 sm:w-6 sm:h-6 text-white/90 group-hover:text-white transition-colors duration-700" />
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="font-light text-white text-sm sm:text-base tracking-wide group-hover:text-white transition-colors duration-700 truncate">
          {song.name}
        </h4>
        <p className="text-white/70 text-xs sm:text-sm mt-1 tracking-wide group-hover:text-white/90 transition-colors duration-700 truncate">
          {song.artist}
        </p>
        <div className="relative mt-2.5 h-0.5 bg-white/10 rounded-full overflow-hidden group-hover:bg-white/20 transition-all duration-700">
          <motion.div 
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-white/70 to-white/60 group-hover:from-white group-hover:to-white/90 rounded-full transition-all duration-700"
            style={{ width: `${song.progress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>
        </div>
      </div>

      <motion.button
        className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-white/15 to-white/5 hover:from-white/20 hover:to-white/10 backdrop-blur-xl border border-white/10 transition-all duration-700 group/play"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative w-2.5 h-3.5 sm:w-3 sm:h-4">
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gradient-to-r from-white/90 to-white rounded-sm transform origin-center scale-x-[0.8] group-hover/play:scale-100 transition-all duration-500" 
                 style={{ clipPath: 'polygon(0 0, 0 100%, 100% 50%)' }} />
          </div>
        </div>
      </motion.button>
    </div>
  </motion.div>
);

const MarqueeTrack = ({ songs }: { songs: Song[] }) => {
  const [hover, setHover] = useState(false);
  const [isAccelerating, setIsAccelerating] = useState(true);
  
  const baseVelocity = MARQUEE_CONFIG.BASE_VELOCITY;
  const maxVelocity = MARQUEE_CONFIG.MAX_VELOCITY;
  
  const x = useSpring(0, MARQUEE_CONFIG.SPRING_CONFIG);
  const velocity = useSpring(baseVelocity, MARQUEE_CONFIG.VELOCITY_SPRING);

  const calculateTotalWidth = useCallback(() => {
    const itemWidth = window.innerWidth < 640 ? 260 : 300;
    const gap = window.innerWidth < 640 ? 16 : 24;
    return (itemWidth + gap) * songs.length;
  }, [songs.length]);

  useEffect(() => {
    if (hover) {
      velocity.set(0);
      setIsAccelerating(false);
    } else {
      setIsAccelerating(true);
    }
  }, [hover, velocity]);

  useEffect(() => {
    let animationFrame: number;
    let currentVelocity = baseVelocity;
    const totalWidth = calculateTotalWidth();
    
    const updateMarquee = () => {
      const currentX = x.get();
      
      if (currentX <= -totalWidth) {
        x.set(0);
      }
      
      if (isAccelerating && currentVelocity > maxVelocity) {
        currentVelocity -= MARQUEE_CONFIG.ACCELERATION_RATE;
        velocity.set(currentVelocity);
      } else if (!isAccelerating && currentVelocity < 0) {
        currentVelocity *= MARQUEE_CONFIG.DECELERATION_RATE;
        velocity.set(currentVelocity);
      }

      x.set(x.get() + velocity.get());
      animationFrame = requestAnimationFrame(updateMarquee);
    };

    animationFrame = requestAnimationFrame(updateMarquee);
    return () => cancelAnimationFrame(animationFrame);
  }, [isAccelerating, x, velocity, baseVelocity, maxVelocity, calculateTotalWidth]);

  const contentArray = [...songs, ...songs, ...songs];

  return (
    <div 
      className="overflow-hidden py-2 relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        style={{ x }}
        className="flex gap-4 sm:gap-6 will-change-transform"
      >
        {contentArray.map((song, index) => (
          <SongCard key={`song-${index}`} song={song} />
        ))}
      </motion.div>
    </div>
  );
};

// Efficient Fisher-Yates shuffle function
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const SongMarquee = () => {
  // Use useMemo to shuffle songs only once on component mount
  const shuffledSongs = useMemo(() => shuffleArray(originalSongs), []);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.7, 0.8], [1, 0]);

  return (
    <motion.div 
      style={{ opacity }}
      className="w-full bg-black/95 backdrop-blur-xl pt-6 pb-4 sm:pt-8 sm:pb-6 overflow-hidden relative"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.2] mix-blend-overlay" />
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black via-black/95 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black via-black/95 to-transparent z-10" />
      </div>

      <motion.h2 
        className="text-2xl sm:text-3xl font-light text-center mb-4 sm:mb-6 tracking-wider text-white relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        SOUND SELECTIONS
      </motion.h2>
      
      <div className="relative z-10">
        <MarqueeTrack songs={shuffledSongs} />
      </div>
    </motion.div>
  );
};

export default SongMarquee;