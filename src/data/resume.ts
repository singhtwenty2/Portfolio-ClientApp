import { ResumeData } from "@/types/resume";

export const resumeData: ResumeData = {
    name: "Aryan Singh",
    contact: {
      email: "aryansingh97713@gmail.com",
      phone: "+91-9122239933",
      linkedin: "https://www.linkedin.com/in/singhtwenty2/",
      github: "https://github.com/singhtwenty2",
      portfolio: "https://singhtwenty2.pages.dev/"
    },
    summary: "Aspiring Software Developer specializing in Android and Backend Development with expertise in Kotlin, Spring Boot, MEAN Stack, and cloud technologies. Proven ability to design scalable systems, optimize performance, and collaborate effectively in team environments. Eager to leverage technical skills to deliver innovative solutions and enhance operational efficiency.",
    technicalSkills: [
      {
        category: "Languages & Frameworks",
        skills: "Kotlin, Java, Python, TypeScript, JavaScript, Spring Boot, Jetpack Compose, Angular, Node.js, Express.js, Ktor"
      },
      {
        category: "Mobile Development",
        skills: "Android SDK, Dagger Hilt, Koin, WorkManager, Room, Material Design"
      },
      {
        category: "Backend & Cloud",
        skills: "Microservices, REST APIs, AWS (EC2, S3, RDS), Docker, Kubernetes, NginX"
      },
      {
        category: "Databases & Caching",
        skills: "MongoDB, PostgreSQL, MySQL, SQLite, Redis, Apache Kafka"
      },
      {
        category: "Tools & Practices",
        skills: "Git, GitHub, JUnit, Espresso, TDD, Agile methodologies"
      }
    ],
    experience: [
      {
        title: "Backend Developer Intern",
        company: "Intrakraft Solutions Private Limited",
        duration: "Feb 2025 – Present",
        achievements: [
          "Developing a dynamic dashboard feature with real-time analytics using MEAN Stack ecosystem",
          "Building responsive UI components with Angular and implementing business logic with TypeScript",
          "Designing and implementing RESTful APIs with Node.js and Express.js",
          "Working with MongoDB for efficient data storage, retrieval, and optimizing database performance",
          "Collaborating with cross-functional teams to deliver high-quality software solutions"
        ]
      }
    ],
    projects: [
      {
        title: "OceanVista",
        role: "Lead Developer",
        link: {
          text: "Source Code",
          url: "https://github.com/singhtwenty2/OceanVista"
        },
        duration: "Oct 2024 – Present",
        achievements: [
          "Spearheaded development of a full-stack beach safety platform using Kotlin and Spring Boot",
          "Integrated ML-based safety prediction systems, analyzing real-time weather and ocean data",
          "Architected scalable microservices on AWS, achieving 99.9% uptime",
          "Implemented Redis caching and Apache Kafka, reducing data processing latency by 40%",
          "Led a team of 4 developers, ensuring high-quality code through thorough reviews and testing"
        ]
      },
      {
        title: "JAT Business Portal",
        role: "Backend Developer",
        link: {
          text: "Live Project",
          url: "https://jaiambaytarpaulin.com/"
        },
        duration: "Aug 2024 – Nov 2024",
        achievements: [
          "Built RESTful APIs with Spring Boot, handling 1000+ concurrent users efficiently",
          "Secured the application using Spring Security, JWT authentication, and password hashing",
          "Optimized PostgreSQL queries and implemented caching strategies for better performance",
          "Designed scalable AWS infrastructure, maintaining 99.9% availability"
        ]
      }
    ],
    achievements: [
      {
        title: "Smart India Hackathon 2024",
        description: "Developed an innovative mobile solution addressing critical challenges"
      },
      {
        title: "IEEE Hackathon 2023",
        description: "Delivered MVP within 24 hours, showcasing agile development and problem-solving skills"
      },
      {
        title: "Performance Optimization",
        description: "Achieved a 25% improvement in app performance through strategic optimizations"
      }
    ],
    education: [
      {
        degree: "Bachelor of Engineering in Computer Science",
        institution: "Sambhram Institute of Technology, Bengaluru",
        score: "81.05%",
        duration: "2021 – 2025 (Expected)"
      },
      {
        degree: "Class XII",
        institution: "Park Mount Public School, Patna",
        score: "86.4%",
        duration: "2020"
      },
      {
        degree: "Class X",
        institution: "Ramakrishna Mission Vidyamandir, Katihar",
        score: "83.8%",
        duration: "2018"
      }
    ]
  };