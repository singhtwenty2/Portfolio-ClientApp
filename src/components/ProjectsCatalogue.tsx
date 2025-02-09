'use client';
import { Project } from "@/types/api/project";
import { usePaginatedProjects } from "@/hooks/usePaginatedProjects";
import { ArrowDown, Code2 } from 'lucide-react';
import { ProjectCard } from "./ProjectsCard";
import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface ProjectsCatalogueProps {
  initialProjects: Project[];
}

const ProjectSkeleton = () => (
  <div className="rounded-2xl border border-zinc-800/30 overflow-hidden">
    <div className="animate-pulse">
      <div className="h-64 bg-zinc-800/30"></div>
      <div className="p-8 space-y-4 bg-zinc-900/40 backdrop-blur-lg">
        <div className="h-8 bg-zinc-800/50 rounded-lg w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-zinc-800/50 rounded w-full"></div>
          <div className="h-4 bg-zinc-800/50 rounded w-5/6"></div>
        </div>
        <div className="pt-4 flex gap-3">
          <div className="h-8 w-20 bg-zinc-800/50 rounded-lg"></div>
          <div className="h-8 w-20 bg-zinc-800/50 rounded-lg"></div>
        </div>
      </div>
    </div>
  </div>
);

export default function ProjectsCatalogue({ initialProjects }: ProjectsCatalogueProps) {
  const { projects, isLoading, error, hasMore, loadMoreProjects } = usePaginatedProjects(initialProjects);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  if (error) {
    return (
      <div className="text-center text-red-500">
        Error loading projects: {error.message}
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">
      {/* Improved background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-soft-light" />
        <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-full blur-[120px] translate-y-1/2" />
      </div>

      {/* Header Section */}
      <div className="relative pt-40 pb-32 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-zinc-700/30 flex items-center justify-center backdrop-blur-sm">
              <Code2 className="w-10 h-10 text-zinc-300" />
            </div>
          </motion.div>
          <motion.h1
            className="text-6xl font-light text-zinc-100 tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Project Catalogue
          </motion.h1>
          <motion.p
            className="text-zinc-400 max-w-2xl mx-auto text-lg font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Explore my complete collection of projects and technical contributions,
            showcasing a diverse range of skills and innovations.
          </motion.p>
        </div>
      </div>

      {/* Projects Grid Section */}
      <div className="relative px-4 pb-40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            {isLoading && !projects.length ? (
              Array.from({ length: 6 }).map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectSkeleton />
                </motion.div>
              ))
            ) : (
              projects.map((project, index) => (
                <motion.div
                  key={project.project_id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))
            )}
          </motion.div>
          
          {hasMore && (
            <motion.div
              className="mt-24 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button
                onClick={loadMoreProjects}
                disabled={isLoading}
                className="group relative inline-flex items-center gap-3 px-8 py-4 
                         bg-gradient-to-br from-zinc-800/50 to-zinc-900/50
                         hover:from-zinc-800/70 hover:to-zinc-900/70
                         border border-zinc-700/30 hover:border-zinc-700/50
                         rounded-2xl backdrop-blur-sm
                         text-zinc-200 hover:text-white
                         text-base
                         transition-all duration-300 ease-out
                         shadow-lg shadow-black/20
                         focus:outline-none focus:ring-2 focus:ring-zinc-500/30 focus:ring-offset-2 focus:ring-offset-black
                         disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="font-light tracking-wide">
                  {isLoading ? 'Loading More Projects...' : 'Load More Projects'}
                </span>
                <ArrowDown 
                  size={18} 
                  className={`transition-transform duration-300 ${
                    isLoading ? 'animate-bounce' : 'group-hover:translate-y-1'
                  }`} 
                />
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}