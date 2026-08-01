'use client';

import React from 'react';

export default function Integrations() {
  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@600&family=Instrument+Serif:ital@0;1&display=swap');

        .integrations-section {
          background-color: #0c0c0c;
          width: 100%;
          padding: 80px 20px;
          margin: 0;
          text-align: center;
          box-sizing: border-box;
        }

        .integrations-content {
          max-width: 1100px;
          margin: 0 auto;
        }

        .integrations-subtitle {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          color: #dba425;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .integrations-title {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: 48px;
          color: #ffffff;
          font-weight: normal;
          line-height: 1.15;
          margin-bottom: 50px;
        }

        .int-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }

        @media (max-width: 760px) {
          .int-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .int-tile {
          background: #181818;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 22px 12px;
          text-align: center;
          cursor: pointer;
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
                      border-color 0.35s,
                      background 0.35s;
        }

        .int-tile:hover,
        .int-tile:active,
        .int-tile:focus {
          transform: translateY(-4px);
          border-color: #dba425;
          background: rgba(219, 164, 37, 0.12);
        }

        .int-tile b {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12.5px;
          color: #ffffff;
          font-weight: 600;
        }
      `}</style>

      <section className="integrations-section">
        <div className="integrations-content">
          <div className="integrations-subtitle">— Integrations</div>
          <h2 className="integrations-title">
            Works with the tools you already<br />run on
          </h2>

          <div className="int-grid">
            <div className="int-tile"><b>Stripe</b></div>
            <div className="int-tile"><b>Google Workspace</b></div>
            <div className="int-tile"><b>Microsoft 365</b></div>
            <div className="int-tile"><b>Slack</b></div>
            <div className="int-tile"><b>QuickBooks</b></div>
            <div className="int-tile"><b>Shopify</b></div>
            <div className="int-tile"><b>WooCommerce</b></div>
            <div className="int-tile"><b>Razorpay</b></div>
            <div className="int-tile"><b>PayPal</b></div>
            <div className="int-tile"><b>Zapier</b></div>
          </div>
        </div>
      </section>
    </>
  );
}