import Image from "next/image";
import Link from "next/link";

export default function HeroBanner({ image, eyebrow, title, body, cta }) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-paper-100/20 bg-forest-900 text-paper-50 shadow-soft">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/80 to-forest-900/50" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
        {eyebrow ? <p className="text-sm uppercase tracking-[0.2em] text-moss-200">{eyebrow}</p> : null}
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base text-paper-100 sm:text-lg">{body}</p>
        {cta ? (
          <Link href={cta.href} className="btn-primary mt-8 inline-flex">
            {cta.label}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
