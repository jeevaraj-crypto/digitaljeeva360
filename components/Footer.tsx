import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import { services } from "@/lib/services";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-border bg-ink-soft">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-bold text-white">
              Digital<span className="text-accent">Kavin</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-white/60">
              Digital marketing &amp; paid ads specialist helping Chennai businesses grow with
              SEO, ads, automation, and web development.
            </p>
            <div className="mt-5 flex gap-4">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Digital Kavin on Instagram"
                className="text-white/60 hover:text-accent"
              >
                Instagram
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Digital Kavin on LinkedIn"
                className="text-white/60 hover:text-accent"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/40">
              Navigate
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/65 hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services navigation">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/40">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-white/65 hover:text-accent"
                  >
                    {service.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/40">
              Contact
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-white/65">
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  WhatsApp: {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-accent">
                  {site.email}
                </a>
              </li>
              <li className="text-white/50">
                {site.address.streetAddress}, {site.address.addressLocality},{" "}
                {site.address.addressRegion} {site.address.postalCode}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-ink-border pt-6 text-xs text-white/40">
          &copy; {year} Digital Kavin. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
