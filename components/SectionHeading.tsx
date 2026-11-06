export default function SectionHeading({
  en,
  ja,
  light = false,
}: {
  en: string;
  ja: string;
  light?: boolean;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <span
        className={`font-en text-xs tracking-[0.35em] ${
          light ? "text-white/70" : "text-accent"
        }`}
      >
        {en}
      </span>
      <h2
        className={`mt-3 text-2xl font-bold tracking-wide sm:text-3xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {ja}
      </h2>
      <span
        className={`animate-underline mt-5 h-px w-12 ${
          light ? "bg-white/40" : "bg-accent/50"
        }`}
      />
    </div>
  );
}
