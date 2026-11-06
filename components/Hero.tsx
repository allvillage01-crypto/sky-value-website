import Image from "next/image";
import { hero } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden"
    >
      <Image
        src="/images/hero_city_large.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/55 to-primary/80" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center text-white">
        <p className="font-en text-sm tracking-[0.3em] text-white/80 sm:text-base">
          {hero.en}
        </p>
        <h1 className="mt-5 text-3xl font-bold leading-snug tracking-wide sm:text-4xl md:text-5xl">
          {hero.ja}
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
          {hero.lead}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#business"
            className="rounded-full border border-white/70 px-8 py-3 text-sm font-en tracking-wide transition-colors hover:bg-white hover:text-primary"
          >
            事業内容を見る
          </a>
          <a
            href="#contact"
            className="rounded-full bg-accent px-8 py-3 text-sm font-en tracking-wide text-white transition-opacity hover:opacity-90"
          >
            お問い合わせ
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 h-10 w-px -translate-x-1/2 bg-white/50" />
    </section>
  );
}
