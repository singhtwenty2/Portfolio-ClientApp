import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

interface FloatingButtonProps {
    onClick: () => void;
}

export const FloatingButton = ({ onClick }: FloatingButtonProps) => {
    return (
        <motion.button
            onClick={onClick}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-zinc-100 to-zinc-300 text-zinc-900 shadow-lg backdrop-blur-sm border border-white/10 hover:from-white hover:to-zinc-100 transition-all duration-200"
        >
            <Download className="w-6 h-6" />
        </motion.button>
    );
}; 