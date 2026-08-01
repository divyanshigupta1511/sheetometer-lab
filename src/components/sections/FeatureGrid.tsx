export default function FeatureGrid() {
  const features = [
    { 
      title: "Inventory", 
      desc: "Real-time stock across every warehouse, with automatic reorder points and batch tracking.", 
      badge: "4,382 SKUs tracked",
      // Dark Goldenish Icon
      icon: (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
          <path d="M4 8L16 3L28 8V24L16 29L4 24V8Z" stroke="#9E7310" strokeWidth="1.8" strokeLinejoin="round"/>
          <path d="M4 8L16 13L28 8M16 13V29" stroke="#9E7310" strokeWidth="1.8" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      title: "CRM", 
      desc: "Pipeline, contacts and follow-ups in one view — synced straight from your quotes and invoices.", 
      badge: "62% win rate",
      icon: (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="11" r="4.5" stroke="#9E7310" strokeWidth="1.8"/>
          <path d="M6 27C6 21.5 10.5 18 16 18C21.5 18 26 21.5 26 27" stroke="#9E7310" strokeWidth="1.8"/>
        </svg>
      )
    },
    { 
      title: "Accounting", 
      desc: "Full ledger, tax compliance and reconciliation, closed in days instead of weeks.", 
      badge: "₹1.2Cr reconciled",
      icon: (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
          <rect x="6" y="5" width="20" height="22" rx="2" stroke="#9E7310" strokeWidth="1.8"/>
          <path d="M11 12H21M11 16H21M11 20H17" stroke="#9E7310" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      )
    },
    { 
      title: "Manufacturing", 
      desc: "Bill of materials, production planning and shop-floor tracking, tied to live inventory.", 
      badge: "96.4% on-time",
      icon: (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
          <path d="M5 26V15L11 19V15L17 19V15L23 19V11L27 14V26H5Z" stroke="#9E7310" strokeWidth="1.8" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      title: "Purchasing", 
      desc: "Vendor management and purchase orders that update stock and cost the moment goods arrive.", 
      badge: "214 open POs",
      icon: (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
          <path d="M5 9H27L25 21H8L5 9Z" stroke="#9E7310" strokeWidth="1.8" strokeLinejoin="round"/>
          <path d="M5 9L4 5H2" stroke="#9E7310" strokeWidth="1.8" strokeLinecap="round"/>
          <circle cx="12" cy="26" r="1.6" fill="#9E7310"/>
          <circle cx="21" cy="26" r="1.6" fill="#9E7310"/>
        </svg>
      )
    },
    { 
      title: "Sales", 
      desc: "Quote-to-cash in one flow, with approvals and commissions handled automatically.", 
      badge: "▲ 18.3% growth",
      icon: (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
          <path d="M4 24L12 15L17 19L28 7" stroke="#9E7310" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 7H28V14" stroke="#9E7310" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      title: "HR", 
      desc: "Employee records, onboarding and attendance, connected directly to payroll.", 
      badge: "142 employees",
      icon: (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
          <circle cx="12" cy="10" r="4" stroke="#9E7310" strokeWidth="1.8"/>
          <circle cx="22" cy="12" r="3" stroke="#9E7310" strokeWidth="1.8"/>
          <path d="M4 27C4 21.5 7.6 18 12 18C16.4 18 20 21.5 20 27" stroke="#9E7310" strokeWidth="1.8"/>
          <path d="M20 20C23.5 20 26.5 22.8 26.5 27" stroke="#9E7310" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      )
    },
    { 
      title: "Payroll", 
      desc: "Automated runs, compliance and payslips — approved in minutes, not days.", 
      badge: "Runs in 2 days",
      icon: (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
          <rect x="5" y="9" width="22" height="15" rx="2" stroke="#9E7310" strokeWidth="1.8"/>
          <circle cx="16" cy="16.5" r="3.4" stroke="#9E7310" strokeWidth="1.8"/>
          <path d="M5 13H9M23 13H27" stroke="#9E7310" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      )
    },
    { 
      title: "Projects", 
      desc: "Timelines, budgets and resourcing, billed straight back into accounting.", 
      badge: "38 active projects",
      icon: (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
          <rect x="5" y="6" width="8" height="8" rx="1.5" stroke="#9E7310" strokeWidth="1.8"/>
          <rect x="19" y="6" width="8" height="8" rx="1.5" stroke="#9E7310" strokeWidth="1.8"/>
          <rect x="12" y="19" width="8" height="8" rx="1.5" stroke="#9E7310" strokeWidth="1.8"/>
          <path d="M9 14V17M23 14V17M16 17V19M9 17H23" stroke="#9E7310" strokeWidth="1.8"/>
        </svg>
      )
    },
    { 
      title: "Reports", 
      desc: "Live dashboards across every module, built for the decisions you make daily.", 
      badge: "150+ live metrics",
      icon: (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
          <path d="M6 26V6M6 26H27" stroke="#9E7310" strokeWidth="1.8" strokeLinecap="round"/>
          <rect x="10" y="17" width="3.4" height="9" fill="#9E7310"/>
          <rect x="16" y="12" width="3.4" height="14" fill="#9E7310"/>
          <rect x="22" y="8" width="3.4" height="18" fill="#9E7310"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-[120px] bg-[var(--paper)] overflow-hidden" id="solutions">
      <div className="max-w-[1240px] mx-auto px-8">
        
        {/* Section Header */}
        <div className="max-w-[640px] mb-14">
          <p className="font-mono text-xs tracking-[0.14em] uppercase text-[var(--gold-700)] font-semibold inline-flex items-center gap-2 before:content-[''] before:w-[14px] before:h-[1px] before:bg-[var(--gold-600)]">
            Solutions
          </p>
          <h2 className="text-[clamp(28px,3.4vw,42px)] font-serif font-semibold mt-3.5 tracking-[-0.01em] leading-[1.05]">
            One platform. Every department, actually connected.
          </h2>
          <p className="text-[19px] text-[var(--ink-700)] mt-4 leading-[1.65]">
            Each module works standalone, or as one continuous system — the way your business already runs, just without the spreadsheet gaps.
          </p>
        </div>

        {/* Feature Cards Grid with Entrance Float & Tilted Rotation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 perspective-[1000px]">
          {features.map((feat, index) => (
            <div 
              key={index} 
              // Card Tilted Rotation (Applies to specific cards to match original screenshot)
              className={`bg-white border border-[var(--paper-line)] rounded-[var(--radius-md)] p-[26px] transition-all duration-700 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:border-[rgba(219,164,37,0.4)] relative overflow-hidden animate-[fadeInUp_0.8s_ease-out_both] ${index % 3 === 0 ? 'rotate-y-[2deg]' : index % 3 === 1 ? '' : 'rotate-y-[-2deg]'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon with subtle float and click shake */}
              <div className="w-11 h-11 rounded-[12px] bg-[var(--grad-gold)] flex items-center justify-center mb-[18px] transition-transform duration-300 ease-in-out group-hover:scale-105 active:animate-[shake_0.4s_ease-in-out]">
                {feat.icon}
              </div>
              <h4 className="text-[18px] font-serif font-semibold mb-2">{feat.title}</h4>
              <p className="text-[14.5px] text-[var(--ink-700)] mb-4 leading-[1.65]">{feat.desc}</p>
              
              <div className="rounded-[10px] bg-[var(--paper-dim)] border border-[var(--paper-line)] px-3 py-2.5 h-[56px] flex items-center gap-2 overflow-hidden">
                <div className="flex items-end gap-1 h-[34px] flex-1">
                  <i className="flex-1 bg-[var(--gold-500)] opacity-75 rounded-t-[2px]" style={{height: '40%'}}></i>
                  <i className="flex-1 bg-[var(--gold-500)] opacity-75 rounded-t-[2px]" style={{height: '70%'}}></i>
                  <i className="flex-1 bg-[var(--gold-500)] opacity-75 rounded-t-[2px]" style={{height: '55%'}}></i>
                  <i className="flex-1 bg-[var(--gold-500)] opacity-75 rounded-t-[2px]" style={{height: '90%'}}></i>
                  <i className="flex-1 bg-[var(--gold-500)] opacity-75 rounded-t-[2px]" style={{height: '60%'}}></i>
                  <i className="flex-1 bg-[var(--gold-500)] opacity-75 rounded-t-[2px]" style={{height: '80%'}}></i>
                </div>
                <span className="font-mono text-[11px] text-[var(--ink-700)]">{feat.badge}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}