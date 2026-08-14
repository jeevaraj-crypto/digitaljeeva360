/* Industries We Serve — index + individual industry pages */
"use strict";

const T = require("../templates");

function renderIndustriesIndex(industries) {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Industries We Serve", path: "/industries.html" }];
  const icons = { "dental-clinics": "sparkles", "realtors": "pin", "law-firms": "shield", "hvac-companies": "gear", "roofing-companies": "layers" };

  const body = `
<section class="hero-page">
  <div class="container">
    ${T.breadcrumbs(crumbs)}
    <div class="section-head">
      <span class="eyebrow">Industries We Serve · Dallas–Fort Worth</span>
      <h1>Built for the businesses that <span class="text-gradient">live on the phone</span></h1>
      <p class="lede">We don't market to everyone. We go deep on five Dallas industries where a missed call is lost revenue and speed of response decides who wins — so every system we build starts from your industry's reality, not a generic template.</p>
      <div class="hero-ctas" style="justify-content:flex-start">
        <a class="btn btn-primary btn-lg" href="/contact.html">Book Free Strategy Call ${T.icons.arrow}</a>
      </div>
    </div>
  </div>
</section>

<section class="section-tight" aria-label="Industries">
  <div class="container">
    <div class="grid grid-2">
      ${industries.map((ind, i) => `
      <article class="glass-card reveal${i % 2 ? " reveal-d1" : ""}" style="display:flex;flex-direction:column">
        <div class="icon-chip">${T.icons[icons[ind.slug]] || T.icons.target}</div>
        <h2 style="font-size:clamp(1.35rem,2.4vw,1.7rem)"><a href="/industries/${ind.slug}.html" style="color:#fff">${ind.name}</a></h2>
        <p>${ind.short}</p>
        <p style="font-size:0.9rem;color:var(--ink-faint)">${ind.problems[0].replace(/<[^>]+>/g, "").split(".")[0]}. We fix it — permanently.</p>
        <div style="margin-top:auto">
          <a class="btn btn-ghost" href="/industries/${ind.slug}.html">How we help ${ind.name.toLowerCase()} ${T.icons.arrow}</a>
        </div>
      </article>`).join("")}
      <article class="glass-card card-static gradient-border reveal" style="display:flex;flex-direction:column;justify-content:center;text-align:center">
        <h2 style="font-size:1.4rem">A different industry?</h2>
        <p>If your Dallas business depends on inbound calls and fast follow-up, the same systems apply. Tell us what you do — we'll tell you honestly if we're the right fit.</p>
        <div><a class="btn btn-primary" href="/contact.html">Ask Us ${T.icons.arrow}</a></div>
      </article>
    </div>
  </div>
</section>

${T.ctaBand({
    title: "Your industry. Your suburb. Your growth plan.",
    text: "Book a free 30-minute strategy call — we'll bring DFW competitor data for your exact industry and show you where the fastest wins are."
  })}`;

  return T.page({
    title: "Industries We Serve in Dallas — Dental, Real Estate, Legal, HVAC, Roofing | Digital Jeeva360",
    description: "AI automation and marketing built for Dallas dental clinics, realtors, law firms, HVAC and roofing companies. Industry-specific systems that answer every call and win every lead.",
    keywords: "dental marketing Dallas, realtor marketing Dallas, law firm marketing Dallas, HVAC marketing Dallas, roofing marketing Dallas, industries served DFW",
    path: "/industries.html",
    schema: [T.breadcrumbSchema(crumbs)]
  }, body);
}

