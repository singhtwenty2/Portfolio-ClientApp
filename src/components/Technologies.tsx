import { memo } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/types/api/projectDetail';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Technologies = memo(({ project }: { project: Project }) => {
  if (!project.project_technologies || project.project_technologies.length === 0) {
    return null;
  }

  return (
    <motion.div
      variants={itemVariants}
      className="space-y-4 sm:space-y-6"
    >
      <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">
        Technologies
      </h3>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {project.project_technologies.map(({ technologies }) => (
          <div
            key={technologies.tech_id}
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-zinc-900/30 border border-zinc-800/30 text-zinc-300 font-medium hover:bg-zinc-800/40 hover:border-zinc-700/50 transition-all duration-300 cursor-default backdrop-blur-sm tracking-wide text-sm sm:text-base"
          >
            {technologies.name}
          </div>
        ))}
      </div>
    </motion.div>
  );
});

Technologies.displayName = 'Technologies';
export default Technologies;