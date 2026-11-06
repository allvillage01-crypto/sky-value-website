import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { company } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="bg-primary py-24 text-center sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <SectionHeading en="CONTACT" ja="お問い合わせ" light />
        </Reveal>

        <Reveal>
          <p className="mx-auto mt-8 max-w-md text-sm leading-loose text-white/75">
            事業に関するご相談・お問い合わせは、以下のメールアドレスまでご連絡ください。
          </p>
          <a
            href={`mailto:${company.contactEmail}`}
            className="mt-8 inline-block rounded-full bg-accent px-8 py-3 text-sm font-en tracking-wide text-white transition-opacity hover:opacity-90"
          >
            {company.contactEmail}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
