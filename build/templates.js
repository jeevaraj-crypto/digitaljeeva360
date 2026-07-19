/* Digital Jeeva360 — HTML templates & SEO helpers */
"use strict";

const SITE = {
  url: "https://digitaljeeva360.com",
  name: "Digital Jeeva360",
  tagline: "AI-Powered Digital Marketing & Automation",
  email: "cheeyan5raj@gmail.com",
  whatsapp: "+919342475653",
  whatsappUrl: "https://wa.me/919342475653",
  instagram: "https://instagram.com/digitaljeeva360",
  founder: "Jeeva",
  formEndpoint: "https://formsubmit.co/cheeyan5raj@gmail.com"
};

/* ---------- Icons (inline SVG, stroke style) ---------- */
const icons = {
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>',
  cross: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  bot: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="7" width="16" height="12" rx="3"/><path d="M12 7V4M8 12h.01M16 12h.01M9 16h6"/></svg>',
  zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.9 5.7 3.9 9S14.5 18.4 12 21c-2.5-2.6-3.9-5.7-3.9-9S9.5 5.6 12 3z"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3v18h18"/><path d="m7 14 4-4 3 3 5-6"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m3 8 9 6 9-6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.5 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-3.6 8-9V5l-8-3-8 3v8c0 5.4 8 9 8 9z"/><path d="m9 12 2 2 4-4"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.9 2.9l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.9-2.9l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.9-2.9l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.5h.1a1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.9 2.9l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1h.2a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.5 1z"/></svg>',
  rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.8-.8-.7-2.2-.7-3 .8z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.9 7.4-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.6-3.3 2-4.5c1.6-1.3 4 0 4 0M12 15v5s3.3-.6 4.5-2c1.3-1.6 0-4 0-4"/></svg>',
  message: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 2 9 5-9 5-9-5 9-5z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07a8.2 8.2 0 0 1-2.4-1.49 9 9 0 0 1-1.66-2.07c-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.1 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 1 1 8.38 4.63zM12.05 2A11.8 11.8 0 0 0 1.87 19.86L.2 26l6.3-1.65a11.9 11.9 0 0 0 5.55 1.41h.01A11.87 11.87 0 0 0 12.05 2z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>',
  send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4 20-7z"/><path d="M22 2 11 13"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><rect x="3" y="4" width="18" height="17" rx="3"/><path d="M8 2v4M16 2v4M3 10h18"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9.5" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M15.5 3.13a4 4 0 0 1 0 7.75"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v3M12 18v3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M3 12h3M18 12h3M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/><circle cx="12" cy="12" r="3.5"/></svg>'
};

/* Brand logo mark — DJ monogram with growth swoosh, chart bars and 360 badge */
const LOGO_MARK = `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Digital Jeeva360 logo">
<defs>
<linearGradient id="dj-silver" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#a9b4c6"/></linearGradient>
<linearGradient id="dj-blue" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#60a5fa"/><stop offset="1" stop-color="#1d4ed8"/></linearGradient>
</defs>
<text x="6" y="98" font-family="Arial, Helvetica, sans-serif" font-size="94" font-weight="900" font-style="italic" fill="url(#dj-silver)">D</text>
<text x="60" y="116" font-family="Arial, Helvetica, sans-serif" font-size="94" font-weight="900" font-style="italic" fill="url(#dj-blue)">J</text>
<g fill="url(#dj-blue)" opacity="0.95">
<rect x="36" y="70" width="9" height="18" rx="2"/>
<rect x="49" y="60" width="9" height="28" rx="2"/>
<rect x="62" y="50" width="9" height="38" rx="2"/>
</g>
<polyline points="38,62 52,50 66,40 80,30" stroke="#7db4fb" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="52" cy="50" r="4" fill="#7db4fb"/><circle cx="66" cy="40" r="4" fill="#7db4fb"/><circle cx="80" cy="30" r="4" fill="#7db4fb"/>
<path d="M4 106 C 42 124, 94 112, 122 58" fill="none" stroke="url(#dj-blue)" stroke-width="10" stroke-linecap="round"/>
<polygon points="112,44 134,42 124,64" fill="#3b82f6"/>
<text x="92" y="96" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="800" font-style="italic" fill="url(#dj-blue)">360</text>
</svg>`;

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const abs = (p) => SITE.url + (p.startsWith("/") ? p : "/" + p);

/* ---------- Schema builders ---------- */
const DFW_CITIES = ["Dallas", "Fort Worth", "Plano", "Frisco", "Arlington", "Irving", "McKinney", "Garland", "Richardson", "Carrollton", "Denton", "Addison"];

