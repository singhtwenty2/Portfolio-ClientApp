import { Metadata } from 'next'
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Contact \\ Aryan Singh',
  description: 'Connect with Aryan Singh for mobile and backend development opportunities. Reach out about Android projects, Spring Boot implementations, or general software engineering inquiries.',
  keywords: [
    'contact Aryan Singh', 
    'hire mobile developer', 
    'backend developer contact',
    'Android developer inquiry',
    'Spring Boot engineer contact',
    'software development collaboration',
    'mobile app development consultation'
  ],
  openGraph: {
    title: 'Contact Aryan Singh \\ Mobile & Backend Developer',
    description: 'Get in touch with me for mobile and backend development projects, collaborations, or inquiries about my services and expertise.',
    type: 'website',
    images: [
      {
        url: 'https://singhtwenty2.pages.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact Aryan Singh'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Aryan Singh \\ Mobile & Backend Developer',
    description: 'Get in touch with me for mobile and backend development projects, collaborations, or inquiries about my services and expertise.'
  }
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  );
}