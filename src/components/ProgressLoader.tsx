'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useSearchParams } from 'next/navigation';

const ProgressLoader = () => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const startLoading = () => {
      setLoading(true);
    };

    const completeLoading = () => {
      timer = setTimeout(() => {
        setLoading(false);
      }, 600);
    };

    startLoading();
    completeLoading();

    return () => {
      clearTimeout(timer);
    };
  }, [pathname, searchParams]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-zinc-950/30 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <motion.div 
            className="relative flex items-center justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Outer metallic ring */}
            <motion.div 
              className="absolute w-24 h-24 rounded-full border-[3px] border-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #27272a, #52525b, #27272a)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                boxShadow: '0 0 20px rgba(255,255,255,0.1), inset 0 0 20px rgba(255,255,255,0.05)'
              }}
              animate={{
                rotate: 360,
                scale: [1, 1.02, 1]
              }}
              transition={{
                rotate: {
                  duration: 3,
                  ease: "linear",
                  repeat: Infinity
                },
                scale: {
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity
                }
              }}
            />

            {/* Middle brushed metal ring */}
            <motion.div 
              className="absolute w-16 h-16 rounded-full"
              style={{
                background: 'linear-gradient(45deg, #18181b, #3f3f46)',
                boxShadow: '0 0 15px rgba(255,255,255,0.05)',
                border: '2px solid rgba(255,255,255,0.1)'
              }}
              animate={{
                rotate: -360,
                borderColor: ['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.2)', 'rgba(255,255,255,0.1)']
              }}
              transition={{
                rotate: {
                  duration: 4,
                  ease: "linear",
                  repeat: Infinity
                },
                borderColor: {
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: Infinity
                }
              }}
            />

            {/* Core metal piece */}
            <motion.div 
              className="w-10 h-10 rounded-full bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-900"
              style={{
                boxShadow: '0 0 25px rgba(255,255,255,0.1)'
              }}
              animate={{
                scale: [1, 1.1, 1],
                background: [
                  'linear-gradient(45deg, #18181b, #27272a)',
                  'linear-gradient(225deg, #27272a, #3f3f46)',
                  'linear-gradient(45deg, #18181b, #27272a)'
                ]
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity
              }}
            />

            {/* Spark effects */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 bg-white rounded-full"
                style={{
                  filter: 'blur(0.5px)'
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: [0, (Math.random() - 0.5) * 30],
                  y: [0, (Math.random() - 0.5) * 30]
                }}
                transition={{
                  duration: 0.6 + Math.random() * 0.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeOut"
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProgressLoader;