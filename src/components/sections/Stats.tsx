'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function AnimatedStats() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    businesses: 0,
    uptime: 0,
    productivity: 0,
    operations: 0,
    features: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Counter animation logic
            let currentStep = 0;
            const totalSteps = 50;

            const timer = setInterval(() => {
              currentStep++;
              const progress = currentStep / totalSteps;

              setCounts({
                businesses: Math.min(10000, Math.floor(10000 * progress)),
                uptime: Number(Math.min(99.9, 99.9 * progress).toFixed(1)),
                productivity: Math.min(35, Math.floor(35 * progress)),
                operations: Math.min(40, Math.floor(40 * progress)),
                features: Math.min(150, Math.floor(150 * progress)),
              });

              if (currentStep >= totalSteps) {
                clearInterval(timer);
                setCounts({
                  businesses: 10000,
                  uptime: 99.9,
                  productivity: 35,
                  operations: 40,
                  features: 150,
                });
              }
            }, 25);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600&family=JetBrains+Mono:wght@400;600&display=swap');

        .stats-wrapper {
          background-color: #121212;
          padding: 60px 20px;
          font-family: sans-serif;
          width: 100%;
          box-sizing: border-box;
        }

        .stats-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          overflow: hidden;
        }

        @media(max-width: 820px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .stat-cell {
          background: #0e0e0e;
          padding: 36px 24px;
          text-align: center;
        }

        .stat-num {
          font-family: 'Fraunces', serif;
          font-size: clamp(30px, 3.6vw, 46px);
          font-weight: 600;
          background: linear-gradient(135deg, #f4d07e 0%, #c29b38 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .stat-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11.5px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: rgba(250, 242, 220, 0.6);
          margin-top: 8px;
        }
      `}</style>

      <div className="stats-wrapper">
        <div className="stats-container">
          <div className="stats-grid" ref={gridRef}>
            
            <div className="stat-cell">
              <div className="stat-num">{counts.businesses}+</div>
              <div className="stat-label">Businesses</div>
            </div>

            <div className="stat-cell">
              <div className="stat-num">{counts.uptime}%</div>
              <div className="stat-label">Uptime</div>
            </div>

            <div className="stat-cell">
              <div className="stat-num">{counts.productivity}%</div>
              <div className="stat-label">Higher Productivity</div>
            </div>

            <div className="stat-cell">
              <div className="stat-num">{counts.operations}%</div>
              <div className="stat-label">Faster Operations</div>
            </div>

            <div className="stat-cell">
              <div className="stat-num">{counts.features}+</div>
              <div className="stat-label">ERP Features</div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}