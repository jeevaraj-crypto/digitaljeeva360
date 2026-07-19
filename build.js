#!/usr/bin/env node
/* Digital Jeeva360 — static site generator. Run: node build.js */
"use strict";

const fs = require("fs");
const path = require("path");

const T = require("./build/templates");
const services = require("./build/data/services");
const posts = require("./build/data/blog");
const renderService = require("./build/pages/service");
const renderHome = require("./build/pages/home");
const rest = require("./build/pages/rest");
const industries = require("./build/data/industries");
const { renderIndustriesIndex, renderIndustry } = require("./build/pages/industry");

const ROOT = __dirname;

function write(rel, content) {
  const file = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
  console.log("✓", rel);
}

/* ---------- Pages ---------- */
write("index.html", renderHome(posts));
write("about.html", rest.renderAbout());
write("services.html", rest.renderServicesIndex(services));
write("contact.html", rest.renderContact());
write("industries.html", renderIndustriesIndex(industries));
industries.forEach((ind) => write(`industries/${ind.slug}.html`, renderIndustry(ind)));
write("blog.html", rest.renderBlogIndex(posts));
write("privacy.html", rest.renderPrivacy());
write("terms.html", rest.renderTerms());
write("404.html", rest.render404());

services.forEach((svc) => write(`services/${svc.slug}.html`, renderService(svc, services)));
posts.forEach((p, i) => write(`blog/${p.slug}.html`, rest.renderPost(p, posts, i)));

/* ---------- Sitemap ---------- */
const today = new Date().toISOString().slice(0, 10);
const urls = [
  { loc: "/", priority: "1.0", changefreq: "weekly" },
  { loc: "/about.html", priority: "0.8", changefreq: "monthly" },
  { loc: "/services.html", priority: "0.9", changefreq: "monthly" },
  { loc: "/industries.html", priority: "0.9", changefreq: "monthly" },
  { loc: "/blog.html", priority: "0.8", changefreq: "weekly" },
  { loc: "/contact.html", priority: "0.9", changefreq: "monthly" },
  { loc: "/privacy.html", priority: "0.3", changefreq: "yearly" },
  { loc: "/terms.html", priority: "0.3", changefreq: "yearly" },
  ...services.map((s) => ({ loc: `/services/${s.slug}.html`, priority: "0.9", changefreq: "monthly" })),
  ...industries.map((i) => ({ loc: `/industries/${i.slug}.html`, priority: "0.9", changefreq: "monthly" })),
  ...posts.map((p) => ({ loc: `/blog/${p.slug}.html`, priority: "0.7", changefreq: "monthly", lastmod: p.date }))
];
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>
    <loc>${T.SITE.url}${u.loc}</loc>
    <lastmod>${u.lastmod || today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join("\n")}
</urlset>
`);

/* ---------- Robots ---------- */
write("robots.txt", `User-agent: *
Allow: /

Sitemap: ${T.SITE.url}/sitemap.xml
`);

/* ---------- Favicon (brand mark on dark navy tile) ---------- */
const markInner = T.LOGO_MARK.replace(/^<svg[^>]*>/, "").replace(/<\/svg>$/, "");
write("assets/img/favicon.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">
<rect width="160" height="160" rx="34" fill="#0a1124"/>
<g transform="translate(10,10)">${markInner}</g>
</svg>
`);

/* ---------- Full logo lockup (schema reference & reuse) ---------- */
write("assets/img/logo.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 150">
<rect width="700" height="150" fill="none"/>
<g transform="translate(6,5)">${markInner}</g>
<text x="158" y="80" font-family="Arial, Helvetica, sans-serif" font-size="44" font-weight="800" fill="#e8ecf8">DIGITAL<tspan fill="#3b82f6">JEEVA</tspan><tspan fill="#e8ecf8">360</tspan></text>
<text x="160" y="112" font-family="Arial, Helvetica, sans-serif" font-size="15" letter-spacing="2" fill="#9aa5c4">DIGITAL MARKETING | AI AUTOMATION | GROWTH SYSTEMS</text>
</svg>
`);

/* ---------- OG cover (SVG source; PNG generated separately if needed) ---------- */
write("assets/img/og-cover.svg", `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<defs>
<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#04060e"/><stop offset="1" stop-color="#0c1330"/></linearGradient>
<linearGradient id="ac" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#60a5fa"/><stop offset="0.5" stop-color="#a78bfa"/><stop offset="1" stop-color="#22d3ee"/></linearGradient>
<radialGradient id="glow1" cx="0.85" cy="0.1" r="0.6"><stop offset="0" stop-color="#8b5cf6" stop-opacity="0.35"/><stop offset="1" stop-color="#8b5cf6" stop-opacity="0"/></radialGradient>
<radialGradient id="glow2" cx="0.1" cy="0.9" r="0.6"><stop offset="0" stop-color="#2563eb" stop-opacity="0.4"/><stop offset="1" stop-color="#2563eb" stop-opacity="0"/></radialGradient>
</defs>
<rect width="1200" height="630" fill="url(#bg)"/>
<rect width="1200" height="630" fill="url(#glow1)"/>
<rect width="1200" height="630" fill="url(#glow2)"/>
<g transform="translate(72,74) scale(0.78)">${markInner}</g>
<text x="200" y="150" font-family="Arial, sans-serif" font-size="40" font-weight="800" fill="#e8ecf8">DIGITAL<tspan fill="#3b82f6">JEEVA</tspan>360</text>
<text x="80" y="310" font-family="Arial, sans-serif" font-size="60" font-weight="800" fill="#ffffff">Dallas AI Automation</text>
<text x="80" y="390" font-family="Arial, sans-serif" font-size="60" font-weight="800" fill="url(#ac)">&amp; Digital Marketing Agency</text>
<text x="80" y="470" font-family="Arial, sans-serif" font-size="28" fill="#9aa5c4">AI Receptionists · Automation · SEO · Google Ads · Premium Websites</text>
<text x="80" y="545" font-family="Arial, sans-serif" font-size="24" fill="#5f6a8a">digitaljeeva360.com — Serving Dallas–Fort Worth, Texas</text>
</svg>
`);

console.log(`\nBuild complete: ${8 + industries.length + 1 + services.length + posts.length} pages + sitemap, robots, assets.`);
