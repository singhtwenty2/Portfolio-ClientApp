import { motion } from 'framer-motion';

interface SectionHeadingProps {
    children: React.ReactNode;
}

const SectionHeading = ({ children }: SectionHeadingProps) => (
    <motion.h2
        className="text-2xl font-bold border-b border-zinc-700 pb-2 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
    >
        {children}
    </motion.h2>
);

export default SectionHeading;