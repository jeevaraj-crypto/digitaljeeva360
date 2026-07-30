import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { absoluteUrl, whatsappLink } from "@/lib/site";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { getServiceBySlug } from "@/lib/services";
import { blogPostingSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import BlogCard from "@/components/BlogCard";
import Reveal from "@/components/Reveal";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Digital Kavin Blog`,
    description: post.metaDescription,
    alternates: { canonical: absoluteUrl(`/blog/${post.slug}`) },
    openGraph: {
      url: absoluteUrl(`/blog/${post.slug}`),
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function slugifyHeading(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post);
  const relatedService = getServiceBySlug(post.relatedServiceSlug);
  const date = new Date(post.date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container-page section">
      <JsonLd data={blogPostingSchema(post)} />
      <Breadcrumbs
        items={[
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      <div className="grid gap-12 lg:grid-cols-[1fr_260px]">
        <article>
          <Reveal>
            {post.isDraft && (
              <span className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white/50">
                Draft content — replace before launch
              </span>
            )}
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              {post.category}
            </p>
            <h1 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-5 flex items-center gap-3 text-sm text-white/50">
              <time dateTime={post.date}>{date}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readTime}</span>
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-xl border border-ink-border bg-ink-soft p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 font-display text-sm font-bold text-accent">
                K
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Kavin</p>
                <p className="text-xs text-white/50">Digital Marketer, Chennai</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="prose-blog mt-10 space-y-10">
              {post.content.map((section) => (
                <section key={section.heading} id={slugifyHeading(section.heading)} className="scroll-mt-24">
                  <h2 className="font-display text-2xl font-bold text-white">
                    {section.heading}
                  </h2>
                  {section.body.map((paragraph, i) => (
                    <p key={i} className="mt-4 leading-relaxed text-white/65">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </Reveal>

          {relatedService && (
            <Reveal delay={120}>
              <div className="mt-14 rounded-2xl border border-accent/30 bg-accent/5 p-6">
                <p className="text-sm text-white/70">
                  Need help with {relatedService.shortName.toLowerCase()}?
                </p>
                <Link
                  href={`/services/${relatedService.slug}`}
                  className="mt-2 inline-block text-sm font-semibold text-accent hover:underline"
                >
                  Explore {relatedService.shortName} services →
                </Link>
              </div>
            </Reveal>
          )}

          {relatedPosts.length > 0 && (
            <Reveal delay={160}>
              <section className="mt-16">
                <h2 className="font-display text-xl font-bold text-white">Related posts</h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {relatedPosts.map((related) => (
                    <BlogCard key={related.slug} post={related} />
                  ))}
                </div>
              </section>
            </Reveal>
          )}

          <Reveal delay={200}>
            <div className="mt-14 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Get a Free Audit
              </Link>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </article>

        {post.content.length > 2 && (
          <aside className="hidden lg:block">
            <nav aria-label="Table of contents" className="sticky top-28 rounded-xl border border-ink-border bg-ink-soft p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
                On this page
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                {post.content.map((section) => (
                  <li key={section.heading}>
                    <a
                      href={`#${slugifyHeading(section.heading)}`}
                      className="text-white/60 hover:text-accent"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        )}
      </div>
    </div>
  );
}
