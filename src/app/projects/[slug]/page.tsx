import { getProjectBySlug } from '@/lib/api/projectApi';
import ProjectDetail from '@/components/ProjectDetail';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<Record<string, string | string[]>>;
}

async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  try {
    const response = await getProjectBySlug(resolvedParams.slug);
    
    if (!response?.project) {
      return {
        title: 'Project Not Found',
        description: 'The requested project could not be found.'
      };
    }
    return {
      title: `${response.project.title} | Project Details`,
      description: response.project.short_description,
      openGraph: {
        title: response.project.title,
        description: response.project.short_description,
        type: 'article',
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Error',
      description: 'There was an error loading the project.'
    };
  }
}

async function ProjectPage({ params }: PageProps) {
  const resolvedParams = await params;
  try {
    const response = await getProjectBySlug(resolvedParams.slug);
    
    if (!response?.project) {
      notFound();
    }
    return (
      <ProjectDetail 
        initialProject={response.project} 
        slug={resolvedParams.slug} 
      />
    );
  } catch (error) {
    console.error('Error loading project:', error);
    throw error;
  }
}

export { generateMetadata };
export default ProjectPage;