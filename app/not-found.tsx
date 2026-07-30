import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">404</p>
      <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-white/60">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
        <Link href="/contact" className="btn-secondary">
          Contact me
        </Link>
      </div>
    </div>
  );
}
