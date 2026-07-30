import type { Metadata } from "next";
import Link from "next/link";
import { whatsappLink, absoluteUrl } from "@/lib/site";
import { services } from "@/lib/services";
import { blogPosts } from "@/lib/blog";
import { stats, processSteps, testimonials, trustLogos } from "@/lib/content";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import BlogCard from "@/components/BlogCard";
import StatCounter from "@/components/StatCounter";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Digital Kavin | Digital Marketing & Paid Ads Specialist in Chennai",
  description:
    "Digital Kavin helps Chennai businesses grow with SEO, Google & Meta Ads, AI automation, and website development. Book a free marketing audit today.",
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    url: absoluteUrl("/"),
    title: "Digital Kavin | Digital Marketing & Paid Ads Specialist in Chennai",
    description:
      "SEO, Paid Ads, AI Automation, and Website Development for businesses in Chennai.",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="section pb-16 pt-16 sm:pt-24">
        <div className="container-page">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              DIGITAL MARKETER · CHENNAI
            </p>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-white sm:text-6xl">
              Growth-focused digital marketing for Chennai businesses
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
              I&apos;m Kavin — a Chennai-based digital marketer and paid ads specialist. I help
              businesses grow with SEO, Google &amp; Meta Ads, AI automation, and websites built
              to convert, backed by transparent reporting at every step.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Get a Free Audit
              </Link>
              <Link href="/services" className="btn-secondary">
                View Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-ink-border bg-ink-soft py-14">
        <div className="container-page grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      {/* Trust bar */}
      <section className="section pb-12 pt-12">
        <div className="container-page">
          <p className="text-center text-xs uppercase tracking-widest text-white/40">
            Trusted by businesses across Chennai and beyond
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-5">
            {trustLogos.map((logo) => (
              <div
                key={logo}
                className="flex h-16 items-center justify-center rounded-lg border border-ink-border bg-ink-soft text-xs text-white/30"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <h2 className="max-w-xl font-display text-3xl font-bold text-white sm:text-4xl">
              What I can do for your business
            </h2>
            <p className="mt-4 max-w-2xl text-white/60">
              Four services, one goal: measurable growth for your Chennai business — whether
              that&apos;s organic rankings, paid conversions, saved hours, or a faster website.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 80}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How I work */}
      <section className="section border-t border-ink-border bg-ink-soft">
        <div className="container-page">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              How I work
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 80}>
                <div>
                  <span className="font-display text-4xl font-bold text-white/15">
                    {step.step}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              What clients say
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name + i} delay={i * 80}>
                <TestimonialCard testimonial={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className="section border-t border-ink-border bg-ink-soft">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Reveal>
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                From the blog
              </h2>
            </Reveal>
            <Link href="/blog" className="text-sm font-semibold text-accent hover:underline">
              View all posts →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={i * 80}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <div className="rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-10 text-center sm:p-16">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                Ready to grow your business in Chennai?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/65">
                Get a free audit of your current marketing — no obligation, just a clear look at
                what&apos;s working and what isn&apos;t.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
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
      </section>
    </>
  );
}
