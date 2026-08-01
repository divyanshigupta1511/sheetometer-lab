import { Sparkles } from "lucide-react";

export default function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2">
      <Sparkles
        size={16}
        className="text-[#D4AF37]"
      />

      <span className="text-sm font-medium text-[#F4D77B]">
        Business Automation Platform
      </span>
    </div>
  );
}