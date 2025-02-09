export interface ProjectResponse {
  projects: Project[];
  pagination: Pagination;
}

export interface Project {
  project_id: string;
  title: string;
  slug: string;
  short_description: string;
  cover_image: string;
  status: 'in_progress' | 'completed' | 'planned' | 'archived';
  timeline_start: string;
  timeline_end: string | null;
}

export interface Pagination {
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}

