import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { about } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <SectionHeading en="ABOUT" ja={about.heading} />
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <Reveal className="relative order-2 aspect-[4/3] overflow-hidden rounded-sm md:order-1">
            <Image
              src="/images/about_team.webp"
              alt="Sky Value株式会社が目指す協業のイメージ"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          <Reveal className="order-1 md:order-2">
            <p className="text-lg font-medium leading-relaxed text-ink sm:text-xl">
              {about.lead}
            </p>
            <p className="mt-6 text-sm leading-loose text-muted sm:text-base">
              {about.body}
            </p>
            <p className="mt-6 text-xs text-muted/80">{about.note}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
