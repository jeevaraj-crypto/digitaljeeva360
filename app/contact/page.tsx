import type { Metadata } from "next";
import { site, whatsappLink, absoluteUrl } from "@/lib/site";
import { organizationSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact Digital Kavin | Digital Marketer in Chennai",
  description:
    "Get in touch with Digital Kavin for SEO, paid ads, AI automation, or website development in Chennai. WhatsApp, email, or send a message directly.",
  alternates: { canonical: absoluteUrl("/contact") },
  openGraph: {
    url: absoluteUrl("/contact"),
    title: "Contact Digital Kavin",
    description: "Get in touch for a free digital marketing audit.",
  },
};

const mapQuery = encodeURIComponent(
  `${site.address.streetAddress}, ${site.address.addressLocality}, ${site.address.addressRegion}`
);

export default function ContactPage() {
  return (
    <div className="container-page section">
      <JsonLd data={organizationSchema()} />
      <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />

      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">CONTACT</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold text-white sm:text-5xl">
          Let&apos;s talk about growing your business
        </h1>
        <p className="mt-5 max-w-2xl text-white/65">
          Fill out the form below, message on WhatsApp, or email directly — whichever&apos;s
          easiest for you.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_380px]">
        <Reveal delay={80}>
          <ContactForm />
        </Reveal>

        <Reveal delay={120}>
          <div className="space-y-8">
            <div className="rounded-2xl border border-ink-border bg-ink-soft p-6">
              <h2 className="font-display text-lg font-semibold text-white">Direct contact</h2>
              <div className="mt-4 space-y-3 text-sm">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-semibold text-[#25D366] hover:underline"
                >
                  WhatsApp: {site.phoneDisplay}
                </a>
                <a href={`mailto:${site.email}`} className="block text-white/70 hover:text-accent">
                  {site.email}
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-ink-border bg-ink-soft p-6">
              <h2 className="font-display text-lg font-semibold text-white">Business hours</h2>
              <p className="mt-3 text-sm text-white/65">Monday – Saturday: 10:00 AM – 7:00 PM</p>
              <p className="mt-2 text-sm text-white/50">
                Typical response time: within 24 hours.
              </p>
            </div>

            <div className="rounded-2xl border border-ink-border bg-ink-soft p-6">
              <h2 className="font-display text-lg font-semibold text-white">Location</h2>
              <p className="mt-3 text-sm text-white/65">
                {site.address.streetAddress}
                <br />
                {site.address.addressLocality}, {site.address.addressRegion}{" "}
                {site.address.postalCode}
                <br />
                {site.address.addressCountry === "IN" ? "India" : site.address.addressCountry}
              </p>
              <p className="mt-2 text-xs text-white/35">
                Placeholder address — update with the real office location.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={160}>
        <div className="mt-16 overflow-hidden rounded-2xl border border-ink-border">
          <iframe
            title="Digital Kavin location map, Chennai"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            width="100%"
            height="360"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Reveal>
    </div>
  );
}
