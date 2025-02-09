import { useState, useEffect } from 'react';
import { Project } from '@/types/api/project';
import { getProjects } from '@/lib/api/projectApi';

export const usePaginatedProjects = (initialProjects: Project[]) => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const pageSize = 8;

  useEffect(() => {
    setProjects(initialProjects);
  }, [initialProjects]);

  const loadMoreProjects = async () => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    try {
      const nextPage = currentPage + 1;
      const data = await getProjects(nextPage, pageSize);
      
      if (data.projects.length === 0) {
        setHasMore(false);
      } else {
        setProjects(prev => [...prev, ...data.projects]);
        setCurrentPage(nextPage);
      }
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch more projects'));
    } finally {
      setIsLoading(false);
    }
  };

  return {
    projects,
    isLoading,
    error,
    hasMore,
    loadMoreProjects
  };
};