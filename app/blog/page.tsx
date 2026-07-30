import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { blogPosts } from "@/lib/blog";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogList from "@/components/BlogList";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Digital Marketing Blog | Digital Kavin",
  description:
    "Practical guides on SEO, paid ads, AI automation, and website development for Chennai businesses, from Digital Kavin.",
  alternates: { canonical: absoluteUrl("/blog") },
  openGraph: {
    url: absoluteUrl("/blog"),
    title: "Digital Marketing Blog | Digital Kavin",
    description: "Guides on SEO, paid ads, AI automation, and web development for Chennai businesses.",
  },
};

export default function BlogIndexPage() {
  return (
    <div className="container-page section">
      <Breadcrumbs items={[{ name: "Blog", path: "/blog" }]} />

      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">BLOG</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold text-white sm:text-5xl">
          Marketing insights for Chennai businesses
        </h1>
        <p className="mt-5 max-w-2xl text-white/65">
          Practical, no-fluff writing on SEO, paid ads, AI automation, and web development.
        </p>
        <p className="mt-3 max-w-2xl text-xs uppercase tracking-wide text-white/35">
          Note: posts below are seeded draft content — replace with real articles before launch.
        </p>
      </Reveal>

      <div className="mt-12">
        <BlogList posts={blogPosts} />
      </div>
    </div>
  );
}
