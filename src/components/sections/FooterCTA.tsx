'use client';

import React from 'react';

export default function FinalCTA() {
  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600&family=JetBrains+Mono:wght@400;600&family=Inter:wght@400;500;600&display=swap');

        .cta-wrapper {
          background-color: #0e0e0e;
          margin: 0;
          font-family: 'Inter', sans-serif;
          width: 100%;
          box-sizing: border-box;
        }

        .cta {
          position: relative;
          overflow: hidden;
          text-align: center;
          background: radial-gradient(ellipse 900px 500px at 50% 0%, rgba(219,164,37,.22), transparent 65%), #0e0e0e;
          padding: 130px 20px;
        }

        .cta-particles {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .cta-subtitle {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: #dba425;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 20px;
          position: relative;
          z-index: 2;
        }

        .cta h2 {
          font-family: 'Fraunces', serif;
          font-size: clamp(36px, 5vw, 62px);
          color: #fbf9f1;
          max-width: 820px;
          margin: 0 auto 16px;
          font-weight: 600;
          line-height: 1.15;
          position: relative;
          z-index: 2;
        }

        .cta p {
          color: rgba(250,242,220,.66);
          max-width: 520px;
          margin: 0 auto 40px;
          font-size: 15px;
          line-height: 1.6;
          position: relative;
          z-index: 2;
        }

        .cta-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          position: relative;
          z-index: 2;
        }

        .btn-primary {
          background: linear-gradient(135deg, #f4d07e 0%, #c29b38 100%);
          color: #0e0e0e;
          padding: 14px 28px;
          border-radius: 99px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          transition: 0.3s;
          box-shadow: 0 4px 20px rgba(219, 164, 37, 0.25);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          opacity: 0.95;
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #fbf9f1;
          padding: 14px 28px;
          border-radius: 99px;
          font-weight: 500;
          font-size: 14px;
          text-decoration: none;
          transition: 0.3s;
        }

        .btn-secondary:hover {
          border-color: #dba425;
          transform: translateY(-2px);
          background: rgba(219, 164, 37, 0.08);
        }
      `}</style>

      <div className="cta-wrapper">
        <section className="cta">
          <div className="cta-particles"></div>
          <div className="cta-subtitle">— READY WHEN YOU ARE</div>
          <h2>Transform your business with<br />Sheetometer Lab</h2>
          <p>No credit card. No lock-in contracts. Just a system that finally keeps up with you.</p>
          <div className="cta-actions">
            <a href="#" className="btn-primary">Book Free Demo</a>
            <a href="#" className="btn-secondary">Talk to an ERP Expert</a>
          </div>
        </section>
      </div>
    </>
  );
}