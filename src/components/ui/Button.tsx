import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",

        variant === "primary" &&
          "bg-[#D4AF37] text-black hover:bg-[#F4D77B] hover:-translate-y-0.5",

        variant === "ghost" &&
          "border border-white/15 bg-white/5 text-white hover:border-[#D4AF37] hover:bg-white/10",

        className
      )}
    >
      {children}
    </Link>
  );
}