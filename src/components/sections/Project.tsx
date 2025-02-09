'use client';
import { Project } from "@/types/api/project";
import { ProjectCard } from "../ProjectsCard";
import { useProjects } from "@/hooks/useProjects";
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

interface ProjectsProps {
  initialProjects: Project[];
}

export default function Projects({ initialProjects }: ProjectsProps) {
  const { projects, isLoading, error } = useProjects(initialProjects);
  const router = useRouter();

  if (error) {
    return (
      <div className="text-center text-red-500">
        Error loading projects: {error.message}
      </div>
    );
  }
  
  if (isLoading) {
    return (
      <div className="text-center text-white">Loading projects...</div>
    );
  }

  return (
    <div className="min-h-screen bg-black/40 px-4 sm:px-6 py-12 sm:py-16">
      <div className="max-w-[1000px] mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-wider font-light mb-8 sm:mb-12 text-center text-white">
          Top Projects
        </h1>
        <div className="space-y-6 sm:space-y-3">
          {projects.map((project) => (
            <ProjectCard key={project.project_id} project={project} />
          ))}
        </div>
        
        {/* Premium CTA Button */}
        <div className="mt-12 sm:mt-16 text-center">
          <button
            onClick={() => router.push('/projects')}
            className="group relative inline-flex items-center gap-2 px-8 py-3 
                     bg-black/30 hover:bg-black/50 
                     border border-white/10 hover:border-white/20
                     rounded-lg backdrop-blur-sm
                     text-white/90 hover:text-white
                     text-sm sm:text-base
                     transition-all duration-300 ease-out
                     focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black/40"
          >
            <span className="font-light tracking-wide">Explore Full Catalogue</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}