"use client";

import { motion } from "framer-motion";
import { Github, Mail, Phone, ExternalLink, Download } from "lucide-react";
import ThemeToggle from "./components/ThemeToggle";

function ProjectCard({ title, desc, github, live }: any) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="p-6 rounded-2xl bg-white/5 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">{desc}</p>

      <div className="flex justify-between mt-4 text-sm">
        <a href={github} target="_blank" className="flex items-center gap-1 hover:underline">
          <Github size={16}/> Code
        </a>
        <a href={live} target="_blank" className="flex items-center gap-1 hover:underline">
          <ExternalLink size={16}/> Live
        </a>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const skills = [
    "C++",
    "JavaScript",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "DSA",
    "Git & GitHub",
  ];

  return (
    <main className="min-h-screen px-6 md:px-20 py-16">
      <ThemeToggle />

      {/* HERO */}
      <section className="text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Joydeep Gharami
        </motion.h1>

        <p className="text-lg text-gray-600 dark:text-gray-400">
          Full Stack Developer | B.Tech CSE 2027 | IIIT Sonepat
        </p>

        <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
          Building scalable web applications and solving real-world problems
          with strong foundations in Data Structures & Algorithms.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://github.com/Joydeep663-2003"
            target="_blank"
            className="px-6 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black"
          >
            View GitHub
          </a>

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-black dark:border-white"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </section>

      {/* SKILLS */}
      <section className="mt-20">
        <h2 className="text-3xl font-semibold text-center mb-8">Tech Stack</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.08 }}
              className="p-6 text-center rounded-xl bg-gray-100 dark:bg-gray-900"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mt-24">
        <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <ProjectCard
            title="E-Commerce Platform"
            desc="Full-stack e-commerce app with product management and cart."
            github="https://github.com/Joydeep663-2003/E-Commerce-"
            live="https://e-commerce-xi-jade.vercel.app/"
          />

          <ProjectCard
            title="YouTube Clone"
            desc="Modern video streaming UI clone with responsive design."
            github="https://github.com/Joydeep663-2003/Youtube-clone"
            live="https://youtube-clone-pi-amber.vercel.app/"
          />

          <ProjectCard
            title="Quick Sign"
            desc="Digital document signing platform with secure auth."
            github="https://github.com/Joydeep663-2003/quick-sign"
            live="https://quick-sign-murex.vercel.app/"
          />
        </div>
      </section>

      {/* CONTACT */}
      <section className="mt-24 text-center space-y-4">
        <h2 className="text-3xl font-semibold">Contact</h2>

        <div className="flex flex-col items-center gap-3 text-gray-600 dark:text-gray-400">
          <p className="flex items-center gap-2">
            <Mail size={18}/> joydeepgharami@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <Phone size={18}/> +91 8017197514
          </p>
          <a
            href="https://github.com/Joydeep663-2003"
            target="_blank"
            className="flex items-center gap-2 hover:underline"
          >
            <Github size={18}/> GitHub Profile
          </a>
        </div>
      </section>
    </main>
  );
}
