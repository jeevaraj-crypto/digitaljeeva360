export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readTime: string;
  isDraft: boolean;
  relatedServiceSlug: string;
  relatedPostSlugs: string[];
  content: { heading: string; body: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "seo-in-chennai-2026-guide",
    title: "SEO in Chennai: A Practical Guide for Local Businesses (2026)",
    metaDescription:
      "A practical, no-fluff guide to SEO for Chennai businesses in 2026 — technical basics, local SEO, and what actually moves rankings.",
    excerpt:
      "Most SEO advice online is generic. Here's what actually matters for a Chennai-based business trying to rank in 2026 — from Google Business Profile to technical fundamentals.",
    category: "SEO",
    date: "2026-06-12",
    readTime: "7 min read",
    isDraft: true,
    relatedServiceSlug: "seo",
    relatedPostSlugs: [
      "google-ads-vs-meta-ads-small-business",
      "ai-automation-saves-marketing-teams-time",
    ],
    content: [
      {
        heading: "Why generic SEO advice falls short for local businesses",
        body: [
          "Most SEO content online is written for a global audience competing on generic keywords. If you're a clinic, restaurant, or service business in Chennai, your real competition is a handful of other businesses in your neighborhood or city — and the levers that matter are different: your Google Business Profile, local citations, and content that speaks directly to Chennai customers.",
        ],
      },
      {
        heading: "Start with your Google Business Profile",
        body: [
          "Before touching your website, make sure your Google Business Profile is fully filled out: correct category, service areas, photos, and regularly updated posts. For most local searches ('near me', 'in Chennai'), this profile — not your website — is what shows up first in the map pack.",
        ],
      },
      {
        heading: "Technical SEO fundamentals still matter",
        body: [
          "A fast, mobile-friendly, crawlable website is the foundation everything else builds on. Run your site through PageSpeed Insights, fix broken links, and make sure Google can actually index your important pages before investing heavily in content.",
        ],
      },
      {
        heading: "Content that matches local search intent",
        body: [
          "Write content that answers what your Chennai customers are actually searching — not just generic industry terms. Location-specific landing pages, FAQs, and service pages that mention Chennai naturally tend to outperform generic copy.",
        ],
      },
    ],
  },
  {
    slug: "google-ads-vs-meta-ads-small-business",
    title: "Google Ads vs. Meta Ads: Which Should Small Businesses Choose?",
    metaDescription:
      "Google Ads or Meta Ads for your small business? A practical comparison of intent, cost, and funnel fit — with a recommended approach for most Chennai businesses.",
    excerpt:
      "Both platforms work — but for different reasons. Here's how to think about Google Ads vs. Meta Ads if you're a small business deciding where to spend your first ad rupee.",
    category: "Paid Ads",
    date: "2026-05-28",
    readTime: "6 min read",
    isDraft: true,
    relatedServiceSlug: "paid-ads",
    relatedPostSlugs: [
      "seo-in-chennai-2026-guide",
      "ai-automation-saves-marketing-teams-time",
    ],
    content: [
      {
        heading: "It's not really 'vs' — it's about funnel stage",
        body: [
          "Google Ads captures existing demand: people actively typing what they need into a search bar. Meta Ads creates and captures demand: reaching people based on interest and behavior before they've started searching. Most small businesses don't need to pick one — they need to know which to start with.",
        ],
      },
      {
        heading: "When Google Ads wins",
        body: [
          "If your product or service has clear, high-intent search demand (e.g. 'emergency plumber Chennai'), Google Search Ads will typically convert faster and at a lower CAC than Meta, because you're reaching people already looking for a solution.",
        ],
      },
      {
        heading: "When Meta Ads wins",
        body: [
          "If you're a newer brand, or your product needs visual storytelling to sell (fashion, food, home decor), Meta Ads often performs better — especially for building initial brand awareness and retargeting website visitors who didn't convert.",
        ],
      },
      {
        heading: "The practical answer for most small businesses",
        body: [
          "Start with whichever platform matches your highest-intent customer action, get your tracking right, then add the second platform once you have retargeting audiences and a clearer picture of your numbers.",
        ],
      },
    ],
  },
  {
    slug: "ai-automation-saves-marketing-teams-time",
    title: "How AI Automation Saves Marketing Teams Hours Every Week",
    metaDescription:
      "A look at where AI automation actually saves marketing teams time — lead follow-up, reporting, and chatbots — without replacing human judgment.",
    excerpt:
      "AI automation isn't about replacing marketers — it's about removing the repetitive work that eats up hours every week. Here's where it actually helps.",
    category: "AI Automation",
    date: "2026-07-02",
    readTime: "5 min read",
    isDraft: true,
    relatedServiceSlug: "ai-automation",
    relatedPostSlugs: [
      "seo-in-chennai-2026-guide",
      "google-ads-vs-meta-ads-small-business",
    ],
    content: [
      {
        heading: "The real time-sink isn't strategy — it's operations",
        body: [
          "Most marketing teams don't lose time to strategic thinking. They lose it to manual lead follow-up, copy-pasting numbers into reports, and switching between five different tools that don't talk to each other.",
        ],
      },
      {
        heading: "Where automation pays off fastest",
        body: [
          "Three areas consistently save the most time: automated lead routing (form → CRM → WhatsApp notification), automated weekly reporting pulled directly from ad platforms, and first-response chatbots that qualify leads before a human ever gets involved.",
        ],
      },
      {
        heading: "AI adds judgment, automation adds speed",
        body: [
          "Plain automation (if this, then that) handles the repetitive, predictable parts. Layering in AI helps with the parts that need light judgment — drafting a first-response message, summarizing a lead's intent, or categorizing inbound questions — without needing a human to do it manually every time.",
        ],
      },
      {
        heading: "Start small",
        body: [
          "The businesses that get the most value start with one workflow — usually lead follow-up — get it working reliably, then expand from there rather than trying to automate everything at once.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost) {
  return post.relatedPostSlugs
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => Boolean(p));
}
