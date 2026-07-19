/* Digital Jeeva360 — Jeeva AI assistant (lightweight, dependency-free) */
(function () {
  "use strict";

  var d = document;
  var panel = d.getElementById("chatbot");
  var fab = d.getElementById("chat-fab");
  if (!panel || !fab) return;

  var log = panel.querySelector(".chatbot-log");
  var input = panel.querySelector(".chatbot-input input");
  var sendBtn = panel.querySelector(".chatbot-input button");
  var closeBtn = panel.querySelector(".chatbot-close");
  var WHATSAPP = "https://wa.me/919087772803";
  var EMAIL = "digitaljeeva360@gmail.com";

  var lead = { stage: null, name: "", email: "", interest: "" };
  var greeted = false;

  /* ---------- Knowledge base ---------- */
  var topics = [
    {
      keys: ["price", "pricing", "cost", "how much", "charge", "budget", "fee", "rates"],
      reply: "Every engagement is scoped to your goals, so pricing depends on the work involved. As a guide: AI automation projects typically start around <b>$1,500</b>, premium websites around <b>$2,000</b>, and SEO or paid ads retainers around <b>$800/month</b>. The best next step is a free strategy call — you'll get a fixed quote with a clear ROI projection, no obligation.",
      offer: "call"
    },
    {
      keys: ["automation", "automate", "workflow", "n8n", "zapier", "make.com", "crm", "ai agent", "manual"],
      reply: "AI automation is our core specialty. We build AI chatbots, workflow automation, WhatsApp and email automation, CRM pipelines, appointment booking, and custom AI agents — using tools like n8n, Zapier and Make. Most clients save 20–40 hours per week within the first month. You can explore details on our <a href='/services/ai-automation.html'>AI Automation page</a>.",
      offer: "call"
    },
    {
      keys: ["receptionist", "voice agent", "answer calls", "phone answering", "missed call"],
      reply: "Our <b>AI Receptionist & Voice Agent</b> answers every call in seconds, 24/7 — it speaks naturally, answers questions, books appointments into your calendar and texts back missed calls. Perfect for dental clinics, law firms, HVAC, roofing and real estate. Details: <a href='/services/ai-receptionist.html'>AI Receptionist & Voice Agent</a>.",
      offer: "call"
    },
    {
      keys: ["chatbot", "chat bot", "bot like this", "assistant"],
      reply: "We build AI chatbots (like this one, but connected to your business data) that answer customer questions 24/7, qualify leads and book appointments automatically — on your website, WhatsApp and Instagram. See <a href='/services/ai-chatbots.html'>AI Chatbots</a> for how it works.",
      offer: "call"
    },
    {
      keys: ["whatsapp automation", "whatsapp bot", "whats app"],
      reply: "Our WhatsApp automation handles instant replies, lead qualification, order updates, appointment reminders and broadcast campaigns — all through the official WhatsApp Business API. Details here: <a href='/services/whatsapp-automation.html'>WhatsApp Automation</a>.",
      offer: "call"
    },
    {
      keys: ["seo", "rank", "google search", "organic", "traffic", "search engine"],
      reply: "We run enterprise-grade SEO: technical audits, on-page optimisation, content strategy, local SEO, plus GEO and AEO so you appear in AI answers like ChatGPT and Google AI Overviews. Dallas–Fort Worth clients typically see meaningful ranking gains within 90 days. Start at <a href='/services/seo.html'>SEO &amp; Organic Growth</a>.",
      offer: "call"
    },
    {
      keys: ["website", "web design", "landing page", "redesign", "ecommerce", "e-commerce", "site"],
      reply: "We design premium, conversion-focused websites — business sites, landing pages, portfolios and e-commerce — built for Core Web Vitals, 95+ PageSpeed and mobile-first UX. Have a look at <a href='/services/premium-web-design.html'>Premium Website Development</a> and our <a href='/results.html'>results</a>.",
      offer: "call"
    },
    {
      keys: ["ads", "google ads", "meta ads", "facebook", "instagram ads", "ppc", "advertis", "paid"],
      reply: "We manage Google Ads and Meta Ads with full conversion tracking, retargeting and landing page optimisation. Our focus is profitable spend, not vanity metrics — clients typically see a 3–6x return on ad spend once campaigns are dialled in. More at <a href='/services/google-ads.html'>Google Ads</a> and <a href='/services/meta-ads.html'>Meta Ads</a>.",
      offer: "call"
    },
    {
      keys: ["book", "call", "consult", "appointment", "meeting", "schedule", "talk", "demo", "strategy"],
      reply: "Excellent — a free 30-minute strategy call is the best way to start. I just need a couple of details to set that up.",
      offer: "lead"
    },
    {
      keys: ["contact", "email", "phone", "reach", "number"],
      reply: "You can reach Jeeva directly:<br>• WhatsApp: <a href='" + WHATSAPP + "' target='_blank' rel='noopener'>+91 90877 72803</a><br>• Email: <a href='mailto:" + EMAIL + "'>" + EMAIL + "</a><br>• Instagram: <a href='https://instagram.com/digitaljeeva360' target='_blank' rel='noopener'>@digitaljeeva360</a><br>Or I can book you a free strategy call right here.",
      offer: "call"
    },
    {
      keys: ["result", "case stud", "proof", "portfolio", "example", "client"],
      reply: "Fair question — results matter more than promises. Clients have seen 2–3x revenue growth within 6 months, 20–40 hours per week saved through automation, and 150%+ organic traffic increases. Browse the numbers on our <a href='/results.html'>Results page</a> and see <a href='/industries.html'>how we help your industry</a>.",
      offer: "call"
    },
    {
      keys: ["who", "about", "jeeva", "you", "team", "where"],
      reply: "Digital Jeeva360 is run by Jeeva — an AI-powered digital marketer and automation specialist helping Dallas–Fort Worth businesses grow through AI systems, SEO, paid ads and premium websites. The mission: less manual work, more qualified leads, faster growth. More on the <a href='/about.html'>About page</a>.",
      offer: "call"
    },
    {
      keys: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening"],
      reply: "Hello! Great to have you here. I can help with questions about AI automation, SEO, paid ads, website development or pricing — or book you a free strategy call with Jeeva. What's on your mind?",
      offer: null
    },
    {
      keys: ["thank", "thanks", "great", "awesome", "cool"],
      reply: "You're very welcome! Anything else I can help with — services, pricing, or booking a strategy call?",
      offer: null
    }
  ];

  var fallback = "Good question — I want to make sure you get an accurate answer. The fastest way is to ask Jeeva directly on <a href='" + WHATSAPP + "' target='_blank' rel='noopener'>WhatsApp</a>, or I can book you a free strategy call. Meanwhile, feel free to ask me about <b>services, pricing, SEO, automation or websites</b>.";

  /* ---------- UI helpers ---------- */
  function addMsg(html, who) {
    var el = d.createElement("div");
    el.className = "msg msg-" + who;
    el.innerHTML = html;
    log.appendChild(el);
    log.scrollTop = log.scrollHeight;
    return el;
  }

  function addTyping() {
    var el = d.createElement("div");
    el.className = "msg msg-bot typing";
    el.innerHTML = "<i></i><i></i><i></i>";
    log.appendChild(el);
    log.scrollTop = log.scrollHeight;
    return el;
  }

  function botSay(html, after) {
    var t = addTyping();
    setTimeout(function () {
      t.remove();
      addMsg(html, "bot");
      if (after) after();
    }, 550 + Math.random() * 450);
  }

  function addQuickReplies(items) {
    var wrap = d.createElement("div");
    wrap.className = "quick-replies";
    items.forEach(function (it) {
      var b = d.createElement("button");
      b.type = "button";
      b.textContent = it;
      b.addEventListener("click", function () {
        wrap.remove();
        handleUser(it);
      });
      wrap.appendChild(b);
    });
    log.appendChild(wrap);
    log.scrollTop = log.scrollHeight;
  }

  /* ---------- Lead capture flow ---------- */
  function startLeadFlow() {
    lead.stage = "name";
    botSay("Perfect. First — what's your <b>name</b>?");
  }

  function continueLeadFlow(text) {
    if (lead.stage === "name") {
      lead.name = text;
      lead.stage = "email";
      botSay("Nice to meet you, <b>" + escapeHtml(text) + "</b>! What's the best <b>email address</b> to reach you on?");
      return true;
    }
    if (lead.stage === "email") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(text)) {
        botSay("That doesn't look like a valid email — could you double-check it? (e.g. name@company.com)");
        return true;
      }
      lead.email = text;
      lead.stage = "interest";
      botSay("Got it. And what would you like help with mainly?", function () {
        addQuickReplies(["AI Automation", "Website Development", "SEO", "Paid Advertising", "Not sure yet"]);
      });
      return true;
    }
    if (lead.stage === "interest") {
      lead.interest = text;
      lead.stage = "done";
      submitLead();
      var waText = encodeURIComponent(
        "Hi Jeeva, I'm " + lead.name + " (" + lead.email + "). I'd like a free strategy call about " + lead.interest + "."
      );
      botSay(
        "Brilliant, <b>" + escapeHtml(lead.name) + "</b> — you're all set. ✅<br><br>" +
        "Jeeva will email you at <b>" + escapeHtml(lead.email) + "</b> within one business day to arrange your free strategy call about <b>" + escapeHtml(lead.interest) + "</b>.<br><br>" +
        "Want it even faster? <a href='" + WHATSAPP + "?text=" + waText + "' target='_blank' rel='noopener'>Message Jeeva on WhatsApp now →</a>"
      );
      return true;
    }
    return false;
  }

  function submitLead() {
    var data = new FormData();
    data.append("name", lead.name);
    data.append("email", lead.email);
    data.append("interest", lead.interest);
    data.append("_subject", "New chatbot lead — Digital Jeeva360");
    data.append("_template", "table");
    data.append("_captcha", "false");
    fetch("https://formsubmit.co/ajax/" + EMAIL, {
      method: "POST", body: data, headers: { Accept: "application/json" }
    }).catch(function () { /* WhatsApp link above is the fallback channel */ });
  }

  /* ---------- Intent matching ---------- */
  function match(text) {
    var q = text.toLowerCase();
    var best = null, bestScore = 0;
    topics.forEach(function (t) {
      var score = 0;
      t.keys.forEach(function (k) { if (q.indexOf(k) !== -1) score += k.length; });
      if (score > bestScore) { bestScore = score; best = t; }
    });
    return best;
  }

  function handleUser(text) {
    text = text.trim();
    if (!text) return;
    addMsg(escapeHtml(text), "user");
    input.value = "";

    if (lead.stage && lead.stage !== "done" && continueLeadFlow(text)) return;

    var t = match(text);
    if (!t) { botSay(fallback, function () { addQuickReplies(["Our services", "Pricing", "Book a free call"]); }); return; }
    if (t.offer === "lead") { botSay(t.reply, startLeadFlow); return; }
    botSay(t.reply, function () {
      if (t.offer === "call") addQuickReplies(["Book a free call", "See pricing", "Talk on WhatsApp"]);
    });
  }

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------- Wire up ---------- */
  function openChat() {
    panel.classList.add("open");
    fab.setAttribute("aria-expanded", "true");
    if (!greeted) {
      greeted = true;
      botSay(
        "👋 Hi, I'm <b>Jeeva AI</b> — the assistant for Digital Jeeva360.<br><br>I can answer questions about our services, pricing and results, or book you a <b>free strategy call</b>. How can I help?",
        function () {
          addQuickReplies(["AI Automation", "SEO", "Websites", "Paid Ads", "Book a free call"]);
        }
      );
    }
    setTimeout(function () { input.focus(); }, 380);
  }
  function closeChat() {
    panel.classList.remove("open");
    fab.setAttribute("aria-expanded", "false");
  }

  fab.addEventListener("click", function () {
    panel.classList.contains("open") ? closeChat() : openChat();
  });
  closeBtn.addEventListener("click", closeChat);
  sendBtn.addEventListener("click", function () { handleUser(input.value); });
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") handleUser(input.value);
  });

  // "Talk on WhatsApp" quick reply should open WhatsApp directly
  log.addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (b && b.textContent === "Talk on WhatsApp") {
      window.open(WHATSAPP, "_blank", "noopener");
    }
  });
})();
