import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ClientProgressLoader from "@/components/ClientProgressLoader";
import "./globals.css";
import { personalInfo } from "@/data/personal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://singhtwenty2.pages.dev/"),
  title: {
    default: "Aryan Singh | Mobile & Backend Developer",
    template: "%s | Aryan Singh Portfolio"
  },
  description: "Experienced Mobile and Backend Developer specializing in Android development and Spring Boot. Crafting innovative software solutions with expertise in mobile and web technologies.",
  keywords: [
    "Aryan Singh",
    "Mobile Developer",
    "Backend Developer",
    "Android",
    "Spring Boot",
    "Software Engineer",
    "Full Stack Developer",
    "Kotlin",
    "Java",
    "AWS",
    "Docker",
    "Kubernetes",
  ],
  authors: [{ name: "Aryan Singh" }],
  creator: "Aryan Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://singhtwenty2.pages.dev/",
    title: "Aryan Singh | Mobile & Backend Developer",
    description: "Experienced Mobile and Backend Developer specializing in Android development and Spring Boot.",
    siteName: "Aryan Singh Portfolio",
    images: [
      {
        url: "https://singhtwenty2.pages.dev/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Singh | Mobile & Backend Developer",
    description: "Experienced Mobile and Backend Developer specializing in Android development and Spring Boot.",
    creator: personalInfo.socialLinks.twitter,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: {
  //   google: "your-google-site-verification-code", // Optional: Add Google Search Console verification
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-gradient-to-b from-black via-black to-black text-white min-h-screen`}
      >
        <ClientProgressLoader />
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}