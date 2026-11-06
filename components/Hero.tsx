import Image from "next/image";
import Reveal from "./Reveal";
import { hero } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero_city_large.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="animate-kenburns object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/55 to-primary/80" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center text-white">
        <Reveal>
          <p className="font-en text-sm tracking-[0.3em] text-white/80 sm:text-base">
            {hero.en}
          </p>
        </Reveal>
        <Reveal delay={150}>
          <h1 className="mt-5 text-3xl font-bold leading-snug tracking-wide sm:text-4xl md:text-5xl">
            {hero.ja}
          </h1>
        </Reveal>
        <Reveal delay={300}>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
            {hero.lead}
          </p>
        </Reveal>
        <Reveal delay={450}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#business"
              className="rounded-full border border-white/70 px-8 py-3 text-sm font-en tracking-wide transition-all duration-300 hover:scale-105 hover:bg-white hover:text-primary"
            >
              事業内容を見る
            </a>
            <a
              href="#contact"
              className="rounded-full bg-accent px-8 py-3 text-sm font-en tracking-wide text-white shadow-lg shadow-accent/30 transition-all duration-300 hover:scale-105 hover:opacity-90"
            >
              お問い合わせ
            </a>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 h-10 w-px -translate-x-1/2 overflow-hidden bg-white/30">
        <div className="h-full w-full animate-[scroll-line_2s_ease-in-out_infinite] bg-white" />
      </div>
    </section>
  );
}
