/* About, Services index, Contact, Blog, Legal & 404 pages */
"use strict";

const T = require("../templates");
const { blogCover } = require("./home");

/* ============ ABOUT ============ */
function renderAbout() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "About", path: "/about.html" }];
  const body = `
<section class="hero-page">
  <div class="container">
    ${T.breadcrumbs(crumbs)}
    <div class="split" style="align-items:center">
      <div>
        <span class="eyebrow">About Digital Jeeva360</span>
        <h1>The unfair advantage your competitors <span class="text-gradient">hope you never find</span></h1>
        <p class="lede">Digital Jeeva360 exists for one reason: to help ambitious businesses grow faster by combining human strategy with AI execution — while everyone else is still doing things the slow way.</p>
        <div class="hero-ctas" style="justify-content:flex-start">
          <a class="btn btn-primary btn-lg" href="/contact.html">Work With Us ${T.icons.arrow}</a>
          <a class="btn btn-ghost btn-lg" href="/industries.html">Industries We Serve</a>
        </div>
      </div>
      <div class="glass-card card-static gradient-border" style="padding:2.4rem">
        <div class="avatar" style="width:84px;height:84px;font-size:1.6rem;margin:0 0 1.2rem">J</div>
        <h2 style="font-size:1.5rem;margin-bottom:0.4rem">Jeeva</h2>
        <p style="color:var(--cyan);font-weight:600;font-size:0.92rem">Founder — AI-Powered Digital Marketer &amp; Automation Specialist</p>
        <p style="font-size:0.88rem;color:var(--ink-faint)">Based in India · Proudly serving Dallas–Fort Worth, Texas</p>
        <p>“I started Digital Jeeva360 after watching brilliant business owners lose evenings, weekends and opportunities to work a machine should be doing. AI finally makes enterprise-level marketing and operations available to every business — my job is making it work for yours.”</p>
        <div class="footer-social" style="margin-top:0.5rem">
          <a href="${T.SITE.whatsappUrl}" target="_blank" rel="noopener" aria-label="WhatsApp">${T.icons.whatsapp}</a>
          <a href="${T.SITE.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${T.icons.instagram}</a>
          <a href="mailto:${T.SITE.email}" aria-label="Email">${T.icons.mail}</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="mission-title">
  <div class="container">
    <div class="section-head center reveal">
      <span class="eyebrow">Our mission</span>
      <h2 id="mission-title">Less manual work. More qualified leads. Faster growth.</h2>
      <p>Every engagement is measured against the same promise: reduce your working hours, generate more qualified leads, increase your traffic and revenue — and get your Dallas business to 2–3x growth within 6 months using AI systems, SEO, paid ads and premium websites.</p>
    </div>
    <div class="grid grid-3">
      <div class="glass-card reveal"><div class="icon-chip">${T.icons.clock}</div><h3>Time back first</h3><p class="mb-0">Before we add anything new, we automate what's stealing your hours. Growth built on a foundation of reclaimed time doesn't burn anyone out.</p></div>
      <div class="glass-card reveal reveal-d1"><div class="icon-chip">${T.icons.chart}</div><h3>Revenue over vanity</h3><p class="mb-0">Likes, impressions and traffic curves don't pay salaries. Everything we build and report is tied to leads, bookings and revenue.</p></div>
      <div class="glass-card reveal reveal-d2"><div class="icon-chip">${T.icons.shield}</div><h3>Honesty as strategy</h3><p class="mb-0">If a channel won't work for you, we say so before you spend. Long-term trust beats short-term invoices — it's why clients stay for years.</p></div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="story-title">
  <div class="container-narrow article">
    <span class="eyebrow reveal">The story</span>
    <h2 id="story-title" class="reveal">Why "360"?</h2>
    <div class="reveal">
      <p>Most businesses don't have a marketing problem — they have a <em>system</em> problem. The ads work, but leads leak away because follow-up is manual. The website looks fine, but it's slow, so rankings suffer. SEO brings traffic, but the site doesn't convert it. Each piece is judged alone; nothing connects.</p>
      <p>Digital Jeeva360 was built around the opposite idea: treat growth as one connected, 360-degree system. Automation catches and nurtures every lead the ads generate. The website converts the traffic SEO earns. Every channel feeds the others, and AI runs the repetitive parts around the clock.</p>
      <p>Today we build those systems for dental clinics, realtors, law firms, HVAC and roofing companies across Dallas–Fort Worth — industries where speed of response decides who wins the customer, every single day.</p>
      <p>And yes — I'm from India, serving Dallas. That's not a compromise; it's an advantage. Your automations get built and your campaigns get optimised while Dallas sleeps, and I'm on WhatsApp and calls during Central Time business hours. You get senior-level work at a pace and price a local agency can't match — with results measured in the only currency that matters: Dallas leads and Dallas revenue.</p>
    </div>
    <h2 class="reveal">How we're different</h2>
    <ul class="check-list reveal">
      <li>${T.icons.check}<span><b>AI-native, not AI-curious.</b> Automation isn't a bolt-on service — it's the backbone of every system we design.</span></li>
      <li>${T.icons.check}<span><b>One accountable partner.</b> Strategy, build and optimisation under one roof. No finger-pointing between vendors.</span></li>
      <li>${T.icons.check}<span><b>Founder-led work.</b> You work directly with the person responsible for your results — not an account manager reading a dashboard.</span></li>
      <li>${T.icons.check}<span><b>Month-to-month by choice.</b> No lock-in contracts. Performance is our retention strategy.</span></li>
    </ul>
  </div>
</section>

${T.ctaBand({ title: "Let's build your growth system", text: "A free 30-minute strategy call is the best first step. Come with questions — leave with a plan." })}`;

  return T.page({
    title: "About Digital Jeeva360 — AI-Powered Growth for Ambitious Businesses",
    description: "Meet Digital Jeeva360: founder-led, AI-native growth agency helping Dallas–Fort Worth businesses automate operations and grow 2–3x.",
    keywords: "about Digital Jeeva360, Jeeva digital marketer, AI automation specialist, digital marketing agency about",
    path: "/about.html",
    schema: [T.breadcrumbSchema(crumbs)]
  }, body);
}

