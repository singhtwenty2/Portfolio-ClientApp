import { LucideIcon } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  status: string;
  role: string;
  timeline: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
}

export interface Experience {
  id: string;
  title: string;
  period: string;
  company: string;
  description: string[];
  growth: number;
  icon: LucideIcon
  technologies: string[];
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export type BlogMetaData = {
  blogId: string;
  title: string;
  excerpt: string;
  coverImageUrl: string;
  authorName: string;
  authorProfession: string;
  authorProfileImageUrl: string;
  readTime: string;
  date: string;
  tags: string[];
};

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}