// Small local FAQ dataset for the rule-based chatbot (ChatWidget.tsx).
// Matching is simple keyword-based — see findFaqAnswer() in ChatWidget.tsx.

export type ChatFaqEntry = {
  keywords: string[];
  answer: string;
};

export const chatbotFaq: ChatFaqEntry[] = [
  {
    keywords: ["service", "services", "offer", "do you do"],
    answer:
      "Digital Kavin offers 4 core services: SEO, Paid Ads (Google & Meta), AI Automation, and Website Development. Want details on any one of these?",
  },
  {
    keywords: ["price", "pricing", "cost", "charge", "how much", "budget"],
    answer:
      "Pricing depends on scope — ad spend, site size, or automation complexity all factor in. The fastest way to get an accurate quote is a free audit call. Want me to help you book one?",
  },
  {
    keywords: ["location", "where", "based", "chennai", "office"],
    answer: "Digital Kavin is based in Chennai, Tamil Nadu, and works with clients locally and remotely.",
  },
  {
    keywords: ["response", "reply", "how fast", "how long", "turnaround"],
    answer: "Kavin typically responds to new enquiries within 24 hours on WhatsApp or email.",
  },
  {
    keywords: ["seo"],
    answer:
      "SEO services cover technical SEO, on-page optimization, and local SEO for Chennai businesses. Check out /services/seo for the full breakdown.",
  },
  {
    keywords: ["ads", "google ads", "meta ads", "facebook ads", "instagram ads", "ppc"],
    answer:
      "Paid Ads services cover Google Ads and Meta Ads — strategy, setup, and ongoing optimization for ROAS. See /services/paid-ads for details.",
  },
  {
    keywords: ["automation", "ai", "chatbot", "workflow"],
    answer:
      "AI Automation covers workflow automation (n8n/Zapier), lead routing, and AI-assisted marketing ops. See /services/ai-automation for more.",
  },
  {
    keywords: ["website", "web development", "landing page", "ecommerce", "e-commerce"],
    answer:
      "Website Development covers landing pages, business websites, and e-commerce builds — fast, mobile-friendly, and SEO-ready. See /services/web-development.",
  },
];

export function findFaqAnswer(message: string): string | null {
  const lower = message.toLowerCase();
  for (const entry of chatbotFaq) {
    if (entry.keywords.some((keyword) => lower.includes(keyword))) {
      return entry.answer;
    }
  }
  return null;
}
