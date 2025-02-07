import About from "@/components/sections/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Me | Aryan Singh',
  description: 'Learn more about Aryan Singh, a software development engineer focused on building scalable mobile and backend applications.',
}

export default function Page() {
  return (
    <main>
      <About />
    </main>
  );
}