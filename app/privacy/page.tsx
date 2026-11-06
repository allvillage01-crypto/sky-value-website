import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/data/content";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: `${company.name}のプライバシーポリシー（雛形）です。`,
  robots: {
    index: false,
    follow: true,
  },
};

const SECTIONS: { heading: string; body: string[] }[] = [
  {
    heading: "1. 基本方針",
    body: [
      `${company.name}（以下「当社」といいます）は、お客様からお預かりする個人情報の重要性を認識し、個人情報の保護に関する法律その他関連法令を遵守し、適切に取り扱います。`,
    ],
  },
  {
    heading: "2. 取得する情報と取得方法",
    body: [
      "当社の公式サイトでは、フォームによる個人情報の自動収集は行っておりません。",
      "お問い合わせは「お問い合わせ」セクションに掲載のメールアドレス宛にお客様ご自身のメールソフトから送信いただく方式であり、その際にお客様が記載した氏名・会社名・メールアドレス・お問い合わせ内容等を取得します。",
    ],
  },
  {
    heading: "3. Cookie・アクセス解析について",
    body: [
      "本サイトは現時点でCookieを使用しておらず、アクセス解析ツール・広告配信サービス等の外部サービスも導入しておりません。これらを導入する場合は、本ポリシーを改定のうえ公表します。",
    ],
  },
  {
    heading: "4. 利用目的",
    body: [
      "取得した情報は、お問い合わせへの回答、ご相談への対応、その他付随する業務のためにのみ利用し、あらかじめお客様の同意を得ることなく、取得目的の範囲を超えて利用することはありません。",
    ],
  },
  {
    heading: "5. 第三者提供",
    body: [
      "当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。",
    ],
  },
  {
    heading: "6. 開示・訂正・利用停止等のご請求",
    body: [
      "お客様がご自身の個人情報の開示・訂正・削除・利用停止等をご希望される場合は、「お問い合わせ」セクションのメールアドレスまでご連絡ください。ご本人確認のうえ、合理的な範囲で速やかに対応いたします。",
    ],
  },
  {
    heading: "7. 本ポリシーの変更",
    body: [
      "本ポリシーの内容は、法令の変更やサービス内容の変更等に応じて、予告なく変更する場合があります。変更後の内容は本ページに掲載した時点から効力を生じるものとします。",
    ],
  },
  {
    heading: "8. お問い合わせ窓口",
    body: [`${company.name}　代表者：${company.representative}`, `メール：${company.contactEmail}`],
  },
];

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <div className="mb-10 rounded-sm border border-accent/30 bg-accent/5 px-5 py-4 text-sm leading-relaxed text-ink">
        <p className="font-bold">※本ページは雛形（ドラフト）です。</p>
        <p className="mt-1 text-muted">
          実際の運用実態（取得する情報の範囲、委託先の有無、将来的なツール導入予定など）と齟齬がないか、公開前に必ず内容をご確認・修正のうえ、正式に制定してください。制定日・改定日の記載も未確定です。
        </p>
      </div>

      <Link
        href="/"
        className="text-sm text-accent hover:underline"
      >
        ← トップページに戻る
      </Link>

      <h1 className="mt-6 text-2xl font-bold text-ink sm:text-3xl">
        プライバシーポリシー
      </h1>

      <div className="mt-10 space-y-10">
        {SECTIONS.map((section) => (
          <section key={section.heading}>
            <h2 className="text-base font-bold text-ink">{section.heading}</h2>
            <div className="mt-3 space-y-2 text-sm leading-loose text-muted">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-16 text-xs text-muted/70">制定日：未定（公開前に確定してください）</p>
    </main>
  );
}
