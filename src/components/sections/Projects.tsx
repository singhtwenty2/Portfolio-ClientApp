import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { Project } from '@/types/landing';

interface SectionHeadingProps {
  children: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => (
  <div className="relative mb-8 md:mb-16">
    <h2 className="text-4xl md:text-5xl tracking-wider font-light text-white text-center">
      {children}
    </h2>
    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-12 h-0.5 bg-gradient-to-r from-white/5 via-white/20 to-white/5" />
  </div>
);

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isLive = project.status === 'Completed' && project.liveUrl;
  
  return (
    <div
      className="group relative w-full bg-gradient-to-br from-[#141414] to-[#1a1a1a] rounded-2xl overflow-hidden mb-3 border border-white/[0.02] hover:border-white/[0.1] transition-all duration-300"
    >
      <div className="flex flex-col sm:grid sm:grid-cols-[1fr_1.2fr] gap-0">
        {/* Image Container */}
        <div className="relative h-48 sm:h-[240px] lg:h-[220px] overflow-hidden">
          <div className="w-full h-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              priority={false}
              quality={85}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0cHBwcHx0cHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBz/2wBDARUXFw4NDREODhEcGBQYHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4 z-10">
          <div className={`px-3 py-1 rounded-full text-xs tracking-wider backdrop-blur-md shadow-lg ${
            isLive 
              ? 'bg-emerald-500/30 text-emerald-200 border border-emerald-500/20' 
              : 'bg-blue-500/30 text-blue-200 border border-blue-500/20'
          }`}>
            {project.status}
          </div>
        </div>

        {/* Content Container */}
        <div className="relative flex flex-col justify-between p-6 sm:p-8">
          <div>
            <h2 className="text-lg sm:text-xl leading-relaxed tracking-wide font-light text-white mb-2">
              {project.title}
            </h2>
            
            {/* Mobile Technologies List */}
            <div className="block sm:hidden mb-3">
              <div className="text-[10px] text-white/40 tracking-wider uppercase font-light">
                {project.technologies.slice(0, 3).join(' • ')}
              </div>
            </div>

            <div className="text-[10px] text-white/40 tracking-wider uppercase flex items-center gap-2 flex-wrap">
              <span className="font-light">{project.role}</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span className="font-light">{project.timeline}</span>
            </div>
            
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 text-xs tracking-widest uppercase mt-4 group/link font-light hover:text-white transition-colors duration-300"
              >
                {isLive ? 'View Live Project' : 'Visit Website'}
                <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                <div className="h-px w-0 bg-white/40 mt-1 transition-all duration-300 group-hover/link:w-full absolute bottom-0 left-0" />
              </a>
            )}
          </div>

          {/* Links Container */}
          <div className="flex items-center gap-4 mt-6 sm:mt-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Desktop Technologies List */}
        <div className="hidden sm:block absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] tracking-widest text-white/40 uppercase whitespace-nowrap font-light">
          {project.technologies.slice(0, 3).join(' • ')}
        </div>
      </div>

      {/* Premium Hover Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-black px-4 sm:px-6 py-12 sm:py-16">
      <div className="max-w-[1000px] mx-auto">
        <SectionHeading>PROJECTS</SectionHeading>
        <div className="space-y-6 sm:space-y-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;