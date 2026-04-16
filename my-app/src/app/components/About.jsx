import Image from "next/image";
import imgPerfil from "../images/img_perfil.png";

export default function About() {
  return (
    <section className="section-shell pt-10 md:pt-16" id="home">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="reveal-on-scroll reveal-delay-1 order-2 text-center md:order-1 md:text-left">
          <p className="eyebrow">Software Developer</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl">
            João Gomes
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-slate-300 md:mx-0 md:text-lg">
            IT graduate with hands-on experience in web development.
            Motivated to grow a long-term career in software development,
            continuously improving and contributing to innovative projects.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a
              className="cta-primary w-full sm:w-auto"
              href="mailto:joaogomes2609@gmail.com"
              aria-label="Send email"
            >
              Contact me
            </a>
            <a
              className="cta-secondary w-full sm:w-auto"
              href="/cv/curriculo_2026_cesae.pdf"
              download="Joao_Gomes_CV_2026.pdf"
              aria-label="Download CV"
            >
              Download CV
            </a>
          </div>
          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 md:mx-0">
            <div className="glass-panel p-4 text-center">
              <p className="text-2xl font-semibold text-white">+1 year</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-300">
                of experience
              </p>
            </div>

            <a
              className="glass-panel flex min-h-[94px] items-center justify-center p-4 text-center text-sm font-semibold text-white hover:border-white/30"
              href="https://github.com/JoaoGomes8"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              className="glass-panel flex min-h-[94px] items-center justify-center p-4 text-center text-sm font-semibold text-white hover:border-white/30"
              href="https://www.linkedin.com/in/jo%C3%A3o-gomes-bb7822203"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="reveal-on-scroll reveal-delay-2 order-1 flex justify-center md:order-2 md:justify-end">
          <div className="profile-art">
            <span className="profile-orb profile-orb-one" aria-hidden="true" />
            <span className="profile-orb profile-orb-two" aria-hidden="true" />
            <div className="profile-frame">
              <Image
                className="profile-image"
                src={imgPerfil}
                alt="Photo of Joao Gomes"
                width={420}
                height={420}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 scroll-mt-28 md:mt-28 reveal-on-scroll" id="about">
        <p className="eyebrow text-center reveal-on-scroll reveal-delay-1">About me</p>
        <h2 className="section-title mt-2 text-center reveal-on-scroll reveal-delay-2">Professional Profile</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="glass-panel p-6 md:p-7 reveal-on-scroll reveal-delay-2">
            <h3 className="text-xl font-semibold text-white">Professional Experience</h3>
            <p className="mt-2 text-slate-300">
              Experience through internships and technical roles across web,
              frontend development, telecommunications, and operational support.
            </p>
          </article>
          <article className="glass-panel p-6 md:p-7 reveal-on-scroll reveal-delay-3">
            <h3 className="text-xl font-semibold text-white">Education</h3>
            <p className="mt-2 text-slate-300">
              Higher education in information systems technologies and
              programming, with current specialization at CESAE Digital.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
