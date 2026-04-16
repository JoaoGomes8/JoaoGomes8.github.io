import Image from "next/image";

export default function CardSkills({ text, image, level, delay = 0 }) {
  return (
    <article
      className="skill-card reveal-on-scroll flex flex-col gap-5 rounded-2xl p-6 md:p-7"
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      <div className="relative h-[54px] w-[54px] md:h-[64px] md:w-[64px]">
        <Image
          className="object-contain"
          src={image}
          alt={text}
          fill
          sizes="64px"
        />
      </div>
      <div>
        <p className="text-lg font-semibold text-white">{text}</p>
        <p className="mt-1 text-sm text-slate-300">{level}</p>
      </div>
    </article>
  );
}
