"use client";

import dynamic from "next/dynamic";

const Section = dynamic(() => import("@/components/sections/Section"));
const Hero = dynamic(() => import("@/components/sections/Hero"));
const About = dynamic(() => import("@/components/sections/About"));
const Skills = dynamic(() => import("@/components/sections/Skills"));
const Experience = dynamic(() => import("@/components/sections/Experience"));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export default function Page() {

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
        <Projects />
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
