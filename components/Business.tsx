import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { businesses } from "@/data/content";

const IMAGES = [
  "/images/service_telecom.webp",
  "/images/company_office.webp",
  "/images/service_digital.webp",
];

export default function Business() {
  return (
    <section id="business" className="bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <SectionHeading en="BUSINESS" ja="事業紹介" light />
        </Reveal>

        <p className="mx-auto mt-6 max-w-xl text-center text-xs leading-relaxed text-white/60">
          以下は登記上の事業目的をもとにした想定事業であり、現時点の確定情報ではありません。
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {businesses.map((b, i) => (
            <Reveal key={b.code}>
              <div className="group flex h-full flex-col overflow-hidden rounded-sm bg-white/5">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={IMAGES[i]}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
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
                  <p className="mt-4 text-xs text-white/40">{b.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
