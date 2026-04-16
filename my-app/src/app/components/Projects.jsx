const projects = [
  {
    title: "Sales Dashboard",
    description:
      "Dashboard with KPIs, filters and tables for real-time commercial tracking.",
    tech: ["Next.js", "Tailwind", "Chart.js"],
    live: "#",
    repo: "#",
  },
  {
    title: "Landing Page SaaS",
    description:
      "Conversion-focused page with high performance, technical SEO and lead-driven sections.",
    tech: ["React", "Sass", "GSAP"],
    live: "#",
    repo: "#",
  },
  {
    title: "Scheduling System",
    description:
      "Complete scheduling flow with authentication, confirmations and a customer area.",
    tech: ["Next.js", "Node.js", "SQL"],
    live: "#",
    repo: "#",
  },
];

export default function Projects() {
  return (
    <section className="section-shell mt-16 scroll-mt-28 md:mt-24" id="projects">
      <p className="eyebrow text-center">Projects</p>
      <h2 className="section-title mt-2 text-center">Featured Work</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <a className="cta-secondary text-sm" href={project.live}>
                Live demo
              </a>
              <a className="cta-secondary text-sm" href={project.repo}>
                Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
