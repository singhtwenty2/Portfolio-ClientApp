import { Metadata } from 'next'
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Contact | Aryan Singh',
  description: 'Get in touch with Aryan Singh, a software development engineer focused on building scalable mobile and backend applications.',
}

export default function ResumePage() {
  return (
    <main>
      <Contact />
    </main>
  );
}