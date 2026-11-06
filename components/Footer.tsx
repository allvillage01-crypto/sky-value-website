import Image from "next/image";
import { company } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-ink py-10">
      <div className="mx-auto flex max-w-content flex-col items-center gap-4 px-6 text-center">
        <div className="relative h-7 w-36">
          <Image
            src="/brand/logo_white.svg"
            alt={company.name}
            fill
            className="object-contain"
          />
        </div>
        <a
          href="/privacy/"
          className="text-xs tracking-wide text-white/50 underline-offset-4 hover:text-white hover:underline"
        >
          プライバシーポリシー
        </a>
        <p className="text-xs tracking-wide text-white/40">
          &copy; {new Date().getFullYear()} {company.name}
        </p>
      </div>
    </footer>
  );
}
