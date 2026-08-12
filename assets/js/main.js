/* Digital Jeeva360 — site interactions (vanilla JS, no dependencies) */
(function () {
  "use strict";

  var d = document;
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var WHATSAPP = "https://wa.me/919087772803";

  // Reveal animations only arm when JS is actually running — if this file
  // ever fails to load, every section stays visible (no blank page areas)
  d.documentElement.classList.add("js");

  /* ---------- Header scroll state ---------- */
  var header = d.querySelector(".site-header");
  var progress = d.querySelector(".scroll-progress");
  var stickyCta = d.querySelector(".sticky-cta");
  var ticking = false;

  function onScroll() {
    var y = window.scrollY;
    if (header) header.classList.toggle("scrolled", y > 24);
    if (progress) {
      var h = d.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    }
    if (stickyCta) stickyCta.classList.toggle("show", y > 560);
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  onScroll();

  /* ---------- Mobile nav ---------- */
  var navToggle = d.querySelector(".nav-toggle");
  var navLinks = d.querySelector(".nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // On mobile, tapping "Services"/"Industries" toggles the submenu instead of navigating
    d.querySelectorAll(".dropdown > a").forEach(function (dd) {
      dd.addEventListener("click", function (e) {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          dd.parentElement.classList.toggle("open");
        }
      });
    });
  }

  /* ---------- Reveal on scroll ---------- */
  // threshold 0: any visible pixel reveals the element. (A threshold above 0
  // can never fire for elements taller than the viewport — that left whole
  // sections invisible, which users saw as a blank white screen mid-scroll.)
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add("in-view");
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0, rootMargin: "0px 0px -36px 0px" });
  d.querySelectorAll(".reveal, .chart-anim").forEach(function (el) { io.observe(el); });

  // Safety net: shortly after load, force-reveal anything still hidden so no
  // content can ever be stuck invisible (observer hiccups, bfcache restores…)
  function revealAll() {
    d.querySelectorAll(".reveal:not(.in-view), .chart-anim:not(.in-view)").forEach(function (el) {
      el.classList.add("in-view");
      io.unobserve(el);
    });
  }
  window.addEventListener("load", function () { setTimeout(revealAll, 2500); });
  window.addEventListener("pageshow", function (e) { if (e.persisted) revealAll(); });
  setTimeout(revealAll, 6000);

  /* ---------- Animated counters ---------- */
  function animateCounter(el) {
    var target = parseFloat(el.dataset.count);
    var decimals = parseInt(el.dataset.decimals || "0", 10);
    var prefix = el.dataset.prefix || "";
    var suffix = el.dataset.suffix || "";
    var dur = 1800;
    var start = null;
    if (reducedMotion) { el.textContent = prefix + target.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix; return; }
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 4);
      el.textContent = prefix + (target * eased).toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var counterIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { animateCounter(en.target); counterIO.unobserve(en.target); }
    });
  }, { threshold: 0.5 });
  d.querySelectorAll("[data-count]").forEach(function (el) { counterIO.observe(el); });

  /* ---------- Mouse parallax (hero visuals) ---------- */
  if (!reducedMotion && matchMedia("(pointer: fine)").matches) {
    var parallaxEls = d.querySelectorAll("[data-parallax]");
    if (parallaxEls.length) {
      var px = 0, py = 0, rafId = null;
      d.addEventListener("mousemove", function (e) {
        px = (e.clientX / window.innerWidth - 0.5);
        py = (e.clientY / window.innerHeight - 0.5);
        if (!rafId) rafId = requestAnimationFrame(applyParallax);
      }, { passive: true });
      var applyParallax = function () {
        parallaxEls.forEach(function (el) {
          var depth = parseFloat(el.dataset.parallax) || 10;
          el.style.transform = "translate3d(" + (px * depth) + "px," + (py * depth) + "px,0)";
        });
        rafId = null;
      };
    }
  }

  /* ---------- Range slider fill ---------- */
  d.querySelectorAll('input[type="range"]').forEach(function (r) {
    function paint() {
      var pct = ((r.value - r.min) / (r.max - r.min)) * 100;
      r.style.setProperty("--fill", pct + "%");
    }
    r.addEventListener("input", paint);
    paint();
  });

  /* ---------- Automation Savings Calculator ---------- */
  var calc = d.getElementById("roi-calculator");
  if (calc) {
    var hoursEl = d.getElementById("calc-hours");
    var costEl = d.getElementById("calc-cost");
    var teamEl = d.getElementById("calc-team");
    var outputs = {
      hours: d.getElementById("out-hours"),
      cost: d.getElementById("out-cost"),
      team: d.getElementById("out-team"),
      weekly: d.getElementById("res-weekly"),
      monthly: d.getElementById("res-monthly"),
      annual: d.getElementById("res-annual"),
      hoursSaved: d.getElementById("res-hours"),
      roi: d.getElementById("res-roi")
    };
    var displayed = { weekly: 0, monthly: 0, annual: 0, hoursSaved: 0, roi: 0 };
    var animFrame = null;

    function fmtMoney(n) { return "$" + Math.round(n).toLocaleString("en-US"); }

    function compute() {
      var hours = +hoursEl.value, cost = +costEl.value, team = +teamEl.value;
      outputs.hours.textContent = hours + " hrs";
      outputs.cost.textContent = "$" + cost;
      outputs.team.textContent = team;
      // Automation typically absorbs ~70% of repetitive manual work
      var automatable = 0.7;
      var weeklyHours = hours * team * automatable;
      var weekly = weeklyHours * cost;
      var annual = weekly * 52;
      // ROI vs. a typical automation build + first-year running cost
      var investment = Math.max(6000, Math.min(annual * 0.18, 60000));
      var roi = investment > 0 ? ((annual - investment) / investment) * 100 : 0;
      return {
        weekly: weekly,
        monthly: weekly * 4.33,
        annual: annual,
        hoursSaved: weeklyHours * 52,
        roi: Math.max(roi, 0)
      };
    }

    function render() {
      var t = compute();
      if (reducedMotion) {
        outputs.weekly.textContent = fmtMoney(t.weekly);
        outputs.monthly.textContent = fmtMoney(t.monthly);
        outputs.annual.textContent = fmtMoney(t.annual);
        outputs.hoursSaved.textContent = Math.round(t.hoursSaved).toLocaleString("en-US") + " hrs";
        outputs.roi.textContent = Math.round(t.roi).toLocaleString("en-US") + "%";
        return;
      }
      if (animFrame) cancelAnimationFrame(animFrame);
      var tick = function () {
        var done = true;
        ["weekly", "monthly", "annual", "hoursSaved", "roi"].forEach(function (k) {
          var diff = t[k] - displayed[k];
          if (Math.abs(diff) > Math.max(1, t[k] * 0.002)) { displayed[k] += diff * 0.14; done = false; }
          else displayed[k] = t[k];
        });
        outputs.weekly.textContent = fmtMoney(displayed.weekly);
        outputs.monthly.textContent = fmtMoney(displayed.monthly);
        outputs.annual.textContent = fmtMoney(displayed.annual);
        outputs.hoursSaved.textContent = Math.round(displayed.hoursSaved).toLocaleString("en-US") + " hrs";
        outputs.roi.textContent = Math.round(displayed.roi).toLocaleString("en-US") + "%";
        if (!done) animFrame = requestAnimationFrame(tick);
      };
      animFrame = requestAnimationFrame(tick);
    }
    [hoursEl, costEl, teamEl].forEach(function (el) { el.addEventListener("input", render); });
    render();
  }

  /* ---------- Testimonial slider ---------- */
  d.querySelectorAll(".slider").forEach(function (slider) {
    var track = slider.querySelector(".slider-track");
    var slides = slider.querySelectorAll(".slide");
    if (!track || slides.length < 2) return;
    var dotsWrap = slider.parentElement.querySelector(".slider-dots");
    var idx = 0, timer = null;

    function go(i) {
      idx = (i + slides.length) % slides.length;
      track.style.transform = "translateX(-" + idx * 100 + "%)";
      if (dotsWrap) {
        dotsWrap.querySelectorAll("button").forEach(function (b, j) {
          b.classList.toggle("active", j === idx);
        });
      }
    }
    function auto() { timer = setInterval(function () { go(idx + 1); }, 6500); }
    function resetAuto() { clearInterval(timer); auto(); }

    if (dotsWrap) {
      slides.forEach(function (_, j) {
        var b = d.createElement("button");
        b.setAttribute("aria-label", "Go to testimonial " + (j + 1));
        b.addEventListener("click", function () { go(j); resetAuto(); });
        dotsWrap.appendChild(b);
      });
    }
    var prev = slider.parentElement.querySelector("[data-slide-prev]");
    var next = slider.parentElement.querySelector("[data-slide-next]");
    if (prev) prev.addEventListener("click", function () { go(idx - 1); resetAuto(); });
    if (next) next.addEventListener("click", function () { go(idx + 1); resetAuto(); });

    // Touch swipe
    var startX = 0;
    track.addEventListener("touchstart", function (e) { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener("touchend", function (e) {
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 48) { go(dx < 0 ? idx + 1 : idx - 1); resetAuto(); }
    }, { passive: true });

    go(0);
    if (!reducedMotion) auto();
  });

  /* ---------- Lead forms: WhatsApp-first delivery ----------
     On submit we open WhatsApp with every field pre-filled so the lead
     reaches Jeeva instantly (email via FormSubmit is only a background
     copy — it needs one-time activation and can silently fail). The
     window.open happens synchronously inside the submit gesture so popup
     blockers allow it. Newsletter forms stay email-only. */
  d.querySelectorAll("form[data-lead-form]").forEach(function (form) {
    var isNewsletter = form.classList.contains("newsletter");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var waUrl = "";

      if (!isNewsletter) {
        var lines = ["New lead from digitaljeeva360.com", ""];
        data.forEach(function (value, key) {
          if (key.charAt(0) === "_" || !String(value).trim()) return;
          var label = key.replace(/_/g, " ");
          label = label.charAt(0).toUpperCase() + label.slice(1);
          lines.push(label + ": " + value);
        });
        waUrl = WHATSAPP + "?text=" + encodeURIComponent(lines.join("\n"));
        window.open(waUrl, "_blank", "noopener");
      }

      // Background email copy — fire and forget
      fetch(form.action, { method: "POST", body: data, headers: { Accept: "application/json" } })
        .catch(function () { /* WhatsApp is the primary channel */ });

      showSuccess(form, waUrl);
    });
  });
  function showSuccess(form, waUrl) {
    var success = form.parentElement.querySelector(".form-success");
    if (success) {
      form.style.display = "none";
      success.classList.add("show");
      // "Open WhatsApp again" keeps the same pre-filled lead details
      var resend = success.querySelector("[data-wa-resend]");
      if (resend && waUrl) resend.href = waUrl;
    } else {
      form.reset();
      alert("Thank you — your message has been sent. We will reply within one business day.");
    }
  }

  /* ---------- Exit intent popup (once per session, desktop only) ---------- */
  var exitPopup = d.getElementById("exit-popup");
  if (exitPopup && matchMedia("(pointer: fine)").matches) {
    var shown = false;
    try { shown = sessionStorage.getItem("dj360-exit") === "1"; } catch (err) { /* private mode */ }
    var armTimer = setTimeout(function () {
      d.addEventListener("mouseout", onExitIntent);
    }, 12000);
    function onExitIntent(e) {
      if (shown || e.relatedTarget || e.clientY > 12) return;
      shown = true;
      exitPopup.classList.add("show");
      try { sessionStorage.setItem("dj360-exit", "1"); } catch (err) { /* ignore */ }
      d.removeEventListener("mouseout", onExitIntent);
    }
    exitPopup.addEventListener("click", function (e) {
      if (e.target === exitPopup || e.target.closest(".exit-close")) exitPopup.classList.remove("show");
    });
    d.addEventListener("keydown", function (e) { if (e.key === "Escape") exitPopup.classList.remove("show"); });
    window.addEventListener("pagehide", function () { clearTimeout(armTimer); });
  }

  /* ---------- Footer year ---------- */
  var yearEl = d.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
