import { Metadata } from 'next'
import Resume from "@/components/Resume";

export const metadata: Metadata = {
  title: 'Resume | Aryan Singh',
  description: 'Professional resume and experience overview',
}

export default function ResumePage() {
  return (
    <main>
      <Resume />
    </main>
  );
}