function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": SITE.url + "/#organization",
    name: SITE.name,
    url: SITE.url,
    logo: abs("/assets/img/logo.svg"),
    email: SITE.email,
    telephone: SITE.whatsapp,
    founder: { "@type": "Person", name: SITE.founder, jobTitle: "AI-Powered Digital Marketer & AI Automation Specialist" },
    sameAs: [SITE.instagram],
    areaServed: DFW_CITIES.map((c) => ({ "@type": "City", name: c + ", TX" })),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: SITE.email,
      telephone: SITE.whatsapp,
      areaServed: "US",
      availableLanguage: ["English"]
    }
  };
}

function localBusinessSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": SITE.url + "/#localbusiness",
    name: SITE.name,
    description: "AI automation and digital marketing agency serving Dallas–Fort Worth. AI receptionists, chatbots, SEO, Google Ads and websites for dental clinics, realtors, law firms, HVAC and roofing companies.",
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.whatsapp,
    priceRange: "$$",
    image: abs("/assets/img/og-cover.png"),
    address: { "@type": "PostalAddress", addressLocality: "Dallas", addressRegion: "TX", addressCountry: "US" },
    geo: { "@type": "GeoCoordinates", latitude: 32.7767, longitude: -96.797 },
    areaServed: DFW_CITIES.map((c) => ({ "@type": "City", name: c + ", TX" })),
    knowsAbout: ["AI Automation", "AI Receptionist", "SEO", "Google Ads", "Web Design", "Dental Marketing", "Law Firm Marketing", "HVAC Marketing", "Roofing Marketing", "Real Estate Marketing"],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "47", bestRating: "5" }
  };
}

function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": SITE.url + "/#website",
    url: SITE.url,
    name: SITE.name,
    publisher: { "@id": SITE.url + "/#organization" }
  };
}

function breadcrumbSchema(crumbs) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.path)
    }))
  };
}

function faqSchema(faqs) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a.replace(/<[^>]+>/g, "") }
    }))
  };
}

function serviceSchema(svc) {
  return {
    "@type": "Service",
    name: svc.schemaName || svc.name,
    serviceType: svc.schemaName || svc.name,
    description: svc.description,
    provider: { "@id": SITE.url + "/#organization" },
    areaServed: ["Dallas, TX", "Fort Worth, TX", "Plano, TX", "Frisco, TX", "Arlington, TX", "DFW Metroplex"],
    url: abs(svc.path)
  };
}

function articleSchema(post) {
  return {
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: abs("/assets/img/og-cover.png"),
    author: { "@type": "Person", name: SITE.founder, url: abs("/about.html") },
    publisher: { "@id": SITE.url + "/#organization" },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: abs(post.path),
    keywords: post.keywords
  };
}

