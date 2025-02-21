import { Metadata } from 'next'
import Privacy from '@/components/Privacy';

export const metadata: Metadata = {
  title: 'Privacy Policy \\ Aryan Singh',
  description: 'Understand how Aryan Singh\'s website collects, uses, and protects your personal information. Learn about our data practices, cookie policy, and your privacy rights.',
  keywords: [
    'privacy policy', 
    'data protection', 
    'website privacy',
    'cookie policy',
    'personal information handling',
    'user data rights',
    'privacy practices'
  ],
  openGraph: {
    title: 'Privacy Policy \\ Aryan Singh',
    description: 'Transparent information about how we collect, process, and protect your data when you use our website.',
    type: 'website',
    images: [
      {
        url: 'https://singhtwenty2.pages.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Privacy Policy - Aryan Singh'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy \\ Aryan Singh',
    description: 'Transparent information about how we collect, process, and protect your data when you use our website.'
  }
};

export default function PrivacyPage() {
  return (
    <main>
      <Privacy />
    </main>
  );
}