/* ============ SERVICES INDEX ============ */
function renderServicesIndex(services) {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Services", path: "/services.html" }];
  const bySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
  const pillars = [
    { slug: "ai-automation", icon: "bot", tagline: "Put your operations on autopilot",
      blurb: "AI receptionists & voice agents, chatbots and workflow automation that answer customers, qualify leads and book appointments 24/7 — so you reclaim 20–40 hours every week." },
    { slug: "premium-web-design", icon: "code", tagline: "Turn your website into your best salesperson",
      blurb: "Custom-designed, conversion-engineered websites that load in under two seconds, rank on Google and make your brand look like the market leader." },
    { slug: "seo", icon: "search", tagline: "Get found by people ready to buy",
      blurb: "Full-stack SEO for Google and the AI search era — rankings that compound into a permanent stream of high-intent traffic and leads." },
    { slug: "paid-advertising", icon: "target", tagline: "Profitable campaigns, not expensive clicks",
      blurb: "Google and Meta campaigns with bulletproof tracking, tested creative and matched landing pages — reported in revenue, not impressions." }
  ];

  const body = `
<section class="hero-page">
  <div class="container">
    ${T.breadcrumbs(crumbs)}
    <div class="section-head">
      <span class="eyebrow">Services</span>
      <h1>Four services. <span class="text-gradient">One growth system.</span></h1>
      <p class="lede">Everything we do fits into four core services that work as one connected system. Start with the one that pays back fastest for your business — your free strategy call tells you which that is.</p>
      <div class="hero-ctas" style="justify-content:flex-start">
        <a class="btn btn-primary btn-lg" href="/contact.html">Find My Fastest Win ${T.icons.arrow}</a>
      </div>
    </div>
  </div>
</section>

<section class="section-tight" aria-label="Our four core services">
  <div class="container">
    <div class="grid grid-2">
      ${pillars.map((p, i) => {
        const s = bySlug[p.slug];
        const kids = T.SERVICE_FAMILY[p.slug].map((k) => bySlug[k]);
        return `
      <article class="glass-card reveal${i % 2 ? " reveal-d1" : ""}" style="display:flex;flex-direction:column">
        <div class="icon-chip">${T.icons[p.icon]}</div>
        <span class="eyebrow" style="margin-bottom:0.8rem">${p.tagline}</span>
        <h2 style="font-size:clamp(1.4rem,2.6vw,1.8rem)"><a href="/services/${s.slug}.html" style="color:#fff">${s.name}</a></h2>
        <p>${p.blurb}</p>
        <p style="font-size:0.82rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--ink-faint);font-weight:700;margin-bottom:0.7rem">Includes</p>
        <ul class="check-list" style="margin-bottom:1.5rem">
          ${kids.map((k) => `<li>${T.icons.check}<span><a href="/services/${k.slug}.html">${k.name}</a></span></li>`).join("\n          ")}
        </ul>
        <div style="margin-top:auto">
          <a class="btn btn-primary" href="/services/${s.slug}.html">Explore ${s.name} ${T.icons.arrow}</a>
        </div>
      </article>`;
      }).join("")}
    </div>
  </div>
</section>

${T.ctaBand({ title: "Not sure where to start?", text: "That's exactly what the free strategy call is for. We'll look at your business and tell you which lever pays back fastest — honestly, even if the answer is 'not us'." })}`;

  return T.page({
    title: "Services — AI Automation, Web Design, SEO & Paid Ads | Digital Jeeva360",
    description: "Our four core services: AI Automation (chatbots, WhatsApp, email, workflows), Premium Website Development, SEO & Organic Growth, and Paid Advertising (Google & Meta Ads).",
    keywords: "digital marketing services, AI automation services, web design services, SEO services, PPC services",
    path: "/services.html",
    schema: [T.breadcrumbSchema(crumbs)]
  }, body);
}

