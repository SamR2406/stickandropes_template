import HeroBanner from "@/components/HeroBanner";
import { ethosSections, imageBank } from "@/data/siteData";

export const metadata = {
  title: "Ethos | Sticks and Ropes",
  description: "The what, why, and how behind Sticks and Ropes forest school practice.",
};

export default function EthosPage() {
  return (
    <div className="space-y-8">
      <HeroBanner
        image={imageBank.homeFeature}
        eyebrow="Ethos"
        title="Learning that grows through relationship, risk, and real work"
        body="Our practice blends forest school values, child-led inquiry, and grounded facilitation so children can build capability, confidence, and belonging."
      />

      <section className="grid gap-6 md:grid-cols-3">
        {ethosSections.map((section) => (
          <article key={section.title} className="section-shell">
            <h2 className="text-3xl font-semibold text-forest-950">{section.title}</h2>
            <div className="mt-4 space-y-3 text-sm text-forest-800">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
