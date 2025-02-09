import { useQuery } from '@tanstack/react-query';
import { getProjectBySlug } from '@/lib/api/projectApi';
import { Project } from '@/types/api/projectDetail';

export const useProject = (slug: string, initialData?: Project) => {
  return useQuery({
    queryKey: ['project', slug],
    queryFn: async () => {
      if (!slug) throw new Error('Slug is required');
      const response = await getProjectBySlug(slug);
      return response.project as Project;
    },
    initialData: initialData,
    enabled: Boolean(slug),
    staleTime: 1000 * 60 * 60,
  });
};