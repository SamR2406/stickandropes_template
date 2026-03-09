"use client";

import { useState } from "react";
import HeroBanner from "@/components/HeroBanner";
import { imageBank, site } from "@/data/siteData";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="space-y-8">
      <HeroBanner
        image={imageBank.homeHero}
        eyebrow="Contact"
        title="Get in touch"
        body="We aim to reply as soon as possible and within 5 working days. Please check spam/junk if you have not heard back."
      />

      <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <form onSubmit={handleSubmit} className="section-shell space-y-4">
          <h2 className="text-2xl font-semibold text-forest-950">Send a message</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="field">
              <span>First name</span>
              <input className="input" required />
            </label>
            <label className="field">
              <span>Last name</span>
              <input className="input" required />
            </label>
          </div>

          <label className="field">
            <span>Email</span>
            <input className="input" type="email" required />
          </label>

          <label className="field">
            <span>Message</span>
            <textarea className="input min-h-32" required />
          </label>

          <button type="submit" className="btn-primary">
            Submit
          </button>

          {submitted ? (
            <p className="rounded-lg bg-moss-100 px-3 py-2 text-sm text-forest-900">Thanks for submitting. This form is frontend-only for now.</p>
          ) : null}
        </form>

        <aside className="section-shell">
          <h2 className="text-2xl font-semibold text-forest-950">Contact details</h2>
          <p className="mt-3 text-sm text-forest-800">
            Email: <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p className="text-sm text-forest-800">
            Phone: <a href={`tel:${site.phone.replace(/\s+/g, "")}`}>{site.phone}</a> ({site.contactName})
          </p>
          <p className="mt-3 text-sm text-forest-800">
            Location: {site.locationName}, {site.locationMeeting}, {site.postcode}
          </p>
          <p className="mt-3 text-sm text-forest-800">
            Facebook: <a href={site.facebook} target="_blank" rel="noreferrer">{site.facebook}</a>
          </p>
        </aside>
      </section>
    </div>
  );
}
