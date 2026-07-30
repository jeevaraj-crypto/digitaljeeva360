"use client";

import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/site";

export default function WhatsAppButton() {
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const stopPulse = () => setPulse(false);
    window.addEventListener("scroll", stopPulse, { once: true, passive: true });
    return () => window.removeEventListener("scroll", stopPulse);
  }, []);

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => setPulse(false)}
      aria-label="Chat with Digital Kavin on WhatsApp"
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform hover:scale-110 ${
        pulse ? "animate-pulse-cta" : ""
      }`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.85.505 3.649 1.462 5.22L2 22l4.897-1.437A9.96 9.96 0 0 0 12.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.153a8.14 8.14 0 0 1-4.152-1.133l-.297-.176-3.028.889.899-2.949-.194-.303a8.13 8.13 0 0 1-1.256-4.34c0-4.507 3.667-8.174 8.028-8.174 2.144 0 4.159.836 5.674 2.352a7.964 7.964 0 0 1 2.354 5.663c0 4.507-3.667 8.171-8.028 8.171z" />
      </svg>
    </a>
  );
}
