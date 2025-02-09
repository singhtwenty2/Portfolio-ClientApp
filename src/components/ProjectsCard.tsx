import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Project } from '@/types/api/project';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isCompleted = project.status === 'completed';
  const formattedDate = new Date(project.timeline_start).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
  const endDate = project.timeline_end
    ? new Date(project.timeline_end).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
      })
    : 'Present';

  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <div className="group relative w-full bg-gradient-to-br from-[#141414] to-[#1a1a1a] rounded-2xl overflow-hidden mb-3 border border-white/[0.02] hover:border-white/[0.1] transition-all duration-300">
        <div className="flex flex-col sm:grid sm:grid-cols-[1fr_1.2fr] gap-0">
          <div className="relative h-48 sm:h-[240px] lg:h-[220px] overflow-hidden">
            <div className="w-full h-full">
              <Image
                src={project.cover_image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority={false}
                quality={85}
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          </div>

          <div className="absolute top-4 right-4 z-10">
            <div
              className={`px-3 py-1 rounded-full text-xs tracking-wider backdrop-blur-md shadow-lg ${
                isCompleted
                  ? 'bg-emerald-500/30 text-emerald-200 border border-emerald-500/20'
                  : 'bg-blue-500/30 text-blue-200 border border-blue-500/20'
              }`}
            >
              {isCompleted ? 'Completed' : 'In Progress'}
            </div>
          </div>

          <div className="relative flex flex-col justify-between p-6 sm:p-8">
            <div>
              <h2 className="text-lg sm:text-xl leading-relaxed tracking-wide font-light text-white mb-2">
                {project.title}
              </h2>
              <div className="text-sm text-white/60 line-clamp-2 mb-3">
                {project.short_description}
              </div>
              <div className="text-[10px] text-white/40 tracking-wider uppercase flex items-center gap-2">
                <span className="font-light">{formattedDate}</span>
                <span className="w-1 h-1 rounded-full bg-white/40" />
                <span className="font-light">{endDate}</span>
              </div>
            </div>

            <div className="mt-4 inline-flex items-center gap-2 text-white/80 text-xs tracking-widest uppercase group/link font-light hover:text-white transition-colors duration-300">
              View Project
              <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </Link>
  );
};
