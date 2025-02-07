import Projects from "@/components/sections/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Projects | Aryan Singh',
  description: 'Explore my latest projects and contributions to open-source software. Learn more about my work in mobile and backend development.',
}

export default function Page() {
  return (
    <main>
      <Projects />
    </main>
  );
}