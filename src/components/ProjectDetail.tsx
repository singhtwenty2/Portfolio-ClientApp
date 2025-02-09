"use client";

import { useProject } from "@/hooks/useProjectDetail";
import { Project } from "@/types/api/projectDetail";
import { motion, LazyMotion, domAnimation, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { useCallback, useMemo, memo } from "react";
import dynamic from 'next/dynamic';

const ProjectLinks = dynamic(() => import('./ProjectLinks'), { ssr: true });
const Timeline = dynamic(() => import('./Timeline'), { ssr: true });
const Technologies = dynamic(() => import('./Technologies'), { ssr: true });
const Contributors = dynamic(() => import('./Contributors'), { ssr: true });

interface ProjectDetailProps {
  initialProject: Project;
  slug: string;
}

// Memoized variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

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

// Memoized background component
const Background = memo(() => (
  <div className="absolute inset-0 w-full h-full pointer-events-none">
    <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-soft-light" />
    <div className="absolute top-0 left-1/4 w-[1200px] h-[1200px] bg-gradient-to-br from-blue-500/3 via-purple-500/3 to-emerald-500/3 rounded-full blur-[180px] -translate-y-1/2 animate-[pulse_8s_ease-in-out_infinite]" />
    <div className="absolute bottom-0 right-1/4 w-[1000px] h-[1000px] bg-gradient-to-br from-emerald-500/3 via-blue-500/3 to-purple-500/3 rounded-full blur-[180px] translate-y-1/2 animate-[pulse_10s_ease-in-out_infinite]" />
  </div>
));
Background.displayName = 'Background';

// Memoized Hero Image component
const HeroImage = memo(({ src, alt, onLoad }: { src: string; alt: string; onLoad: () => void }) => (
  <Image
    src={src}
    alt={alt}
    fill
    className="object-cover scale-105 transform transition-all duration-1000 ease-out opacity-0 data-[loaded=true]:opacity-100"
    priority
    onLoad={onLoad}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
    data-loaded="false"
  />
));
HeroImage.displayName = 'HeroImage';

// Memoized Markdown component
const MarkdownContent = memo(({ content }: { content: string }) => (
  <div className="prose prose-invert prose-lg sm:prose-xl max-w-none
    prose-headings:text-white prose-headings:font-extralight prose-headings:tracking-tight
    prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:font-light
    prose-strong:text-white/90 prose-strong:font-medium
    prose-a:text-blue-400 hover:prose-a:text-blue-300
    prose-ul:text-zinc-300 prose-ul:font-light
    prose-li:text-zinc-300 prose-li:font-light
    prose-pre:bg-zinc-900/50 prose-pre:border prose-pre:border-zinc-800/50
    prose-code:text-blue-300 prose-code:bg-zinc-900/50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
    prose-hr:border-zinc-800
    prose-blockquote:text-zinc-400 prose-blockquote:border-zinc-700"
  >
    <ReactMarkdown>{content}</ReactMarkdown>
  </div>
));
MarkdownContent.displayName = 'MarkdownContent';

export default function ProjectDetail({ initialProject, slug }: ProjectDetailProps) {
  const { data: project, isLoading, error } = useProject(slug, initialProject);
  
  // Smooth scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleImageLoad = useCallback(() => {
    const img = document.querySelector('[data-loaded]') as HTMLElement;
    if (img) img.dataset.loaded = 'true';
  }, []);

  // Memoize project data to prevent unnecessary re-renders
  const displayProject = useMemo(() => project || initialProject, [project, initialProject]);

  if (error) {
    return (
      <div className="min-h-screen w-full bg-black flex items-center justify-center p-4">
        <p className="text-white font-light tracking-wide text-center">
          Error loading project: {error instanceof Error ? error.message : "Unknown error occurred"}
        </p>
      </div>
    );
  }

  return (
    <LazyMotion features={domAnimation}>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        style={{ scaleX }}
      />
      <div className="min-h-screen w-full bg-gradient-to-b from-black via-zinc-900/90 to-black relative overflow-hidden">
        <Background />

        <div className="relative">
          <motion.div
            className="h-[60vh] sm:h-[75vh] relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            {displayProject.cover_image && (
              <div className="relative h-full">
                <HeroImage
                  src={displayProject.cover_image}
                  alt={displayProject.title}
                  onLoad={handleImageLoad}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black backdrop-blur-[2px]" />
              </div>
            )}
            {/* Hero content */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6 sm:space-y-10"
                >
                  <motion.h1
                    variants={itemVariants}
                    className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight text-white tracking-tight leading-[1.1] bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
                  >
                    {displayProject.title}
                  </motion.h1>
                  <motion.p
                    variants={itemVariants}
                    className="text-lg sm:text-xl md:text-2xl text-zinc-300/90 max-w-3xl font-light leading-relaxed tracking-wide"
                  >
                    {displayProject.short_description}
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Main content with optimized rendering */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
              <motion.div
                className="lg:col-span-2 space-y-12 sm:space-y-20"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants}>
                  <MarkdownContent content={displayProject.full_description} />
                </motion.div>

                {displayProject.project_details?.map((detail) => (
                  <motion.div
                    key={detail.detail_id}
                    variants={itemVariants}
                    className="space-y-6 sm:space-y-8"
                  >
                    <h2 className="text-3xl sm:text-4xl font-extralight text-white tracking-tight leading-tight">
                      {detail.section_title}
                    </h2>
                    <MarkdownContent content={detail.content} />
                  </motion.div>
                ))}
              </motion.div>

              {/* Sidebar with lazy-loaded components */}
              <motion.div
                className="space-y-10 sm:space-y-14"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <ProjectLinks project={displayProject} />
                <Timeline project={displayProject} />
                <Technologies project={displayProject} />
                <Contributors project={displayProject} />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Loading indicator */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 sm:top-6 right-4 sm:right-6 bg-gradient-to-r from-blue-500/90 to-purple-500/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg backdrop-blur-md font-medium tracking-wide text-sm sm:text-base"
          >
            Updating...
          </motion.div>
        )}
      </div>
    </LazyMotion>
  );
}