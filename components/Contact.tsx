import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="bg-primary py-24 text-center sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <SectionHeading en="CONTACT" ja="お問い合わせ" light />
        </Reveal>

        <Reveal>
          <p className="mx-auto mt-8 max-w-md text-sm leading-loose text-white/75">
            現在、お問い合わせの受付方法を準備しております。
            <br />
            送信先・受付方法が確定し次第、本セクションに掲載いたします。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
