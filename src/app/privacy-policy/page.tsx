import { Metadata } from 'next'
import Privacy from '@/components/Privacy';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how we handle your data and protect your privacy on this website.',
}

export default function ResumePage() {
  return (
    <main>
      <Privacy />
    </main>
  );
}