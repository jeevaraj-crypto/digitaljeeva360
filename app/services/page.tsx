import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/site";
import { services } from "@/lib/services";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Digital Marketing Services in Chennai | Digital Kavin",
  description:
    "SEO, Paid Ads, AI Automation, and Website Development services for businesses in Chennai — explore each service in detail.",
  alternates: { canonical: absoluteUrl("/services") },
  openGraph: {
    url: absoluteUrl("/services"),
    title: "Digital Marketing Services in Chennai | Digital Kavin",
    description:
      "SEO, Paid Ads, AI Automation, and Website Development services for Chennai businesses.",
  },
};

export default function ServicesPage() {
  return (
    <div className="container-page section">
      <Breadcrumbs items={[{ name: "Services", path: "/services" }]} />

      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          SERVICES
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold text-white sm:text-5xl">
          Digital marketing services for Chennai businesses
        </h1>
        <p className="mt-5 max-w-2xl text-white/65">
          Four core services, each built around a clear, measurable outcome — more organic
          traffic, more qualified leads from ads, fewer manual hours, or a website that
          actually converts.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={i * 80}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="mt-16 space-y-16">
          {services.map((service) => (
            <article key={service.slug} id={service.slug} className="scroll-mt-24 border-t border-ink-border pt-12">
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                {service.name}
              </h2>
              <p className="mt-4 max-w-3xl text-white/65">{service.whatItIs}</p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-5 inline-block text-sm font-semibold text-accent hover:underline"
              >
                Read more about {service.shortName} →
              </Link>
            </article>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
