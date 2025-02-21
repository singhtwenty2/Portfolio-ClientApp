import { getProjectBySlug } from '@/lib/api/projectApi';
import ProjectDetail from '@/components/ProjectDetail';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const runtime = 'edge';

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
        title: 'Project Not Found \\ Aryan Singh',
        description: 'The requested project could not be found.'
      };
    }
    
    return {
      title: `${response.project.title} \\ Aryan Singh`,
      description: response.project.short_description,
      keywords: [
        `${response.project.title}`,
        'mobile development',
        'backend project',
        'Android application',
        'Spring Boot implementation',
        'software case study',
      ],
      openGraph: {
        title: `${response.project.title} \\ Aryan Singh`,
        description: response.project.short_description,
        type: 'article',
        images: [
          {
            url: response.project.cover_image || 'https://singhtwenty2.pages.dev/project-default-og.png',
            width: 1200,
            height: 630,
            alt: `${response.project.title} - Aryan Singh`
          }
        ]
      },
      twitter: {
        card: 'summary_large_image',
        title: `${response.project.title} \\ Aryan Singh`,
        description: response.project.short_description
      }
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Error \\ Aryan Singh',
      description: 'There was an error loading the project information.'
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