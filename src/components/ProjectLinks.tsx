import { memo } from 'react';
import { motion } from 'framer-motion';
import { Github, Globe, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
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

const ProjectLink = memo(({
  href,
  icon: Icon,
  text,
}: {
  href: string;
  icon: typeof Github;
  text: string;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 text-zinc-300 hover:text-white transition-all duration-300 group p-4 sm:p-5 rounded-xl bg-zinc-900/30 hover:bg-zinc-800/40 border border-zinc-800/30 hover:border-zinc-700/50 backdrop-blur-sm"
  >
    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
    <span className="font-medium tracking-wide text-sm sm:text-base">
      {text}
    </span>
    <ArrowUpRight className="ml-auto w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
  </Link>
));

ProjectLink.displayName = 'ProjectLink';

const ProjectLinks = memo(({ project }: { project: Project }) => {
  if (!project.github_url && !project.live_url) return null;

  return (
    <motion.div
      variants={itemVariants}
      className="space-y-4 sm:space-y-6"
    >
      <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">
        Project Links
      </h3>
      <div className="space-y-3 sm:space-y-4">
        {project.github_url && (
          <ProjectLink
            href={project.github_url}
            icon={Github}
            text="View on GitHub"
          />
        )}
        {project.live_url && (
          <ProjectLink
            href={project.live_url}
            icon={Globe}
            text="Visit Live Site"
          />
        )}
      </div>
    </motion.div>
  );
});

ProjectLinks.displayName = 'ProjectLinks';
export default ProjectLinks;