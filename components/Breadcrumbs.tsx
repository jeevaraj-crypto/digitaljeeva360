import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

type Crumb = { name: string; path: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ name: "Home", path: "/" }, ...items];

  return (
    <>
      <JsonLd data={breadcrumbSchema(all)} />
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/50">
        <ol className="flex flex-wrap items-center gap-2">
          {all.map((crumb, i) => (
            <li key={crumb.path} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i === all.length - 1 ? (
                <span className="text-white/80">{crumb.name}</span>
              ) : (
                <Link href={crumb.path} className="hover:text-accent transition-colors">
                  {crumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
