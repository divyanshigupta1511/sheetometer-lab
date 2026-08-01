'use client';

import React, { useRef } from 'react';

export default function WorkspaceShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: trackRef.current.clientWidth * 0.75, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -trackRef.current.clientWidth * 0.75, behavior: 'smooth' });
    }
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600&family=JetBrains+Mono:wght@400;600&display=swap');

        .showcase-wrapper {
          background-color: #f7f4eb;
          padding: 60px 0;
          font-family: sans-serif;
          width: 100%;
        }

        .showcase-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
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
          margin-bottom: 40px;
        }

        .showcase-track {
          display: flex;
          gap: 26px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding: 12px 4px 26px;
          scrollbar-width: none;
          scroll-behavior: smooth;
        }

        .showcase-track::-webkit-scrollbar {
          display: none;
        }

        .showcase-item {
          scroll-snap-align: start;
          flex: 0 0 auto;
          width: min(78vw, 560px);
        }

        .device-frame {
          border-radius: 20px;
          background: linear-gradient(160deg, #fff, #f3eedd);
          border: 1px solid #e6dfc9;
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.06);
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .showcase-item:hover .device-frame {
          transform: translateY(-6px);
        }

        .device-bar {
          height: 34px;
          background: #f3eedd;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0 14px;
          border-bottom: 1px solid #e6dfc9;
        }

        .device-bar span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #e6dfc9;
        }

        .device-body {
          padding: 28px;
          min-height: 280px;
          background: rgba(255, 255, 255, 0.5);
        }

        .showcase-label {
          margin-top: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .showcase-label b {
          font-family: 'Fraunces', serif;
          font-weight: 600;
          font-size: 17px;
          color: #1a1916;
        }

        .showcase-label span {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #99751e;
          letter-spacing: 0.5px;
        }

        .showcase-nav {
          display: flex;
          gap: 10px;
          justify-content: flex-end;
          margin-top: 20px;
        }

        .showcase-nav button {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid #e6dfc9;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s;
          cursor: pointer;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.02);
        }

        .showcase-nav button:hover {
          border-color: #c29b38;
          transform: translateY(-2px);
        }

        .dash-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .dash-title {
          font-family: 'Fraunces', serif;
          font-size: 18px;
          font-weight: 600;
          color: #1a1916;
        }

        .dash-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 600;
          background: #f4ebd0;
          color: #99751e;
          padding: 4px 10px;
          border-radius: 20px;
          letter-spacing: 0.5px;
        }

        .dash-bars {
          display: flex;
          align-items: flex-end;
          gap: 10px;
          height: 110px;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 1px solid #e6dfc9;
        }

        .bar {
          flex: 1;
          background: linear-gradient(180deg, #f4d07e, #e4ba56);
          border-radius: 4px 4px 0 0;
        }

        .dash-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .mini-card {
          background: #fff;
          border: 1px solid #e6dfc9;
          border-radius: 10px;
          padding: 12px 14px;
        }

        .mini-card-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          color: #888;
          text-transform: uppercase;
          margin-bottom: 4px;
          letter-spacing: 0.5px;
        }

        .mini-card-value {
          font-family: 'JetBrains Mono', monospace;
          font-size: 15px;
          font-weight: 600;
          color: #1a1916;
        }
      `}</style>

      <div className="showcase-wrapper">
        <div className="showcase-container">
          <div className="section-subtitle">Inside the Product</div>
          <h2 className="section-title">A closer look at the workspace</h2>

          <div className="showcase-track" ref={trackRef}>
            {/* Slide 1: CRM Pipeline */}
            <div className="showcase-item">
              <div className="device-frame">
                <div className="device-bar"><span /><span /><span /></div>
                <div className="device-body">
                  <div className="dash-header">
                    <span className="dash-title">CRM Pipeline</span>
                    <span className="dash-badge">CRM</span>
                  </div>
                  <div className="dash-bars">
                    <div className="bar" style={{ height: '55%' }} />
                    <div className="bar" style={{ height: '70%' }} />
                    <div className="bar" style={{ height: '40%' }} />
                    <div className="bar" style={{ height: '85%' }} />
                    <div className="bar" style={{ height: '60%' }} />
                  </div>
                  <div className="dash-cards">
                    <div className="mini-card"><div className="mini-card-label">Today</div><div className="mini-card-value">218</div></div>
                    <div className="mini-card"><div className="mini-card-label">This Week</div><div className="mini-card-value">1,406</div></div>
                  </div>
                </div>
              </div>
              <div className="showcase-label"><b>CRM Pipeline</b><span>SHEETOMETER LAB</span></div>
            </div>

            {/* Slide 2: Inventory Control */}
            <div className="showcase-item">
              <div className="device-frame">
                <div className="device-bar"><span /><span /><span /></div>
                <div className="device-body">
                  <div className="dash-header">
                    <span className="dash-title">Inventory Control</span>
                    <span className="dash-badge">INVENTORY</span>
                  </div>
                  <div className="dash-bars">
                    <div className="bar" style={{ height: '40%' }} />
                    <div className="bar" style={{ height: '90%' }} />
                    <div className="bar" style={{ height: '55%' }} />
                    <div className="bar" style={{ height: '70%' }} />
                    <div className="bar" style={{ height: '60%' }} />
                  </div>
                  <div className="dash-cards">
                    <div className="mini-card"><div className="mini-card-label">Today</div><div className="mini-card-value">218</div></div>
                    <div className="mini-card"><div className="mini-card-label">This Week</div><div className="mini-card-value">1,406</div></div>
                  </div>
                </div>
              </div>
              <div className="showcase-label"><b>Inventory Control</b><span>SHEETOMETER LAB</span></div>
            </div>

            {/* Slide 3: Financial Close */}
            <div className="showcase-item">
              <div className="device-frame">
                <div className="device-bar"><span /><span /><span /></div>
                <div className="device-body">
                  <div className="dash-header">
                    <span className="dash-title">Financial Close</span>
                    <span className="dash-badge">ACCOUNTING</span>
                  </div>
                  <div className="dash-bars">
                    <div className="bar" style={{ height: '65%' }} />
                    <div className="bar" style={{ height: '50%' }} />
                    <div className="bar" style={{ height: '80%' }} />
                    <div className="bar" style={{ height: '45%' }} />
                    <div className="bar" style={{ height: '90%' }} />
                  </div>
                  <div className="dash-cards">
                    <div className="mini-card"><div className="mini-card-label">Today</div><div className="mini-card-value">218</div></div>
                    <div className="mini-card"><div className="mini-card-label">This Week</div><div className="mini-card-value">1,406</div></div>
                  </div>
                </div>
              </div>
              <div className="showcase-label"><b>Financial Close</b><span>SHEETOMETER LAB</span></div>
            </div>

            {/* Slide 4: Manufacturing Floor */}
            <div className="showcase-item">
              <div className="device-frame">
                <div className="device-bar"><span /><span /><span /></div>
                <div className="device-body">
                  <div className="dash-header">
                    <span className="dash-title">Manufacturing Floor</span>
                    <span className="dash-badge">MANUFACTURING</span>
                  </div>
                  <div className="dash-bars">
                    <div className="bar" style={{ height: '50%' }} />
                    <div className="bar" style={{ height: '65%' }} />
                    <div className="bar" style={{ height: '85%' }} />
                    <div className="bar" style={{ height: '55%' }} />
                    <div className="bar" style={{ height: '75%' }} />
                  </div>
                  <div className="dash-cards">
                    <div className="mini-card"><div className="mini-card-label">Today</div><div className="mini-card-value">218</div></div>
                    <div className="mini-card"><div className="mini-card-label">This Week</div><div className="mini-card-value">1,406</div></div>
                  </div>
                </div>
              </div>
              <div className="showcase-label"><b>Manufacturing Floor</b><span>SHEETOMETER LAB</span></div>
            </div>
          </div>

          <div className="showcase-nav">
            <button onClick={scrollPrev} aria-label="Previous">←</button>
            <button onClick={scrollNext} aria-label="Next">→</button>
          </div>
        </div>
      </div>
    </>
  );
}