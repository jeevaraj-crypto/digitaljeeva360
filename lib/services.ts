export type Faq = { question: string; answer: string };

export type ServiceStep = { title: string; description: string };

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroSubhead: string;
  whatItIs: string;
  whoItsFor: string[];
  deliverables: string[];
  process: ServiceStep[];
  faqs: Faq[];
  relatedBlogSlugs: string[];
  icon: "search" | "target" | "bot" | "code";
};

export const services: Service[] = [
  {
    slug: "seo",
    name: "SEO (Search Engine Optimization)",
    shortName: "SEO",
    metaTitle: "SEO Services in Chennai | Digital Kavin",
    metaDescription:
      "On-page, technical & local SEO services in Chennai that build sustainable organic traffic and rankings. Book a free SEO audit with Digital Kavin.",
    heroEyebrow: "SEO SERVICES · CHENNAI",
    heroHeadline: "SEO that compounds — built for Chennai businesses",
    heroSubhead:
      "I help Chennai-based businesses show up on page one for the searches that actually turn into customers, with technical SEO, on-page optimization, and local SEO built around Google's real ranking factors.",
    whatItIs:
      "SEO (Search Engine Optimization) is the practice of improving your website's visibility in organic (unpaid) search results. As an SEO expert working with businesses across Chennai, I focus on three pillars: technical SEO (making your site fast, crawlable, and indexable), on-page SEO (content and structure that matches search intent), and local SEO (showing up in Google Maps and 'near me' searches for Chennai and Tamil Nadu). Done right, SEO becomes your lowest cost-per-acquisition channel over time — unlike paid ads, rankings keep working after you stop actively spending.",
    whoItsFor: [
      "Local businesses in Chennai wanting to rank for 'near me' and city-specific searches",
      "Service businesses (clinics, agencies, consultants) that rely on inbound search traffic",
      "E-commerce and D2C brands that need sustainable, non-paid traffic",
      "Startups that want to build long-term organic visibility alongside paid campaigns",
    ],
    deliverables: [
      "Full technical SEO audit (site speed, crawlability, indexing, Core Web Vitals)",
      "Keyword research mapped to real search intent, not just volume",
      "On-page optimization — titles, meta descriptions, headings, internal linking",
      "Local SEO setup — Google Business Profile optimization, citations, local schema",
      "Link building and authority-building outreach",
      "Monthly ranking and traffic reports with clear next actions",
    ],
    process: [
      {
        title: "Discover",
        description:
          "Audit your current site, rankings, and competitors to find the highest-leverage opportunities.",
      },
      {
        title: "Strategy",
        description:
          "Build a prioritized keyword and content roadmap targeting Chennai and category-specific search intent.",
      },
      {
        title: "Execute",
        description:
          "Fix technical issues, optimize on-page content, and build local citations and links.",
      },
      {
        title: "Report & Scale",
        description:
          "Track rankings and organic traffic monthly, then double down on what's working.",
      },
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "Most Chennai-based clients start seeing meaningful ranking movement within 8-12 weeks, with compounding traffic growth from month 4 onward. SEO is a medium-to-long-term channel — it rewards consistency over quick fixes.",
      },
      {
        question: "Do you guarantee page one rankings?",
        answer:
          "No ethical SEO provider can guarantee specific rankings, since Google's algorithm is outside anyone's direct control. What I do guarantee is a transparent, documented process and monthly reporting so you can see exactly what's being done and why.",
      },
      {
        question: "Is local SEO different from regular SEO?",
        answer:
          "Yes. Local SEO focuses specifically on 'near me' and city-based searches (e.g. 'digital marketing agency Chennai'), and relies heavily on your Google Business Profile, local citations, and location-specific content — on top of standard technical and on-page SEO.",
      },
      {
        question: "Do I need a new website for SEO to work?",
        answer:
          "Not necessarily. Most SEO improvements — technical fixes, content optimization, internal linking — can be made on your existing site. A rebuild is only recommended if your current site has fundamental structural or speed issues.",
      },
      {
        question: "What's included in the free SEO audit?",
        answer:
          "A review of your technical health, current keyword rankings, top competitor gaps, and 3-5 quick wins you could implement immediately — whether or not we end up working together.",
      },
    ],
    relatedBlogSlugs: ["seo-in-chennai-2026-guide"],
    icon: "search",
  },
  {
    slug: "paid-ads",
    name: "Paid Ads (Google & Meta Ads)",
    shortName: "Paid Ads",
    metaTitle: "Google & Meta Ads Management in Chennai | Digital Kavin",
    metaDescription:
      "Google Ads and Meta Ads management for Chennai businesses focused on ROAS, not just clicks. Full-funnel campaign strategy, setup, and optimization.",
    heroEyebrow: "PAID ADS · GOOGLE & META",
    heroHeadline: "Paid ads managed for ROAS, not vanity metrics",
    heroSubhead:
      "As a paid ads specialist working with Chennai businesses, I build and manage Google Ads and Meta Ads campaigns engineered around one number: return on ad spend — not impressions, not clicks.",
    whatItIs:
      "Paid advertising on Google Ads and Meta Ads (Facebook & Instagram) puts your business in front of people actively searching for what you offer, or matching your ideal customer profile. Unlike SEO, paid ads deliver traffic immediately — but only if campaigns are structured correctly. I handle everything from account architecture and audience targeting to ad creative direction, bid strategy, retargeting, and conversion tracking, so every rupee of spend is measurable and accountable.",
    whoItsFor: [
      "Businesses that need predictable, immediate lead flow (not just long-term organic growth)",
      "E-commerce brands running performance campaigns on Meta and Google Shopping",
      "Local service businesses wanting to dominate Google's map pack and search ads for Chennai",
      "Businesses with an existing ad account that's underperforming or overspending",
    ],
    deliverables: [
      "Campaign strategy document — funnel structure, audiences, budget allocation",
      "Google Ads setup: Search, Performance Max, Shopping (where relevant)",
      "Meta Ads setup: Facebook & Instagram, prospecting + retargeting funnels",
      "Conversion tracking via GA4, Meta Pixel, and Conversions API",
      "Weekly optimization — bid adjustments, creative refresh, audience testing",
      "Monthly ROAS and CAC reporting with a clear next-month plan",
    ],
    process: [
      {
        title: "Discover",
        description:
          "Understand your offer, margins, and target customer to set realistic CAC and ROAS targets.",
      },
      {
        title: "Strategy",
        description:
          "Map the funnel — prospecting, retargeting, and conversion campaigns across Google and Meta.",
      },
      {
        title: "Execute",
        description:
          "Launch campaigns with proper tracking in place from day one, so every result is measurable.",
      },
      {
        title: "Report & Scale",
        description:
          "Cut underperforming ad sets, scale what's converting, and expand into new audiences and formats.",
      },
    ],
    faqs: [
      {
        question: "What's the minimum ad budget you recommend?",
        answer:
          "For most Chennai businesses, I recommend starting with at least ₹15,000-25,000/month in ad spend (excluding management fees) so the algorithm has enough data to optimize. We can adjust this based on your specific goals and margins.",
      },
      {
        question: "Google Ads or Meta Ads — which is better for my business?",
        answer:
          "It depends on intent. Google Ads captures people actively searching for a solution (higher intent, often higher cost). Meta Ads reaches people based on interest and behavior (lower intent per click, but great for brand discovery and retargeting). Most businesses benefit from running both in a coordinated funnel.",
      },
      {
        question: "How do you charge for paid ads management?",
        answer:
          "Management fees are typically a flat monthly rate or a percentage of ad spend, agreed upfront — separate from what you pay directly to Google/Meta for media spend. Get in touch for a quote based on your budget and scope.",
      },
      {
        question: "Can you fix an underperforming ad account?",
        answer:
          "Yes — account audits are one of the most common starting points. I'll review your tracking setup, account structure, and historical performance to identify exactly what's leaking budget before proposing a fix.",
      },
    ],
    relatedBlogSlugs: ["google-ads-vs-meta-ads-small-business"],
    icon: "target",
  },
  {
    slug: "ai-automation",
    name: "AI Automation",
    shortName: "AI Automation",
    metaTitle: "AI Automation Services for Businesses | Digital Kavin",
    metaDescription:
      "AI automation for marketing operations — workflow automation, chatbots, and AI-assisted lead handling for businesses in Chennai and beyond.",
    heroEyebrow: "AI AUTOMATION",
    heroHeadline: "AI automation for business — save hours, not headcount",
    heroSubhead:
      "I design AI-assisted workflows that handle the repetitive parts of marketing operations — lead capture, follow-ups, reporting — so you spend your time on strategy and customers, not spreadsheets.",
    whatItIs:
      "AI automation for business means connecting your existing tools (forms, WhatsApp, CRM, email, ad platforms) through workflow automation platforms like n8n or Zapier, layered with AI where it adds real value — like qualifying leads, drafting responses, or summarizing reports. This isn't about replacing your team; it's about removing the manual, repetitive marketing-ops work that eats up hours every week.",
    whoItsFor: [
      "Businesses drowning in manual lead follow-up across WhatsApp, email, and forms",
      "Marketing teams spending hours each week on manual reporting",
      "Businesses wanting an AI chatbot for lead qualification on their website",
      "Anyone running multiple tools that don't talk to each other",
    ],
    deliverables: [
      "Workflow audit — mapping every manual, repetitive marketing-ops task",
      "Automation build using n8n / Zapier connecting your existing tools",
      "AI-assisted lead qualification and website chatbot setup",
      "Automated reporting dashboards pulled from ad platforms and analytics",
      "Documentation so your team can maintain and extend the workflows",
    ],
    process: [
      {
        title: "Discover",
        description:
          "Map your current tools and manual workflows to find the highest-time-cost bottlenecks.",
      },
      {
        title: "Strategy",
        description:
          "Design the automation architecture — what stays manual, what gets automated, where AI adds judgment.",
      },
      {
        title: "Execute",
        description:
          "Build and test the workflows end-to-end before switching them live.",
      },
      {
        title: "Report & Scale",
        description:
          "Monitor for edge cases, then extend automation to the next bottleneck.",
      },
    ],
    faqs: [
      {
        question: "Will AI automation replace my sales/support team?",
        answer:
          "No — the goal is to remove repetitive manual work (data entry, first-response follow-ups, report generation) so your team can spend time on higher-value conversations, not replace the people doing those conversations.",
      },
      {
        question: "Do I need technical knowledge to maintain these workflows?",
        answer:
          "No. I build workflows using visual automation tools (like n8n) and provide documentation, so your team can make small changes without needing to code. For bigger changes, I'm available on an ongoing retainer.",
      },
      {
        question: "What tools do you typically automate?",
        answer:
          "Common combinations include: website forms → CRM → WhatsApp/email follow-up, ad platforms → automated reporting sheets, and AI chatbots for initial lead qualification before handoff to your team.",
      },
    ],
    relatedBlogSlugs: ["ai-automation-saves-marketing-teams-time"],
    icon: "bot",
  },
  {
    slug: "web-development",
    name: "Website Development",
    shortName: "Web Development",
    metaTitle: "Website Development Services in Chennai | Digital Kavin",
    metaDescription:
      "Fast, conversion-focused website development in Chennai — landing pages, business websites, and e-commerce builds optimized for SEO from day one.",
    heroEyebrow: "WEBSITE DEVELOPMENT · CHENNAI",
    heroHeadline: "Websites built to convert, not just to look good",
    heroSubhead:
      "I build fast, SEO-ready websites for Chennai businesses — from landing pages for ad campaigns to full business websites and e-commerce stores — designed around conversion, not just aesthetics.",
    whatItIs:
      "Website development, done properly, is where marketing and engineering meet. A site that looks good but loads slowly or isn't structured for search will underperform no matter how much you spend on ads or SEO. I build websites on modern, fast frameworks with SEO fundamentals (semantic HTML, proper metadata, Core Web Vitals) built in from the first line of code — whether that's a single landing page for a campaign or a full multi-page business website.",
    whoItsFor: [
      "Businesses launching a paid ad campaign that need a dedicated, high-converting landing page",
      "Chennai businesses that need a professional website built from scratch",
      "Businesses whose current site is slow, outdated, or not mobile-friendly",
      "Brands wanting a simple, fast e-commerce storefront",
    ],
    deliverables: [
      "Discovery and sitemap planning based on your business goals",
      "Custom design and development (landing page, business site, or e-commerce)",
      "Mobile-first, responsive layout tested across devices",
      "SEO fundamentals built-in: metadata, semantic structure, sitemap, schema",
      "Speed optimization for strong Core Web Vitals scores",
      "Basic analytics and conversion tracking setup",
    ],
    process: [
      {
        title: "Discover",
        description:
          "Understand your goals, target audience, and the pages/features you actually need.",
      },
      {
        title: "Strategy",
        description:
          "Plan the sitemap, content structure, and conversion paths before any design work starts.",
      },
      {
        title: "Execute",
        description:
          "Design and build the site with performance and SEO fundamentals built in from day one.",
      },
      {
        title: "Report & Scale",
        description:
          "Launch, monitor Core Web Vitals and conversions, then iterate based on real user behavior.",
      },
    ],
    faqs: [
      {
        question: "How long does a website build take?",
        answer:
          "A single landing page typically takes 1-2 weeks. A full business website (5-10 pages) usually takes 3-5 weeks depending on content readiness and revisions. E-commerce builds vary based on catalog size and integrations.",
      },
      {
        question: "Will my new website be SEO-friendly?",
        answer:
          "Yes — every site I build includes proper metadata, semantic HTML, fast load times, mobile responsiveness, and a sitemap from the start. That's the technical foundation SEO needs to work.",
      },
      {
        question: "Can you redesign my existing website instead of building new?",
        answer:
          "Yes, redesigns and rebuilds on your existing domain are common — we'll audit what's working (rankings, backlinks) and preserve that while fixing structure, speed, and design.",
      },
      {
        question: "Do you also handle hosting and domain setup?",
        answer:
          "I can guide you through hosting and domain setup and handle the deployment, though hosting/domain costs themselves are billed separately by the provider (e.g. Vercel, GoDaddy).",
      },
    ],
    relatedBlogSlugs: ["seo-in-chennai-2026-guide"],
    icon: "code",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