/* ============ RESULTS ============ */
function renderResults() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Results", path: "/results.html" }];
  const body = `
<section class="hero-page">
  <div class="container">
    ${T.breadcrumbs(crumbs)}
    <div class="section-head center" style="margin-inline:auto;text-align:center">
      <span class="eyebrow">Benchmarks</span>
      <h1>What a growth system can <span class="text-gradient">realistically produce</span></h1>
      <p class="lede">Digital Jeeva360 is a new agency and we are not going to invent a client roster. Instead, here is what published industry research says these systems achieve — the same benchmarks we use to set targets on a strategy call.</p>
    </div>
  </div>
</section>

<section class="section-tight" aria-label="Industry benchmarks">
  <div class="container">
    <p class="center calc-note" style="margin-bottom:1.2rem"><b>These are industry benchmarks, not our client results.</b> Sources are listed at the foot of this page.</p>
    <div class="stats-band">
      <div class="stat-item glass-card card-static reveal"><b><span data-count="78" data-suffix="%">0</span></b><span>of routine enquiries resolvable without a human</span></div>
      <div class="stat-item glass-card card-static reveal reveal-d1"><b><span data-count="391" data-prefix="+" data-suffix="%">0</span></b><span>lift in conversion when leads are answered within 1 minute</span></div>
      <div class="stat-item glass-card card-static reveal reveal-d2"><b><span data-count="27" data-suffix="%">0</span></b><span>of local service calls go unanswered on average</span></div>
      <div class="stat-item glass-card card-static reveal reveal-d3"><b><span data-count="2" data-suffix="x">0</span></b><span>typical ROAS floor for a well-structured local Google Ads account</span></div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="revenue-title">
  <div class="container">
    <div class="split">
      <div class="reveal">
        <span class="eyebrow">Modelled trajectory</span>
        <h2 id="revenue-title">How the three channels compound</h2>
        <p>This is a <b>modelled</b> curve, not a client's books — it shows the sequence we build to, and why the order matters. Automation stops the leaks first because it pays back fastest, ads scale only once unit economics are proven, and SEO is planted early but harvested last.</p>
        <ul class="check-list">
          <li>${T.icons.check}<span><b>Months 1–3:</b> automation recovers lost leads and hours</span></li>
          <li>${T.icons.check}<span><b>Months 3–6:</b> paid ads scale on proven unit economics</span></li>
          <li>${T.icons.check}<span><b>Months 6–12:</b> SEO compounds into free, recurring demand</span></li>
        </ul>
      </div>
      <div class="dash chart-anim reveal reveal-d1">
        <div class="dash-bar"><i></i><i></i><i></i><span>illustrative model · not client data</span></div>
        <div class="dash-body" style="grid-template-columns:1fr">
          <div class="dash-chart line-chart">
            <svg viewBox="0 0 560 240" role="img" aria-label="Illustrative model of how automation, paid ads and SEO compound over twelve months. Not client data.">
              <defs>
                <linearGradient id="lg-area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b82f6" stop-opacity="0.35"/><stop offset="1" stop-color="#3b82f6" stop-opacity="0"/></linearGradient>
                <linearGradient id="lg-line" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#3b82f6"/><stop offset="1" stop-color="#a78bfa"/></linearGradient>
              </defs>
              <g stroke="rgba(255,255,255,0.07)"><line x1="0" y1="60" x2="560" y2="60"/><line x1="0" y1="120" x2="560" y2="120"/><line x1="0" y1="180" x2="560" y2="180"/></g>
              <path class="area" d="M20 200 L65 196 L110 188 L155 176 L200 168 L245 152 L290 140 L335 122 L380 104 L425 84 L470 62 L515 40 L515 230 L20 230 Z" fill="url(#lg-area)"/>
              <path class="line" d="M20 200 L65 196 L110 188 L155 176 L200 168 L245 152 L290 140 L335 122 L380 104 L425 84 L470 62 L515 40" stroke="url(#lg-line)" stroke-width="3.5" fill="none" stroke-linecap="round"/>
              <circle cx="515" cy="40" r="6" fill="#34d399"/><circle cx="515" cy="40" r="11" fill="#34d399" opacity="0.25"/>
              <text x="20" y="225" fill="#5f6a8a" font-size="12">M1</text><text x="255" y="225" fill="#5f6a8a" font-size="12">M6</text><text x="495" y="225" fill="#5f6a8a" font-size="12">M12</text>
              <text x="392" y="30" fill="#c4b5fd" font-size="13" font-weight="700">modelled</text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="channels-title">
  <div class="container">
    <div class="section-head center reveal">
      <span class="eyebrow">By channel</span>
      <h2 id="channels-title">What each channel is good for</h2>
      <p class="lede">Benchmark ranges from published industry research — what these channels typically deliver when they are set up properly.</p>
    </div>
    <div class="grid grid-3">
      <div class="glass-card chart-anim reveal">
        <div class="icon-chip">${T.icons.bot}</div>
        <h3>AI Automation</h3>
        <div class="chart-bars" style="height:110px" aria-hidden="true"><i style="height:30%"></i><i style="height:45%"></i><i style="height:60%"></i><i style="height:74%"></i><i style="height:88%"></i><i style="height:100%" class="alt"></i></div>
        <p class="mt-1" style="font-size:0.94rem">Answers every call and message 24/7. Industry research puts <b>up to 78%</b> of routine enquiries in scope for resolution without a human, and the average small service business misses <b>around 27%</b> of inbound calls.</p>
      </div>
      <div class="glass-card chart-anim reveal reveal-d1">
        <div class="icon-chip">${T.icons.search}</div>
        <h3>SEO &amp; Organic</h3>
        <div class="chart-bars" style="height:110px" aria-hidden="true"><i style="height:20%" class="alt"></i><i style="height:32%" class="alt"></i><i style="height:41%" class="alt"></i><i style="height:58%" class="alt"></i><i style="height:79%" class="alt"></i><i style="height:100%"></i></div>
        <p class="mt-1" style="font-size:0.94rem">The slowest channel and the only one that compounds. Realistic horizon for a local service business is <b>6–12 months</b> to meaningful map-pack and organic visibility — anyone promising faster is selling something.</p>
      </div>
      <div class="glass-card chart-anim reveal reveal-d2">
        <div class="icon-chip">${T.icons.target}</div>
        <h3>Paid Advertising</h3>
        <div class="chart-bars" style="height:110px" aria-hidden="true"><i style="height:25%"></i><i style="height:38%" class="alt"></i><i style="height:52%"></i><i style="height:67%" class="alt"></i><i style="height:81%"></i><i style="height:100%" class="alt"></i></div>
        <p class="mt-1" style="font-size:0.94rem">Fastest to switch on, and the easiest to waste money on. A well-structured local account should clear <b>2x ROAS</b> as a floor; below that the problem is usually targeting or the landing page, not the budget.</p>
      </div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="proof-title">
  <div class="container">
    <div class="section-head center reveal">
      <span class="eyebrow">Where we are</span>
      <h2 id="proof-title">We would rather be honest than impressive</h2>
    </div>
    <div class="split">
      <div class="reveal">
        <p>Most agency sites in this market show a wall of case-study numbers. Ours does not, for one reason: Digital Jeeva360 is new, and we are not going to put figures on this page that we cannot show you the account for.</p>
        <p>What we can show you is the work — the automations, the builds, the campaign structures — and exactly how we would apply them to your business. That conversation is free and there is nothing to sign at the end of it.</p>
        <p>This page will fill up with real, named, client-approved results as we earn them. Until then it stays a benchmarks page.</p>
      </div>
      <div class="glass-card reveal reveal-d1">
        <div class="icon-chip">${T.icons.rocket}</div>
        <h3>Founding client places</h3>
        <p>We are taking on a small number of founding clients at a reduced rate, in exchange for permission to publish the results properly once we have them.</p>
        <ul class="check-list">
          <li>${T.icons.check}<span>Reduced engagement rate for the first six months</span></li>
          <li>${T.icons.check}<span>Direct access to Jeeva, not an account manager</span></li>
          <li>${T.icons.check}<span>Full reporting you own, in your own ad and analytics accounts</span></li>
          <li>${T.icons.check}<span>No long contract — month to month after the build</span></li>
        </ul>
        <a class="btn btn-primary mt-2" href="/contact.html">Ask about a founding place ${T.icons.arrow}</a>
      </div>
    </div>
  </div>
</section>

<section class="section-tight" aria-labelledby="sources-title">
  <div class="container">
    <div class="glass-card card-static reveal" style="padding:1.6rem 1.8rem">
      <h2 id="sources-title" style="font-size:1.1rem;margin-top:0">Where these benchmarks come from</h2>
      <p style="font-size:0.9rem;color:var(--ink-faint);margin-bottom:0.8rem">Every figure on this page is an industry benchmark drawn from published research, not a Digital Jeeva360 client outcome. Ranges vary by industry, market and starting position — treat them as planning inputs, not promises.</p>
      <ul class="check-list" style="font-size:0.9rem">
        <li>${T.icons.check}<span><b>Lead response timing</b> — Harvard Business Review, &ldquo;The Short Life of Online Sales Leads&rdquo;, and the InsideSales/Lead Response Management study on contact rates by response interval.</span></li>
        <li>${T.icons.check}<span><b>Missed-call rates for local service businesses</b> — aggregated call-tracking industry reporting; varies widely by trade and season.</span></li>
        <li>${T.icons.check}<span><b>Enquiry deflection by conversational AI</b> — vendor-published containment rates across support and intake use cases; the upper end assumes a well-scoped, well-trained assistant.</span></li>
        <li>${T.icons.check}<span><b>Paid search ROAS and local SEO timelines</b> — Google Economic Impact reporting and widely-replicated agency benchmarks for local service verticals.</span></li>
      </ul>
      <p style="font-size:0.85rem;color:var(--ink-faint);margin-bottom:0">Your strategy call includes a projection built on <em>your</em> numbers — current call volume, close rate and average job value — rather than these averages.</p>
    </div>
  </div>
</section>

${T.ctaBand({ title: "Find out what your numbers could look like", text: "Book a free strategy call. We'll model the realistic upside for your business from your actual call volume, close rate and job value — before you spend a dollar." })}`;

  return T.page({
    title: "Benchmarks & What to Expect — AI Automation and Marketing | Digital Jeeva360",
    description: "Honest industry benchmarks for AI automation, SEO and paid ads for Dallas–Fort Worth service businesses — with sources, and no invented case studies.",
    keywords: "digital marketing benchmarks, AI automation ROI, lead response time statistics, local SEO timeline, marketing agency expectations",
    path: "/results.html",
    schema: [T.breadcrumbSchema(crumbs)]
  }, body);
}

