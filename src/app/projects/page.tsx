import ProjectsCatalogue from "@/components/ProjectsCatalogue";
import { Metadata } from "next";
import { getAllProjects } from "@/lib/api/projectApi";
import { unstable_cache } from 'next/cache';

export const metadata: Metadata = {
  title: 'Projects \\ Aryan Singh',
  description: 'Discover Aryan Singh\'s portfolio of mobile and backend development projects, featuring Android applications, Spring Boot implementations, and full-stack solutions with detailed case studies.',
  keywords: [
    'Aryan Singh projects', 
    'mobile app portfolio', 
    'backend development work',
    'Android project showcase',
    'Spring Boot examples',
    'software development portfolio',
    'mobile and backend solutions'
  ],
  openGraph: {
    title: 'Projects Portfolio \\ Aryan Singh',
    description: 'Browse through my collection of mobile and backend development projects showcasing expertise in Android, Spring Boot, and full-stack technologies.',
    type: 'website',
    images: [
      {
        url: 'https://singhtwenty2.pages.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aryan Singh - Projects Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects Portfolio \\ Aryan Singh',
    description: 'Browse through my collection of mobile and backend development projects showcasing expertise in Android, Spring Boot, and full-stack technologies.'
  }
};

const getCachedProjects = unstable_cache(
  async () => {
    const data = await getAllProjects(8);
    return data.projects;
  },
  ['all-projects'],
  { revalidate: 3600 }
);

export default async function ProjectsPage() {
  const initialProjects = await getCachedProjects();
  
  return (
    <main>
      <ProjectsCatalogue initialProjects={initialProjects} />
    </main>
  );
}