import { Metadata } from "next";
import Terms from "@/components/Terms";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Read the terms and conditions for using this website.",
};

export default function ResumePage() {
  return (
    <main>
      <Terms />
    </main>
  );
}
