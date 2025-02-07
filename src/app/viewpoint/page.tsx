import Viewpoint from "@/components/sections/Viewpoint";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Viewpoint | Aryan Singh",
  description: "Explore my thoughts on software development, cloud technologies, and mobile applications. Stay updated with the latest trends and best practices in the tech industry.",
}

export default function Page() {
  return (
    <main>
      <Viewpoint />
    </main>
  );
}