import { useState, useEffect } from 'react';
import { Project } from '@/types/api/project';
import { getProjects } from '@/lib/api/projectApi';

export const useProjects = (initialProjects: Project[]) => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setProjects(initialProjects);
  }, [initialProjects]);

  const refreshProjects = async (page: number = 1, pageSize: number = 4) => {
    setIsLoading(true);
    try {
      const data = await getProjects(page, pageSize);
      setProjects(data.projects);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch projects'));
    } finally {
      setIsLoading(false);
    }
  };

  return {
    projects,
    isLoading,
    error,
    refreshProjects
  };
};