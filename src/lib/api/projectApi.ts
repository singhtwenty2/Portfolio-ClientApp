import { ProjectResponse } from "@/types/api/project";
import { Project, ProjectDetail, ProjectDetailResponse } from "@/types/api/projectDetail";
import axios from "axios";

const api = axios.create({
  baseURL: "https://dtzlybkqtsymzveienks.supabase.co/functions/v1/public-api",
});

export const getProjects = async (page: number = 1, pageSize: number = 4) => {
  try {
    const { data } = await api.get<ProjectResponse>(
      `/projects/?page=${page}&pageSize=${pageSize}`,
    );
    return data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

export const getAllProjects = async (pageSize: number = 8) => {
  try {
    const { data } = await api.get<ProjectResponse>(
      `/projects/?page=1&pageSize=${pageSize}`,
    );
    return data;
  } catch (error) {
    console.error("Error fetching all projects:", error);
    throw error;
  }
};

export const getProjectBySlug = async (
  slug: string,
): Promise<ProjectDetailResponse> => {
  try {
    const { data } = await api.get<Project>(`/projects/${slug}`);
    return {
      project: sanitizeProjectDetails(data)
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return { project: null };
    }
    console.error("Error fetching project details:", error);
    throw error;
  }
};

const sanitizeMarkdownContent = (content: string): string => {
  return content
    .replace(/\\n/g, "\n")
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, "\\")
    .replace(/\t/g, "    ")
    .trim();
};

// Function to sanitize project details
const sanitizeProjectDetails = (project: Project): Project => {
  // Sanitize full description
  const sanitizedProject = {
    ...project,
    full_description: sanitizeMarkdownContent(project.full_description)
  };

  // Sanitize project details content if they exist
  if (sanitizedProject.project_details) {
    sanitizedProject.project_details = sanitizedProject.project_details.map(
      (detail: ProjectDetail) => ({
        ...detail,
        content: sanitizeMarkdownContent(detail.content)
      })
    );
  }

  return sanitizedProject;
};