function renderIndustry(ind) {
  const path = `/industries/${ind.slug}.html`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries.html" },
    { name: ind.name, path }
  ];

  const body = `
<section class="hero-page">
  <div class="container">
    ${T.breadcrumbs(crumbs)}
    <div class="section-head">
      <span class="eyebrow">Industries · ${ind.name} · Dallas–Fort Worth</span>
      <h1>${ind.hero.h1}</h1>
      <p class="lede" style="font-size:1.2rem">${ind.hero.lede}</p>
      <div class="hero-ctas" style="justify-content:flex-start">
        <a class="btn btn-primary btn-lg" href="/contact.html">Book Free Strategy Call ${T.icons.arrow}</a>
        <a class="btn btn-ghost btn-lg" href="${T.SITE.whatsappUrl}" target="_blank" rel="noopener">${T.icons.whatsapp} WhatsApp Us</a>
      </div>
      <div class="trust-badges" style="justify-content:flex-start">
        <span>${T.icons.check} Serving all of DFW</span>
        <span>${T.icons.check} Industry-specific systems</span>
        <span>${T.icons.check} No lock-in contracts</span>
      </div>
    </div>
  </div>
</section>

<section class="section-tight" aria-labelledby="problems-title">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">The problems we hear every week</span>
      <h2 id="problems-title">Sound familiar?</h2>
    </div>
    <div class="grid grid-2">
      ${ind.problems.map((p, i) => `
      <div class="glass-card card-static reveal${i % 2 ? " reveal-d1" : ""}" style="border-color:rgba(248,113,113,0.25)">
        <p class="mb-0" style="font-size:0.98rem">${p}</p>
      </div>`).join("")}
    </div>
  </div>
</section>

<section class="section" aria-labelledby="solutions-title">
  <div class="container">
    <div class="section-head center reveal">
      <span class="eyebrow">What we solve</span>
      <h2 id="solutions-title">The system we build for ${ind.name.toLowerCase()}</h2>
    </div>
    <div class="grid grid-2">
      ${ind.solutions.map((s, i) => `
      <article class="glass-card reveal${i % 2 ? " reveal-d1" : ""}" style="display:flex;flex-direction:column">
        <div class="icon-chip">${T.icons.check}</div>
        <h3>${s.title}</h3>
        <p>${s.text}</p>
        <div style="margin-top:auto"><a class="read-more" href="${s.link}">Explore this service ${T.icons.arrow}</a></div>
      </article>`).join("")}
    </div>
  </div>
</section>

<section class="section-tight" aria-label="What we build toward">
  <div class="container">
    <div class="stats-band" style="grid-template-columns:repeat(3,1fr)">
      ${ind.proof.map((p, i) => `
      <div class="stat-item glass-card card-static reveal${i ? ` reveal-d${i}` : ""}"><b>${p.b}</b><span>${p.s}</span></div>`).join("")}
    </div>
    <p class="center calc-note mt-2">These are the targets we build toward and the industry benchmarks behind them — not results from a past client. Digital Jeeva360 is a new agency and we publish no outcome we cannot show you the account for. <a href="/results.html">See our benchmarks and sources</a>.</p>
  </div>
</section>

${T.faqBlock(ind.faqs, { title: `${ind.name} — your questions, answered` })}

${T.ctaBand({
    title: `Ready to be the ${ind.name.toLowerCase().replace(/s$/, "")} everyone in DFW calls first?`,
    text: "Book a free 30-minute strategy call. We'll bring competitor data for your exact market and map your fastest wins — no pressure, no obligation."
  })}

<section class="section" id="lead-form" aria-labelledby="form-title">
  <div class="container-narrow">
    <div class="section-head center reveal">
      <span class="eyebrow">Get started</span>
      <h2 id="form-title">Book your free strategy call</h2>
      <p>Tell us about your business and we'll come prepared with ideas specific to ${ind.name.toLowerCase()} in your part of DFW.</p>
    </div>
    <div class="glass-card card-static gradient-border" style="padding:clamp(1.5rem,4vw,2.8rem)">
      ${T.leadForm({ subject: `New lead — ${ind.name} | Digital Jeeva360` })}
    </div>
  </div>
</section>`;

  return T.page({
    title: ind.title,
    description: ind.description,
    keywords: ind.keywords,
    path,
    schema: [
      T.serviceSchema({ schemaName: `Marketing & AI Automation for ${ind.name}`, name: ind.name, description: ind.description, path }),
      T.breadcrumbSchema(crumbs),
      T.faqSchema(ind.faqs)
    ]
  }, body);
}

module.exports = { renderIndustriesIndex, renderIndustry };
