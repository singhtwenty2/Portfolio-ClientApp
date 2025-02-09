import { Suspense } from "react";
import dynamic from "next/dynamic";
import { ProjectSkeleton } from "@/components/ProjectSkeleton";
import { getProjects } from "@/lib/api/projectApi";
import { unstable_cache } from 'next/cache';

const Section = dynamic(() => import("@/components/sections/Section"));
const Hero = dynamic(() => import("@/components/sections/Hero"));
const About = dynamic(() => import("@/components/sections/About"));
const Skills = dynamic(() => import("@/components/sections/Skills"));
const Contact = dynamic(() => import("@/components/sections/Contact"));
const Experience = dynamic(() => import("@/components/sections/Experience"));

import Projects from "@/components/sections/Project";

const getCachedProjects = unstable_cache(
  async () => {
    const data = await getProjects();
    return data.projects;
  },
  ['projects'],
  { revalidate: 3600 }
);

export default async function Page() {
  const initialProjects = await getCachedProjects();

  return (
    <div className="flex flex-col">
      <Section id="home">
        <Hero />
      </Section>
      <Section id="about" className="bg-black/40">
        <About />
      </Section>
      <Section id="skills" className="bg-black/40">
        <Skills />
      </Section>
      <Section id="projects" className="bg-black/40">
        <Suspense
          fallback={
            <div className="space-y-6 sm:space-y-3">
              {[...Array(4)].map((_, i) => (
                <ProjectSkeleton key={i} />
              ))}
            </div>
          }
        >
          <Projects initialProjects={initialProjects} />
        </Suspense>
      </Section>
      <Section id="experience" className="bg-black/40">
        <Experience />
      </Section>
      <Section id="contact" className="bg-black/40">
        <Contact />
      </Section>
    </div>
  );
}
