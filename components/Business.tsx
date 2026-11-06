import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { businesses } from "@/data/content";

const IMAGES = ["/images/service_telecom.webp", "/images/company_office.webp"];

export default function Business() {
  return (
    <section id="business" className="bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <SectionHeading en="BUSINESS" ja="事業紹介" light />
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-3xl gap-10 md:grid-cols-2">
          {businesses.map((b, i) => (
            <Reveal key={b.code} delay={i * 120}>
              <div className="group flex h-full flex-col overflow-hidden rounded-sm bg-white/5 transition-transform duration-500 hover:-translate-y-2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={IMAGES[i]}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span className="font-en text-xs tracking-[0.3em] text-accent">
                    {b.code} / {b.en}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-white">
                    {b.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-white/70">
                    {b.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
