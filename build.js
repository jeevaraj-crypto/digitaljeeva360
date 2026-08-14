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
write("results.html", rest.renderResults());
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
  { loc: "/results.html", priority: "0.8", changefreq: "monthly" },
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

/* ---------- Favicon (brand mark on white tile) ---------- */
const markInner = T.LOGO_MARK.replace(/^<svg[^>]*>/, "").replace(/<\/svg>$/, "");
write("assets/img/favicon.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">
<rect width="160" height="160" rx="34" fill="#ffffff"/>
<g transform="translate(20,20)">${markInner}</g>
</svg>
`);

/* ---------- Full logo lockup (schema reference & reuse) ---------- */
write("assets/img/logo.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 160">
<defs>
<linearGradient id="djword" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2563eb"/><stop offset="1" stop-color="#0ea5e9"/></linearGradient>
</defs>
<g transform="translate(14,17)">${markInner}</g>
<text x="168" y="88" font-family="Sora, Montserrat, 'Segoe UI', Arial, sans-serif" font-size="52" font-weight="800" letter-spacing="2" fill="url(#djword)">DIGITALJEEVA360</text>
<text x="172" y="126" font-family="Sora, Montserrat, 'Segoe UI', Arial, sans-serif" font-size="21" font-weight="600" letter-spacing="12" fill="#3b82f6">DIGITAL RISE</text>
</svg>
`);

/* ---------- OG cover (SVG source; the referenced PNG is pre-rendered) ---------- */
write("assets/img/og-cover.svg", `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<defs>
<linearGradient id="djword" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2563eb"/><stop offset="1" stop-color="#0ea5e9"/></linearGradient>
<radialGradient id="glow1" cx="0.88" cy="0" r="0.6"><stop offset="0" stop-color="#0ea5e9" stop-opacity="0.18"/><stop offset="1" stop-color="#0ea5e9" stop-opacity="0"/></radialGradient>
<radialGradient id="glow2" cx="0" cy="1" r="0.6"><stop offset="0" stop-color="#8b5cf6" stop-opacity="0.14"/><stop offset="1" stop-color="#8b5cf6" stop-opacity="0"/></radialGradient>
</defs>
<rect width="1200" height="630" fill="#ffffff"/>
<rect width="1200" height="630" fill="url(#glow1)"/>
<rect width="1200" height="630" fill="url(#glow2)"/>
<g transform="translate(240,150) scale(1.25)">${markInner}</g>
<text x="420" y="245" font-family="Sora, Montserrat, 'Segoe UI', Arial, sans-serif" font-size="54" font-weight="800" letter-spacing="2" fill="url(#djword)">DIGITALJEEVA360</text>
<text x="424" y="292" font-family="Sora, Montserrat, 'Segoe UI', Arial, sans-serif" font-size="22" font-weight="600" letter-spacing="13" fill="#3b82f6">DIGITAL RISE</text>
<text x="600" y="420" text-anchor="middle" font-family="Arial, sans-serif" font-size="32" font-weight="700" fill="#0e2836">AI Automation &amp; Digital Marketing Agency — <tspan fill="#2563eb">Dallas, TX</tspan></text>
<text x="600" y="478" text-anchor="middle" font-family="Arial, sans-serif" font-size="23" fill="#7d8f9a">digitaljeeva360.com</text>
</svg>
`);

console.log(`\nBuild complete: ${8 + industries.length + 1 + services.length + posts.length} pages + sitemap, robots, assets.`);
