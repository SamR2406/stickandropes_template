import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";
import { homeEdProgram, imageBank, site } from "@/data/siteData";

export const metadata = {
  title: "Home-Ed | Sticks and Ropes",
  description: "Term-time forest school sessions for home educated and flexi-schooled children aged 8-12.",
};

export default function HomeEdPage() {
  return (
    <div className="space-y-8">
      <HeroBanner
        image={imageBank.homeEdHero}
        eyebrow="Home Education"
        title="Friday woodland sessions for ages 8-12"
        body={homeEdProgram.summary}
        cta={{ label: "Book this block", href: "/payments" }}
      />

      <section className="section-shell">
        <p className="text-sm uppercase tracking-[0.18em] text-forest-700">Current Block</p>
        <h2 className="mt-2 text-3xl font-semibold text-forest-950">{homeEdProgram.blockTitle}</h2>
        <p className="mt-3 text-sm text-forest-800">Dates and activities are subject to change if weather conditions are deemed unsafe.</p>

        <div className="mt-5 overflow-hidden rounded-2xl border border-paper-200">
          <table className="min-w-full divide-y divide-paper-200 text-sm">
            <thead className="bg-paper-100 text-left text-xs uppercase tracking-wider text-forest-700">
              <tr>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Session</th>
                <th className="px-4 py-3">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-paper-100 bg-white">
              {homeEdProgram.schedule.map((item) => (
                <tr key={item.date}>
                  <td className="px-4 py-3 text-forest-900">{item.date}</td>
                  <td className="px-4 py-3 text-forest-900">{item.title}</td>
                  <td className="px-4 py-3 text-forest-700">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="section-shell">
          <h3 className="text-2xl font-semibold text-forest-950">What children can do</h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {homeEdProgram.activities.map((activity) => (
              <li key={activity} className="rounded-lg bg-paper-100 px-3 py-2 text-sm text-forest-800">
                {activity}
              </li>
            ))}
          </ul>
        </article>

        <article className="section-shell">
          <h3 className="text-2xl font-semibold text-forest-950">Exchange and access</h3>
          <p className="mt-3 text-sm text-forest-800">{homeEdProgram.pricing}</p>
          <p className="mt-3 text-sm text-forest-800">{homeEdProgram.support}</p>
          <p className="mt-3 text-sm text-forest-800">
            Location: {site.locationName}, {site.locationMeeting}, {site.postcode}
          </p>
          <p className="mt-3 text-sm text-forest-800">{homeEdProgram.locationNote}</p>
          <p className="mt-3 text-sm text-forest-800">Group facilitators: {homeEdProgram.facilitator}</p>
          <div className="mt-5 flex gap-2">
            <Link href="/payments" className="btn-primary">
              Start booking
            </Link>
            <Link href="/contact" className="btn-secondary">
              Ask a question
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}
