import About from "@/components/sections/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Me \\ Aryan Singh',
  description: 'Learn about Aryan Singh\'s journey as a Mobile & Backend Developer with expertise in Android, Spring Boot, and cloud technologies. Discover my professional background, tech stack, and development philosophy.',
  keywords: [
    'Aryan Singh about', 
    'software engineer background', 
    'mobile developer experience', 
    'backend developer skills',
    'Android developer profile',
    'Spring Boot engineer',
    'tech journey',
    'software development philosophy'
  ],
  openGraph: {
    title: 'About Aryan Singh \\ Mobile & Backend Developer',
    description: 'Discover my professional journey, technical skills, and approach to building scalable mobile and backend applications.',
    type: 'website',
    images: [
      {
        url: 'https://singhtwenty2.pages.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aryan Singh - About Me Page'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Aryan Singh \\ Mobile & Backend Developer',
    description: 'Discover my professional journey, technical skills, and approach to building scalable mobile and backend applications.'
  }
};

export default function Page() {
  return (
    <main>
      <About />
    </main>
  );
}