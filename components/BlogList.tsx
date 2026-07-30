"use client";

import { useMemo, useState } from "react";
import type { BlogPost } from "@/lib/blog";
import BlogCard from "./BlogCard";

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((p) => p.category)))],
    [posts]
  );
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter posts by category">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            aria-pressed={active === category}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
              active === category
                ? "border-accent bg-accent text-ink"
                : "border-ink-border text-white/60 hover:border-accent/50 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
