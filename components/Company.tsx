import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { company } from "@/data/content";

const ROWS: [string, string][] = [
  ["商号", company.name],
  ["設立", company.founded],
  ["所在地", company.address],
  ["資本金", company.capital],
  ["代表者", company.representative],
];

export default function Company() {
  return (
    <section id="company" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <SectionHeading en="COMPANY" ja="会社概要" />
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-16">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="/images/hero_architecture.webp"
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          <Reveal>
            <dl className="divide-y divide-black/10 border-t border-black/10">
              {ROWS.map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[6rem,1fr] gap-4 py-4 sm:grid-cols-[8rem,1fr]"
                >
                  <dt className="font-en text-xs tracking-wide text-muted">
                    {label}
                  </dt>
                  <dd className="text-sm text-ink sm:text-base">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-xs text-muted/80">
              ※主たる事業内容は確認中のため、確定後に掲載いたします。
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
