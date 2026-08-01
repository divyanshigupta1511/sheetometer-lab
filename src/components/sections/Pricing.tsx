'use client';

import React from 'react';

export default function Pricing() {
  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600&family=JetBrains+Mono:wght@400;600;700&family=Inter:wght@400;500&display=swap');

        .pricing-wrapper {
          background-color: #f7f4eb;
          padding: 60px 20px;
          font-family: 'Inter', sans-serif;
          width: 100%;
          box-sizing: border-box;
        }

        .pricing-container {
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }

        .section-subtitle {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: #99751e;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 14px;
          display: inline-flex;
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
          margin-bottom: 60px;
          line-height: 1.15;
        }

        .price-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          align-items: center;
          text-align: left;
        }

        @media(max-width: 920px) {
          .price-grid {
            grid-template-columns: 1fr;
            max-width: 420px;
            margin: 0 auto;
          }
        }

        .price-card {
          background: #fff;
          border: 1px solid #e6dfc9;
          border-radius: 24px;
          padding: 34px;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .price-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 45px rgba(0, 0, 0, 0.08);
        }

        .price-card.hi {
          background: #1a1916;
          color: #fbf9f1;
          position: relative;
          overflow: hidden;
          transform: scale(1.03);
          box-shadow: 0 16px 45px rgba(0, 0, 0, 0.08);
          z-index: 2;
        }

        .price-card.hi::before {
          content: '';
          position: absolute;
          inset: -30% -10% auto auto;
          width: 260px;
          height: 260px;
          background: radial-gradient(circle, rgba(219,164,37,.4), transparent 65%);
        }

        .price-card.hi h3, .price-card.hi p {
          color: #fbf9f1;
        }

        .price-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          background: linear-gradient(135deg, #f4d07e 0%, #c29b38 100%);
          color: #1a1916;
          padding: 5px 12px;
          border-radius: 999px;
          font-weight: 700;
          letter-spacing: 0.04em;
          position: absolute;
          top: 24px;
          right: 24px;
        }

        .price-name {
          font-size: 14px;
          font-weight: 600;
          color: #99751e;
          font-family: 'JetBrains Mono', monospace;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .price-card.hi .price-name {
          color: #f4d07e;
        }

        .price-amt {
          font-family: 'Fraunces', serif;
          font-size: 44px;
          font-weight: 600;
          margin: 14px 0 4px;
          color: #1a1916;
        }

        .price-card.hi .price-amt {
          color: #fbf9f1;
        }

        .price-amt span {
          font-size: 15px;
          font-weight: 400;
          color: #66635c;
          font-family: 'Inter', sans-serif;
        }

        .price-card.hi .price-amt span {
          color: rgba(250,242,220,.6);
        }

        .price-desc {
          font-size: 14px;
          margin-bottom: 24px;
          color: #66635c;
          line-height: 1.5;
        }

        .price-card.hi .price-desc {
          color: rgba(250,242,220,.75);
        }

        .price-list {
          list-style: none;
          margin: 0 0 28px 0;
          padding: 0;
        }

        .price-list li {
          display: flex;
          gap: 10px;
          padding: 9px 0;
          font-size: 14px;
          color: #33312c;
          align-items: center;
        }

        .price-card.hi .price-list li {
          color: rgba(250,242,220,.85);
        }

        .price-list li svg {
          flex-shrink: 0;
          margin-top: 2px;
          stroke: #c29b38;
        }

        .price-card.hi .price-list li svg {
          stroke: #f4d07e;
        }

        .price-card .btn {
          width: 100%;
          display: block;
          text-align: center;
          padding: 14px 20px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          transition: 0.3s;
          cursor: pointer;
          border: 1px solid #e6dfc9;
          background: #fff;
          color: #1a1916;
          box-sizing: border-box;
        }

        .price-card .btn:hover {
          border-color: #c29b38;
          transform: translateY(-2px);
        }

        .price-card.hi .btn {
          background: linear-gradient(135deg, #f4d07e 0%, #c29b38 100%);
          border: none;
          color: #1a1916;
          font-weight: 700;
          box-shadow: 0 4px 15px rgba(219, 164, 37, 0.3);
        }

        .price-card.hi .btn:hover {
          opacity: 0.95;
          transform: translateY(-2px);
        }
      `}</style>

      <div className="pricing-wrapper">
        <div className="pricing-container">
          <div className="section-subtitle">Pricing</div>
          <h2 className="section-title">Plans that scale with your<br />business</h2>

          <div className="price-grid">
            
            {/* Tier 1: Professional */}
            <div className="price-card">
              <div className="price-name">Professional</div>
              <div className="price-amt">₹1,499<span>/user/mo</span></div>
              <div className="price-desc">For small teams standardizing their first system of record.</div>
              <ul className="price-list">
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> Up to 10 users</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> Core inventory & accounting</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> CRM & sales pipeline</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> Email support</li>
              </ul>
              <a href="#" className="btn">Start Free Demo</a>
            </div>

            {/* Tier 2: Business (Highlighted) */}
            <div className="price-card hi">
              <div className="price-badge">MOST POPULAR</div>
              <div className="price-name">Business</div>
              <div className="price-amt">₹3,299<span>/user/mo</span></div>
              <div className="price-desc">For growing operations running manufacturing and multi-location stock.</div>
              <ul className="price-list">
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> Unlimited users</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> Manufacturing & purchasing</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> Advanced reporting & Zia AI</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> Priority support</li>
              </ul>
              <a href="#" className="btn">Start Free Demo</a>
            </div>

            {/* Tier 3: Enterprise */}
            <div className="price-card">
              <div className="price-name">Enterprise</div>
              <div className="price-amt">Custom</div>
              <div className="price-desc" style={{ marginBottom: '50px' }}>For complex, multi-entity businesses with dedicated compliance needs.</div>
              <ul className="price-list">
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> Dedicated success manager</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> Custom workflows & SSO</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> Data residency options</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> 24/7 phone support</li>
              </ul>
              <a href="#" className="btn">Talk to Sales</a>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}