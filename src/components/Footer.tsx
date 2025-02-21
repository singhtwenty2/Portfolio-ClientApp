"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronUp, ExternalLink, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { personalInfo } from "@/data/personal";

const FloatingElement = ({ className = "" }) => (
  <div
    className={`absolute bg-gradient-to-r from-zinc-500/10 to-zinc-300/10 rounded-full blur-3xl mix-blend-overlay ${className}`}
  />
);

const FooterLink = ({
  link,
}: {
  link: { name: string; path: string; icon?: React.ReactNode };
}) => {
  const router = useRouter();
  const isExternal = link.path.startsWith("http");
  const baseStyles =
    "flex items-center gap-2 text-sm tracking-wide font-light text-zinc-400 hover:text-white transition-all duration-700 relative z-10 group";

  const handleClick = (e: React.MouseEvent) => {
    if (!isExternal) {
      e.preventDefault();
      router.push(link.path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const content = (
    <span className="relative flex items-center gap-2">
      {link.name}
      {isExternal && (
        <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
      )}
      <span className="absolute left-0 right-0 bottom-0 h-px bg-white/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out" />
    </span>
  );

  return isExternal ? (
    <motion.a
      href={link.path}
      target="_blank"
      rel="noopener noreferrer"
      className={baseStyles}
      whileHover={{ x: 4 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      {content}
    </motion.a>
  ) : (
    <motion.div
      whileHover={{ x: 4 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <Link href={link.path} className={baseStyles}>
        {content}
      </Link>
    </motion.div>
  );
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Viewpoint", path: "/viewpoint" },
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "Contact", path: "/contact" },
        { name: "Resume", path: "/resume" },
        { name: "GitHub", path: personalInfo.socialLinks?.github || "#" },
        { name: "LinkedIn", path: personalInfo.socialLinks?.linkedin || "#" },
      ],
    },
    {
      title: "Technology Stack",
      links: [
        { name: "Next.js", path: "https://nextjs.org/docs" },
        { name: "TypeScript", path: "https://www.typescriptlang.org/docs" },
        { name: "Deno", path: "https://docs.deno.com/" },
        {
          name: "Supabase Edge Functions",
          path: "https://supabase.com/docs/guides/functions",
        },
        { name: "Cloudflare", path: "https://developers.cloudflare.com/" },
      ],
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-zinc-950 to-black border-t border-zinc-800/20 overflow-hidden mt-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.15] mix-blend-overlay" />
        <FloatingElement className="bottom-0 left-0 w-96 h-96 opacity-50" />
        <FloatingElement className="top-0 right-0 w-96 h-96 opacity-50" />
      </div>

      <div className="absolute -top-12 left-0 right-0 flex justify-center">
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4, scale: 1.05 }}
          transition={{
            duration: 0.7,
            ease: [0.4, 0, 0.2, 1],
            scale: {
              type: "spring",
              stiffness: 300,
              damping: 15,
            },
          }}
          className="w-12 h-12 rounded-full bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 flex items-center justify-center hover:border-zinc-700/50 hover:bg-zinc-800/50 cursor-pointer transition-all duration-700 group"
        >
          <ChevronUp className="w-5 h-5 text-zinc-300 transition-transform duration-700 group-hover:scale-110" />
        </motion.button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-8 sm:pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="backdrop-blur-md rounded-2xl bg-gradient-to-br from-zinc-900/40 to-black/40 border border-zinc-800/20 p-6 group"
            >
              <Link href="/" className="block">
                <h2 className="text-2xl tracking-wider font-light text-zinc-200 transition-colors duration-700">
                  {personalInfo.name}
                </h2>
              </Link>
              <p className="mt-4 text-sm tracking-wide font-light text-zinc-400 leading-relaxed transition-colors duration-700 group-hover:text-zinc-300">
                {personalInfo.shortBio}
              </p>
            </motion.div>
          </motion.div>

          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-sm uppercase tracking-widest font-light text-zinc-300/70">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <FooterLink link={link} />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="pt-8 border-t border-zinc-800/20 space-y-6"
        >
          {/* Legal Links */}
          <div className="flex justify-center space-x-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-zinc-400 hover:text-white transition-colors duration-700"
            >
              Privacy Policy
            </Link>
            <span className="text-zinc-700">|</span>
            <Link
              href="/terms-and-conditions"
              className="text-sm text-zinc-400 hover:text-white transition-colors duration-700"
            >
              Terms & Conditions
            </Link>
            <motion.a
              href="https://github.com/singhtwenty2/Portfolio-ClientApp/issues/new/choose"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors duration-700 group"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
              <AlertCircle className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
              Report an Issue
              <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.a>
          </div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="backdrop-blur-md rounded-2xl bg-gradient-to-br from-zinc-900/40 to-black/40 border border-zinc-800/20 p-6"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                {[
                  { Icon: Github, href: personalInfo.socialLinks?.github },
                  { Icon: Linkedin, href: personalInfo.socialLinks?.linkedin },
                  { Icon: Mail, href: `mailto:${personalInfo.email}` },
                ].map(({ Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.05 }}
                    transition={{
                      duration: 0.7,
                      ease: [0.4, 0, 0.2, 1],
                      scale: {
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      },
                    }}
                    className="w-10 h-10 rounded-full bg-zinc-800/30 backdrop-blur-sm border border-zinc-700/30 flex items-center justify-center hover:bg-zinc-700/30 hover:border-zinc-600/30 transition-all duration-700 group"
                  >
                    <Icon className="w-4 h-4 text-zinc-300 transition-transform duration-700 group-hover:scale-110" />
                  </motion.a>
                ))}
              </div>

              <p className="text-sm tracking-wide font-light text-zinc-400">
                © {currentYear} {personalInfo.name}. All rights reserved.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
