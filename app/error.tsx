"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container-page flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">ERROR</p>
      <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-md text-white/60">
        An unexpected error occurred. Please try again, or head back to the homepage.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button type="button" onClick={reset} className="btn-primary">
          Try again
        </button>
        <Link href="/" className="btn-secondary">
          Back to home
        </Link>
      </div>
    </div>
  );
}
