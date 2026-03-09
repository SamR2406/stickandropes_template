import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";
import { imageBank, site, summerClub } from "@/data/siteData";

export const metadata = {
  title: "Summer Club | Sticks and Ropes",
  description: "Summer club woodland sessions for ages 5+.",
};

export default function SummerClubPage() {
  return (
    <div className="space-y-8">
      <HeroBanner
        image={imageBank.summerHero}
        eyebrow="Summer Club"
        title="Immersive woodland days for ages 5+"
        body={summerClub.intro}
        cta={{ label: "Register interest", href: "/payments" }}
      />

      <section className="section-shell">
        <h2 className="text-3xl font-semibold text-forest-950">How the day flows</h2>
        <p className="mt-3 text-sm text-forest-800">{summerClub.detail}</p>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <article className="card">
            <h3 className="text-xl font-semibold text-forest-950">Morning</h3>
            <ul className="mt-3 space-y-2 text-sm text-forest-800">
              {summerClub.schedule.morning.map((item) => (
                <li key={item} className="rounded-lg bg-paper-100 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="card">
            <h3 className="text-xl font-semibold text-forest-950">Afternoon</h3>
            <ul className="mt-3 space-y-2 text-sm text-forest-800">
              {summerClub.schedule.afternoon.map((item) => (
                <li key={item} className="rounded-lg bg-paper-100 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-shell bg-forest-950 text-paper-50">
        <h2 className="text-3xl font-semibold">Dates and exchange</h2>
        <p className="mt-3 text-sm text-paper-100">{summerClub.dateNote}</p>
        <p className="mt-1 text-sm text-paper-100">{summerClub.pricing}</p>
        <p className="mt-1 text-sm text-paper-100">
          Location: {site.locationMeeting}, {site.postcode}
        </p>
        <p className="mt-1 text-sm text-paper-100">Facilitated by: {summerClub.lead}</p>

        <div className="mt-5 flex gap-2">
          <Link href="/payments" className="btn-primary bg-moss-400 text-forest-950 hover:bg-moss-300">
            Open payment form
          </Link>
          <Link href="/contact" className="btn-secondary border-paper-100/40 bg-transparent text-paper-50 hover:bg-forest-800">
            Contact us
          </Link>
        </div>
      </section>
    </div>
  );
}
