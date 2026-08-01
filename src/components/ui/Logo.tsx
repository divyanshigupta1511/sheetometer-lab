import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-3 ${className ?? ""}`}
      aria-label="Sheetometer Lab Home"
    >
      <Image
        src="/images/logo.svg"
        alt="Sheetometer Lab"
        width={42}
        height={42}
        priority
      />

      <span
  className="text-xl font-semibold tracking-tight"
  style={{ fontFamily: "var(--font-space-grotesk)" }}
>
  Sheetometer Lab
</span>
        Sheetometer Lab
      
    </Link>
  );
}