/* Renders an individual service page from its data object */
"use strict";

const T = require("../templates");

function renderService(svc, allServices) {
  const bySlug = Object.fromEntries((allServices || []).map((s) => [s.slug, s]));
  const childSlugs = T.SERVICE_FAMILY[svc.slug] || [];
  const children = childSlugs.map((s) => bySlug[s]).filter(Boolean);
  const parentSlug = Object.keys(T.SERVICE_FAMILY).find((p) => T.SERVICE_FAMILY[p].includes(svc.slug));
  const parent = parentSlug ? bySlug[parentSlug] : null;
  const path = `/services/${svc.slug}.html`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services.html" },
    { name: svc.name, path }
  ];

  const body = `
<section class="hero-page">
  <div class="container">
    ${T.breadcrumbs(crumbs)}
    <div class="section-head">
      <span class="eyebrow">${svc.hero.eyebrow}</span>
      <h1>${svc.hero.h1}</h1>
      <p class="lede" style="font-size:1.2rem">${svc.hero.lede}</p>
      <div class="hero-ctas" style="justify-content:flex-start">
        <a class="btn btn-primary btn-lg" href="/contact.html">Book Free Strategy Call ${T.icons.arrow}</a>
        <a class="btn btn-ghost btn-lg" href="${T.SITE.whatsappUrl}" target="_blank" rel="noopener">${T.icons.whatsapp} WhatsApp Us</a>
      </div>
      <div class="trust-badges" style="justify-content:flex-start">
        <span>${T.icons.check} Serving Dallas–Fort Worth</span>
        <span>${T.icons.check} No lock-in contracts</span>
        <span>${T.icons.check} Results-first approach</span>
      </div>
      ${parent ? `<p style="margin-top:1.4rem;font-size:0.92rem;color:var(--ink-faint)">Part of our <a href="/services/${parent.slug}.html"><b>${parent.name}</b></a> service.</p>` : ""}
    </div>
  </div>
</section>

${children.length ? `
<section class="section-tight" aria-labelledby="included-title">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">What's included</span>
      <h2 id="included-title" style="font-size:clamp(1.6rem,3vw,2.2rem)">Everything inside ${svc.name}</h2>
    </div>
    <div class="grid grid-3">
      ${children.map((c, i) => `
      <article class="glass-card reveal${i % 3 ? ` reveal-d${i % 3}` : ""}">
        <h3 style="font-size:1.15rem"><a href="/services/${c.slug}.html" style="color:#fff">${c.name}</a></h3>
        <p style="font-size:0.94rem">${c.description.split(". ")[0]}.</p>
        <a class="read-more" href="/services/${c.slug}.html">Learn more ${T.icons.arrow}</a>
      </article>`).join("")}
    </div>
  </div>
