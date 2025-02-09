export interface Technology {
  name: string;
  tech_id: string;
  icon_url: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface ProjectTechnology {
  technologies: Technology;
}

export interface Contributor {
  name: string;
  role: string;
  avatar_url: string;
  github_url: string;
  linkedin_url: string;
  contributor_id: string;
  created_at: string;
  updated_at: string;
}

export interface ProjectContributor {
  contributors: Contributor;
}

export interface ProjectDetail {
  content: string;
  detail_id: string;
  section_title: string;
  order_index: number;
  project_id: string;
  created_at: string;
  updated_at: string;
}

export interface Project {
  project_id: string;
  title: string;
  slug: string;
  short_description: string;
  full_description: string;
  cover_image: string;
  status: ProjectStatus;
  role: string;
  timeline_start: string;
  timeline_end: string;
  github_url: string | null;
  live_url: string | null;
  created_at: string;
  updated_at: string;
  project_technologies: ProjectTechnology[];
  project_contributors: ProjectContributor[];
  project_details?: ProjectDetail[];
}

export interface ProjectResponse {
  projects: Project[];
  total: number;
  hasMore: boolean;
}

export type ProjectStatus = 'in_progress' | 'completed' | 'planned' | 'archived';

export interface ProjectDetailResponse {
  project: Project | null;
}