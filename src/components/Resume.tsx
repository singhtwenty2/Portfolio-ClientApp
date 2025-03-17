"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Download } from "lucide-react";
import { toast, Toaster } from "sonner";
import { resumeData } from "@/data/resume";
import { ResumeData } from "@/types/resume";

const RESUME_LAST_UPDATED = "March 1, 2025";

const pdfUrl =
  "https://pub-8151767378da404c9d68b622662381f3.r2.dev/Aryan_Singh_Resume.pdf";

const DownloadToast: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -50, scale: 0.95 }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 border border-zinc-700/30 shadow-xl backdrop-blur-xl"
  >
    <div className="flex-1">
      <h3 className="font-medium text-zinc-100 mb-1">
        Resume Download Initiated
      </h3>
      <p className="text-sm text-zinc-400">
        Your file will be ready momentarily...
      </p>
    </div>
    <motion.div
      initial={{ scale: 0.8, rotate: -15 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="text-blue-400"
    >
      <Download className="w-5 h-5 grayscale" />
    </motion.div>
  </motion.div>
);

const FloatingButton: React.FC = () => {
  const { scrollY } = useScroll();
  const buttonScale = useTransform(scrollY, [0, 100], [1, 0.95]);
  const textWidth = useTransform(scrollY, [0, 100], ["140px", "0px"]);
  const buttonPadding = useTransform(scrollY, [0, 100], ["16px", "12px"]);

  const handleDownload = async () => {
    try {
      // Show the download toast
      toast.custom(() => <DownloadToast />, {
        duration: 3500,
        position: "top-right",
      });

      // Create a temporary link element
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.target = "_blank";
      link.download = "Aryan_Singh_Resume.pdf";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      // Show error toast if download fails
      toast.error("Download failed. Please try again.");
      console.error("Download error:", error);
    }
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 sm:bottom-8 sm:right-8"
      style={{ scale: buttonScale }}
    >
      <motion.button
        onClick={handleDownload}
        className="flex items-center gap-2 bg-gradient-to-br from-zinc-900/80 to-zinc-800/50 border border-zinc-700/30 backdrop-blur-lg rounded-full shadow-2xl hover:shadow-zinc-900/30 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ padding: buttonPadding }}
      >
        <motion.div className="w-6 h-6 flex items-center justify-center">
          <Download className="w-5 h-5 text-zinc-100" />
        </motion.div>
        <motion.div style={{ width: textWidth }} className="overflow-hidden">
          <span className="text-zinc-100 font-medium whitespace-nowrap text-sm sm:text-base">
            Download
          </span>
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

const SectionHeading: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <motion.h2
    className="text-2xl font-bold border-b border-zinc-700 pb-2 mb-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    {children}
  </motion.h2>
);

export default function Resume() {
  const data: ResumeData = resumeData;

  const lastUpdatedDate = RESUME_LAST_UPDATED;

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3500,
          className: "!p-0 !bg-transparent !border-0 !shadow-none",
        }}
      />
      {/* Enhanced background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-soft-light" />
        <div className="absolute top-[20%] left-[10%] w-[40rem] h-[40rem] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[35rem] h-[35rem] bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/60 to-zinc-950/90" />
      </div>

      {/* Page Title */}
      <div className="relative pt-32 pb-16 text-center">
        <motion.h1
          className="text-5xl font-light text-zinc-100 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Resume
        </motion.h1>
        <motion.p
          className="mt-4 text-zinc-400 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A comprehensive overview of my professional journey, technical
          expertise, and achievements
        </motion.p>

        {/* Update Date Badge - Now using the manual date */}
        <motion.div
          className="mt-6 inline-flex"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="px-4 py-2 rounded-full bg-gradient-to-r from-zinc-800/70 to-zinc-900/70 border border-zinc-700/30 backdrop-blur-lg shadow-lg">
            <span className="text-sm text-zinc-400">
              Updated on{" "}
              <span className="font-medium text-zinc-300">
                {lastUpdatedDate}
              </span>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="backdrop-blur-xl rounded-[2rem] bg-gradient-to-br from-zinc-900/40 to-black/60 border border-zinc-800/30 p-8 sm:p-12 shadow-2xl"
        >
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl font-bold text-zinc-100 mb-4">
              {data.name}
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-400">
              <a
                href={`mailto:${data.contact.email}`}
                className="hover:text-blue-400 transition-colors"
              >
                {data.contact.email}
              </a>
              <span>{data.contact.phone}</span>
              <a
                href={data.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={data.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                GitHub
              </a>
              {data.contact.portfolio && (
                <a
                  href={data.contact.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Portfolio
                </a>
              )}
            </div>
          </motion.div>

          {/* Summary */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionHeading>Summary</SectionHeading>
            <p className="text-zinc-300 leading-relaxed">{data.summary}</p>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <SectionHeading>Technical Expertise</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="p-4 bg-zinc-900/30 rounded-xl border border-zinc-800/50"
                >
                  <h3 className="font-semibold text-zinc-100 mb-2">
                    {skill.category}
                  </h3>
                  <p className="text-zinc-300">{skill.skills}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Work Experience - New Section */}
          {data.experience && data.experience.length > 0 && (
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <SectionHeading>Work Experience</SectionHeading>
              <div className="space-y-8">
                {data.experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="p-6 bg-zinc-900/30 rounded-xl border border-zinc-800/50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex flex-wrap items-baseline gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-zinc-100">
                        {exp.title} | {exp.company}
                      </h3>
                      <span className="text-zinc-400 text-sm">
                        {exp.duration}
                      </span>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={`${index}-${achievementIndex}`}>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Professional Projects */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <SectionHeading>Professional Projects</SectionHeading>
            <div className="space-y-8">
              {data.projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-zinc-900/30 rounded-xl border border-zinc-800/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex flex-wrap items-baseline gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-zinc-100">
                      {project.role} — {project.title}
                    </h3>
                    {project.link && (
                      <a
                        href={project.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm"
                      >
                        ({project.link.text})
                      </a>
                    )}
                    <span className="text-zinc-400 text-sm">
                      {project.duration}
                    </span>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                    {project.achievements.map(
                      (achievement, achievementIndex) => (
                        <li key={`${index}-${achievementIndex}`}>
                          {achievement}
                        </li>
                      ),
                    )}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <SectionHeading>Achievements & Leadership</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="p-4 bg-zinc-900/30 rounded-xl border border-zinc-800/50"
                >
                  <h3 className="font-semibold text-zinc-100 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-zinc-300">{achievement.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <SectionHeading>Education</SectionHeading>
            <div className="space-y-6">
              {data.education.map((edu, index) => (
                <div
                  key={index}
                  className="p-6 bg-zinc-900/30 rounded-xl border border-zinc-800/50"
                >
                  <h3 className="text-lg font-semibold text-zinc-100">
                    {edu.degree}
                  </h3>
                  <p className="text-zinc-300">
                    {edu.institution} — {edu.score} — {edu.duration}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <FloatingButton />
    </div>
  );
}