/* ---------- Shared partials ---------- */
function head({ title, description, path, ogType = "website", schema = [], keywords = "" }) {
  const canonical = abs(path === "/index.html" ? "/" : path);
  const jsonld = JSON.stringify({ "@context": "https://schema.org", "@graph": [websiteSchema(), organizationSchema(), ...schema] });
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
${keywords ? `<meta name="keywords" content="${esc(keywords)}">\n` : ""}<meta name="author" content="Jeeva — Digital Jeeva360">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="${ogType}">
<meta property="og:site_name" content="${SITE.name}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${abs("/assets/img/og-cover.png")}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="en_US">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${abs("/assets/img/og-cover.png")}">
<meta name="theme-color" content="#04060e">
<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@600;700;800&display=swap">
<link rel="stylesheet" href="/assets/css/style.css">
<script type="application/ld+json">${jsonld}</script>
</head>`;
}

const NAV_SERVICES = [
  { path: "/services/ai-automation.html", label: "AI Automation", desc: "Chatbots, WhatsApp, email & workflow automation" },
  { path: "/services/premium-web-design.html", label: "Premium Website Development", desc: "Websites, landing pages & conversion optimisation" },
  { path: "/services/seo.html", label: "SEO & Organic Growth", desc: "Local, technical & AI-search SEO that compounds" },
  { path: "/services/paid-advertising.html", label: "Paid Advertising", desc: "Google & Meta Ads engineered for ROI" }
];

/* The 4 core services and the specialisations nested inside each */
const SERVICE_FAMILY = {
  "ai-automation": ["ai-receptionist", "ai-chatbots", "workflow-automation", "email-automation", "whatsapp-automation", "consulting"],
  "premium-web-design": ["landing-pages", "conversion-optimization"],
  "seo": ["local-seo", "technical-seo"],
  "paid-advertising": ["google-ads", "meta-ads"]
};

/* Industries we serve (Dallas–Fort Worth) */
const INDUSTRIES = [
  { slug: "dental-clinics", label: "Dental Clinics" },
  { slug: "realtors", label: "Realtors" },
  { slug: "law-firms", label: "Law Firms" },
  { slug: "hvac-companies", label: "HVAC Companies" },
  { slug: "roofing-companies", label: "Roofing Companies" }
];

function nav(activePath) {
  const cur = (p) => {
    if (p === activePath) return ' aria-current="page"';
    if (p === "/services.html" && activePath.startsWith("/services/")) return ' aria-current="page"';
    if (p === "/industries.html" && activePath.startsWith("/industries/")) return ' aria-current="page"';
    if (p === "/blog.html" && activePath.startsWith("/blog/")) return ' aria-current="page"';
    return "";
  };
  return `
<a class="skip-link" href="#main">Skip to main content</a>
<div class="scroll-progress" role="presentation"></div>
<header class="site-header">
  <div class="container">
    <nav class="nav" aria-label="Main navigation">
      <a class="brand" href="/"><span class="mark" aria-hidden="true">${LOGO_MARK}</span>Digital<em>Jeeva</em>360</a>
      <ul class="nav-links" id="nav-links">
        <li><a href="/"${cur("/index.html")}>Home</a></li>
        <li><a href="/about.html"${cur("/about.html")}>About</a></li>
        <li class="dropdown"><a href="/services.html"${cur("/services.html")}>Services ▾</a>
          <ul class="dropdown-menu">
            ${NAV_SERVICES.map((s) => `<li><a href="${s.path}"><b>${s.label}</b><span>${s.desc}</span></a></li>`).join("\n            ")}
          </ul>
        </li>
        <li class="dropdown"><a href="/industries.html"${cur("/industries.html")}>Industries ▾</a>
          <ul class="dropdown-menu dropdown-menu-compact">
            ${INDUSTRIES.map((i) => `<li><a href="/industries/${i.slug}.html"><b>${i.label}</b></a></li>`).join("\n            ")}
          </ul>
        </li>
        <li><a href="/blog.html"${cur("/blog.html")}>Blog</a></li>
        <li><a href="/contact.html"${cur("/contact.html")}>Contact</a></li>
      </ul>
      <div class="nav-cta">
        <a class="btn btn-primary btn-sm" href="/contact.html">Book Free Strategy Call</a>
        <button class="nav-toggle" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="nav-links">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
      </div>
    </nav>
  </div>
</header>`;
}

function breadcrumbs(crumbs) {
  return `<nav class="breadcrumbs" aria-label="Breadcrumb"><ol>
${crumbs.map((c, i) => i === crumbs.length - 1
    ? `<li><span aria-current="page">${esc(c.name)}</span></li>`
    : `<li><a href="${c.path}">${esc(c.name)}</a></li>`).join("\n")}
</ol></nav>`;
}

function footer() {
  return `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a class="brand" href="/"><span class="mark" aria-hidden="true">${LOGO_MARK}</span>Digital<em>Jeeva</em>360</a>
        <p class="mt-1">Helping Dallas–Fort Worth businesses grow 2–3x through AI automation, SEO, paid advertising and premium websites. Serving Dallas, Plano, Frisco, Fort Worth, Arlington and the entire DFW Metroplex.</p>
        <div class="footer-social">
          <a href="${SITE.whatsappUrl}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${icons.whatsapp}</a>
          <a href="${SITE.instagram}" target="_blank" rel="noopener" aria-label="Follow on Instagram">${icons.instagram}</a>
          <a href="mailto:${SITE.email}" aria-label="Send an email">${icons.mail}</a>
        </div>
      </div>
      <div>
        <h4>Services</h4>
        <ul>
          <li><a href="/services/ai-automation.html">AI Automation</a></li>
          <li><a href="/services/premium-web-design.html">Website Development</a></li>
          <li><a href="/services/seo.html">SEO &amp; Organic Growth</a></li>
          <li><a href="/services/paid-advertising.html">Paid Advertising</a></li>
        </ul>
      </div>
      <div>
        <h4>Industries</h4>
        <ul>
          ${INDUSTRIES.map((i) => `<li><a href="/industries/${i.slug}.html">${i.label}</a></li>`).join("\n          ")}
          <li><a href="/about.html">About</a></li>
          <li><a href="/blog.html">Blog</a></li>
          <li><a href="/contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4>Get growth tips</h4>
        <p style="font-size:0.9rem">One practical AI marketing idea a week. No spam, ever.</p>
        <form class="newsletter" action="${SITE.formEndpoint}" method="POST" data-lead-form>
          <input type="hidden" name="_subject" value="Newsletter signup — Digital Jeeva360">
          <input type="hidden" name="_captcha" value="false">
          <label class="skip-link" for="nl-email">Email address</label>
          <input id="nl-email" type="email" name="email" placeholder="you@company.com" required autocomplete="email">
          <button class="btn btn-primary btn-sm" type="submit" aria-label="Subscribe">${icons.send}</button>
        </form>
        <div class="form-success" role="status"><p><strong>You're in!</strong> Check your inbox.</p></div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© <span id="year">2026</span> ${SITE.name}. All rights reserved.</span>
      <div class="footer-legal">
        <a href="/privacy.html">Privacy Policy</a>
        <a href="/terms.html">Terms of Service</a>
        <a href="/sitemap.xml">Sitemap</a>
      </div>
    </div>
  </div>
</footer>`;
}

function floatingWidgets() {
  return `
<div class="sticky-cta" aria-hidden="true">
  <a class="btn btn-primary" href="/contact.html">Book Free Strategy Call ${icons.arrow}</a>
</div>
<div class="fab-stack">
  <a class="fab fab-whatsapp" href="${SITE.whatsappUrl}?text=${encodeURIComponent("Hi Jeeva, I'd like to know more about your services.")}" target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">${icons.whatsapp}</a>
  <button class="fab fab-chat" id="chat-fab" aria-label="Open AI chat assistant" aria-expanded="false" aria-controls="chatbot">${icons.bot}</button>
</div>
<div class="chatbot" id="chatbot" role="dialog" aria-label="Jeeva AI chat assistant">
  <div class="chatbot-head">
    <span class="bot-avatar">${icons.bot}</span>
    <div><b>Jeeva AI</b><small>Online — replies instantly</small></div>
    <button class="chatbot-close" aria-label="Close chat">${icons.cross}</button>
  </div>
  <div class="chatbot-log" aria-live="polite"></div>
  <div class="chatbot-input">
    <label class="skip-link" for="chat-input">Type your message</label>
    <input id="chat-input" type="text" placeholder="Ask about services, pricing…" autocomplete="off">
    <button aria-label="Send message">${icons.send}</button>
  </div>
</div>`;
}

function exitPopup() {
  return `
<div class="exit-popup" id="exit-popup" role="dialog" aria-modal="true" aria-label="Before you go">
  <div class="exit-popup-card glass-card card-static gradient-border">
    <button class="exit-close" aria-label="Close popup">${icons.cross}</button>
    <span class="eyebrow">Before you go</span>
    <h3 style="font-size:1.6rem">Get a free AI growth audit worth $500</h3>
    <p>Discover exactly where automation, SEO and paid ads can add revenue to your business — in one free 30-minute call. No pitch, just a plan you can keep.</p>
    <a class="btn btn-primary btn-lg" href="/contact.html">Claim My Free Audit ${icons.arrow}</a>
    <p class="calc-note mt-1 mb-0">Limited to 5 audits per week — first come, first served.</p>
  </div>
</div>`;
}

function leadForm({ subject = "New enquiry — Digital Jeeva360", compact = false } = {}) {
  return `
<form class="lead-form" action="${SITE.formEndpoint}" method="POST" data-lead-form>
  <input type="hidden" name="_subject" value="${esc(subject)}">
  <input type="hidden" name="_template" value="table">
  <input type="hidden" name="_captcha" value="false">
  <div class="field"><label for="lf-name">Full name *</label><input id="lf-name" type="text" name="name" required autocomplete="name" placeholder="Alex Morgan"></div>
  <div class="field"><label for="lf-company">Company</label><input id="lf-company" type="text" name="company" autocomplete="organization" placeholder="Acme Inc."></div>
  <div class="field"><label for="lf-email">Work email *</label><input id="lf-email" type="email" name="email" required autocomplete="email" placeholder="alex@acme.com"></div>
  <div class="field"><label for="lf-phone">Phone / WhatsApp</label><input id="lf-phone" type="tel" name="phone" autocomplete="tel" placeholder="+1 555 000 1234"></div>
  <div class="field"><label for="lf-city">City / Area *</label>
    <select id="lf-city" name="city" required>
      <option value="" disabled selected>Select your area</option>
      <option>Dallas</option><option>Fort Worth</option><option>Plano</option>
      <option>Frisco</option><option>Arlington</option><option>Irving</option>
      <option>McKinney</option><option>Other DFW</option><option>Outside DFW</option>
    </select>
  </div>
  <div class="field"><label for="lf-type">Business type *</label>
    <select id="lf-type" name="business_type" required>
      <option value="" disabled selected>Select business type</option>
      <option>Dental clinic</option><option>Real estate</option><option>Law firm</option>
      <option>HVAC company</option><option>Roofing company</option><option>Other home services</option>
      <option>E-commerce</option><option>Other</option>
    </select>
  </div>
  <div class="field"><label for="lf-revenue">Monthly revenue</label>
    <select id="lf-revenue" name="monthly_revenue">
      <option value="" disabled selected>Select a range (optional)</option>
      <option>Under $10k</option><option>$10k – $50k</option><option>$50k – $200k</option>
      <option>$200k – $1M</option><option>$1M+</option>
    </select>
  </div>
  <div class="field"><label for="lf-website">Current website</label><input id="lf-website" type="url" name="website" placeholder="https://yourwebsite.com" autocomplete="url"></div>
  <div class="field full"><label for="lf-goals">What are your main goals? *</label>
    <select id="lf-goals" name="goals" required>
      <option value="" disabled selected>Select your primary goal</option>
      <option>Automate manual work with AI</option>
      <option>Generate more qualified leads</option>
      <option>Rank higher on Google (SEO)</option>
      <option>Run profitable paid ads</option>
      <option>New website or redesign</option>
      <option>All of the above — full growth system</option>
    </select>
  </div>
  ${compact ? "" : `<div class="field full"><label for="lf-message">Tell us about your project</label><textarea id="lf-message" name="message" placeholder="What does your business do, and what would success look like in 6 months?"></textarea></div>`}
  <p class="form-note">${icons.shield} Your details are private. No spam — ever.</p>
  <div class="full"><button class="btn btn-primary btn-lg" type="submit" style="width:100%">Book Free Strategy Call ${icons.arrow}</button></div>
</form>
<div class="form-success" role="status">
  <div class="tick">${icons.check}</div>
  <h3>Request received!</h3>
  <p>Thank you — Jeeva will personally reply within one business day to schedule your free strategy call.</p>
  <a class="btn btn-whatsapp" href="${SITE.whatsappUrl}" target="_blank" rel="noopener">${icons.whatsapp} Get a faster reply on WhatsApp</a>
</div>`;
}

function faqBlock(faqs, { title = "Frequently asked questions", eyebrow = "FAQ" } = {}) {
  return `
<section class="section" aria-label="Frequently asked questions">
  <div class="container-narrow">
    <div class="section-head center reveal">
      <span class="eyebrow">${eyebrow}</span>
      <h2>${title}</h2>
    </div>
    <div class="faq-list">
      ${faqs.map((f, i) => `
      <details class="faq-item reveal${i % 2 ? " reveal-d1" : ""}">
        <summary>${esc(f.q)}</summary>
        <div class="faq-a"><p>${f.a}</p></div>
      </details>`).join("")}
    </div>
  </div>
</section>`;
}

function ctaBand({ title = "Ready to grow 2–3x with AI?", text = "Book a free 30-minute strategy call. You'll leave with a clear, actionable growth plan — whether we work together or not.", primary = "Book Free Strategy Call", href = "/contact.html" } = {}) {
  return `
<section class="section-tight">
  <div class="container">
    <div class="cta-band reveal">
      <span class="eyebrow">Limited availability</span>
      <h2>${title}</h2>
      <p>${text}</p>
      <div class="hero-ctas">
        <a class="btn btn-primary btn-lg" href="${href}">${primary} ${icons.arrow}</a>
        <a class="btn btn-ghost btn-lg" href="${SITE.whatsappUrl}" target="_blank" rel="noopener">${icons.whatsapp} WhatsApp Us</a>
      </div>
    </div>
  </div>
</section>`;
}

function scripts() {
  return `
<script src="/assets/js/main.js" defer></script>
<script src="/assets/js/chatbot.js" defer></script>`;
}

function page(opts, bodyContent) {
  return `${head(opts)}
<body>
<div class="aurora" aria-hidden="true"></div>
<div class="grid-noise" aria-hidden="true"></div>
${nav(opts.path)}
<main id="main">
${bodyContent}
</main>
${footer()}
${floatingWidgets()}
${opts.noExitPopup ? "" : exitPopup()}
${scripts()}
</body>
</html>`;
}

module.exports = {
  SITE, icons, esc, abs, LOGO_MARK, page, head, nav, footer, breadcrumbs,
  floatingWidgets, exitPopup, leadForm, faqBlock, ctaBand, scripts,
  organizationSchema, localBusinessSchema, websiteSchema,
  breadcrumbSchema, faqSchema, serviceSchema, articleSchema,
  NAV_SERVICES, SERVICE_FAMILY, INDUSTRIES
};
