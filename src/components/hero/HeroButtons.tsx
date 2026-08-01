import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
      <Button
        href="#contact"
        className="group"
      >
        Book a Free Consultation

        <ArrowRight
          size={18}
          className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
        />
      </Button>

      <Link
        href="#solutions"
        className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:border-[#D4AF37] hover:bg-white/10"
      >
        Explore Solutions
      </Link>
    </div>
  );
}