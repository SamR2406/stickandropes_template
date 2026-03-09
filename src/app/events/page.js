import Link from "next/link";
import EventCalendar from "@/components/EventCalendar";
import HeroBanner from "@/components/HeroBanner";
import { events, imageBank } from "@/data/siteData";

export const metadata = {
  title: "Events and Calendar | Sticks and Ropes",
  description: "Current published session dates and woodland event calendar.",
};

export default function EventsPage() {
  return (
    <div className="space-y-8">
      <HeroBanner
        image={imageBank.eventsHero}
        eyebrow="Events and Calendar"
        title="Published dates for current blocks"
        body="Use the calendar to see upcoming sessions. More dates are added through the year as blocks are confirmed."
        cta={{ label: "Go to payment form", href: "/payments" }}
      />

      <section className="section-shell">
        <EventCalendar events={events} />
      </section>

      <section className="section-shell">
        <h2 className="text-3xl font-semibold text-forest-950">Upcoming published events</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {events.map((event) => (
            <article key={event.id} className="card">
              <p className="text-xs uppercase tracking-wider text-forest-600">{event.type}</p>
              <h3 className="mt-1 text-lg font-semibold text-forest-950">{event.title}</h3>
              <p className="mt-2 text-sm text-forest-800">Date: {event.date}</p>
              <p className="text-sm text-forest-800">Time: {event.time}</p>
              <p className="text-sm text-forest-800">Age: {event.age}</p>
              <p className="text-sm text-forest-800">Location: {event.location}</p>
              <p className="mt-2 text-sm font-semibold text-forest-900">GBP {event.price} per child</p>
              <Link href="/payments" className="btn-primary mt-4">
                Book this session
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
