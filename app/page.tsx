"use client";

import { useState } from "react";
import Navbar from "./components/navbar";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SafaaPortfolio() {
  const [darkMode, setDarkMode] = useState(false);

  const skills = {
    frontend: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Flutter",
    ],
    marketing: [
      "Digital Marketing",
      "Social Media Management",
      "Content Creation",
      "Video Editing",
      "Community Management",
    ],
    tools: ["Git", "GitHub", "VS Code", "Figma", "Canva"],
  };

  const projects = [
    {
      title: "IBEE Landing Page",
      description:
        "Responsive landing page developed during my internship to present services with a modern UI and clear user journey.",
      stack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/safaamedia/Landing_page",
      emoji: "✨",
    },
    {
      title: "IoT Temp Watch",
      description:
        "IoT temperature monitoring dashboard project with a React frontend and Flask backend. The application visualizes temperature data and demonstrates IoT-style monitoring concepts.",
      stack: ["React", "Flask", "SQLite"],
      github: "https://github.com/safaamedia/IoT_Temp_Watch",
      emoji: "🌙",
    },
    {
      title: "Maâlem Connect (Work in Progress)",
      description:
        "A mobile service marketplace connecting clients with nearby professionals. I am currently developing this project, so it is still in progress and the GitHub repository will be published once the project is completed.",
      stack: ["Flutter", "Node.js", "UI/UX"],
      github: "#",
      emoji: "💜",
    },
  ];

  const experiences = [
    {
      role: "Secretary General",
      org: "UFO Club Universiapolis",
      text: "Leadership, event coordination, team collaboration, and student initiative management.",
    },
    {
      role: "Organizer",
      org: "GDG On Campus Universiapolis",
      text: "Support for technology events, workshops, and developer community activities.",
    },
    {
      role: "Communication Specialist",
      org: "Lions Club Universiapolis",
      text: "Social media communication, awareness initiatives, event promotion, and community engagement.",
    },
  ];

  const services = [
    { title: "Landing Pages", icon: "💻" },
    { title: "Frontend Interfaces", icon: "🎨" },
    { title: "Content Support", icon: "📱" },
    { title: "Brand Visuals", icon: "✨" },
  ];

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${
        darkMode ? "bg-[#0f0a1a] text-[#e9e3ff]" : "bg-[#faf7ff] text-[#3b2d57]"
      }`}
    >
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            darkMode ? "opacity-100" : "opacity-70"
          }`}
        >
          <div className="absolute left-[8%] top-[18%] h-2 w-2 rounded-full bg-white/70 shadow-[0_0_16px_rgba(255,255,255,0.9)] animate-pulse" />
          <div className="absolute left-[22%] top-[34%] h-1.5 w-1.5 rounded-full bg-violet-200/80 shadow-[0_0_14px_rgba(196,132,252,0.9)] animate-pulse" />
          <div className="absolute right-[14%] top-[22%] h-2 w-2 rounded-full bg-fuchsia-200/80 shadow-[0_0_16px_rgba(244,114,182,0.9)] animate-pulse" />
          <div className="absolute right-[26%] top-[44%] h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_14px_rgba(255,255,255,0.9)] animate-pulse" />
          <div className="absolute left-[16%] bottom-[18%] h-2 w-2 rounded-full bg-violet-200/80 shadow-[0_0_16px_rgba(139,92,246,0.8)] animate-pulse" />
          <div className="absolute right-[10%] bottom-[16%] h-2 w-2 rounded-full bg-fuchsia-200/80 shadow-[0_0_16px_rgba(244,114,182,0.9)] animate-pulse" />
        </div>

        <div
          className={`absolute left-[-8%] top-[-5%] h-80 w-80 rounded-full blur-3xl ${
            darkMode ? "bg-violet-500/20" : "bg-violet-300/35"
          }`}
        />
        <div
          className={`absolute right-[-10%] top-[8%] h-96 w-96 rounded-full blur-3xl ${
            darkMode ? "bg-fuchsia-500/15" : "bg-fuchsia-200/40"
          }`}
        />
        <div
          className={`absolute bottom-[-10%] left-[20%] h-[30rem] w-[30rem] rounded-full blur-3xl ${
            darkMode ? "bg-purple-500/10" : "bg-purple-200/30"
          }`}
        />
        <div
          className={`absolute inset-0 ${
            darkMode
              ? "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]"
              : "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),transparent_35%)]"
          }`}
        />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      {/* Fixed navbar */}
      <div className="fixed left-1/2 top-4 z-50 -translate-x-1/2">
        <div className="flex items-center gap-3">
          <Navbar darkMode={darkMode} />

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`rounded-full px-4 py-2 text-sm font-semibold shadow transition hover:scale-105 ${
              darkMode
                ? "border border-violet-700/50 bg-[#181127] text-violet-100"
                : "border border-violet-300 bg-white/70 text-violet-700"
            }`}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>

      <section
        className={`relative pt-28 ${
          darkMode ? "border-b border-violet-900/40" : "border-b border-violet-100/80"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
          <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div
                className={`mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm shadow-sm backdrop-blur-md transition hover:scale-[1.02] ${
                  darkMode
                    ? "border border-violet-700/40 bg-[#181127] text-violet-200"
                    : "border border-violet-200 bg-white/70 text-violet-600"
                }`}
              >
                <span className="inline-block h-2 w-2 rounded-full bg-violet-500" />
                Frontend Developer • Digital Marketing Enthusiast
              </div>

              <h1 className="bg-gradient-to-r from-[#4c2f7a] via-[#8b5cf6] to-[#c084fc] bg-clip-text text-5xl font-black leading-tight text-transparent md:text-7xl">
                Safaa Ayez
              </h1>

              <p
                className={`mt-5 max-w-2xl text-lg leading-8 md:text-xl ${
                  darkMode ? "text-violet-200/90" : "text-[#5f4b80]"
                }`}
              >
                Computer Engineering student creating modern, elegant, and
                user-friendly digital experiences with a mix of{" "}
                <span className="font-semibold text-violet-400">
                  frontend development
                </span>
                , <span className="font-semibold text-violet-400">creativity</span>,
                and{" "}
                <span className="font-semibold text-violet-400">
                  digital marketing
                </span>
                .
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-400 px-6 py-3 font-semibold text-white shadow-[0_10px_30px_rgba(139,92,246,0.28)] transition hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(139,92,246,0.35)]"
                >
                  Explore My Work
                </a>
                <a
                  href="#contact"
                  className={`rounded-2xl px-6 py-3 font-semibold shadow-sm backdrop-blur transition hover:-translate-y-1 ${
                    darkMode
                      ? "border border-violet-700/40 bg-[#181127] text-violet-100 hover:bg-[#221735]"
                      : "border border-violet-200 bg-white/70 text-violet-700 hover:bg-white"
                  }`}
                >
                  Let’s Connect
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
                {[
                  { label: "Focus", value: "Frontend" },
                  { label: "Creative Side", value: "Marketing" },
                  { label: "Open To", value: "Freelance" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`rounded-[1.75rem] p-5 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-md ${
                      darkMode
                        ? "border border-violet-800/40 bg-[#181127]"
                        : "border border-violet-100 bg-white/80"
                    }`}
                  >
                    <p
                      className={`text-xs uppercase tracking-[0.2em] ${
                        darkMode ? "text-violet-300/80" : "text-violet-400"
                      }`}
                    >
                      {item.label}
                    </p>
                    <p
                      className={`mt-2 text-lg font-bold ${
                        darkMode ? "text-violet-100" : "text-[#4c2f7a]"
                      }`}
                    >
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div
                className={`absolute -left-6 -top-6 h-24 w-24 rounded-3xl blur-2xl ${
                  darkMode ? "bg-violet-500/20" : "bg-violet-300/50"
                }`}
              />
              <div
                className={`absolute -bottom-8 -right-8 h-28 w-28 rounded-full blur-2xl ${
                  darkMode ? "bg-fuchsia-500/15" : "bg-fuchsia-300/40"
                }`}
              />
              <div
                className={`relative rounded-[2rem] p-6 shadow-xl backdrop-blur-2xl ${
                  darkMode
                    ? "border border-violet-800/40 bg-[#181127]"
                    : "border border-violet-100 bg-white/70"
                }`}
              >
                <div
                  className={`mb-4 flex items-center gap-2 text-sm ${
                    darkMode ? "text-violet-300" : "text-violet-500"
                  }`}
                >
                  <span className="h-2 w-2 rounded-full bg-violet-500" />
                  dreamy lavender theme
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div
                    className={`rounded-[1.5rem] p-5 transition hover:scale-[1.02] ${
                      darkMode
                        ? "bg-[#221735]"
                        : "bg-gradient-to-br from-violet-50 to-fuchsia-50"
                    }`}
                  >
                    <p
                      className={`text-sm ${
                        darkMode ? "text-violet-300/80" : "text-violet-400"
                      }`}
                    >
                      Primary Focus
                    </p>
                    <p
                      className={`mt-2 text-xl font-bold ${
                        darkMode ? "text-violet-100" : "text-[#4c2f7a]"
                      }`}
                    >
                      Frontend Development
                    </p>
                  </div>

                  <div
                    className={`rounded-[1.5rem] p-5 transition hover:scale-[1.02] ${
                      darkMode
                        ? "bg-[#221735]"
                        : "bg-gradient-to-br from-fuchsia-50 to-purple-50"
                    }`}
                  >
                    <p
                      className={`text-sm ${
                        darkMode ? "text-violet-300/80" : "text-violet-400"
                      }`}
                    >
                      Secondary Focus
                    </p>
                    <p
                      className={`mt-2 text-xl font-bold ${
                        darkMode ? "text-violet-100" : "text-[#4c2f7a]"
                      }`}
                    >
                      Digital Marketing
                    </p>
                  </div>

                  <div
                    className={`rounded-[1.5rem] p-5 sm:col-span-2 transition hover:scale-[1.01] ${
                      darkMode
                        ? "bg-[#221735]"
                        : "bg-gradient-to-br from-white to-violet-50"
                    }`}
                  >
                    <p
                      className={`text-sm ${
                        darkMode ? "text-violet-300/80" : "text-violet-400"
                      }`}
                    >
                      Education
                    </p>
                    <p
                      className={`mt-2 text-xl font-bold ${
                        darkMode ? "text-violet-100" : "text-[#4c2f7a]"
                      }`}
                    >
                      Computer Engineering, Cybersecurity
                    </p>
                    <p
                      className={`mt-1 text-sm ${
                        darkMode ? "text-violet-300/75" : "text-[#7a6a98]"
                      }`}
                    >
                      Universiapolis – International University of Agadir
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
          <div
            className={`rounded-[2rem] p-8 shadow-sm backdrop-blur-2xl transition hover:-translate-y-1 hover:shadow-md ${
              darkMode
                ? "border border-violet-800/40 bg-[#181127]"
                : "border border-violet-100 bg-white/80"
            }`}
          >
            <p
              className={`text-sm uppercase tracking-[0.25em] ${
                darkMode ? "text-violet-300" : "text-violet-500"
              }`}
            >
              About
            </p>
            <h2
              className={`mt-3 text-3xl font-black ${
                darkMode ? "text-violet-100" : "text-[#4c2f7a]"
              }`}
            >
              A soft, modern portfolio with a creative touch.
            </h2>
            <p
              className={`mt-5 leading-8 ${
                darkMode ? "text-violet-200/90" : "text-[#5f4b80]"
              }`}
            >
              I am a Computer Engineering student specializing in Cybersecurity
              at Universiapolis. I enjoy building responsive web interfaces,
              working on practical digital projects, and mixing technical
              thinking with visual creativity.
            </p>
            <p
              className={`mt-4 leading-8 ${
                darkMode ? "text-violet-200/90" : "text-[#5f4b80]"
              }`}
            >
              Alongside my studies, I have been active in student leadership,
              event organization, community work, and digital communication
              through UFO Club, GDG On Campus, and Lions Club Universiapolis.
            </p>
          </div>

          <div
            className={`rounded-[2rem] p-8 shadow-sm backdrop-blur-2xl transition hover:-translate-y-1 hover:shadow-md ${
              darkMode
                ? "border border-violet-800/40 bg-[#181127]"
                : "border border-violet-100 bg-gradient-to-br from-white to-violet-50"
            }`}
          >
            <p
              className={`text-sm uppercase tracking-[0.25em] ${
                darkMode ? "text-violet-300" : "text-violet-500"
              }`}
            >
              Creative Services
            </p>
            <h2
              className={`mt-3 text-3xl font-black ${
                darkMode ? "text-violet-100" : "text-[#4c2f7a]"
              }`}
            >
              What I can help with
            </h2>
            <div className="mt-6 space-y-3">
              {[
                "Landing Page Design & Development",
                "Frontend Web Interfaces",
                "Social Media Content Support",
                "Digital Marketing Visual Content",
              ].map((service) => (
                <div
                  key={service}
                  className={`rounded-2xl px-4 py-4 shadow-sm transition hover:translate-x-1 ${
                    darkMode
                      ? "border border-violet-800/40 bg-[#221735] text-violet-200/90"
                      : "border border-violet-100 bg-white/80 text-[#5f4b80]"
                  }`}
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-4">
        <p
          className={`text-sm uppercase tracking-[0.25em] ${
            darkMode ? "text-violet-300" : "text-violet-500"
          }`}
        >
          Skills
        </p>
        <h2
          className={`mt-3 text-3xl font-black ${
            darkMode ? "text-violet-100" : "text-[#4c2f7a]"
          }`}
        >
          Tech meets creativity
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { title: "Frontend", items: skills.frontend },
            { title: "Digital Marketing", items: skills.marketing },
            { title: "Tools", items: skills.tools },
          ].map((group, index) => (
            <div
              key={group.title}
              className={`rounded-[2rem] p-6 shadow-sm backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:shadow-md ${
                darkMode
                  ? "border border-violet-800/40 bg-[#181127]"
                  : "border border-violet-100 bg-white/80"
              }`}
            >
              <div
                className={`mb-4 inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                  index === 0
                    ? darkMode
                      ? "bg-violet-500/15 text-violet-200"
                      : "bg-violet-100 text-violet-600"
                    : index === 1
                    ? darkMode
                      ? "bg-fuchsia-500/15 text-fuchsia-200"
                      : "bg-fuchsia-100 text-fuchsia-600"
                    : darkMode
                    ? "bg-purple-500/15 text-purple-200"
                    : "bg-purple-100 text-purple-600"
                }`}
              >
                {group.title}
              </div>

              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`rounded-full px-4 py-2 text-sm shadow-sm transition hover:scale-[1.04] ${
                      darkMode
                        ? "border border-violet-800/40 bg-[#221735] text-violet-200/90"
                        : "border border-violet-100 bg-gradient-to-r from-white to-violet-50 text-[#5f4b80]"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <p
          className={`text-sm uppercase tracking-[0.25em] ${
            darkMode ? "text-violet-300" : "text-violet-500"
          }`}
        >
          Projects
        </p>
        <h2
          className={`mt-3 text-3xl font-black ${
            darkMode ? "text-violet-100" : "text-[#4c2f7a]"
          }`}
        >
          Selected work
        </h2>
        <p className={`${darkMode ? "text-violet-300/75" : "text-[#7a6a98]"} mt-2`}>
          Interactive cards, elegant gradients, and a dreamy lavender vibe.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-[2rem] p-6 backdrop-blur-2xl transition duration-300 hover:-translate-y-2 hover:rotate-[0.3deg] hover:shadow-xl ${
                darkMode
                  ? "border border-violet-800/40 bg-[#181127] shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
                  : "border border-violet-100 bg-white/85 shadow-sm"
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-400 via-fuchsia-300 to-purple-300" />
              <div
                className={`absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl transition duration-300 group-hover:scale-125 ${
                  darkMode ? "bg-violet-400/20" : "bg-violet-100/70"
                }`}
              />

              <div className="mb-4 flex items-center justify-between">
                <span className="text-3xl transition duration-300 group-hover:scale-110">
                  {project.emoji}
                </span>
                <span className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400 px-3 py-1 text-xs font-bold text-white shadow-sm">
                  Project
                </span>
              </div>

              <h3
                className={`text-2xl font-bold ${
                  darkMode ? "text-violet-100" : "text-[#4c2f7a]"
                }`}
              >
                {project.title}
              </h3>

              <p
                className={`mt-3 leading-7 ${
                  darkMode ? "text-violet-200/85" : "text-[#5f4b80]"
                }`}
              >
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className={`rounded-full px-3 py-1 text-xs transition ${
                      darkMode
                        ? "bg-violet-500/10 text-violet-100 hover:bg-violet-500/20"
                        : "bg-violet-50 text-[#6b5a8a] hover:bg-violet-100"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.github !== "#" ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-400 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
                  >
                    GitHub
                  </a>
                ) : (
                  <span
                    className={`rounded-xl px-4 py-2 text-sm font-semibold ${
                      darkMode
                        ? "border border-violet-700/50 bg-violet-500/10 text-violet-200"
                        : "border border-violet-200 bg-violet-50 text-violet-700"
                    }`}
                  >
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div
          className={`rounded-[2rem] border p-6 backdrop-blur-2xl transition duration-300 ${
            darkMode
              ? "border-violet-800/40 bg-[#181127]"
              : "border-violet-100 bg-white/70"
          }`}
        >
          <p
            className={`text-sm uppercase tracking-[0.25em] ${
              darkMode ? "text-violet-300" : "text-violet-500"
            }`}
          >
            Freelance Services
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className={`rounded-[1.5rem] border p-5 text-center transition duration-300 hover:-translate-y-1 hover:scale-[1.02] ${
                  darkMode
                    ? "border-violet-800/40 bg-[#221735]"
                    : "border-violet-100 bg-gradient-to-br from-white to-violet-50"
                }`}
              >
                <div className="text-3xl">{service.icon}</div>
                <p
                  className={`mt-3 font-semibold ${
                    darkMode ? "text-violet-100" : "text-[#4c2f7a]"
                  }`}
                >
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-4">
        <p
          className={`text-sm uppercase tracking-[0.25em] ${
            darkMode ? "text-violet-300" : "text-violet-500"
          }`}
        >
          Leadership
        </p>
        <h2
          className={`mt-3 text-3xl font-black ${
            darkMode ? "text-violet-100" : "text-[#4c2f7a]"
          }`}
        >
          Activities & community work
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {experiences.map((exp, index) => (
            <div
              key={exp.role}
              className={`rounded-[2rem] p-6 shadow-sm backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:shadow-md ${
                darkMode
                  ? "border border-violet-800/40 bg-[#181127]"
                  : "border border-violet-100 bg-white/80"
              }`}
            >
              <div
                className={`mb-4 inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                  index === 0
                    ? darkMode
                      ? "bg-violet-500/15 text-violet-200"
                      : "bg-violet-100 text-violet-600"
                    : index === 1
                    ? darkMode
                      ? "bg-fuchsia-500/15 text-fuchsia-200"
                      : "bg-fuchsia-100 text-fuchsia-600"
                    : darkMode
                    ? "bg-purple-500/15 text-purple-200"
                    : "bg-purple-100 text-purple-600"
                }`}
              >
                {exp.org}
              </div>

              <h3
                className={`text-xl font-bold ${
                  darkMode ? "text-violet-100" : "text-[#4c2f7a]"
                }`}
              >
                {exp.role}
              </h3>

              <p
                className={`mt-3 leading-7 ${
                  darkMode ? "text-violet-200/85" : "text-[#5f4b80]"
                }`}
              >
                {exp.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <div
          className={`relative overflow-hidden rounded-[2rem] border p-8 shadow-sm md:p-10 ${
            darkMode
              ? "border-violet-800/40 bg-[#181127]"
              : "border-violet-100 bg-gradient-to-r from-white via-violet-50 to-fuchsia-50"
          }`}
        >
          <div
            className={`absolute -right-10 top-0 h-40 w-40 rounded-full blur-3xl ${
              darkMode ? "bg-fuchsia-500/15" : "bg-fuchsia-200/40"
            }`}
          />
          <div
            className={`absolute bottom-0 left-0 h-40 w-40 rounded-full blur-3xl ${
              darkMode ? "bg-violet-500/15" : "bg-violet-200/40"
            }`}
          />

          <div className="relative">
            <p
              className={`text-sm uppercase tracking-[0.25em] ${
                darkMode ? "text-violet-300" : "text-violet-500"
              }`}
            >
              Contact
            </p>
            <h2
              className={`mt-3 text-3xl font-black ${
                darkMode ? "text-violet-100" : "text-[#4c2f7a]"
              }`}
            >
              Let’s build something elegant together
            </h2>
            <p
              className={`mt-3 max-w-2xl leading-8 ${
                darkMode ? "text-violet-200/90" : "text-[#5f4b80]"
              }`}
            >
              I’m open to internships, freelance opportunities, and collaborations
              in frontend development, digital marketing, and creative digital
              projects.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:ayezsafaa@gmail.com?subject=Portfolio%20Inquiry"
                className="rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-400 px-6 py-3 font-semibold text-white shadow-sm transition hover:-translate-y-1"
              >
                Email Me
              </a>
              <a
                href="https://github.com/safaamedia"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-2xl px-6 py-3 font-semibold shadow-sm transition hover:-translate-y-1 ${
                  darkMode
                    ? "border border-violet-700/40 bg-[#221735] text-violet-100 hover:bg-[#2a1e41]"
                    : "border border-violet-200 bg-white/80 text-violet-700 hover:bg-white"
                }`}
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/safaa-ayez-81b62b29b"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-2xl px-6 py-3 font-semibold shadow-sm transition hover:-translate-y-1 ${
                  darkMode
                    ? "border border-violet-700/40 bg-[#221735] text-violet-100 hover:bg-[#2a1e41]"
                    : "border border-violet-200 bg-white/80 text-violet-700 hover:bg-white"
                }`}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
