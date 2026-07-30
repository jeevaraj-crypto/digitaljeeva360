"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { findFaqAnswer } from "@/lib/chatbotFaq";
import { whatsappLink } from "@/lib/site";

type Message = {
  id: number;
  from: "bot" | "user";
  text: string;
};

type LeadStage = "none" | "name" | "contact" | "question" | "done";

const QUICK_REPLIES = [
  "What services do you offer?",
  "Pricing",
  "Book a free audit",
  "Talk on WhatsApp",
];

let idCounter = 0;
function nextId() {
  idCounter += 1;
  return idCounter;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: nextId(),
      from: "bot",
      text: "Hi! I'm Kavin's assistant. How can I help — services, pricing, or want to book a free audit?",
    },
  ]);
  const [input, setInput] = useState("");
  const [leadStage, setLeadStage] = useState<LeadStage>("none");
  const [lead, setLead] = useState({ name: "", contact: "", question: "" });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  function addMessage(from: Message["from"], text: string) {
    setMessages((prev) => [...prev, { id: nextId(), from, text }]);
  }

  async function submitLead(question: string, name: string, contact: string) {
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, question, source: "chatbot" }),
      });
    } catch {
      // Network/API errors shouldn't block the chat UX — WhatsApp fallback is always shown.
    }
    addMessage(
      "bot",
      `Thanks, ${name}! Kavin will get back to you within 24 hours. In the meantime, you can also reach out directly on WhatsApp using the button below.`
    );
    setLeadStage("done");
  }

  function startLeadCapture(question: string) {
    setLead({ name: "", contact: "", question });
    setLeadStage("name");
    addMessage("bot", "Sure — what's your name?");
  }

  function handleUserMessage(rawText: string) {
    const text = rawText.trim();
    if (!text) return;
    addMessage("user", text);

    if (leadStage === "name") {
      setLead((l) => ({ ...l, name: text }));
      setLeadStage("contact");
      addMessage("bot", "Thanks! What's the best email or phone number to reach you on?");
      return;
    }

    if (leadStage === "contact") {
      const updatedLead = { ...lead, contact: text };
      setLead(updatedLead);
      if (updatedLead.question) {
        submitLead(updatedLead.question, updatedLead.name, text);
      } else {
        setLeadStage("question");
        addMessage("bot", "Got it — what would you like to ask Kavin?");
      }
      return;
    }

    if (leadStage === "question") {
      submitLead(text, lead.name, lead.contact);
      return;
    }

    if (text.toLowerCase().includes("whatsapp")) {
      addMessage("bot", "Opening WhatsApp for you — you can also use the green button anytime.");
      window.open(whatsappLink(), "_blank", "noopener,noreferrer");
      return;
    }

    if (text.toLowerCase().includes("audit") || text.toLowerCase().includes("book")) {
      startLeadCapture("Requested a free audit");
      return;
    }

    // ---- AI_UPGRADE -----------------------------------------------------
    // To upgrade this rule-based bot to a real AI model (e.g. Claude via the
    // Anthropic API), replace the block below with something like:
    //
    //   const res = await fetch("/api/chat", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ message: text, history: messages }),
    //   });
    //   const { reply } = await res.json();
    //   addMessage("bot", reply);
    //
    // and implement /api/chat as a server route that calls the Anthropic
    // Messages API with a system prompt describing Digital Kavin's services.
    // -----------------------------------------------------------------------
    const faqAnswer = findFaqAnswer(text);
    if (faqAnswer) {
      addMessage("bot", faqAnswer);
    } else {
      addMessage(
        "bot",
        "I don't have an exact answer for that yet — let me connect you with Kavin directly. What's your name?"
      );
      startLeadCapture(text);
    }
  }

  function handleQuickReply(reply: string) {
    handleUserMessage(reply);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    handleUserMessage(input);
    setInput("");
  }

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end sm:bottom-24">
      {open && (
        <div className="mb-3 flex h-[28rem] w-[20rem] flex-col overflow-hidden rounded-2xl border border-ink-border bg-ink-soft shadow-2xl shadow-black/40 sm:w-[22rem]">
          <div className="flex items-center justify-between bg-ink px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-white">Digital Kavin Assistant</p>
              <p className="text-xs text-white/50">Usually replies within 24 hours</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-white/60 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
                  m.from === "bot"
                    ? "bg-ink text-white/85"
                    : "ml-auto bg-accent text-ink"
                }`}
              >
                {m.text}
              </div>
            ))}

            {leadStage === "none" && messages.length <= 2 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {QUICK_REPLIES.map((reply) => (
                  <button
                    key={reply}
                    type="button"
                    onClick={() => handleQuickReply(reply)}
                    className="rounded-full border border-accent/40 px-3 py-1.5 text-xs text-accent hover:bg-accent/10"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-ink-border p-3">
            <label htmlFor="chat-input" className="sr-only">
              Type a message
            </label>
            <input
              id="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 rounded-full border border-ink-border bg-ink px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-accent px-3 py-2 text-sm font-semibold text-ink"
              aria-label="Send message"
            >
              Send
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Open chat with Digital Kavin"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-ink shadow-lg shadow-black/30 transition-transform hover:scale-110"
      >
        {open ? "✕" : "💬"}
      </button>
    </div>
  );
}
