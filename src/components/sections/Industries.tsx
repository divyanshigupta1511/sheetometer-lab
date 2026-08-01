'use client';

import React from 'react';

export default function Industries() {
  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600&family=JetBrains+Mono:wght@400;600&display=swap');

        .industries-wrapper {
          background-color: #f7f4eb;
          padding: 60px 20px;
          font-family: sans-serif;
          width: 100%;
          box-sizing: border-box;
        }

        .industries-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-subtitle {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: #99751e;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .section-subtitle::before {
          content: "";
          width: 18px;
          height: 1px;
          background: #99751e;
        }

        .section-title {
          font-family: 'Fraunces', serif;
          font-size: 42px;
          font-weight: 600;
          color: #1a1916;
          margin-bottom: 50px;
          line-height: 1.15;
          max-width: 600px;
        }

        .ind-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        @media(max-width: 920px) {
          .ind-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media(max-width: 560px) {
          .ind-grid {
            grid-template-columns: 1fr;
          }
        }

        .ind-card {
          border-radius: 20px;
          padding: 28px 22px;
          text-align: left;
          position: relative;
          overflow: hidden;
          background: #f3eedd;
          border: 1px solid #e6dfc9;
          min-height: 190px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .ind-card:hover {
          transform: translateY(-6px) rotate(-0.4deg);
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.06);
        }

        .ind-glyph {
          width: 32px;
          height: 32px;
          margin-bottom: 34px;
          opacity: 0.95;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          stroke: #ddaa33;
          fill: none;
          stroke-width: 2.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .ind-card:hover .ind-glyph {
          transform: scale(1.12) rotate(6deg);
        }

        .ind-card h4 {
          font-family: 'Fraunces', serif;
          font-size: 20px;
          font-weight: 600;
          color: #1a1916;
          margin: 0 0 10px 0;
        }

        .ind-card span {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #99751e;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
      `}</style>

      <div className="industries-wrapper">
        <div className="industries-container">
          <div className="section-subtitle">Industries We Serve</div>
          <h2 className="section-title">Built for how your industry actually works</h2>

          <div className="ind-grid">
            
            {/* 1. Manufacturing */}
            <div className="ind-card">
              <svg className="ind-glyph" viewBox="0 0 24 24"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
              <div>
                <h4>Manufacturing</h4>
                <span>Production, planning, cost accuracy</span>
              </div>
            </div>

            {/* 2. Retail */}
            <div className="ind-card">
              <svg className="ind-glyph" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
              <div>
                <h4>Retail</h4>
                <span>Omnichannel, fulfillment, pos sync</span>
              </div>
            </div>

            {/* 3. Wholesale */}
            <div className="ind-card">
              <svg className="ind-glyph" viewBox="0 0 24 24"><path d="m3 21 9-18 9 18H3Z"/></svg>
              <div>
                <h4>Wholesale</h4>
                <span>Bulk orders, distributor pricing</span>
              </div>
            </div>

            {/* 4. Healthcare */}
            <div className="ind-card">
              <svg className="ind-glyph" viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
              <div>
                <h4>Healthcare</h4>
                <span>Compliance, asset & supply tracking</span>
              </div>
            </div>

            {/* 5. Education */}
            <div className="ind-card">
              <svg className="ind-glyph" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              <div>
                <h4>Education</h4>
                <span>Fee management, resource planning</span>
              </div>
            </div>

            {/* 6. Construction */}
            <div className="ind-card">
              <svg className="ind-glyph" viewBox="0 0 24 24"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <div>
                <h4>Construction</h4>
                <span>Project costing, site inventory</span>
              </div>
            </div>

            {/* 7. Hospitality */}
            <div className="ind-card">
              <svg className="ind-glyph" viewBox="0 0 24 24"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <div>
                <h4>Hospitality</h4>
                <span>Procurement, staffing, billing</span>
              </div>
            </div>

            {/* 8. Distribution */}
            <div className="ind-card">
              <svg className="ind-glyph" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              <div>
                <h4>Distribution</h4>
                <span>Logistics, route & warehouse ops</span>
              </div>
            </div>

            {/* 9. Automobile */}
            <div className="ind-card">
              <svg className="ind-glyph" viewBox="0 0 24 24"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2-4H8L6 10l-2.5 1.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
              <div>
                <h4>Automobile</h4>
                <span>Parts inventory, service billing</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}