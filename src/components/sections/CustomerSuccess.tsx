'use client';

import React, { useState, useEffect } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;600&family=JetBrains+Mono:wght@400;600&display=swap');

        .testimonials-wrapper {
          background-color: #f7f4eb;
          padding: 60px 20px;
          font-family: sans-serif;
          width: 100%;
          box-sizing: border-box;
        }

        .testimonials-container {
          max-width: 900px;
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
          margin-bottom: 40px;
        }

        .test-wrap {
          position: relative;
          overflow: hidden;
        }

        .test-track {
          display: flex;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .test-slide {
          flex: 0 0 100%;
          padding: 4px;
          box-sizing: border-box;
        }

        .test-card {
          background: #fff;
          border: 1px solid #e6dfc9;
          border-radius: 24px;
          padding: 44px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 40px;
          align-items: center;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.05);
        }

        @media(max-width: 760px) {
          .test-card {
            grid-template-columns: 1fr;
            padding: 28px;
          }
        }

        .stars {
          color: #d4af37;
          font-size: 16px;
          letter-spacing: 2px;
          margin-bottom: 18px;
        }

        .test-quote {
          font-family: 'Fraunces', serif;
          font-size: 22px;
          font-weight: 500;
          font-style: italic;
          line-height: 1.4;
          color: #1a1916;
          margin-bottom: 22px;
        }

        .test-person {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .avatar {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f4d07e 0%, #c29b38 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Fraunces', serif;
          font-weight: 600;
          color: #1a1916;
        }

        .test-person b {
          font-size: 14.5px;
          display: block;
          color: #1a1916;
        }

        .test-person span {
          font-size: 12.5px;
          color: #66635c;
        }

        .test-metric {
          text-align: center;
          border-left: 1px solid #e6dfc9;
          padding-left: 40px;
        }

        @media(max-width: 760px) {
          .test-metric {
            border-left: none;
            border-top: 1px solid #e6dfc9;
            padding: 20px 0 0;
          }
        }

        .test-metric .stat-num {
          background: linear-gradient(135deg, #f4d07e 0%, #c29b38 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-size: 38px;
          font-family: 'Fraunces', serif;
          font-weight: 600;
        }

        .test-metric .stat-label {
          color: #66635c;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          margin-top: 6px;
          text-transform: uppercase;
        }

        .test-dots {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-top: 28px;
        }

        .test-dots button {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #e6dfc9;
          border: none;
          transition: 0.3s;
          cursor: pointer;
        }

        .test-dots button.active {
          background: #c29b38;
          width: 22px;
          border-radius: 5px;
        }
      `}</style>

      <div className="testimonials-wrapper">
        <div className="testimonials-container">
          <div className="section-subtitle">Customer Success</div>
          <h2 className="section-title">Businesses building on Sheetometer Lab</h2>

          <div className="test-wrap">
            <div 
              className="test-track" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              
              {/* Slide 1 */}
              <div className="test-slide">
                <div className="test-card">
                  <div>
                    <div className="stars">★★★★★</div>
                    <div className="test-quote">&quot;We closed our books in three days this quarter. Before Sheetometer Lab, that took three weeks and two spreadsheets nobody trusted.&quot;</div>
                    <div className="test-person">
                      <div className="avatar">AM</div>
                      <div>
                        <b>Aarav Mehta</b>
                        <span>CFO, Northfield Manufacturing</span>
                      </div>
                    </div>
                  </div>
                  <div className="test-metric">
                    <div className="stat-num">62%</div>
                    <div className="stat-label">Faster Month-End Close</div>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="test-slide">
                <div className="test-card">
                  <div>
                    <div className="stars">★★★★★</div>
                    <div className="test-quote">&quot;Every warehouse finally sees the same numbers, at the same time. Stockouts nearly disappeared in our first quarter live.&quot;</div>
                    <div className="test-person">
                      <div className="avatar">PR</div>
                      <div>
                        <b>Priya Raman</b>
                        <span>Ops Director, Kairo Retail</span>
                      </div>
                    </div>
                  </div>
                  <div className="test-metric">
                    <div className="stat-num">41%</div>
                    <div className="stat-label">Fewer Stockouts</div>
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="test-slide">
                <div className="test-card">
                  <div>
                    <div className="stars">★★★★★</div>
                    <div className="test-quote">&quot;Our production planners stopped guessing. The shop floor and the finance team are finally looking at the same data.&quot;</div>
                    <div className="test-person">
                      <div className="avatar">DR</div>
                      <div>
                        <b>Devendra Rao</b>
                        <span>Plant Head, Argon Works</span>
                      </div>
                    </div>
                  </div>
                  <div className="test-metric">
                    <div className="stat-num">96%</div>
                    <div className="stat-label">On-Time Production</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="test-dots">
            <button 
              className={currentIndex === 0 ? 'active' : ''} 
              onClick={() => setCurrentIndex(0)}
              aria-label="Slide 1"
            />
            <button 
              className={currentIndex === 1 ? 'active' : ''} 
              onClick={() => setCurrentIndex(1)}
              aria-label="Slide 2"
            />
            <button 
              className={currentIndex === 2 ? 'active' : ''} 
              onClick={() => setCurrentIndex(2)}
              aria-label="Slide 3"
            />
          </div>
        </div>
      </div>
    </>
  );
}