/* ============ CONTACT ============ */
function renderContact() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Contact", path: "/contact.html" }];
  const body = `
<section class="hero-page">
  <div class="container">
    ${T.breadcrumbs(crumbs)}
    <div class="section-head center" style="margin-inline:auto;text-align:center">
      <span class="eyebrow">Contact</span>
      <h1>Let's talk about your <span class="text-gradient">growth</span></h1>
      <p class="lede">Book a free 30-minute strategy call, or reach out on whichever channel you prefer. Every message gets a personal reply within one business day.</p>
    </div>
  </div>
</section>

<section class="section-tight">
  <div class="container">
    <div class="grid grid-3">
      <a class="glass-card center reveal" href="${T.SITE.whatsappUrl}?text=${encodeURIComponent("Hi Jeeva, I'd like to talk about growing my business.")}" target="_blank" rel="noopener" style="display:block">
        <div class="icon-chip" style="margin-inline:auto">${T.icons.whatsapp}</div>
        <h3>WhatsApp</h3>
        <p style="color:var(--cyan);font-weight:600">+91 90877 72803</p>
        <p class="mb-0" style="font-size:0.9rem">Fastest response — usually within minutes</p>
      </a>
      <a class="glass-card center reveal reveal-d1" href="mailto:${T.SITE.email}" style="display:block">
        <div class="icon-chip" style="margin-inline:auto">${T.icons.mail}</div>
        <h3>Email</h3>
        <p style="color:var(--cyan);font-weight:600;word-break:break-all">${T.SITE.email}</p>
        <p class="mb-0" style="font-size:0.9rem">Perfect for briefs and detailed questions</p>
      </a>
      <a class="glass-card center reveal reveal-d2" href="${T.SITE.instagram}" target="_blank" rel="noopener" style="display:block">
        <div class="icon-chip" style="margin-inline:auto">${T.icons.instagram}</div>
        <h3>Instagram</h3>
        <p style="color:var(--cyan);font-weight:600">@digitaljeeva360</p>
        <p class="mb-0" style="font-size:0.9rem">Follow for daily AI marketing ideas</p>
      </a>
    </div>
  </div>
</section>

<section class="section" id="book" aria-labelledby="form-title">
  <div class="container">
    <div class="split" style="align-items:start">
      <div class="reveal">
        <span class="eyebrow">Free strategy call</span>
        <h2 id="form-title">What happens after you hit send</h2>
        <div class="timeline mt-2">
          <div class="timeline-step"><div class="timeline-num">1</div><div><h3>Personal reply within 24h</h3><p>Jeeva reviews your details and replies personally — no autoresponders pretending to be humans.</p></div></div>
          <div class="timeline-step"><div class="timeline-num">2</div><div><h3>30-minute strategy call</h3><p>We dig into your goals, funnel and operations, and identify your highest-ROI opportunities together.</p></div></div>
          <div class="timeline-step"><div class="timeline-num">3</div><div><h3>Your growth plan</h3><p>You receive a clear, prioritised plan with honest projections — yours to keep, whoever you build it with.</p></div></div>
        </div>
        <div class="glass-card card-static mt-3" style="padding:1.5rem">
          <p class="mb-0" style="font-size:0.95rem">${T.icons.pin.replace("<svg", '<svg style="width:18px;height:18px;display:inline;vertical-align:-3px;margin-right:6px;color:var(--cyan)"')} <b>Serving the Dallas–Fort Worth Metroplex</b> — Dallas, Plano, Frisco, Fort Worth, Arlington, Irving, McKinney and beyond. Calls available in Central Time business hours, seven days a week.</p>
        </div>
        <div class="mt-2" style="border-radius:var(--radius);overflow:hidden;border:1px solid var(--stroke)">
          <iframe title="Dallas–Fort Worth service area map" src="https://www.google.com/maps?q=Dallas,+TX&output=embed" width="100%" height="240" style="border:0;display:block" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div class="glass-card card-static gradient-border reveal reveal-d1" style="padding:clamp(1.5rem,4vw,2.5rem)">
        <h3 style="margin-bottom:1.4rem">Book your free strategy call</h3>
        ${T.leadForm({ subject: "New strategy call request — Digital Jeeva360" })}
      </div>
    </div>
  </div>
</section>

${T.faqBlock([
    { q: "Is the strategy call really free — what's the catch?", a: "Genuinely free, genuinely useful. You'll leave with a prioritised growth plan whether we work together or not. Around half of the businesses we speak to become clients; the other half leave with clarity and goodwill — which tends to come back around." },
    { q: "What should I prepare before the call?", a: "Nothing is required, but it helps to know your rough monthly revenue, your main lead sources, and the tasks that consume most of your team's time. Access to your website analytics makes projections sharper, but we can work without it." },
    { q: "Do you work with businesses outside Dallas–Fort Worth?", a: "DFW is our focus — it\u2019s where our case studies, keyword research and market knowledge run deepest. We do selectively take on clients elsewhere in Texas when the fit is strong. Reach out and ask." },
    { q: "How soon can you start?", a: "Strategy calls are usually available within the week. Project kick-offs typically begin 1–2 weeks after proposal approval, depending on current capacity — automation quick-wins can often start sooner." }
  ], { title: "Before you reach out" })}`;

  return T.page({
    title: "Contact Us — Dallas AI Automation Agency | Digital Jeeva360",
    description: "Book a free strategy call with Digital Jeeva360, Dallas\u2019s AI automation and digital marketing agency. WhatsApp, email or the form — reply within one business day.",
    keywords: "contact digital marketing agency, book strategy call, free marketing consultation, AI automation consultation",
    path: "/contact.html",
    noExitPopup: true,
    schema: [T.breadcrumbSchema(crumbs)]
  }, body);
}

