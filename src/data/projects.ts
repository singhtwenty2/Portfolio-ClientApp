import { Project } from "@/types/landing";

export const projects: Project[] = [
  {
    id: '1',
    title: 'Ocean Vista',
    description: 'A beach safety application providing real-time alerts and ML-driven insights for beach conditions and safety notifications. Built with modern Android development practices and microservices architecture.',
    technologies: ['Jetpack Compose', 'Kotlin', 'Spring Boot', 'Flask', 'Kafka', 'Redis', 'AWS'],
    githubUrl: 'https://github.com/singhtwenty2/OceanVista',
    image: 'https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg',
    status: 'Ongoing',
    role: 'Lead Mobile Developer and Backend Engineer',
    timeline: 'Nov 2024 - Present'
  },
  {
    id: '2',
    title: 'JAT - Business Administration Portal',
    description: 'A production-ready business administration solution featuring asynchronous email notifications and batch processing. Streamlined workflows for increased business profitability.',
    technologies: ['Spring Boot', 'MySQL', 'AWS EC2', 'AWS S3', 'Nginx'],
    liveUrl: 'https://jaiambaytarpaulin.com/',
    image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg',
    status: 'Completed',
    role: 'Backend Developer',
    timeline: 'Jun 2024'
  },
  {
    id: '3',
    title: 'Konix - Trade Execution Platform',
    description: 'Real-time stock trading simulation platform with secure APIs for Android integration. Features robust backend architecture for handling trading workflows.',
    technologies: ['Ktor', 'Kafka', 'Docker', 'MySQL'],
    githubUrl: 'https://github.com/singhtwenty2/Konix-TEP',
    image: 'https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    status: 'Completed',
    role: 'Full-stack Developer',
    timeline: 'Mar 2024 - Aug 2024'
  },
  {
    id : '4',
    title: 'MetricX',
    description: 'Website analytics and uptime monitoring system built with microservices architecture. Features real-time analytics processing and scalable data storage solutions.',
    technologies: ['Ktor', 'Flask', 'Kafka', 'PostgreSQL', 'Kubernetes'],
    githubUrl: 'https://github.com/singhtwenty2/MetricX',
    image: 'https://images.pexels.com/photos/5716032/pexels-photo-5716032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    status: 'Ongoing',
    role: 'Backend Developer',
    timeline: 'Aug 2024 - Present'
  }
];