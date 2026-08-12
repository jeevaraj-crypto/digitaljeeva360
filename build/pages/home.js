/* Home page */
"use strict";

const T = require("../templates");

function renderHome(posts) {
  const testimonials = [
    { quote: "We went from manually chasing every lead to waking up with booked appointments in the calendar. The automation system Jeeva built paid for itself in the first six weeks — and it just keeps working.", name: "Marcus T.", role: "Director, Property Management Group — Dallas, TX", initials: "MT" },
    { quote: "Our old site got two enquiries a month. The new one gets that before lunch on a Tuesday. Design, speed, copy — everything was built around converting, and it shows in our pipeline.", name: "Sarah W.", role: "Managing Partner, Law Firm — Downtown Dallas, TX", initials: "SW" },
    { quote: "I was sceptical about another SEO agency after two bad experiences. Nine months later we rank page one for every service we offer, and organic is now our biggest revenue channel.", name: "Daniel R.", role: "Founder, E-commerce Brand — Frisco, TX", initials: "DR" },
    { quote: "The WhatsApp system books trials, reminds members and wins back cancellations completely on its own. It's like hiring three receptionists who never sleep — for a fraction of one salary.", name: "Priya K.", role: "Owner, Fitness Studios — Plano, TX", initials: "PK" },
    { quote: "Finally an agency that reports revenue instead of impressions. Our ad spend produces 5x returns and I can see exactly where every dollar goes. Total transparency.", name: "Emma L.", role: "Marketing Director, Dental Group — Fort Worth, TX", initials: "EL" }
  ];

  const clients = ["Meridian Legal", "NorthPeak Fitness", "Solara Energy", "Hartwell Dental", "Beacon Realty", "Crest & Co.", "Vantage HVAC", "Lumen Skincare", "Atlas Accounting", "Harbour Coffee"];

  const blogPreview = posts.slice(0, 3);

  const body = `
<section class="hero" aria-label="Introduction">
  <div class="container">
    <div class="hero-inner">
      <span class="eyebrow reveal in-view">Dallas–Fort Worth · AI-Powered Growth Systems</span>
      <h1>AI Automation &amp; <span class="text-gradient">Digital Marketing Agency</span> in Dallas, TX</h1>
      <p class="lede">Our mission: help Dallas businesses grow <strong>2–3x in 6 months</strong> with AI that never sleeps — AI receptionists, automation, SEO, Google Ads and premium websites built into one growth system for dental clinics, realtors, law firms, HVAC and roofing companies across the DFW Metroplex.</p>
      <div class="hero-ctas">
        <a class="btn btn-primary btn-lg" href="/contact.html">Book Free Strategy Call ${T.icons.arrow}</a>
        <a class="btn btn-ghost btn-lg" href="/industries.html">Industries We Serve</a>
      </div>
      <div class="trust-badges">
        <span>${T.icons.check} 47+ businesses automated</span>
        <span>${T.icons.check} 4.9★ average client rating</span>
        <span>${T.icons.check} No lock-in contracts</span>
      </div>
    </div>

    <div class="hero-visual">
      <div class="float-card fc-1" data-parallax="14"><span class="dot"></span><div><b>New lead qualified</b><small>AI Assistant · just now</small></div></div>
      <div class="float-card fc-2" data-parallax="22"><span class="dot"></span><div><b>+$12,400 revenue</b><small>This week · automated funnel</small></div></div>
      <div class="float-card fc-3" data-parallax="18"><span class="dot"></span><div><b>34 hrs saved</b><small>Workflow automation · this week</small></div></div>

      <div class="dash chart-anim" data-parallax="6" role="img" aria-label="Live business growth dashboard showing revenue up 214 percent, 1,847 leads generated and 34 hours saved weekly">
        <div class="dash-bar"><i></i><i></i><i></i><span>growth-dashboard.digitaljeeva360.com</span></div>
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

<section class="section-tight" aria-label="Trusted by businesses">
  <div class="container">
    <p class="center" style="font-size:0.85rem;letter-spacing:0.14em;text-transform:uppercase;color:var(--ink-faint)">Trusted by ambitious businesses across the DFW Metroplex</p>
    <div class="marquee" aria-hidden="true">
      <div class="marquee-track">
        ${clients.concat(clients).map((c) => `<span>${c}</span>`).join("\n        ")}
      </div>
    </div>
  </div>
</section>

<section class="section-tight" aria-label="Key statistics">
  <div class="container">
    <div class="stats-band">
      <div class="stat-item glass-card card-static reveal"><b><span data-count="2.7" data-decimals="1" data-suffix="x">0</span></b><span>Average revenue growth</span></div>
      <div class="stat-item glass-card card-static reveal reveal-d1"><b><span data-count="41200" data-suffix="+">0</span></b><span>Hours automated for clients</span></div>
      <div class="stat-item glass-card card-static reveal reveal-d2"><b><span data-count="184" data-prefix="+" data-suffix="%">0</span></b><span>Avg. organic traffic lift</span></div>
      <div class="stat-item glass-card card-static reveal reveal-d3"><b><span data-count="4.6" data-decimals="1" data-suffix="x">0</span></b><span>Average return on ad spend</span></div>
    </div>
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

<section class="section" aria-labelledby="testimonials-title">
  <div class="container">
    <div class="section-head center reveal">
      <span class="eyebrow">Client stories</span>
      <h2 id="testimonials-title">Don't take our word for it</h2>
    </div>
    <div class="slider-wrap reveal">
      <div class="slider">
        <div class="slider-track">
          ${testimonials.map((t) => `
          <div class="slide">
            <div class="testimonial glass-card card-static">
              <div class="stars" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote>“${t.quote}”</blockquote>
              <div class="avatar" aria-hidden="true">${t.initials}</div>
              <cite><b>${t.name}</b><span>${t.role}</span></cite>
            </div>
          </div>`).join("")}
        </div>
      </div>
      <div class="slider-nav">
        <button class="slider-arrow" data-slide-prev aria-label="Previous testimonial"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"/></svg></button>
        <div class="slider-dots" role="tablist" aria-label="Testimonial navigation"></div>
        <button class="slider-arrow" data-slide-next aria-label="Next testimonial"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>
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
    { q: "Do you require long-term contracts?", a: "No. Everything is month-to-month after the initial project or 90-day sprint. We believe an agency should keep clients through results, not legal clauses — and our retention proves the model works." },
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
    schema: [T.localBusinessSchema()]
  }, body);
}

/* Simple abstract SVG covers for blog cards */
function blogCover(i) {
  const palettes = [
    ["#149b71", "#0d9488"],
    ["#0f766e", "#149b71"],
    ["#0d9488", "#2dd4a7"]
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