/* ============ BLOG INDEX ============ */
function renderBlogIndex(posts) {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Blog", path: "/blog.html" }];
  const categories = [...new Set(posts.map((p) => p.category))];
  const body = `
<section class="hero-page">
  <div class="container">
    ${T.breadcrumbs(crumbs)}
    <div class="section-head">
      <span class="eyebrow">Blog</span>
      <h1>Growth ideas you can <span class="text-gradient">use this week</span></h1>
      <p class="lede">Practical, no-fluff growth guides for Dallas dental clinics, realtors, law firms, HVAC and roofing companies — written from real client work, not recycled listicles.</p>
      <div class="tag-row mt-2" role="navigation" aria-label="Blog categories">
        <button class="tool-chip" data-filter="all" style="cursor:pointer;border-color:var(--blue)">All posts</button>
        ${categories.map((c) => `<button class="tool-chip" data-filter="${c}" style="cursor:pointer">${c}</button>`).join("\n        ")}
      </div>
    </div>
  </div>
</section>

<section class="section-tight">
  <div class="container">
    <div class="grid grid-3" id="blog-grid">
      ${posts.map((p, i) => `
      <article class="glass-card blog-card reveal${i % 3 ? ` reveal-d${i % 3}` : ""}" data-category="${p.category}">
        <div class="blog-cover" aria-hidden="true">${blogCover(i)}</div>
        <div class="blog-body">
          <div class="blog-meta"><span class="pill">${p.category}</span><time datetime="${p.date}">${fmtDate(p.date)}</time><span>${p.readTime}</span></div>
          <h3><a href="/blog/${p.slug}.html">${p.title}</a></h3>
          <p class="excerpt">${p.excerpt}</p>
          <a class="read-more" href="/blog/${p.slug}.html">Read article ${T.icons.arrow}</a>
        </div>
      </article>`).join("")}
    </div>
  </div>
</section>

<section class="section-tight">
  <div class="container-narrow">
    <div class="cta-band reveal">
      <span class="eyebrow">Newsletter</span>
      <h2 style="font-size:clamp(1.6rem,3vw,2.2rem)">One practical AI growth idea, every week</h2>
      <p>Join Dallas–Fort Worth business owners getting one actionable idea each week. Two-minute read. Zero spam.</p>
      <form class="newsletter" style="max-width:420px;margin:1.5rem auto 0" action="${T.SITE.formEndpoint}" method="POST" data-lead-form>
        <input type="hidden" name="_subject" value="Newsletter signup — blog page">
        <input type="hidden" name="_captcha" value="false">
        <label class="skip-link" for="blog-nl">Email address</label>
        <input id="blog-nl" type="email" name="email" placeholder="you@company.com" required>
        <button class="btn btn-primary" type="submit">Subscribe</button>
      </form>
      <div class="form-success" role="status"><p style="margin-top:1rem"><strong>You're in!</strong> Watch your inbox.</p></div>
    </div>
  </div>
</section>

<script>
(function(){
  var buttons=document.querySelectorAll("[data-filter]");
  var cards=document.querySelectorAll("#blog-grid [data-category]");
  buttons.forEach(function(b){b.addEventListener("click",function(){
    buttons.forEach(function(x){x.style.borderColor="";});
    b.style.borderColor="var(--blue)";
    var f=b.dataset.filter;
    cards.forEach(function(c){c.style.display=(f==="all"||c.dataset.category===f)?"":"none";});
  });});
})();
</script>`;

  return T.page({
    title: "Blog — Growth Guides for Dallas Businesses | Digital Jeeva360",
    description: "Practical growth guides for Dallas dental clinics, realtors, law firms, HVAC and roofing companies — AI automation, SEO and ads advice from real client work.",
    keywords: "AI marketing blog, automation blog, SEO tips, digital marketing insights, PPC guides",
    path: "/blog.html",
    schema: [T.breadcrumbSchema(crumbs)]
  }, body);
}

