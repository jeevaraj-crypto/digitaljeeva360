type Testimonial = {
  name: string;
  role: string;
  quote: string;
  isSample?: boolean;
};

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-ink-border bg-ink-soft p-7">
      {testimonial.isSample && (
        <span className="mb-4 inline-block w-fit rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white/50">
          Sample content — replace with real testimonial
        </span>
      )}
      <blockquote className="flex-1 text-sm leading-relaxed text-white/75">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 text-sm">
        <span className="block font-semibold text-white">{testimonial.name}</span>
        <span className="text-white/50">{testimonial.role}</span>
      </figcaption>
    </figure>
  );
}
