const experience = [
  {
    period: "2023 - 2024",
    role: "Front-end Developer (Professional Internship)",
    company: "MOG Technologies, Maia",
    details: "Frontend interface development and collaboration with the technical team.",
  },
  {
    period: "2021 - 2022",
    role: "Web Developer (Curricular Internship)",
    company: "Weblevel, Matosinhos",
    details: "6-month curricular internship implementing web features focused on frontend development.",
  },
  {
    period: "2018 - 2019",
    role: "Technical Internships",
    company: "CPCdi and Thyssenkrupp",
    details: "Computer assembly and technical maintenance/repair.",
  },
];

const education = [
  {
    period: "2025 - 2026",
    course: "Level 5 Course: Programming and Information Systems Specialist",
    school: "CESAE Digital, Porto",
    details: "Currently in progress.",
  },
  {
    period: "2022",
    course: "Web Design Training (175 hours)",
    school: "IEFP, Distance Learning",
    details: "Practical specialization in web development and design.",
  },
  {
    period: "2019 - 2021",
    course: "Higher Education: Information Systems Technologies and Programming",
    school: "IPMAIA, Maia",
    details: "Academic foundation in software and systems development.",
  },
  {
    period: "2016 - 2019",
    course: "Level 4 Professional Course: Electronics, Automation and Computers Technician",
    school: "ESTEL, Ramalde",
    details: "Technical foundations in electronics and computing.",
  },
];

export default function Experience() {
  return (
    <section className="section-shell mt-16 scroll-mt-28 md:mt-24" id="experience">
      <p className="eyebrow text-center reveal-on-scroll">Professional experience</p>
      <h2 className="section-title mt-2 text-center reveal-on-scroll reveal-delay-1">Career Path</h2>
      <div className="mx-auto mt-10 max-w-4xl space-y-4">
        {experience.map((item, index) => (
          <article
            className="glass-panel p-5 md:p-6 reveal-on-scroll"
            style={{ "--reveal-delay": `${index * 90}ms` }}
            key={`${item.period}-${item.role}`}
          >
            <p className="text-xs uppercase tracking-[0.16em] text-slate-400">{item.period}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{item.role}</h3>
            <p className="mt-1 text-sm text-slate-300">{item.company}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">{item.details}</p>
          </article>
        ))}
      </div>

      <p className="eyebrow mt-12 text-center reveal-on-scroll">Education and training</p>
      <h3 className="mt-2 text-center text-2xl font-semibold text-white reveal-on-scroll reveal-delay-1">Courses</h3>
      <div className="mx-auto mt-8 max-w-4xl space-y-4">
        {education.map((item, index) => (
          <article
            className="glass-panel p-5 md:p-6 reveal-on-scroll"
            style={{ "--reveal-delay": `${index * 90}ms` }}
            key={`${item.period}-${item.course}`}
          >
            <p className="text-xs uppercase tracking-[0.16em] text-slate-400">{item.period}</p>
            <h4 className="mt-2 text-lg font-semibold text-white">{item.course}</h4>
            <p className="mt-1 text-sm text-slate-300">{item.school}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">{item.details}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
