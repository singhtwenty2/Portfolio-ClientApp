import ProjectsCatalogue from "@/components/ProjectsCatalogue";
import { Metadata } from "next";
import { getAllProjects } from "@/lib/api/projectApi";
import { unstable_cache } from 'next/cache';

export const metadata: Metadata = {
  title: 'Projects | Aryan Singh',
  description: 'Explore my latest projects and contributions to open-source software. Learn more about my work in mobile and backend development.',
};

const getCachedProjects = unstable_cache(
  async () => {
    const data = await getAllProjects(8);
    return data.projects;
  },
  ['all-projects'],
  { revalidate: 3600 }
);

export default async function Page() {
  const initialProjects = await getCachedProjects();
  
  return (
    <main>
      <ProjectsCatalogue initialProjects={initialProjects} />
    </main>
  );
}