import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  const date = new Date(post.date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink-border bg-ink-soft transition-colors hover:border-accent/60"
    >
      <div
        className="flex h-40 items-center justify-center bg-gradient-to-br from-accent/20 to-ink text-xs uppercase tracking-wide text-accent/70"
        aria-hidden="true"
      >
        {post.category}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-medium uppercase tracking-wide text-accent/80">
          {post.category}
        </span>
        <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-white group-hover:text-accent">
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-sm text-white/60">{post.excerpt}</p>
        <div className="mt-5 flex items-center gap-3 text-xs text-white/40">
          <time dateTime={post.date}>{date}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </Link>
  );
}
