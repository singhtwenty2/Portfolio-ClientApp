import { Timer, Building2, Code2, Terminal } from "lucide-react";
import { Experience } from "@/types/landing";

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Backend Developer Intern - Enterprise Analytics Platform",
    company: "Intrakraft Solutions Private Limited",
    period: "Feb 2025 – Ongoing",
    description: [
      "Architecting and implementing a scalable backend for a mission-critical analytics dashboard using Node.js and Express.js.",
      "Designing and optimizing both RESTful and GraphQL APIs to support real-time data visualization and complex filtering capabilities.",
      "Enhancing database performance through MongoDB query optimization and implementing efficient data aggregation pipelines.",
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "Node.js",
      "TypeScript",
      "GraphQL",
      "REST API",
    ],
    growth: 92,
    icon: Terminal,
  },
  {
    id: "2",
    title: "Lead Developer - Ocean Vista",
    company: "Independent Project",
    period: "Nov 2024 – Ongoing",
    description: [
      "Developing a real-time beach safety app leveraging Kafka for data streaming and Redis for fast alert retrieval.",
      "Designing and implementing a microservices backend using Spring Boot and Flask.",
      "Deploying on AWS to ensure scalability and reliability.",
    ],
    technologies: [
      "Spring Boot",
      "Jetpack Compose",
      "Flask",
      "Kafka",
      "Redis",
      "AWS",
    ],
    growth: 95,
    icon: Code2,
  },
  {
    id: "3",
    title: "Backend Engineer - JAT Business Administration Portal",
    company: "Client Project",
    period: "Jun 2024 – Completed",
    description: [
      "Delivered a production-ready solution optimizing workflows and boosting profitability.",
      "Integrated asynchronous email notifications and batch processing into the backend.",
      "Deployed on AWS EC2 with Nginx as a reverse proxy and S3 for media storage.",
    ],
    technologies: ["Spring Boot", "MySQL", "AWS EC2 & S3", "Nginx"],
    growth: 90,
    icon: Building2,
  },
  {
    id: "4",
    title: "Architect - MetricX Analytics Platform",
    company: "Personal Project",
    period: "Aug 2024 – Ongoing",
    description: [
      "Designed a microservices architecture for real-time website analytics and uptime monitoring.",
      "Integrated Kafka for streaming data and PostgreSQL for scalable data storage.",
      "Orchestrated deployments using Kubernetes for efficient resource management.",
    ],
    technologies: ["Ktor", "Flask", "Kafka", "PostgreSQL", "Kubernetes"],
    growth: 90,
    icon: Code2,
  },
  {
    id: "5",
    title: "Developer - Konix Trade Execution Platform",
    company: "Personal Project",
    period: "Mar 2024 – Aug 2024",
    description: [
      "Built a secure backend for stock trading simulations, ensuring real-time trade execution.",
      "Streamed live market data using Kafka, enabling realistic trade scenarios.",
      "Containerized services using Docker for consistent deployments.",
    ],
    technologies: ["Ktor", "Kafka", "Docker", "MySQL"],
    growth: 85,
    icon: Timer,
  },
];
