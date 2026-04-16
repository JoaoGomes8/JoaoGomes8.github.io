import CardSkills from "./CardSkills";

export default function Skills() {
  const skills = [
    { text: "HTML/CSS", image: "/images/html.png", level: "Advanced" },
    { text: "Sass", image: "/images/sass.png", level: "Advanced" },
    { text: "JavaScript", image: "/images/js.png", level: "Advanced" },
    { text: "Tailwind CSS", image: "/images/tailwind.png", level: "Advanced" },
    { text: "React", image: "/images/react.png", level: "Advanced" },
    { text: "Vue", image: "/images/vue.png", level: "Intermediate" },
    { text: "Laravel", image: "/images/laravel.png", level: "Intermediate" },
    { text: "Node.js", image: "/images/node.png", level: "Intermediate" },
    { text: "SQL", image: "/images/sql.png", level: "Intermediate" },
    { text: "Git", image: "/images/git.png", level: "Advanced" },
    { text: "PHP", image: "/images/php.png", level: "Intermediate" },
    { text: "C#", image: "/images/c.png", level: "Intermediate" },
    { text: "Kotlin", image: "/images/kotlin.png", level: "Beginner" },
  ];

  return (
    <section className="section-shell mt-16 scroll-mt-28 md:mt-24" id="skills">
      <p className="eyebrow text-center reveal-on-scroll">Technical skills</p>
      <h2 className="section-title mt-2 text-center reveal-on-scroll reveal-delay-1">Main Stack</h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-slate-300 reveal-on-scroll reveal-delay-2">
        Core toolkit focused on web development and collaboration tools to
        build robust and scalable products.
      </p>
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <CardSkills
            key={skill.text}
            text={skill.text}
            image={skill.image}
            level={skill.level}
            delay={index * 70}
          />
        ))}
      </div>
    </section>
  );
}
