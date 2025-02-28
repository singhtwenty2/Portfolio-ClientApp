export type Contact = {
    portfolio: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
  
  export type TechnicalSkill = {
    category: string;
    skills: string;
  };
  
  export type Project = {
    title: string;
    role: string;
    link?: {
      text: string;
      url: string;
    };
    duration: string;
    achievements: string[];
  };
  
  export type Achievement = {
    title: string;
    description: string;
  };
  
  export type Education = {
    degree: string;
    institution: string;
    score: string;
    duration: string;
  };
  
  export type Experience = {
    title: string;
    company: string;
    duration: string;
    achievements: string[];
  }
  
  export type ResumeData = {
    name: string;
    contact: Contact;
    summary: string;
    technicalSkills: TechnicalSkill[];
    experience: Experience[];
    projects: Project[];
    achievements: Achievement[];
    education: Education[];
  };