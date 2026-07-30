import Link from "next/link";
import type { Service } from "@/lib/services";

const icons: Record<Service["icon"], string> = {
  search: "🔍",
  target: "🎯",
  bot: "🤖",
  code: "💻",
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-2xl border border-ink-border bg-ink-soft p-7 transition-colors hover:border-accent/60"
    >
      <span className="text-3xl" aria-hidden="true">
        {icons[service.icon]}
      </span>
      <h3 className="mt-5 font-display text-xl font-semibold text-white">
        {service.shortName}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-white/60">
        {service.heroSubhead}
      </p>
      <span className="mt-5 text-sm font-semibold text-accent group-hover:underline">
        Learn more →
      </span>
    </Link>
  );
}
