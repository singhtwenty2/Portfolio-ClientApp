'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, id, className = '' }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [50, 0],
    { clamp: true }
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`relative min-h-screen w-full ${className}`}
    >
      <motion.div
        style={{
          y: isInView ? y : 0,
          willChange: 'transform',
          contain: 'paint'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{
          opacity: { duration: 0.5 },
          y: { type: "spring", stiffness: 50, damping: 20 }
        }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;