/* ============ BLOG POST ============ */
function renderPost(post, allPosts, index) {
  const path = `/blog/${post.slug}.html`;
  const crumbs = [{ name: "Home", path: "/" }, { name: "Blog", path: "/blog.html" }, { name: post.title, path }];
  const related = post.related
    .map((slug) => allPosts.find((p) => p.slug === slug))
    .filter(Boolean);

  const body = `
<article class="hero-page">
  <div class="container-narrow">
    ${T.breadcrumbs(crumbs)}
    <div class="blog-meta" style="font-size:0.9rem"><span class="pill">${post.category}</span><time datetime="${post.date}">${fmtDate(post.date)}</time><span>${post.readTime}</span></div>
    <h1 style="font-size:clamp(1.9rem,4.4vw,3.1rem)">${post.title}</h1>
    <p class="lede" style="font-size:1.15rem">${post.description}</p>
    <div class="author-card glass-card card-static" style="padding:1.2rem 1.5rem;margin-top:1.6rem">
      <div class="avatar">J</div>
      <div><b>Jeeva</b><span>Founder, Digital Jeeva360 — AI-Powered Digital Marketer &amp; Automation Specialist</span></div>
    </div>
  </div>
</article>

<div class="container-narrow article section-tight">
  ${post.body}
</div>

<section class="section-tight" aria-label="Share and continue">
  <div class="container-narrow">
    <div class="cta-band" style="padding:clamp(2rem,5vw,3rem)">
      <h2 style="font-size:clamp(1.4rem,2.8vw,1.9rem)">Want this working in your business?</h2>
      <p>Book a free 30-minute strategy call — we'll turn the ideas in this article into a concrete plan for your situation.</p>
      <div class="hero-ctas"><a class="btn btn-primary btn-lg" href="/contact.html">Book Free Strategy Call ${T.icons.arrow}</a></div>
    </div>
  </div>
</section>

${related.length ? `
<section class="section-tight" aria-labelledby="related-title">
  <div class="container">
    <h2 id="related-title" class="center" style="font-size:1.6rem;margin-bottom:2rem">Related reading</h2>
    <div class="grid grid-2" style="max-width:880px;margin-inline:auto">
      ${related.map((r, i) => `
      <article class="glass-card blog-card">
        <div class="blog-cover" aria-hidden="true">${blogCover((index + i + 1) % 3)}</div>
        <div class="blog-body">
          <div class="blog-meta"><span class="pill">${r.category}</span><span>${r.readTime}</span></div>
          <h3><a href="/blog/${r.slug}.html">${r.title}</a></h3>
          <a class="read-more" href="/blog/${r.slug}.html">Read article ${T.icons.arrow}</a>
        </div>
      </article>`).join("")}
    </div>
  </div>
</section>` : ""}`;

  return T.page({
    title: `${post.title} | Digital Jeeva360 Blog`,
    description: post.description,
    keywords: post.keywords,
    path,
    ogType: "article",
    schema: [T.articleSchema({ ...post, path }), T.breadcrumbSchema(crumbs)]
  }, body);
}

