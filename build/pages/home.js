/* Home page */
"use strict";

const T = require("../templates");

function renderHome(posts) {
  /* Industries we build for. Deliberately NOT a client logo wall — we don't
     invent client names, and this page shows no client we can't name for real. */
  const builtFor = ["Dental Clinics", "Realtors", "Law Firms", "HVAC Companies", "Roofing Companies", "Med Spas", "Home Services", "Accounting Firms"];

  const blogPreview = posts.slice(0, 3);

  const body = `
<section class="hero" aria-label="Introduction">
  <div class="container">
    <div class="hero-inner">
      <span class="eyebrow reveal in-view">Dallas–Fort Worth · AI-Powered Growth Systems</span>
      <h1>AI Automation &amp; <span class="text-gradient">Digital Marketing Agency</span> in Dallas, TX</h1>
      <p class="lede">We build growth systems that <strong>stop leads leaking and answer every enquiry within a minute</strong> — AI receptionists, automation, SEO, Google Ads and premium websites, working as one system for dental clinics, realtors, law firms, HVAC and roofing companies across the DFW Metroplex.</p>
      <div class="hero-ctas">
        <a class="btn btn-primary btn-lg" href="/contact.html">Book Free Strategy Call ${T.icons.arrow}</a>
        <a class="btn btn-ghost btn-lg" href="/industries.html">Industries We Serve</a>
      </div>
      <div class="trust-badges">
        <span>${T.icons.check} Free strategy call, nothing to sign</span>
        <span>${T.icons.check} You own every account we build</span>
        <span>${T.icons.check} No lock-in contracts</span>
      </div>
    </div>

    <div class="hero-visual">
      <div class="float-card fc-1" data-parallax="14"><span class="dot"></span><div><b>New lead qualified</b><small>AI Assistant · just now</small></div></div>
      <div class="float-card fc-2" data-parallax="22"><span class="dot"></span><div><b>+$12,400 revenue</b><small>This week · automated funnel</small></div></div>
      <div class="float-card fc-3" data-parallax="18"><span class="dot"></span><div><b>34 hrs saved</b><small>Workflow automation · this week</small></div></div>

      <div class="dash chart-anim" data-parallax="6" role="img" aria-label="Illustrative example of a client growth dashboard. Sample figures, not real client data.">
        <div class="dash-bar"><i></i><i></i><i></i><span>example dashboard · sample data</span></div>
        <div class="dash-body">
          <div class="dash-stat"><small>Revenue growth</small><b><span data-count="214" data-prefix="+" data-suffix="%">0%</span></b><em>▲ vs last quarter</em></div>
          <div class="dash-stat"><small>Leads generated</small><b><span data-count="1847">0</span></b><em>▲ 3.1x increase</em></div>
          <div class="dash-stat"><small>Hours saved / week</small><b><span data-count="34">0</span></b><em>▲ via automation</em></div>
          <div class="dash-chart">
            <div class="chart-bars" aria-hidden="true">
              <i style="height:22%"></i><i style="height:30%" class="alt"></i><i style="height:27%"></i><i style="height:38%" class="alt"></i><i style="height:44%"></i><i style="height:41%" class="alt"></i><i style="height:56%"></i><i style="height:63%" class="alt"></i><i style="height:71%"></i><i style="height:78%" class="alt"></i><i style="height:88%"></i><i style="height:97%" class="alt"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section-tight" aria-label="Industries we build for">
  <div class="container">
    <p class="center" style="font-size:0.85rem;letter-spacing:0.14em;text-transform:uppercase;color:var(--ink-faint)">Growth systems built for service businesses across the DFW Metroplex</p>
    <div class="marquee" aria-hidden="true">
      <div class="marquee-track">
        ${builtFor.concat(builtFor).map((c) => `<span>${c}</span>`).join("\n        ")}
      </div>
    </div>
  </div>
</section>

<section class="section-tight" aria-label="Key statistics">
  <div class="container">
    <div class="stats-band">
      <div class="stat-item glass-card card-static reveal"><b><span data-count="27" data-suffix="%">0</span></b><span>of calls to local service businesses go unanswered</span></div>
      <div class="stat-item glass-card card-static reveal reveal-d1"><b><span data-count="78" data-suffix="%">0</span></b><span>of routine enquiries can be handled without a human</span></div>
      <div class="stat-item glass-card card-static reveal reveal-d2"><b><span data-count="391" data-prefix="+" data-suffix="%">0</span></b><span>more conversions when leads get a reply inside a minute</span></div>
      <div class="stat-item glass-card card-static reveal reveal-d3"><b>24/7</b><span>hours your AI receptionist is awake</span></div>
    </div>
    <p class="center calc-note mt-1" style="font-size:0.82rem">Published industry benchmarks — not Digital Jeeva360 client results.</p>
  </div>
</section>

<section class="section" aria-labelledby="services-title">
  <div class="container">
    <div class="section-head center reveal">
      <span class="eyebrow">What we do</span>
      <h2 id="services-title">One partner. Four growth levers. <span class="text-gradient">Zero guesswork.</span></h2>
      <p>Most agencies sell you one channel. We engineer the whole system — because leads from ads convert better on a fast website, rank higher with SEO working, and never slip away when automation follows up.</p>
    </div>
    <div class="grid grid-2">
      <article class="glass-card reveal">
        <div class="icon-chip">${T.icons.bot}</div>
        <h3><a href="/services/ai-automation.html" style="color:#fff">AI Automation</a></h3>
        <p>AI receptionists &amp; voice agents, chatbots, WhatsApp, email and workflow automation that answer, qualify, book and follow up — 24/7. Reclaim 20–40 hours a week and never lose a lead to slow response again.</p>
        <a class="read-more" href="/services/ai-automation.html">Explore AI Automation ${T.icons.arrow}</a>
      </article>
      <article class="glass-card reveal reveal-d1">
        <div class="icon-chip">${T.icons.code}</div>
        <h3><a href="/services/premium-web-design.html" style="color:#fff">Premium Website Development</a></h3>
        <p>Custom-designed, conversion-engineered websites that load in under two seconds and make your brand look like the market leader — because looking premium is a pricing strategy.</p>
        <a class="read-more" href="/services/premium-web-design.html">Explore Web Development ${T.icons.arrow}</a>
      </article>
      <article class="glass-card reveal reveal-d2">
        <div class="icon-chip">${T.icons.search}</div>
        <h3><a href="/services/seo.html" style="color:#fff">SEO &amp; Organic Growth</a></h3>
        <p>Technical SEO, content strategy and GEO/AEO for the AI search era. Rankings that compound into a permanent stream of ready-to-buy traffic — on Google and in ChatGPT answers.</p>
        <a class="read-more" href="/services/seo.html">Explore SEO ${T.icons.arrow}</a>
      </article>
      <article class="glass-card reveal reveal-d3">
        <div class="icon-chip">${T.icons.target}</div>
        <h3><a href="/services/paid-advertising.html" style="color:#fff">Paid Advertising</a></h3>
        <p>Google and Meta campaigns with bulletproof tracking, tested creative and matched landing pages. Reported in revenue and ROAS — the numbers your accountant recognises.</p>
        <a class="read-more" href="/services/paid-advertising.html">Explore Paid Ads ${T.icons.arrow}</a>
      </article>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="compare-title">
  <div class="container">
    <div class="section-head center reveal">
      <span class="eyebrow">The transformation</span>
      <h2 id="compare-title">Before and after a growth system</h2>
    </div>
    <div class="compare">
      <div class="compare-col compare-before reveal">
        <h3><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg> Without Digital Jeeva360</h3>
        <ul>
          <li>${T.icons.cross}<span>Leads wait hours for replies — most buy from whoever answered first</span></li>
          <li>${T.icons.cross}<span>Team buried in repetitive admin instead of revenue work</span></li>
          <li>${T.icons.cross}<span>Invisible on Google while competitors collect your customers</span></li>
          <li>${T.icons.cross}<span>Ad budget leaking into clicks that never convert</span></li>
          <li>${T.icons.cross}<span>A website that looks fine but quietly loses 97% of visitors</span></li>
        </ul>
      </div>
      <div class="compare-col compare-after reveal reveal-d1">
        <h3>${T.icons.check.replace('viewBox', 'width="22" height="22" viewBox')} With Digital Jeeva360</h3>
        <ul>
          <li>${T.icons.check}<span>Every lead answered in seconds, qualified and booked — 24/7</span></li>
          <li>${T.icons.check}<span>20–40 hours a week handed back to your team by automation</span></li>
          <li>${T.icons.check}<span>Page-one rankings and citations in AI search answers</span></li>
          <li>${T.icons.check}<span>Ads engineered for ROAS with every dollar tracked to revenue</span></li>
          <li>${T.icons.check}<span>A premium website that converts like your best salesperson</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section" id="calculator" aria-labelledby="calc-title">
  <div class="container">
    <div class="section-head center reveal">
      <span class="eyebrow">Automation savings calculator</span>
      <h2 id="calc-title">What is manual work costing you?</h2>
      <p>Drag the sliders. The numbers update instantly — and they're usually bigger than people expect.</p>
    </div>
    <div class="glass-card card-static gradient-border calc reveal" id="roi-calculator">
      <div class="calc-grid">
        <div>
          <div class="calc-control">
            <label for="calc-hours">Manual hours per week <output id="out-hours" for="calc-hours">30 hrs</output></label>
            <input type="range" id="calc-hours" min="0" max="100" value="30" step="1" aria-label="Manual hours per week">
          </div>
          <div class="calc-control">
            <label for="calc-cost">Average hourly cost <output id="out-cost" for="calc-cost">$45</output></label>
            <input type="range" id="calc-cost" min="10" max="300" value="45" step="5" aria-label="Average hourly employee cost in dollars">
          </div>
          <div class="calc-control">
            <label for="calc-team">Team members doing manual work <output id="out-team" for="calc-team">3</output></label>
            <input type="range" id="calc-team" min="1" max="500" value="3" step="1" aria-label="Number of employees">
          </div>
          <p class="calc-note">Assumes automation absorbs ~70% of repetitive manual work — conservative against what we typically deliver. ROI compares annual savings with a typical build investment.</p>
        </div>
        <div class="calc-results" aria-live="polite">
          <div class="calc-stat"><span>Weekly savings</span><b id="res-weekly">$0</b></div>
          <div class="calc-stat"><span>Monthly savings</span><b id="res-monthly">$0</b></div>
          <div class="calc-stat hero-stat"><span>Annual savings</span><b id="res-annual">$0</b></div>
          <div class="calc-stat"><span>Hours reclaimed per year</span><b id="res-hours">0 hrs</b></div>
          <div class="calc-stat"><span>First-year ROI</span><b id="res-roi">0%</b></div>
          <a class="btn btn-primary btn-lg" href="/contact.html" style="width:100%">Claim These Savings ${T.icons.arrow}</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="process-title">
  <div class="container">
    <div class="split" style="align-items:start">
      <div class="reveal">
        <span class="eyebrow">How it works</span>
        <h2 id="process-title">From first call to compounding growth</h2>
        <p>No mystery, no jargon, no 40-page proposals. A clear process that starts producing results in weeks — and keeps compounding from there.</p>
        <a class="btn btn-primary" href="/contact.html">Start With Step 1 — It's Free ${T.icons.arrow}</a>
      </div>
      <div class="timeline reveal reveal-d1">
        <div class="timeline-step"><div class="timeline-num">1</div><div><h3>Free strategy call</h3><p>30 minutes on your goals, bottlenecks and numbers. You leave with actionable ideas whether we work together or not.</p></div></div>
        <div class="timeline-step"><div class="timeline-num">2</div><div><h3>Growth audit &amp; roadmap</h3><p>We analyse your funnel, website, search visibility and operations — and deliver a prioritised, ROI-ranked plan.</p></div></div>
        <div class="timeline-step"><div class="timeline-num">3</div><div><h3>Build the system</h3><p>Automation, website, SEO and ads built in the order that pays back fastest. First results typically land within 30 days.</p></div></div>
        <div class="timeline-step"><div class="timeline-num">4</div><div><h3>Optimise &amp; compound</h3><p>Monthly optimisation and transparent revenue reporting. Each win becomes the baseline for the next.</p></div></div>
      </div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="founding-title">
  <div class="container">
    <div class="section-head center reveal">
      <span class="eyebrow">Where we are</span>
      <h2 id="founding-title">No testimonials here yet &mdash; <span class="text-gradient">and we won't invent any</span></h2>
      <p>Digital Jeeva360 is new. Most agency sites in this market show a wall of five-star quotes; we would rather you could verify ours, so this section stays empty until we have named clients who agreed to be quoted.</p>
    </div>
    <div class="split" style="align-items:start">
      <div class="reveal">
        <h3>What you get instead</h3>
        <p>Proof you can check yourself, on the call: the actual automations and campaign structures we build, walked through live, applied to your business with your numbers.</p>
        <ul class="check-list">
          <li>${T.icons.check}<span>A worked plan for your business, not a slide deck</span></li>
          <li>${T.icons.check}<span>Honest answer on whether a channel will work for you</span></li>
          <li>${T.icons.check}<span>Nothing to sign, and no follow-up sequence you didn't ask for</span></li>
        </ul>
      </div>
      <div class="glass-card gradient-border reveal reveal-d1">
        <div class="icon-chip">${T.icons.rocket}</div>
        <h3>Founding client places</h3>
        <p>We're taking on a small number of founding clients at a reduced rate, in exchange for permission to publish the results properly once we have them.</p>
        <ul class="check-list">
          <li>${T.icons.check}<span>Reduced rate for the first six months</span></li>
          <li>${T.icons.check}<span>Direct access to Jeeva, not an account manager</span></li>
          <li>${T.icons.check}<span>Full reporting in accounts you own</span></li>
          <li>${T.icons.check}<span>Month to month after the build</span></li>
        </ul>
        <a class="btn btn-primary mt-2" href="/contact.html">Ask about a founding place ${T.icons.arrow}</a>
      </div>
    </div>
  </div>
</section>

<section class="section-tight" aria-labelledby="guarantee-title">
  <div class="container-narrow">
    <div class="glass-card card-static gradient-border guarantee reveal" style="padding:clamp(1.8rem,4vw,2.8rem)">
      <div class="icon-chip">${T.icons.shield}</div>
      <div>
        <h2 id="guarantee-title" style="font-size:1.5rem">Our promise: results you can measure, or we'll tell you why</h2>
        <p class="mb-0">Every engagement starts with agreed, written success metrics — leads, rankings, hours saved, ROAS. You'll see progress against them in plain-English monthly reports. No lock-in contracts: we earn your business every single month, or you walk away free.</p>
      </div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="blog-title">
  <div class="container">
    <div class="section-head center reveal">
      <span class="eyebrow">From the blog</span>
      <h2 id="blog-title">Growth ideas you can steal</h2>
    </div>
    <div class="grid grid-3">
      ${blogPreview.map((p, i) => `
      <article class="glass-card blog-card reveal${i ? ` reveal-d${i}` : ""}">
        <div class="blog-cover" aria-hidden="true">${blogCover(i)}</div>
        <div class="blog-body">
          <div class="blog-meta"><span class="pill">${p.category}</span><span>${p.readTime}</span></div>
          <h3><a href="/blog/${p.slug}.html">${p.title}</a></h3>
          <p class="excerpt">${p.excerpt}</p>
          <a class="read-more" href="/blog/${p.slug}.html">Read article ${T.icons.arrow}</a>
        </div>
      </article>`).join("")}
    </div>
    <p class="center mt-3"><a class="btn btn-ghost" href="/blog.html">View All Articles ${T.icons.arrow}</a></p>
  </div>
</section>

${T.faqBlock([
    { q: "What kind of businesses do you work with?", a: "Dallas–Fort Worth businesses that live and die by inbound leads — dental clinics, realtors, law firms, HVAC and roofing companies especially. If we're not the right fit for your situation, we'll say so on the first call." },
    { q: "How quickly will I see results?", a: "It depends on the lever: automation and paid ads typically show measurable results within 2–4 weeks; premium websites convert from launch day; SEO builds meaningfully from 60–90 days and compounds from there. Your roadmap sequences quick wins first so momentum starts immediately." },
    { q: "What does it cost to work with you?", a: "Projects start around $1,500 (automation) and $2,000 (websites); SEO and ads retainers from $800/month. Every engagement begins with a free strategy call and a fixed, transparent quote tied to projected ROI — you'll always know what you're paying and what it should return." },
    { q: "Do you require long-term contracts?", a: "No. Everything is month-to-month after the initial project or 90-day sprint. We believe an agency should keep clients through results, not legal clauses." },
    { q: "I'm not technical. Is that a problem?", a: "Not at all — most of our clients aren't. We handle all the technology and explain everything in plain business language: hours saved, leads generated, revenue added. You never need to touch a workflow or a line of code unless you want to." }
  ], { title: "Questions? Answered." })}

${T.ctaBand({
    title: "Your competitors are automating. Are you?",
    text: "Every month of manual work is money left on the table. Book your free strategy call — 30 minutes, zero pressure, and a growth plan you keep either way."
  })}`;

  return T.page({
    title: "AI Automation & Digital Marketing Agency in Dallas, TX | Digital Jeeva360",
    description: "Dallas AI automation & digital marketing agency. AI receptionists, chatbots, SEO, Google Ads and websites for dental clinics, realtors, law firms, HVAC and roofing companies across DFW.",
    keywords: "AI automation agency Dallas, digital marketing agency Dallas TX, AI receptionist Dallas, Dallas SEO agency, Google Ads Dallas, web design Dallas, marketing agency DFW",
    path: "/index.html",
    schema: []
  }, body);
}

