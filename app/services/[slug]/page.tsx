import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { absoluteUrl, whatsappLink } from "@/lib/site";
import { services, getServiceBySlug } from "@/lib/services";
import { blogPosts } from "@/lib/blog";
import { serviceSchema, faqSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import BlogCard from "@/components/BlogCard";
import Reveal from "@/components/Reveal";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: absoluteUrl(`/services/${service.slug}`) },
    openGraph: {
      url: absoluteUrl(`/services/${service.slug}`),
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const relatedPosts = blogPosts.filter((p) => service.relatedBlogSlugs.includes(p.slug));

  return (
    <div className="container-page section">
      <JsonLd data={[serviceSchema(service), faqSchema(service.faqs)]} />
      <Breadcrumbs
        items={[
          { name: "Services", path: "/services" },
          { name: service.shortName, path: `/services/${service.slug}` },
        ]}
      />

      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          {service.heroEyebrow}
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold text-white sm:text-5xl">
          {service.heroHeadline}
        </h1>
        <p className="mt-5 max-w-2xl text-white/65">{service.heroSubhead}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={whatsappLink(`Hi Kavin, I'm interested in ${service.name}.`)} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Ask on WhatsApp
          </a>
          <Link href="/contact" className="btn-secondary">
            Get a Free Audit
          </Link>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <section className="mt-16 max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-white">
            What is {service.shortName}?
          </h2>
          <p className="mt-4 leading-relaxed text-white/65">{service.whatItIs}</p>
        </section>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <section>
            <h2 className="font-display text-xl font-bold text-white">Who it&apos;s for</h2>
            <ul className="mt-4 space-y-3">
              {service.whoItsFor.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-white/65">
                  <span className="text-accent" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal delay={80}>
          <section>
            <h2 className="font-display text-xl font-bold text-white">
              Deliverables &amp; process
            </h2>
            <ul className="mt-4 space-y-3">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-white/65">
                  <span className="text-accent" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold text-white">How I work</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step) => (
              <div key={step.title}>
                <h3 className="font-display text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={140}>
        <section className="mt-16 max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-white">
            Frequently asked questions
          </h2>
          <div className="mt-6 space-y-6">
            {service.faqs.map((faq) => (
              <div key={faq.question} className="border-b border-ink-border pb-6">
                <h3 className="font-display text-base font-semibold text-white">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {relatedPosts.length > 0 && (
        <Reveal delay={160}>
          <section className="mt-16">
            <h2 className="font-display text-2xl font-bold text-white">Related reading</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {relatedPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        </Reveal>
      )}

      <Reveal delay={180}>
        <div className="mt-16 rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-10 text-center">
          <h2 className="font-display text-2xl font-bold text-white">
            Ready to talk about {service.shortName.toLowerCase()}?
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Get a Free Audit
            </Link>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
