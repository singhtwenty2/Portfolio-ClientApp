import { memo } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
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

const Timeline = memo(({ project }: { project: Project }) => {
  if (!project.timeline_start || !project.timeline_end) return null;

  return (
    <motion.div
      variants={itemVariants}
      className="space-y-4 sm:space-y-6"
    >
      <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">
        Timeline
      </h3>
      <div className="flex items-center gap-4 text-zinc-300 p-4 sm:p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/30 backdrop-blur-sm">
        <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="font-medium tracking-wide text-sm sm:text-base">
          {new Date(project.timeline_start).toLocaleDateString()} -{' '}
          {new Date(project.timeline_end).toLocaleDateString()}
        </span>
      </div>
    </motion.div>
  );
});

Timeline.displayName = 'Timeline';
export default Timeline;