/* Simple abstract SVG covers for blog cards */
function blogCover(i) {
  const palettes = [
    ["#2563eb", "#8b5cf6"],
    ["#1d4ed8", "#2563eb"],
    ["#8b5cf6", "#38bdf8"]
  ];
  const [a, b] = palettes[i % palettes.length];
  return `<svg viewBox="0 0 400 212" preserveAspectRatio="xMidYMid slice" role="presentation">
  <defs><linearGradient id="bgc${i}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}" stop-opacity="0.35"/><stop offset="1" stop-color="${b}" stop-opacity="0.12"/></linearGradient></defs>
  <rect width="400" height="212" fill="url(#bgc${i})"/>
  <circle cx="${330 - i * 40}" cy="${40 + i * 25}" r="60" fill="${b}" opacity="0.14"/>
  <circle cx="${60 + i * 30}" cy="${170 - i * 20}" r="45" fill="${a}" opacity="0.18"/>
  <path d="M20 ${170 - i * 8} Q120 ${100 + i * 12} 200 ${130 - i * 6} T 380 ${60 + i * 10}" stroke="${b}" stroke-width="2.5" fill="none" opacity="0.65"/>
  <circle cx="380" cy="${60 + i * 10}" r="5" fill="${b}"/>
</svg>`;
}

module.exports = renderHome;
module.exports.blogCover = blogCover;
