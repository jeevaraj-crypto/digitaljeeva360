# Digital Kavin — Website

Premium personal-brand website for **Digital Kavin** — digital marketing, paid ads, AI
automation, and website development for businesses in Chennai, Tamil Nadu.

Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS**. Marketing pages are
statically generated (SSG) at build time for speed; the blog and service pages use
`generateStaticParams` so every post/service is pre-rendered too.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint     # ESLint
```

## Project structure

```
/app
  layout.tsx            Root layout — header, footer, WhatsApp button, chat widget, fonts
  page.tsx               Home
  about/                 About page
  services/               Services overview (+ anchored summaries)
  services/[slug]/        Dynamic route for each service (seo, paid-ads, ai-automation, web-development)
  blog/                   Blog index with category filter
  blog/[slug]/            Individual blog post template
  contact/                Contact page (form, WhatsApp, map, LocalBusiness schema)
  api/lead/route.ts       Lead-capture API used by the contact form and chatbot
  sitemap.ts, robots.ts   Dynamic sitemap.xml / robots.txt
  icon.tsx, opengraph-image.tsx   Favicon & OG image, generated at request time (no binary assets needed)
  not-found.tsx, error.tsx        On-brand 404 / error pages

/components               Header, Footer, WhatsAppButton, ChatWidget, ServiceCard,
                           TestimonialCard, BlogCard, StatCounter, ContactForm, JsonLd,
                           Breadcrumbs, Reveal (scroll fade-in)

/lib                       Content & config, kept separate from components so it's easy
                           to edit without touching UI code:
  site.ts                  Brand constants — name, NAP, WhatsApp/email, social links
  services.ts               All 4 services: copy, deliverables, process, FAQs
  blog.ts                    Blog posts (seeded draft content)
  content.ts                  Stats, process steps, testimonials, tools list
  chatbotFaq.ts               Local FAQ dataset used by the rule-based chatbot
  schema.ts                   JSON-LD builders (LocalBusiness, Person, Service, FAQPage,
                               BlogPosting, BreadcrumbList)
```

## Editing content

You should not need to touch component code to update copy:

- **Contact info / NAP / WhatsApp number**: edit `lib/site.ts`. Everything else (footer,
  header CTA, WhatsApp button, LocalBusiness schema) reads from this one file.
- **Services**: edit `lib/services.ts` — each entry drives its own page at
  `/services/[slug]`, its FAQ schema, and its card on the home/services pages.
- **Blog posts**: edit `lib/blog.ts`. The 3 seeded posts are marked `isDraft: true` and
  flagged in the UI as sample content — replace the `content` sections with real writing
  and flip `isDraft` to `false` (or just remove the flag) before launch.
- **Testimonials / stats / tools**: `lib/content.ts`.

## Placeholders to replace before launch

- Real photo of Kavin (`app/about/page.tsx` — currently a labeled placeholder box)
- Real testimonials (`lib/content.ts` — currently marked "sample content")
- Real client logos (`lib/content.ts` `trustLogos` — currently gray placeholder boxes)
- Real business address & GPS coordinates (`lib/site.ts` — used by the Contact page,
  Google Map embed, and LocalBusiness schema)
- Real social links (`lib/site.ts` `social`)
- Production domain (`lib/site.ts` `url` — used for canonical URLs, sitemap, and schema)
- 3 seeded blog posts (`lib/blog.ts`)

## Chatbot

`components/ChatWidget.tsx` is a rule-based FAQ + lead-capture assistant:

- Answers from the local FAQ dataset in `lib/chatbotFaq.ts` (keyword matching).
- Falls back to capturing name + contact + question, then posts to `/api/lead`.
- Always offers the WhatsApp link as a fallback.

To upgrade it to a real AI model (e.g. Claude via the Anthropic API), look for the
`AI_UPGRADE` comment block inside `ChatWidget.tsx` — it shows exactly where to swap the
local FAQ lookup for a call to a new `/api/chat` server route.

## Plugging in real API keys later

- **Lead emails**: `app/api/lead/route.ts` currently just `console.log`s new leads. It has
  a `TODO` and example code for wiring up [Resend](https://resend.com) or
  Nodemailer + SMTP — add the provider's API key as an environment variable
  (e.g. `RESEND_API_KEY`) and complete `sendLeadEmail()`.
- **AI chatbot**: see the `AI_UPGRADE` section in `components/ChatWidget.tsx` above. You'd
  add `ANTHROPIC_API_KEY` as an environment variable and implement a server-side
  `/api/chat` route (never call the Anthropic API directly from the client).
- **Analytics**: add Google Analytics 4 / Search Console verification via
  `app/layout.tsx` metadata or a small analytics script once you have the IDs.

## SEO

- Unique `title` + `description` per page via `generateMetadata`, all under the
  recommended character limits.
- Canonical URLs and Open Graph/Twitter metadata on every page.
- `app/sitemap.ts` and `app/robots.ts` generate `sitemap.xml` / `robots.txt` dynamically —
  every static page, service, and blog post is included automatically.
- JSON-LD structured data via `components/JsonLd.tsx` and `lib/schema.ts`:
  LocalBusiness/Organization (home + contact), Person (about), Service + FAQPage (each
  service page), BlogPosting (each post), BreadcrumbList (every non-home page).
- Semantic HTML, one `<h1>` per page, mobile-first responsive layout.

## Known limitation in this environment

`npm audit` flags a batch of advisories against the Next.js 14.x line generally (mostly
tied to middleware/custom-server/i18n configurations this project doesn't use). The
project pins the latest available `14.2.x` patch release. For a production launch,
consider upgrading to the current Next.js major version once you're ready to validate the
App Router APIs against it.

## Deployment

Deploy to [Vercel](https://vercel.com) (zero-config for Next.js) or any Node hosting
platform that supports the App Router. After deploying:

1. Submit `sitemap.xml` to Google Search Console and Bing Webmaster Tools.
2. Set up a Google Business Profile for Chennai and keep NAP details identical to
   `lib/site.ts`.
3. Connect Google Analytics 4 + Search Console.

## Contact

- WhatsApp: +91 63808 57154
- Email: kaving2245@gmail.com