</section>` : ""}

<section class="section-tight" aria-labelledby="problem-title">
  <div class="container">
    <div class="split">
      <div class="reveal">
        <span class="eyebrow">The problem</span>
        <h2 id="problem-title">${svc.problem.title}</h2>
      </div>
      <ul class="check-list reveal reveal-d1">
        ${svc.problem.points.map((p) => `<li><svg viewBox="0 0 24 24" fill="none" stroke="#f87171" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg><span>${p}</span></li>`).join("\n        ")}
      </ul>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="solution-title">
  <div class="container">
    <div class="glass-card card-static gradient-border" style="padding:clamp(1.8rem,4vw,3.2rem)">
      <div class="split">
        <div class="reveal">
          <span class="eyebrow">The solution</span>
          <h2 id="solution-title">${svc.solution.title}</h2>
          <p>${svc.solution.text}</p>
        </div>
        <ul class="check-list reveal reveal-d1">
          ${svc.solution.points.map((p) => `<li>${T.icons.check}<span>${p}</span></li>`).join("\n          ")}
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="benefits-title">
  <div class="container">
    <div class="section-head center reveal">
      <span class="eyebrow">Benefits</span>
      <h2 id="benefits-title">What this does for your business</h2>
    </div>
    <div class="grid grid-3">
      ${svc.benefits.map((b, i) => `
      <article class="glass-card reveal${i % 3 ? ` reveal-d${i % 3}` : ""}">
        <div class="icon-chip">${T.icons[b.icon] || T.icons.zap}</div>
        <h3>${b.title}</h3>
        <p class="mb-0">${b.text}</p>
      </article>`).join("")}
    </div>
  </div>
</section>

<section class="section" aria-labelledby="process-title">
  <div class="container">
    <div class="split" style="align-items:start">
      <div class="reveal">
        <span class="eyebrow">Our process</span>
        <h2 id="process-title">How we work</h2>
        <p>A proven, transparent process — you'll always know what's happening, why, and what result it's driving toward.</p>
        <a class="btn btn-primary" href="/contact.html">Start With a Free Call ${T.icons.arrow}</a>
      </div>
      <div class="timeline reveal reveal-d1">
        ${svc.process.map((s, i) => `
        <div class="timeline-step">
          <div class="timeline-num" aria-hidden="true">${i + 1}</div>
          <div><h3>${s.title}</h3><p>${s.text}</p></div>
        </div>`).join("")}
      </div>
    </div>
  </div>
</section>

<section class="section-tight" aria-labelledby="tools-title">
  <div class="container">
    <div class="section-head center reveal">
      <span class="eyebrow">Tools &amp; platforms</span>
      <h2 id="tools-title" style="font-size:clamp(1.5rem,2.6vw,2rem)">Best-in-class technology, expertly applied</h2>
    </div>
    <div class="tag-row reveal" style="justify-content:center">
      ${svc.tools.map((t) => `<span class="tool-chip">${t}</span>`).join("\n      ")}
    </div>
  </div>
</section>

<section class="section" aria-labelledby="case-title">
  <div class="container">
    <div class="glass-card card-static" style="padding:clamp(1.8rem,4vw,3.2rem)">
      <span class="eyebrow">Case study</span>
      <h2 id="case-title" style="font-size:clamp(1.5rem,2.8vw,2.1rem)">${svc.caseStudy.client} — ${svc.caseStudy.location}</h2>
      <div class="split" style="align-items:start;margin-top:1.5rem">
        <div class="reveal">
          <h3>The challenge</h3>
          <p>${svc.caseStudy.challenge}</p>
          <h3>What we did</h3>
          <p class="mb-0">${svc.caseStudy.solution}</p>
        </div>
        <div class="reveal reveal-d1">
          <h3>The results</h3>
          <div class="stats-band" style="grid-template-columns:1fr;gap:0.9rem">
            ${svc.caseStudy.results.map((r) => `
            <div class="calc-stat"><span>${r.span}</span><b>${r.b}</b></div>`).join("")}
          </div>
          <a class="read-more mt-2" style="display:inline-flex" href="/industries.html">See how we help your industry ${T.icons.arrow}</a>
        </div>
      </div>
    </div>
  </div>
</section>

${T.faqBlock(svc.faqs, { title: `${svc.name} — your questions, answered` })}

${T.ctaBand({
    title: `Ready to see what ${svc.name.toLowerCase()} can do for you?`,
    text: "Book a free 30-minute strategy call. We'll assess your situation honestly and map your highest-ROI next steps — no pressure, no obligation."
  })}

<section class="section" id="lead-form" aria-labelledby="form-title">
  <div class="container-narrow">
    <div class="section-head center reveal">
      <span class="eyebrow">Get started</span>
      <h2 id="form-title">Book your free strategy call</h2>
      <p>Tell us a little about your business and we'll come to the call prepared with ideas specific to you.</p>
    </div>
    <div class="glass-card card-static gradient-border" style="padding:clamp(1.5rem,4vw,2.8rem)">
      ${T.leadForm({ subject: `New lead — ${svc.name} | Digital Jeeva360` })}
    </div>
  </div>
</section>`;

  return T.page({
    title: svc.title,
    description: svc.description,
    keywords: svc.keywords,
    path,
    schema: [
      T.serviceSchema({ ...svc, path, description: svc.description }),
      T.breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: c.path === "/" ? "/" : c.path }))),
      T.faqSchema(svc.faqs),
      T.localBusinessSchema()
    ]
  }, body);
}

module.exports = renderService;
