import Image from "next/image";
import HeroBanner from "@/components/HeroBanner";
import { facilitators, founders, imageBank, policyDocs } from "@/data/siteData";

export const metadata = {
  title: "About Us | Sticks and Ropes",
  description: "Meet the facilitators and find policy documents.",
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <HeroBanner
        image={imageBank.homeTexture}
        eyebrow="About Us"
        title="Facilitators rooted in practice"
        body="Meet the current team and the founders who helped establish Sticks and Ropes."
      />

      <section className="grid gap-6 lg:grid-cols-2">
        {facilitators.map((person) => (
          <article key={person.name} className="section-shell overflow-hidden">
            <div className="relative h-64 overflow-hidden rounded-2xl">
              <Image src={person.image} alt={person.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-forest-950">{person.name}</h2>
            <p className="text-sm font-semibold text-forest-700">{person.role}</p>
            <p className="mt-3 text-sm text-forest-800">{person.bio}</p>
            <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-forest-700">Qualifications</h3>
            <ul className="mt-2 space-y-2">
              {person.qualifications.map((item) => (
                <li key={item} className="rounded-lg bg-paper-100 px-3 py-2 text-sm text-forest-800">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="section-shell">
          <h2 className="text-2xl font-semibold text-forest-950">Founders and previous facilitators</h2>
          <ul className="mt-4 space-y-2 text-sm text-forest-800">
            {founders.map((founder) => (
              <li key={founder} className="rounded-lg bg-paper-100 px-3 py-2">
                {founder}
              </li>
            ))}
          </ul>
        </article>

        <article className="section-shell">
          <h2 className="text-2xl font-semibold text-forest-950">Policies and safeguarding</h2>
          <ul className="mt-4 space-y-2">
            {policyDocs.map((doc) => (
              <li key={doc.href}>
                <a href={doc.href} target="_blank" className="btn-secondary">
                  {doc.label}
                </a>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
}
