export default function Contact() {
  return (
    <section className="section-shell mt-16 scroll-mt-28 pb-12 md:mt-24" id="contact">
      <p className="eyebrow text-center reveal-on-scroll">Contact</p>
      <h2 className="section-title mt-2 text-center reveal-on-scroll reveal-delay-1">Let&apos;s build something great</h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-slate-300 reveal-on-scroll reveal-delay-2">
        I am currently looking for an opportunity to work in the software field.
        If your team is hiring, I would be happy to discuss how I can contribute.
      </p>

      <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
        <a className="contact-card reveal-on-scroll reveal-delay-1" href="mailto:joaogomes2609@gmail.com">
          <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Email</p>
          <p className="mt-2 text-white">joaogomes2609@gmail.com</p>
        </a>
        <a className="contact-card reveal-on-scroll reveal-delay-2" href="tel:+351926348208">
          <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Phone</p>
          <p className="mt-2 text-white">+351 926 348 208</p>
        </a>
        <a className="contact-card reveal-on-scroll reveal-delay-3" href="https://www.linkedin.com/in/jo%C3%A3o-gomes-bb7822203" target="_blank" rel="noreferrer">
          <p className="text-xs uppercase tracking-[0.14em] text-slate-400">LinkedIn</p>
          <p className="mt-2 text-white">linkedin.com/in/joao-gomes-bb7822203</p>
        </a>
      </div>
    </section>
  );
}
