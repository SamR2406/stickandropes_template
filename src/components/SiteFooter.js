import Link from "next/link";
import { policyDocs, site } from "@/data/siteData";

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-forest-700/30 bg-forest-950 text-paper-100">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h2 className="text-lg font-semibold text-paper-50">{site.name}</h2>
          <p className="mt-2 text-sm text-moss-200">{site.subtitle}</p>
          <p className="mt-4 text-sm text-paper-200">{site.locationName}</p>
          <p className="text-sm text-paper-200">{site.locationMeeting}</p>
          <p className="text-sm text-paper-200">{site.postcode}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-moss-200">Policies</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {policyDocs.map((doc) => (
              <li key={doc.href}>
                <Link href={doc.href} target="_blank" className="link-soft">
                  {doc.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-moss-200">Contact</h3>
          <p className="mt-3 text-sm">
            <a href={`mailto:${site.email}`} className="link-soft">
              {site.email}
            </a>
          </p>
          <p className="text-sm">
            <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="link-soft">
              {site.phone} ({site.contactName})
            </a>
          </p>
          <p className="mt-3 text-sm">
            <a href={site.facebook} target="_blank" rel="noreferrer" className="link-soft">
              Find us on Facebook
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
