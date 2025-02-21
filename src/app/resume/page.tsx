import { Metadata } from 'next'
import Resume from "@/components/Resume";

export const metadata: Metadata = {
  title: 'Resume \\ Aryan Singh',
  description: 'View Aryan Singh\'s professional resume highlighting experience in mobile and backend development, technical skills, education, and career achievements.',
  keywords: [
    'Aryan Singh resume', 
    'mobile developer CV', 
    'backend engineer experience',
    'Android development skills',
    'Spring Boot expertise',
    'software engineer qualifications',
    'tech professional background'
  ],
  openGraph: {
    title: 'Resume \\ Aryan Singh | Mobile & Backend Developer',
    description: 'Explore my professional background, technical skills, work history, and achievements in mobile and backend development.',
    type: 'website',
    images: [
      {
        url: 'https://singhtwenty2.pages.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aryan Singh - Professional Resume'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resume \\ Aryan Singh | Mobile & Backend Developer',
    description: 'Explore my professional background, technical skills, work history, and achievements in mobile and backend development.'
  }
};

export default function ResumePage() {
  return (
    <main>
      <Resume />
    </main>
  );
}