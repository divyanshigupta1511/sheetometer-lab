export default function Comparison() {
  return (
    <section className="py-[120px] bg-[var(--paper)]">
      <div className="max-w-[1240px] mx-auto px-8">
        
        {/* Section Header */}
        <div className="max-w-[640px] mb-14">
          <p className="font-mono text-xs tracking-[0.14em] uppercase text-[var(--gold-700)] font-semibold inline-flex items-center gap-2 before:content-[''] before:w-[14px] before:h-[1px] before:bg-[var(--gold-600)]">
            Why teams switch
          </p>
          <h2 className="text-[clamp(28px,3.4vw,42px)] font-serif font-semibold mt-3.5 tracking-[-0.01em] leading-[1.05]">
            Why growing businesses choose Sheetometer Lab
          </h2>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px]">
          
          {/* Traditional ERP (Bad) */}
          <div className="bg-[var(--paper-dim)] border border-[var(--paper-line)] rounded-[18px] p-8">
            <span className="font-mono text-xs tracking-[0.08em] uppercase font-semibold text-[#B5462E] mb-[18px] inline-block">
              Traditional ERP
            </span>
            <ul className="space-y-3 mt-2">
              <li className="flex gap-3 items-start text-[15px] py-3 border-b border-[var(--paper-line)]">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[rgba(181,70,46,0.12)] text-[#B5462E] flex items-center justify-center text-xs font-bold">✕</span>
                <span>6–12 month implementations before go-live</span>
              </li>
              <li className="flex gap-3 items-start text-[15px] py-3 border-b border-[var(--paper-line)]">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[rgba(181,70,46,0.12)] text-[#B5462E] flex items-center justify-center text-xs font-bold">✕</span>
                <span>Rigid modules that don't fit how you actually operate</span>
              </li>
              <li className="flex gap-3 items-start text-[15px] py-3 border-b border-[var(--paper-line)]">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[rgba(181,70,46,0.12)] text-[#B5462E] flex items-center justify-center text-xs font-bold">✕</span>
                <span>Data spread across disconnected point tools</span>
              </li>
              <li className="flex gap-3 items-start text-[15px] py-3 border-b border-[var(--paper-line)]">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[rgba(181,70,46,0.12)] text-[#B5462E] flex items-center justify-center text-xs font-bold">✕</span>
                <span>Support tickets measured in days, not minutes</span>
              </li>
              <li className="flex gap-3 items-start text-[15px] py-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[rgba(181,70,46,0.12)] text-[#B5462E] flex items-center justify-center text-xs font-bold">✕</span>
                <span>Pricing built for enterprises, not growing teams</span>
              </li>
            </ul>
          </div>

          {/* Sheetometer Lab (Good) */}
          <div className="bg-[var(--ink-900)] text-[var(--paper)] rounded-[18px] p-8 shadow-[0_30px_60px_-25px_rgba(15,12,6,0.35)] relative overflow-hidden">
            <div className="absolute -top-[40%] -right-[20%] w-[280px] h-[280px] bg-[radial-gradient(circle,rgba(219,164,37,0.35),transparent_65%)] blur-[10px] pointer-events-none"></div>
            
            <span className="font-mono text-xs tracking-[0.08em] uppercase font-semibold text-[var(--gold-300)] mb-[18px] inline-block relative z-10">
              Sheetometer Lab
            </span>
            <ul className="space-y-3 mt-2 relative z-10">
              <li className="flex gap-3 items-start text-[15px] py-3 border-b border-[rgba(250,242,220,0.14)] text-[rgba(250,242,220,0.86)]">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[rgba(47,174,113,0.18)] text-[#5FD79E] flex items-center justify-center text-xs font-bold">✓</span>
                <span>Live in weeks, with guided setup and data import</span>
              </li>
              <li className="flex gap-3 items-start text-[15px] py-3 border-b border-[rgba(250,242,220,0.14)] text-[rgba(250,242,220,0.86)]">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[rgba(47,174,113,0.18)] text-[#5FD79E] flex items-center justify-center text-xs font-bold">✓</span>
                <span>Modules that adapt to your workflow, not the reverse</span>
              </li>
              <li className="flex gap-3 items-start text-[15px] py-3 border-b border-[rgba(250,242,220,0.14)] text-[rgba(250,242,220,0.86)]">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[rgba(47,174,113,0.18)] text-[#5FD79E] flex items-center justify-center text-xs font-bold">✓</span>
                <span>One source of truth from quote to cash</span>
              </li>
              <li className="flex gap-3 items-start text-[15px] py-3 border-b border-[rgba(250,242,220,0.14)] text-[rgba(250,242,220,0.86)]">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[rgba(47,174,113,0.18)] text-[#5FD79E] flex items-center justify-center text-xs font-bold">✓</span>
                <span>Real support from people who build the product</span>
              </li>
              <li className="flex gap-3 items-start text-[15px] py-3 text-[rgba(250,242,220,0.86)]">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[rgba(47,174,113,0.18)] text-[#5FD79E] flex items-center justify-center text-xs font-bold">✓</span>
                <span>Transparent pricing that scales with you</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}