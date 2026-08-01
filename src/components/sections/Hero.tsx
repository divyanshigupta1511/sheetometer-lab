export default function Hero() {
  return (
    <section className="relative pt-[168px] pb-[120px] overflow-hidden bg-[var(--paper)]">
      <div className="max-w-[1240px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1.02fr_1fr] gap-10 items-center">
        
        {/* Hero Copy */}
        <div className="hero-copy">
          <p className="font-mono text-xs tracking-[0.14em] uppercase text-[var(--gold-700)] font-semibold inline-flex items-center gap-2 before:content-[''] before:w-[14px] before:h-[1px] before:bg-[var(--gold-600)]">
            Build systems. Build freedom.
          </p>
          <h1 className="text-[clamp(38px,4.6vw,60px)] font-serif font-semibold mt-[18px] mb-[22px] leading-[1.05]">
            The ERP platform built for <em style={{ background: 'linear-gradient(135deg, #F7E3AC 0%, #DBA425 46%, #9C6F0E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontStyle: 'italic' }}>growing</em> businesses.
          </h1>
          <p className="text-[18.5px] text-[var(--ink-700)] leading-[1.65] mb-[34px]">
            Manage your sales, inventory, manufacturing, finance, HR and customer relationships from one intelligent platform — instead of forty disconnected spreadsheets.
          </p>
          
          <div className="flex flex-wrap gap-3.5 mb-11">
            <a href="#demo" className="inline-flex items-center justify-center gap-2 px-[26px] py-[14px] rounded-full font-semibold text-[15px] bg-[var(--grad-gold)] text-[var(--ink-900)] shadow-md hover:-translate-y-0.5 transition-all">
              Start Free Demo
            </a>
            <a href="#pricing" className="inline-flex items-center justify-center gap-2 px-[26px] py-[14px] rounded-full font-semibold text-[15px] border border-[var(--paper-line)] bg-white/50 text-[var(--ink-900)] hover:border-[var(--gold-600)] hover:bg-white transition-all">
              Book Consultation
            </a>
          </div>

          <div className="pt-[26px] border-t border-[var(--paper-line)]">
            <p className="font-mono text-xs tracking-[0.14em] uppercase text-[var(--gold-700)] font-semibold mb-4">
              Trusted by 10,000+ businesses
            </p>
            <div className="flex items-center gap-[34px] flex-wrap opacity-62 grayscale font-mono font-semibold text-sm">
              <span>NORTHFIELD MFG</span>
              <span>KAIRO RETAIL</span>
              <span>VESTA GROUP</span>
              <span>ORBITAL FOODS</span>
              <span>ARGON WORKS</span>
            </div>
          </div>
        </div>

        {/* Hero Visual / 3D Dashboard Mockup with Original Tilt & Extended Inner Card Lengths */}
        <div className="relative h-[620px]" style={{ perspective: '1400px' }}>
          <div className="absolute inset-[8%_4%] bg-[radial-gradient(circle,rgba(219,164,37,0.25),transparent_70%)] blur-[30px] z-0"></div>

          {/* Main Dashboard Frame (Original 3D Tilt + Crystal Clear Static + Subtle Float + Increased Height) */}
          <div className="absolute inset-[2%_0%] z-2 bg-white border border-[var(--paper-line)] rounded-[22px] p-[26px] shadow-[0_30px_60px_-25px_rgba(15,12,6,0.25)] animate-[floatySimple_8s_ease-in-out_infinite]" style={{ transform: 'rotateY(-9deg) rotateX(5deg) rotateZ(1deg)', transformStyle: 'preserve-3d' }}>
            <div className="flex items-center justify-between mb-5">
              <div className="flex gap-1.5"><span className="w-2 h-2 rounded-full bg-black/10"></span><span className="w-2 h-2 rounded-full bg-black/10"></span><span className="w-2 h-2 rounded-full bg-black/10"></span></div>
              <span className="font-mono text-[10.5px] text-[var(--gold-700)] bg-[var(--gold-200)] px-2.5 py-1 rounded-full font-semibold">LIVE · BUSINESS OVERVIEW</span>
            </div>

            <div className="grid grid-cols-[1.3fr_1fr] gap-4 mb-4">
              {/* Revenue Card - Extended Length/Padding */}
              <div className="bg-[var(--paper)] rounded-[16px] p-5 border border-[var(--paper-line)] flex flex-col justify-between min-h-[140px]">
                <h5 className="text-[10px] font-mono text-[var(--ink-700)] font-semibold">REVENUE — THIS YEAR</h5>
                <div>
                  <div className="font-serif text-[22px] font-semibold mb-1">₹1,42,80,000</div>
                  <div className="text-[10.5px] text-[var(--success)] font-semibold">▲ 18.3% vs last year</div>
                </div>
              </div>

              {/* Orders Card with Mini Bars - Extended Length/Padding */}
              <div className="bg-[var(--paper)] rounded-[16px] p-5 border border-[var(--paper-line)] flex flex-col justify-between min-h-[140px]">
                <h5 className="text-[10px] font-mono text-[var(--ink-700)] font-semibold">ORDERS</h5>
                <div>
                  <div className="font-serif text-[19px] font-semibold mb-2">3,214</div>
                  <div className="flex items-end gap-1.5 h-[28px]">
                    <i className="w-2.5 bg-[var(--gold-500)] rounded-t-[2px]" style={{height:'40%'}}></i>
                    <i className="w-2.5 bg-[var(--gold-500)] rounded-t-[2px]" style={{height:'70%'}}></i>
                    <i className="w-2.5 bg-[var(--gold-500)] rounded-t-[2px]" style={{height:'50%'}}></i>
                    <i className="w-2.5 bg-[var(--gold-500)] rounded-t-[2px]" style={{height:'90%'}}></i>
                    <i className="w-2.5 bg-[var(--gold-500)] rounded-t-[2px]" style={{height:'65%'}}></i>
                    <i className="w-2.5 bg-[var(--gold-500)] rounded-t-[2px]" style={{height:'100%'}}></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Inventory Health Card with Ring - Extended Length/Padding */}
              <div className="bg-[var(--paper)] rounded-[16px] p-5 border border-[var(--paper-line)] flex items-center gap-4 min-h-[130px]">
                <div className="w-12 h-12 rounded-full border-4 border-[var(--gold-500)] border-t-transparent flex items-center justify-center font-mono text-[11px] font-bold flex-shrink-0">79%</div>
                <div>
                  <h5 className="text-[10px] font-mono text-[var(--ink-700)] font-semibold mb-1">INVENTORY HEALTH</h5>
                  <span className="text-[11px] text-[var(--ink-800)] font-medium">79% optimal</span>
                </div>
              </div>

              {/* Manufacturing Card - Extended Length/Padding */}
              <div className="bg-[var(--paper)] rounded-[16px] p-5 border border-[var(--paper-line)] flex flex-col justify-between min-h-[130px]">
                <h5 className="text-[10px] font-mono text-[var(--ink-700)] font-semibold">MANUFACTURING</h5>
                <div>
                  <div className="font-serif text-[18px] font-semibold mb-1">96.4%</div>
                  <span className="text-[10px] text-[var(--ink-700)]">On-time production rate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Card 1: New Invoice Paid with Dark Goldenish Icon BG */}
          <div className="absolute top-[2%] left-[-6%] z-3 bg-white rounded-[16px] px-4 py-3 shadow-[0_14px_34px_-18px_rgba(15,12,6,0.28)] border border-[var(--paper-line)] flex items-center gap-3 animate-[floatySimple_5s_ease-in-out_infinite]">
            <div className="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0 text-[var(--ink-900)] shadow-sm" style={{ background: 'linear-gradient(135deg, #F0CE73 0%, #BE8A16 100%)' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 12L6 8L9 11L14 4" stroke="#0F0C06" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div>
              <b className="text-[13px] block font-semibold text-[var(--ink-900)]">New invoice paid</b>
              <small className="text-[11px] text-[var(--ink-700)]">₹84,200 · Orbital Foods</small>
            </div>
          </div>

          {/* Floating Card 2: Stock Reorder Triggered with Dark Goldenish Icon BG */}
          <div className="absolute bottom-[2%] left-[-8%] z-3 bg-white rounded-[16px] px-4 py-3 shadow-[0_14px_34px_-18px_rgba(15,12,6,0.28)] border border-[var(--paper-line)] flex items-center gap-3 animate-[floatySimple_7s_ease-in-out_infinite]">
            <div className="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0 text-[var(--ink-900)] shadow-sm" style={{ background: 'linear-gradient(135deg, #F0CE73 0%, #BE8A16 100%)' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="4" width="12" height="9" rx="1.5" stroke="#0F0C06" strokeWidth="1.6"/><path d="M2 6.5H14" stroke="#0F0C06" strokeWidth="1.6"/></svg>
            </div>
            <div>
              <b className="text-[13px] block font-semibold text-[var(--ink-900)]">Stock reorder triggered</b>
              <small className="text-[11px] text-[var(--ink-700)]">SKU-2291 · below threshold</small>
            </div>
          </div>

          {/* Floating Card 3: Payroll Notification with Dark Goldenish Icon BG */}
          <div className="absolute top-[42%] right-[-8%] z-3 bg-white rounded-[16px] px-4 py-3 shadow-[0_14px_34px_-18px_rgba(15,12,6,0.28)] border border-[var(--paper-line)] flex items-center gap-3 animate-[floatySimple_6s_ease-in-out_infinite]">
            <div className="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0 text-[var(--ink-900)] shadow-sm" style={{ background: 'linear-gradient(135deg, #F0CE73 0%, #BE8A16 100%)' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="#0F0C06" strokeWidth="1.6"/><path d="M8 5V8L10 10" stroke="#0F0C06" strokeWidth="1.6" strokeLinecap="round"/></svg>
            </div>
            <div>
              <b className="text-[13px] block font-semibold text-[var(--ink-900)]">Payroll runs in 2 days</b>
              <small className="text-[11px] text-[var(--ink-700)]">42 employees · auto-approved</small>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}