import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassButtonProps {
    children: ReactNode;
    variant?: 'default' | 'primary';
    className?: string;
    onClick?: () => void;
    targetSection?: string;
}

export const GlassButton = ({ 
    children, 
    variant = "default", 
    className = "", 
    onClick,
    targetSection 
}: GlassButtonProps) => {
    const handleClick = () => {
        if (targetSection) {
            const element = document.getElementById(targetSection);
            if (element) {
                element.scrollIntoView();
            }
        }
        onClick?.();
    };
    
    const baseStyles = "group relative px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm uppercase tracking-[0.2em] font-light inline-flex items-center overflow-hidden transition-all duration-700";
    const variantStyles = {
        default: "bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 text-white hover:bg-zinc-800/50",
        primary: "bg-gradient-to-r from-zinc-100 to-zinc-300 text-zinc-900 border border-white/10 hover:from-white hover:to-zinc-100"
    };
    
    return (
        <motion.button
            onClick={handleClick}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
        >
            <span className="relative z-10 flex items-center">
                {children}
            </span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/20 to-zinc-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
        </motion.button>
    );
}; 