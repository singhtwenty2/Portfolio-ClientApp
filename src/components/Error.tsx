import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GlassButton } from '@/components/ui/GlassButton';

const FloatingElement = ({ className = "" }) => (
    <div className={`absolute bg-gradient-to-r from-zinc-500/10 to-zinc-300/10 rounded-full blur-3xl mix-blend-overlay ${className}`} />
);

export default function Error() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen w-full flex flex-col justify-center bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.2] mix-blend-overlay" />
                <FloatingElement className="top-[20%] left-[10%] w-[40rem] h-[40rem] opacity-50" />
                <FloatingElement className="bottom-[20%] right-[10%] w-[35rem] h-[35rem] opacity-50" />
            </div>

            <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8 text-center"
                >
                    <div className="space-y-6 backdrop-blur-md rounded-3xl bg-gradient-to-br from-zinc-900/40 to-black/40 border border-zinc-800/20 p-8 sm:p-10">
                        {/* Glitch Effect Number */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <h1 className="text-[8rem] sm:text-[10rem] font-light text-zinc-100 tracking-tighter relative z-10">
                                404
                            </h1>
                            <div className="absolute inset-0 bg-gradient-to-r from-zinc-500/20 to-zinc-300/20 blur-3xl" />
                        </motion.div>

                        {/* Error Message */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="space-y-4"
                        >
                            <h2 className="text-2xl sm:text-3xl font-light text-zinc-100">
                                Page Not Found
                            </h2>
                            <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
                                The page you are looking for does not exist or has been moved. 
                                Please check the URL or navigate back to the homepage.
                            </p>
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 sm:mt-10"
                        >
                            <GlassButton 
                                onClick={() => navigate('/')}
                                variant="primary"
                            >
                                <Home className="w-4 h-4 mr-3" />
                                Back to Home
                            </GlassButton>
                            <GlassButton 
                                onClick={() => navigate(-1)}
                                variant="default"
                            >
                                <ArrowLeft className="w-4 h-4 mr-3" />
                                Go Back
                            </GlassButton>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
} 