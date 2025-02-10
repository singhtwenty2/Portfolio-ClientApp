'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/personal';
import { ReactNode } from 'react';

const CustomBadge = ({ children }: { children: ReactNode }) => (
    <div className="inline-flex items-center gap-2 px-5 py-1.5 text-sm text-zinc-300 border border-zinc-800/80 rounded-full backdrop-blur-sm bg-zinc-900/20 hover:border-zinc-700/80 transition-colors duration-300">
        <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        {children}
    </div>
);

const CustomCard = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
    <div className={`group relative ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/50 to-zinc-800/20 rounded-xl blur-sm transition-all duration-300 group-hover:blur-md" />
        <div className="relative bg-zinc-900/20 border border-zinc-800/50 backdrop-blur-sm rounded-xl transition-colors duration-300 group-hover:border-zinc-700/50">
            {children}
        </div>
    </div>
);

const GlassButton = ({ children, targetSection, variant = "default", className = "" }: { children: ReactNode, targetSection: string, variant?: 'default' | 'primary', className?: string }) => {
    const handleClick = () => {
        const element = document.getElementById(targetSection);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    const baseStyles = "group relative px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm uppercase tracking-[0.2em] font-light inline-flex items-center overflow-hidden transition-all duration-700";
    const variantStyles = {
        default: "bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 text-white hover:bg-zinc-800/50",
        primary: "bg-gradient-to-r from-zinc-100 to-zinc-300 text-zinc-900 border border-white/10 hover:from-white hover:to-zinc-100"
    };
    
    return (
        <motion.button
            onClick={handleClick}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
        >
            <span className="relative z-10 flex items-center">
                {children}
            </span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/20 to-zinc-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
        </motion.button>
    );
};

const FloatingElement = ({ className = "" }) => (
    <div className={`absolute bg-gradient-to-r from-zinc-500/5 to-zinc-300/5 rounded-full blur-3xl mix-blend-overlay ${className}`} />
);

const AnimatedDecoration = () => {
    return (
        <div className="relative w-full h-full">
            <motion.div
                animate={{
                    rotate: [0, 180, 0],
                    scale: [1, 1.05, 1]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute inset-0"
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] border border-zinc-700/20 rounded-full transform backdrop-blur-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/10 to-transparent rounded-full" />
                </div>
            </motion.div>

            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.05, 1]
                    }}
                    transition={{
                        duration: 20 + i * 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 1.5
                    }}
                    className="absolute inset-0"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] border border-zinc-700/10 rounded-full" />
                </motion.div>
            ))}

            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                    }}
                    className="absolute w-1 h-1 rounded-full bg-zinc-400/20"
                    style={{
                        left: `${10 + (i * 4)}%`,
                        top: `${20 + (i * 3)}%`
                    }}
                />
            ))}
        </div>
    );
};

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay" />
                <FloatingElement className="top-[5%] left-[5%] w-[45rem] h-[45rem] opacity-50" />
                <FloatingElement className="bottom-[5%] right-[5%] w-[40rem] h-[40rem] opacity-50" />
            </div>

            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                    {/* Content Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7 space-y-8 sm:space-y-10 lg:space-y-12 relative z-10"
                    >
                        <div className="space-y-6 sm:space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="space-y-6 sm:space-y-8"
                            >
                                
                                <div className="space-y-4">
                                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-zinc-100 leading-[1.1]">
                                        {personalInfo.name}
                                    </h1>
                                    
                                    <p className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent max-w-3xl leading-tight">
                                        {personalInfo.title}
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <CustomCard>
                                    <div className="p-6 sm:p-8">
                                        <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed tracking-wide">
                                            {personalInfo.bio}
                                        </p>
                                    </div>
                                </CustomCard>
                            </motion.div>
                            
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="flex flex-wrap gap-4 sm:gap-6 pt-2 sm:pt-4"
                            >
                                <GlassButton 
                                    targetSection="contact"
                                    variant="primary"
                                >
                                    Get in touch
                                    <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
                                </GlassButton>
                                <GlassButton 
                                    targetSection="projects"
                                    variant="default"
                                >
                                    View Projects
                                </GlassButton>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Visual Section */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 relative hidden lg:block"
                    >
                        <div className="aspect-square max-h-[700px]">
                            <AnimatedDecoration />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}