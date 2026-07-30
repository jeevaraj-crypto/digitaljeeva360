import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { services } from "@/lib/services";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: absoluteUrl("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/services"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: absoluteUrl("/contact"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
