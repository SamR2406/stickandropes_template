import HeroBanner from "@/components/HeroBanner";
import { deepDiveStories, imageBank, storyTerms } from "@/data/siteData";

export const metadata = {
  title: "Stories | Sticks and Ropes",
  description: "Seasonal story arcs and project themes from Sticks and Ropes sessions.",
};

export default function StoriesPage() {
  return (
    <div className="space-y-8">
      <HeroBanner
        image={imageBank.storiesHero}
        eyebrow="Stories"
        title="Seasonal themes and project journeys"
        body="A look at how session narratives have developed over the years, shaped by seasons, woodland context, and the children themselves."
      />

      <section className="section-shell">
        <p className="text-sm uppercase tracking-[0.18em] text-forest-700">Story Timeline</p>
        <div className="stagger mt-4 grid gap-4 md:grid-cols-2">
          {storyTerms.map((term) => (
            <article key={`${term.term}-${term.title}`} className="card">
              <p className="text-xs uppercase tracking-wider text-forest-600">{term.term}</p>
              <h2 className="mt-2 text-xl font-semibold text-forest-950">{term.title}</h2>
              <p className="mt-3 text-sm text-forest-800">{term.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="section-shell">
          <h2 className="text-2xl font-semibold text-forest-950">Deep Dive: Make This Island Your Home</h2>
          <ul className="mt-4 space-y-2 text-sm text-forest-800">
            {deepDiveStories.islandWeek.map((item) => (
              <li key={item} className="rounded-lg bg-paper-100 px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="section-shell">
          <h2 className="text-2xl font-semibold text-forest-950">Deep Dive: Festival of Colours</h2>
          <ul className="mt-4 space-y-2 text-sm text-forest-800">
            {deepDiveStories.coloursWeek.map((item) => (
              <li key={item} className="rounded-lg bg-paper-100 px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
}
