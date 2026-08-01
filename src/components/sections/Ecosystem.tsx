'use client';
import { useState } from 'react';

export default function Ecosystem() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const nodes = [
    { label: 'Inventory', x: 272, y: 22 },
    { label: 'HR', x: 432.697, y: 80.4889 },
    { label: 'CRM', x: 518.202, y: 228.588 },
    { label: 'Accounting', x: 488.506, y: 397 },
    { label: 'Projects', x: 357.505, y: 506.923 },
    { label: 'Manufacturing', x: 186.495, y: 506.923 },
    { label: 'Sales', x: 55.4936, y: 397 },
    { label: 'Purchase', x: 25.7981, y: 228.588 },
    { label: 'Support', x: 111.303, y: 80.4889 }
  ];

  const cx = 320;
  const cy = 320;

  return (
    <section className="py-[120px] bg-[#0F0C06] text-[#FBF8F1] relative overflow-hidden" id="ecosystem">
      <div className="max-w-[1240px] mx-auto px-8">
        
        {/* Section Header */}
        <div className="max-w-[640px] mx-auto text-center mb-16">
          <p className="font-mono text-xs tracking-[0.14em] uppercase text-[#F0CE73] font-semibold inline-flex items-center gap-2 before:content-[''] before:w-[14px] before:h-[1px] before:bg-[#F0CE73]">
            The ERP core
          </p>
          <h2 className="text-[clamp(28px,3.4vw,42px)] font-serif font-semibold mt-3.5 tracking-[-0.01em] leading-[1.05] text-[#FBF8F1]">
            Nine modules. One continuous system.
          </h2>
          <p className="text-[19px] text-[rgba(250,242,220,0.66)] mt-4 leading-[1.65]">
            Hover a module to trace how information actually flows between your teams — no exports, no re-entry, no drift.
          </p>
        </div>

        {/* Ecosystem Graphic Wrapper */}
        <div className="relative max-w-[640px] mx-auto aspect-square">
          <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 640 640">
            {nodes.map((node, i) => (
              <line
                key={i}
                x1={cx}
                y1={cy}
                x2={node.x + 48}
                y2={node.y + 48}
                stroke={activeNode === i ? "#F0CE73" : "rgba(250,242,220,0.14)"}
                strokeWidth={activeNode === i ? "2" : "1.4"}
                style={{ transition: 'stroke .3s, stroke-width .3s' }}
              />
            ))}
          </svg>

          {/* Central Core Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full bg-[linear-gradient(135deg,#F7E3AC_0%,#DBA425_46%,#9C6F0E_100%)] flex items-center justify-center z-30 shadow-[0_0_60px_rgba(219,164,37,0.5)] font-serif font-semibold text-[#0F0C06] text-[13px] text-center leading-tight">
            Sheetometer<br />Core
          </div>

          {/* Orbiting Nodes */}
          {nodes.map((node, i) => (
            <div
              key={i}
              className={`absolute w-[96px] h-[96px] rounded-full bg-white/[0.05] border backdrop-blur-[6px] flex items-center justify-center text-center text-[12px] font-semibold text-[#FBF8F1] cursor-pointer z-30 transition-all duration-300 ${activeNode === i ? 'bg-[rgba(219,164,37,0.16)] border-[#F0CE73] scale-108' : 'border-[rgba(250,242,220,0.14)]'}`}
              style={{ left: `${node.x}px`, top: `${node.y}px` }}
              onMouseEnter={() => setActiveNode(i)}
              onMouseLeave={() => setActiveNode(null)}
            >
              {node.label}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}