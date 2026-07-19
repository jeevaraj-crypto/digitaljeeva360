# Digital Jeeva360 — Website

Premium multi-page marketing website for **Digital Jeeva360** — AI-powered digital marketing & automation for businesses in the US, UK and Australia.

Dark-luxury design system (glassmorphism, aurora gradients, neon glow), 32 fully-written pages, enterprise SEO, an interactive automation savings calculator, and a lead-capturing AI chat assistant — all as dependency-free static HTML for maximum speed and a 95+ PageSpeed target.

## Structure

```
├── index.html               Home (hero, dashboard, calculator, testimonials…)
├── about.html               About / founder story
├── services.html            Services hub
├── services/*.html          15 dedicated service pages (hero → problem → solution
│                            → benefits → process → tools → case study → FAQ → form)
├── portfolio.html           Case studies with mockups & metrics
├── results.html             Animated results dashboard & charts
├── blog.html                Blog index with category filter + newsletter
├── blog/*.html              7 full SEO articles with author card & related posts
├── contact.html             Lead form, WhatsApp/email/Instagram CTAs, map
├── privacy.html, terms.html, 404.html
├── sitemap.xml, robots.txt
├── assets/
│   ├── css/style.css        Design system (custom, no frameworks)
│   ├── js/main.js           Nav, reveal animations, counters, calculator,
│   │                        slider, forms, exit-intent, parallax
│   ├── js/chatbot.js        Jeeva AI assistant (rule-based + lead capture)
│   └── img/                 Favicon, logo, OG image
└── build/                   Static site generator (Node, zero dependencies)
```

## Editing & rebuilding

All page content lives in the generator, so nav/footer/SEO stay consistent:

- `build/templates.js` — layout, nav, footer, schema markup, shared blocks
- `build/data/services.js` — all service page copy
- `build/data/blog.js` — all blog articles
- `build/pages/*.js` — page renderers

After editing, regenerate every page:

```bash
node build.js
```

No npm install required.

## Features

- **SEO**: unique titles/descriptions/keywords per page, canonical URLs, Open Graph + Twitter cards, JSON-LD (Organization, ProfessionalService, Service, BlogPosting, BreadcrumbList, FAQPage), semantic HTML, sitemap, robots.txt
- **Conversion**: multiple lead forms (FormSubmit → email, WhatsApp fallback), exit-intent popup, sticky mobile CTA, floating WhatsApp + AI chat buttons, scroll progress bar
- **Interactive**: automation ROI calculator, testimonial slider, animated counters and charts, FAQ accordions, blog category filter
- **Accessible & fast**: skip links, ARIA labels, `prefers-reduced-motion` support, no JS frameworks, system-cached Google Fonts only external dependency

## Deployment

Static output — deploy the repo root to any host (GitHub Pages, Cloudflare Pages, Netlify, Vercel). For clean URLs and the 404 page, configure the host to serve `404.html` for unknown routes.

## Contact

- WhatsApp: +91 90877 72803
- Email: digitaljeeva360@gmail.com
- Instagram: [@digitaljeeva360](https://instagram.com/digitaljeeva360)