/* ============ LEGAL & 404 ============ */
function renderPrivacy() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy.html" }];
  const body = `
<section class="hero-page"><div class="container-narrow">
  ${T.breadcrumbs(crumbs)}
  <span class="eyebrow">Legal</span>
  <h1>Privacy Policy</h1>
  <p class="lede">Last updated: 1 July 2026</p>
</div></section>
<div class="container-narrow article section-tight">
  <p>Digital Jeeva360 ("we", "us") respects your privacy. This policy explains what information we collect through digitaljeeva360.com, how we use it, and the choices you have. It is written to satisfy applicable US privacy laws, including the Texas Data Privacy and Security Act and the CCPA.</p>
  <h2>Information we collect</h2>
  <ul>
    <li><strong>Information you provide:</strong> name, company, email address, phone number, country, business details and messages submitted through our contact forms, newsletter signups, chatbot conversations or WhatsApp enquiries.</li>
    <li><strong>Automatically collected information:</strong> anonymised usage data such as pages visited, approximate location (country/city level), device type and referral source, collected via privacy-respecting analytics.</li>
  </ul>
  <h2>How we use your information</h2>
  <ul>
    <li>To respond to enquiries and deliver services you request.</li>
    <li>To send the newsletter you subscribed to (you can unsubscribe at any time via the link in every email).</li>
    <li>To improve our website, content and services.</li>
    <li>To comply with legal obligations.</li>
  </ul>
  <p>We do not sell, rent or trade your personal information. Ever.</p>
  <h2>Legal bases (GDPR)</h2>
  <p>We process personal data on the bases of consent (newsletter, chatbot lead capture), legitimate interest (responding to enquiries, website analytics) and contract performance (delivering services).</p>
  <h2>Data sharing</h2>
  <p>We use a small number of trusted processors to operate this website — form delivery, email, analytics and hosting providers — each bound by their own privacy commitments. Data is only shared to the extent needed to provide the service.</p>
  <h2>Data retention</h2>
  <p>Enquiry data is retained while relevant to a current or prospective business relationship, then deleted. Newsletter data is retained until you unsubscribe. You may request deletion at any time.</p>
  <h2>Your rights</h2>
  <p>Depending on your location, you have the right to access, correct, export, restrict or delete your personal data, and to object to processing. To exercise any right, email <a href="mailto:${T.SITE.email}">${T.SITE.email}</a> — we respond within 30 days.</p>
  <h2>Cookies</h2>
  <p>This site uses only essential cookies and privacy-respecting analytics. We do not use advertising trackers or sell data to ad networks.</p>
  <h2>Contact</h2>
  <p>Questions about this policy: <a href="mailto:${T.SITE.email}">${T.SITE.email}</a> or WhatsApp <a href="${T.SITE.whatsappUrl}">+91 90877 72803</a>.</p>
</div>`;
  return T.page({
    title: "Privacy Policy | Digital Jeeva360",
    description: "How Digital Jeeva360 collects, uses and protects your personal information under applicable US privacy laws.",
    path: "/privacy.html",
    noExitPopup: true,
    schema: [T.breadcrumbSchema(crumbs)]
  }, body);
}

