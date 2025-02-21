import { Cloud, Code, Database, Smartphone, Globe } from "lucide-react";

export const skillCategories = [
  {
    title: 'MOBILE DEVELOPMENT',
    icon: Smartphone,
    skills: [
      { name: 'Kotlin', value: 95 },
      { name: 'Jetpack Compose', value: 90 },
      { name: 'Dagger Hilt', value: 85 },
      { name: 'Room Database', value: 90 },
      { name: 'KMM', value: 60 },
      { name: 'WorkManager', value: 85 },
      { name: 'Material Design', value: 75 }
    ]
  },
  {
    title: 'BACKEND & MICROSERVICES',
    icon: Database,
    skills: [
      { name: 'Spring Boot', value: 90 },
      { name: 'Spring Security', value: 85 },
      { name: 'Spring Data JPA', value: 85 },
      { name: 'Ktor', value: 90 },
      { name: 'Flask', value: 75 },
      { name: 'Microservices', value: 85 },
      { name: 'REST APIs', value: 85 }
    ]
  },
  {
    title: 'FRONTEND WEB DEVELOPMENT',
    icon: Globe,
    skills: [
      { name: 'Next.js', value: 65 },
      { name: 'SvelteKit', value: 55 },
      { name: 'TypeScript', value: 75 },
      { name: 'Tailwind CSS', value: 60 }
    ]
  },
  {
    title: 'DATABASES & CACHING',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', value: 90 },
      { name: 'MySQL', value: 85 },
      { name: 'Redis', value: 80 },
      { name: 'Apache Kafka', value: 75 },
      { name: 'SQLite', value: 80 }
    ]
  },
  {
    title: 'CLOUD, DEVOPS & IaC',
    icon: Cloud,
    skills: [
      { name: 'Docker', value: 85 },
      { name: 'Kubernetes', value: 75 },
      { name: 'AWS (EC2, S3, RDS)', value: 85 },
      { name: 'Nginx', value: 80 },
      { name: 'GitHub Actions (CI/CD)', value: 65 },
      { name: 'Terraform', value: 30 }
    ]
  },
  {
    title: 'TESTING & DEVELOPMENT PRACTICES',
    icon: Code,
    skills: [
      { name: 'JUnit', value: 60 },
      { name: 'Espresso', value: 75 },
      { name: 'TDD', value: 70 },
      { name: 'UI/UX Design', value: 75 },
      { name: 'Design Patterns', value: 85 }
    ]
  }
];