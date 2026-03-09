import Image from "next/image";
import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";
import {
  benefits,
  homeEdProgram,
  homeOfferings,
  imageBank,
  latestNews,
  pedagogies,
  site,
  summerClub,
} from "@/data/siteData";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <HeroBanner
        image={imageBank.homeHero}
        eyebrow="Forest School in Sheffield"
        title="Outdoor learning that keeps its feet in the mud and its heart in community"
        body="Sticks and Ropes offers home education and holiday club sessions where children build practical skills, confidence, and meaningful relationships with the natural world."
        cta={{ label: "Book and Pay", href: "/payments" }}
      />

      <section className="section-shell rise-in">
        <p className="text-sm uppercase tracking-[0.18em] text-forest-700">Welcome</p>
        <h2 className="mt-2 text-3xl font-semibold text-forest-950">Discover Sticks and Ropes</h2>
        <p className="mt-4 max-w-4xl text-forest-800">
          We run within the 32-acre Newfield Spring Wood, an ancient bluebell woodland in the southeast of Sheffield. The woods are both classroom and community home, and children are encouraged to contribute back through stewardship as they learn.
        </p>
        <blockquote className="mt-5 rounded-2xl border-l-4 border-sun-500 bg-paper-100 p-4 text-forest-800">
          &quot;{site.motto}&quot; <span className="font-semibold">- {site.mottoBy}</span>
        </blockquote>
      </section>

      <section className="section-shell">
        <p className="text-sm uppercase tracking-[0.18em] text-forest-700">What We Do</p>
        <div className="stagger mt-4 grid gap-4 md:grid-cols-3">
          {homeOfferings.map((offering) => (
            <article className="card" key={offering.title}>
              <h3 className="text-xl font-semibold text-forest-950">{offering.title}</h3>
              <p className="mt-3 text-sm text-forest-800">{offering.body}</p>
              <Link href={offering.cta.href} className="btn-secondary mt-4">
                {offering.cta.label}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="section-shell overflow-hidden">
          <div className="relative h-56 overflow-hidden rounded-2xl">
            <Image src={imageBank.homeFeature} alt="Children learning around the fire" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <h3 className="mt-5 text-2xl font-semibold text-forest-950">Nature-based educational pedagogies</h3>
          <ul className="mt-3 space-y-2 text-sm text-forest-800">
            {pedagogies.map((pedagogy) => (
              <li key={pedagogy} className="rounded-lg bg-paper-100 px-3 py-2">
                {pedagogy}
              </li>
            ))}
          </ul>
        </article>

        <article className="section-shell overflow-hidden">
          <div className="relative h-56 overflow-hidden rounded-2xl">
            <Image src={imageBank.homeTexture} alt="Woodland craft table and natural materials" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <h3 className="mt-5 text-2xl font-semibold text-forest-950">Benefits of outdoor learning</h3>
          <ul className="mt-3 space-y-2 text-sm text-forest-800">
            {benefits.map((benefit) => (
              <li key={benefit} className="rounded-lg bg-paper-100 px-3 py-2">
                {benefit}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section-shell">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-forest-700">Current Groups</p>
            <h2 className="mt-2 text-3xl font-semibold text-forest-950">Programs running now</h2>
          </div>
          <Link href="/events" className="btn-secondary">
            View full calendar
          </Link>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <article className="card">
            <h3 className="text-xl font-semibold text-forest-950">{homeEdProgram.title}</h3>
            <p className="mt-2 text-sm text-forest-800">Term time sessions every Friday, 9am-2pm, ages 8-12.</p>
            <p className="mt-2 text-sm font-semibold text-forest-900">{homeEdProgram.pricing}</p>
            <div className="mt-4 flex gap-2">
              <Link href="/home-ed" className="btn-secondary">
                Details
              </Link>
              <Link href="/payments" className="btn-primary">
                Book
              </Link>
            </div>
          </article>

          <article className="card">
            <h3 className="text-xl font-semibold text-forest-950">{summerClub.title}</h3>
            <p className="mt-2 text-sm text-forest-800">Immersive holiday sessions, mixed age group 5-12, with practical tasks and free-flow woodland play.</p>
            <p className="mt-2 text-sm font-semibold text-forest-900">{summerClub.pricing}</p>
            <div className="mt-4 flex gap-2">
              <Link href="/summer-club" className="btn-secondary">
                Details
              </Link>
              <Link href="/payments" className="btn-primary">
                Register interest
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section-shell">
        <p className="text-sm uppercase tracking-[0.18em] text-forest-700">Latest News</p>
        <div className="stagger mt-4 grid gap-4 md:grid-cols-3">
          {latestNews.map((item) => (
            <article key={item.title} className="card">
              <p className="text-xs uppercase tracking-wider text-forest-600">{item.date}</p>
              <h3 className="mt-2 text-lg font-semibold text-forest-950">{item.title}</h3>
              <p className="mt-2 text-sm text-forest-800">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell bg-forest-950 text-paper-50">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Ready to talk about your child joining?</h2>
            <p className="mt-2 text-sm text-paper-100">We aim to respond within 5 working days.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/contact" className="btn-primary bg-moss-400 text-forest-950 hover:bg-moss-300">
              Contact us
            </Link>
            <Link href="/payments" className="btn-secondary border-paper-50/30 bg-transparent text-paper-50 hover:bg-forest-800">
              Open payment form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
