export default function SafaaPortfolio() {
  const skills = {
    frontend: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS", "Flutter"],
    marketing: ["Digital Marketing", "Social Media Management", "Content Creation", "Video Editing", "Community Management"],
    tools: ["Git", "GitHub", "VS Code", "Figma", "Canva"],
  };

  const projects = [
    {
      title: "IBEE Landing Page",
      description:
        "Responsive landing page developed during my internship to present services with a modern UI and clear user journey.",
      stack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/safaamedia/Landing_page",
      demo: "#",
    },
    {
      title: "Media Sharing Web App",
      description:
        "A web application for sharing photos and videos with authentication, upload features, and a clean gallery interface.",
      stack: ["React", "Node.js", "Express", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "IoT Temp Watch",
      description:
        "IoT-inspired dashboard project for temperature monitoring with a frontend interface and backend integration work.",
      stack: ["React", "Flask", "SQLite"],
      github: "https://github.com/safaamedia/IoT_Temp_Watch",
      demo: "#",
    },
    {
      title: "Maâlem Connect",
      description:
        "Service marketplace app concept connecting clients with nearby professionals through a modern and practical mobile experience.",
      stack: ["Flutter", "Node.js", "UI/UX"],
      github: "#",
      demo: "#",
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

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-fuchsia-500/10" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
                Frontend Developer • Digital Marketing Enthusiast
              </p>
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Safaa Ayez
              </h1>
              <p className="mt-4 max-w-xl text-lg text-slate-300 md:text-xl">
                Computer Engineering student building modern web experiences and combining tech with communication, creativity, and digital marketing.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-900 shadow-lg transition hover:scale-[1.02]"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/5"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-900/80 p-5">
                  <p className="text-sm text-slate-400">Focus</p>
                  <p className="mt-2 text-lg font-semibold">Frontend Development</p>
                </div>
                <div className="rounded-2xl bg-slate-900/80 p-5">
                  <p className="text-sm text-slate-400">Secondary Focus</p>
                  <p className="mt-2 text-lg font-semibold">Digital Marketing</p>
                </div>
                <div className="rounded-2xl bg-slate-900/80 p-5 sm:col-span-2">
                  <p className="text-sm text-slate-400">Education</p>
                  <p className="mt-2 text-lg font-semibold">Computer Engineering, Cybersecurity</p>
                  <p className="text-sm text-slate-400">Universiapolis – International University of Agadir</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="mt-4 leading-8 text-slate-300">
              I am a Computer Engineering student specializing in Cybersecurity at Universiapolis. I enjoy building responsive web interfaces, working on practical digital projects, and combining technical skills with communication and creativity.
            </p>
            <p className="mt-4 leading-8 text-slate-300">
              Alongside my studies, I have been active in student leadership, event organization, and digital communication through UFO Club, GDG On Campus, and Lions Club Universiapolis.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl">
            <h2 className="text-3xl font-bold">Quick Info</h2>
            <div className="mt-6 space-y-4 text-slate-300">
              <p><span className="font-semibold text-white">Location:</span> Agadir, Morocco</p>
              <p><span className="font-semibold text-white">Open to:</span> Internships, freelance work, remote opportunities</p>
              <p><span className="font-semibold text-white">Main interests:</span> Frontend development, digital marketing, cybersecurity</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-4">
        <h2 className="text-3xl font-bold">Skills</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { title: "Frontend", items: skills.frontend },
            { title: "Digital Marketing", items: skills.marketing },
            { title: "Tools", items: skills.tools },
          ].map((group) => (
            <div key={group.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold">Projects</h2>
            <p className="mt-2 text-slate-400">A selection of academic and practical work.</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl transition hover:-translate-y-1">
              <div className="rounded-2xl bg-slate-900/90 p-5">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <a href={project.github} className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-900">
                    GitHub
                  </a>
                  <a href={project.demo} className="rounded-xl border border-white/20 px-4 py-2 text-sm font-medium text-white">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-4">
        <h2 className="text-3xl font-bold">Leadership & Activities</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {experiences.map((exp) => (
            <div key={exp.role} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-wide text-cyan-300">{exp.org}</p>
              <h3 className="mt-2 text-xl font-semibold">{exp.role}</h3>
              <p className="mt-3 leading-7 text-slate-300">{exp.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-8 md:p-10">
          <h2 className="text-3xl font-bold">Let’s Work Together</h2>
          <p className="mt-3 max-w-2xl leading-8 text-slate-300">
            I’m open to internships, freelance opportunities, and collaborations in frontend development, digital marketing, and creative digital projects.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="mailto:ayezsafaa@gmail.com" className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-900">
              Email Me
            </a>
            <a href="https://github.com/safaamedia" className="rounded-2xl border border-white/20 px-6 py-3 font-medium text-white">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/safaa-ayez-81b62b29b" className="rounded-2xl border border-white/20 px-6 py-3 font-medium text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
