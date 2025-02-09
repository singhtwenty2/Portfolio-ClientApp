import { memo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
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

const Contributors = memo(({ project }: { project: Project }) => {
  if (!project.project_contributors || project.project_contributors.length === 0) {
    return null;
  }

  return (
    <motion.div
      variants={itemVariants}
      className="space-y-4 sm:space-y-6"
    >
      <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">
        Contributors
      </h3>
      <div className="space-y-3 sm:space-y-4">
        {project.project_contributors.map(({ contributors }) => (
          <div
            key={contributors.contributor_id}
            className="flex items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/30 hover:bg-zinc-800/40 hover:border-zinc-700/50 transition-all duration-300 backdrop-blur-sm"
          >
            {contributors.avatar_url && (
              <Image
                src={contributors.avatar_url}
                alt={contributors.name}
                width={48}
                height={48}
                className="rounded-full ring-2 ring-zinc-700/30 hover:ring-zinc-600/50 transition-all duration-300"
              />
            )}
            <div>
              <p className="text-white font-medium tracking-wide text-sm sm:text-base">
                {contributors.name}
              </p>
              <p className="text-zinc-400 tracking-wide text-sm sm:text-base">
                {contributors.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
});

Contributors.displayName = 'Contributors';
export default Contributors;