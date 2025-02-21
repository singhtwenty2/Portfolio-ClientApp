import { Metadata } from "next";
import Terms from "@/components/Terms";

export const metadata: Metadata = {
  title: "Terms and Conditions \\ Aryan Singh",
  description: "Review the terms and conditions governing the use of Aryan Singh's website. Understand user responsibilities, intellectual property rights, and usage limitations.",
  keywords: [
    'terms and conditions',
    'website terms of use', 
    'legal agreement',
    'user guidelines',
    'intellectual property rights',
    'website usage rules',
    'liability limitations'
  ],
  openGraph: {
    title: "Terms and Conditions \\ Aryan Singh",
    description: "Review the complete terms and conditions governing your use of Aryan Singh's website and services.",
    type: 'website',
    images: [
      {
        url: 'https://singhtwenty2.pages.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Terms and Conditions - Aryan Singh'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Terms and Conditions \\ Aryan Singh",
    description: "Review the complete terms and conditions governing your use of Aryan Singh's website and services."
  }
};

export default function TermsPage() {
  return (
    <main>
      <Terms />
    </main>
  );
}