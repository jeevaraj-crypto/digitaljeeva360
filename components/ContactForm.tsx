"use client";

import { useState, FormEvent } from "react";
import { services } from "@/lib/services";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
          source: "contact-form",
        }),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-accent/40 bg-accent/10 p-8 text-center">
        <p className="font-display text-lg font-semibold text-white">Thanks — message sent!</p>
        <p className="mt-2 text-sm text-white/70">
          Kavin will get back to you within 24 hours. For a faster response, use the WhatsApp
          button on this page.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white/80">
            Name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="w-full rounded-lg border border-ink-border bg-ink-soft px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white/80">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="w-full rounded-lg border border-ink-border bg-ink-soft px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-white/80">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="w-full rounded-lg border border-ink-border bg-ink-soft px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-white/80">
            Service Interested In
          </label>
          <select
            id="service"
            value={form.service}
            onChange={(e) => update("service", e.target.value)}
            className="w-full rounded-lg border border-ink-border bg-ink-soft px-4 py-2.5 text-sm text-white focus:border-accent focus:outline-none"
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.shortName}>
                {s.shortName}
              </option>
            ))}
            <option value="Not sure">Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-white/80">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="w-full rounded-lg border border-ink-border bg-ink-soft px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none"
          placeholder="Tell me a bit about your business and goals..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong. Please try again, or message us directly on WhatsApp.
        </p>
      )}

      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full sm:w-auto">
        {status === "submitting" ? "Sending..." : "Get a Free Audit"}
      </button>
    </form>
  );
}