function renderTerms() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Terms of Service", path: "/terms.html" }];
  const body = `
<section class="hero-page"><div class="container-narrow">
  ${T.breadcrumbs(crumbs)}
  <span class="eyebrow">Legal</span>
  <h1>Terms of Service</h1>
  <p class="lede">Last updated: 1 July 2026</p>
</div></section>
<div class="container-narrow article section-tight">
  <h2>1. About these terms</h2>
  <p>These terms govern your use of digitaljeeva360.com and the engagement of services from Digital Jeeva360. By using this website or engaging our services, you agree to these terms.</p>
  <h2>2. Services</h2>
  <p>Digital Jeeva360 provides digital marketing and automation services including AI automation, website development, search engine optimisation, paid advertising management and consulting. The specific scope, deliverables, timeline and fees for any engagement are defined in a written proposal or statement of work agreed before commencement.</p>
  <h2>3. Quotes and payment</h2>
  <p>Project quotes are fixed-price unless otherwise stated and valid for 30 days. Retainer services are billed monthly in advance and may be cancelled with 30 days' written notice — we do not use lock-in contracts. Third-party costs (advertising spend, software subscriptions, API fees) are the client's responsibility unless expressly included.</p>
  <h2>4. Results and expectations</h2>
  <p>We provide good-faith projections based on experience and data, and we work to agreed success metrics. However, marketing outcomes depend on factors beyond any agency's control — market conditions, competition, platform changes and client-side execution. Figures published on this site are industry benchmarks drawn from third-party research, or illustrative targets shown as worked examples. They are <strong>not</strong> results achieved for past Digital Jeeva360 clients, and they are not a promise of any particular outcome for your business. Where a source exists it is cited on our <a href="/results.html">benchmarks page</a>.</p>
  <h2>5. Intellectual property</h2>
  <p>Upon full payment, clients own the deliverables created specifically for them — websites, content, automations and creative. We retain the right to use general methodologies, know-how and non-confidential techniques. We may reference completed work in our portfolio unless a confidentiality arrangement states otherwise.</p>
  <h2>6. Client responsibilities</h2>
  <p>Clients agree to provide timely access, information and approvals reasonably needed to deliver the work, and to use deliverables in compliance with applicable laws and platform policies.</p>
  <h2>7. Limitation of liability</h2>
  <p>To the maximum extent permitted by law, Digital Jeeva360's total liability for any claim arising from services is limited to the fees paid for the specific service giving rise to the claim in the preceding three months. We are not liable for indirect or consequential losses, or for actions taken by third-party platforms (e.g. search engines or ad networks) beyond our control.</p>
  <h2>8. Website content</h2>
  <p>Content on this website is provided for general information and may change without notice. You may not reproduce substantial portions of this site without permission.</p>
  <h2>9. Governing law</h2>
  <p>These terms are governed by the laws of India. For clients engaged under a separate written agreement, the governing law stated in that agreement prevails.</p>
  <h2>10. Contact</h2>
  <p>Questions about these terms: <a href="mailto:${T.SITE.email}">${T.SITE.email}</a>.</p>
</div>`;
  return T.page({
    title: "Terms of Service | Digital Jeeva360",
    description: "The terms governing use of digitaljeeva360.com and engagement of Digital Jeeva360's digital marketing and automation services.",
    path: "/terms.html",
    noExitPopup: true,
    schema: [T.breadcrumbSchema(crumbs)]
  }, body);
}

function render404() {
  const body = `
<section class="hero" style="min-height:70vh;display:grid;place-items:center">
  <div class="container center">
    <div class="err-404" aria-hidden="true">404</div>
    <h1 style="font-size:clamp(1.6rem,3.5vw,2.4rem)">This page has been automated out of existence</h1>
    <p class="lede" style="margin-inline:auto">The page you're looking for moved, changed or never existed. The good news: everything useful is one click away.</p>
    <div class="hero-ctas">
      <a class="btn btn-primary btn-lg" href="/">Back to Home ${T.icons.arrow}</a>
      <a class="btn btn-ghost btn-lg" href="/services.html">Browse Services</a>
    </div>
    <div class="trust-badges">
      <span><a href="/blog.html" style="color:var(--ink-faint)">Read the blog</a></span>
      <span><a href="/contact.html" style="color:var(--ink-faint)">Contact us</a></span>
      <span><a href="/industries.html" style="color:var(--ink-faint)">Industries we serve</a></span>
    </div>
  </div>
</section>`;
  return T.page({
    title: "Page Not Found (404) | Digital Jeeva360",
    description: "The page you're looking for doesn't exist. Head back to Digital Jeeva360's homepage or explore our services.",
    path: "/404.html",
    noExitPopup: true,
    schema: []
  }, body);
}

function fmtDate(iso) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });
}

module.exports = { renderAbout, renderServicesIndex, renderResults, renderContact, renderBlogIndex, renderPost, renderPrivacy, renderTerms, render404 };
