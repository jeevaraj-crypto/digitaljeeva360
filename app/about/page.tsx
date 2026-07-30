import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/site";
import { personSchema } from "@/lib/schema";
import { tools } from "@/lib/content";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Kavin | Digital Marketer in Chennai | Digital Kavin",
  description:
    "Meet Kavin, a Chennai-based digital marketer and paid ads specialist helping businesses grow through SEO, paid ads, automation, and web development.",
  alternates: { canonical: absoluteUrl("/about") },
  openGraph: {
    url: absoluteUrl("/about"),
    title: "About Kavin | Digital Marketer in Chennai",
    description: "The story, tools, and mission behind Digital Kavin.",
  },
};

export default function AboutPage() {
  return (
    <div className="container-page section">
      <JsonLd data={personSchema()} />
      <Breadcrumbs items={[{ name: "About", path: "/about" }]} />

      <div className="grid gap-14 lg:grid-cols-[1fr_320px]">
        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              ABOUT
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
              Hi, I&apos;m Kavin.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
              I&apos;m a digital marketer and paid ads specialist based in Chennai, Tamil Nadu,
              working with businesses that want marketing that&apos;s measured by results, not
              vanity metrics.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <section className="mt-14">
              <h2 className="font-display text-2xl font-bold text-white">My story</h2>
              <div className="mt-4 space-y-4 leading-relaxed text-white/65">
                <p>
                  I started working in digital marketing because I was frustrated by how much of
                  the industry runs on guesswork — agencies reporting impressions and reach
                  without ever connecting them back to actual revenue. Based in Chennai, I set
                  out to build a practice around one idea: every marketing rupee spent should be
                  traceable to a business outcome.
                </p>
                <p>
                  Over the years, that&apos;s meant going deep on Google Ads and Meta Ads
                  performance strategy, technical and local SEO for Chennai businesses, and more
                  recently, using AI and workflow automation to remove the repetitive
                  marketing-ops work that slows teams down. I also build the websites that all of
                  this traffic lands on — because a beautifully targeted ad campaign is wasted on
                  a slow, unclear landing page.
                </p>
                <p>
                  Today, Digital Kavin works with businesses across Chennai and beyond who want a
                  hands-on, accountable digital marketing partner — not a black-box agency.
                </p>
              </div>
            </section>
          </Reveal>

          <Reveal delay={120}>
            <section className="mt-14">
              <h2 className="font-display text-2xl font-bold text-white">
                Platforms &amp; tools I use
              </h2>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-ink-border bg-ink-soft px-4 py-1.5 text-sm text-white/70"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal delay={160}>
            <section className="mt-14 rounded-2xl border border-accent/30 bg-accent/5 p-8">
              <h2 className="font-display text-xl font-bold text-white">My mission</h2>
              <p className="mt-3 leading-relaxed text-white/65">
                To help Chennai businesses grow with digital marketing that&apos;s transparent,
                measurable, and built around their actual goals — not generic best practices.
              </p>
            </section>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-14">
              <Link href="/contact" className="btn-primary">
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>

        <aside>
          <Reveal delay={80}>
            <div
              className="flex aspect-[4/5] items-center justify-center rounded-2xl border border-ink-border bg-ink-soft text-sm text-white/30"
              role="img"
              aria-label="Placeholder photo of Kavin, Chennai-based digital marketer — replace with a real photo"
            >
              Photo of Kavin — replace with real photo
            </div>
          </Reveal>
        </aside>
      </div>
    </div>
  );
}
