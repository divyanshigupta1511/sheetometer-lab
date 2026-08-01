'use client';

import React, { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('in');
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(rev => observer.observe(rev));

    return () => {
      reveals.forEach(rev => observer.unobserve(rev));
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@9..144,400;600&family=JetBrains+Mono:wght@400;600&family=Inter:wght@400;500;600&display=swap');

        .footer-wrapper {
          background-color: #0e0e0e;
          margin: 0;
          font-family: 'Inter', sans-serif;
          width: 100%;
          box-sizing: border-box;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        @media(max-width: 760px) {
          .footer-container {
            padding: 0 20px;
          }
        }

        footer {
          background: #0e0e0e;
          color: #fbf9f1;
          padding: 80px 0 30px;
        }

        .foot-top {
          display: grid;
          grid-template-columns: 1.6fr repeat(4, 1fr);
          gap: 40px;
          padding-bottom: 56px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        }

        @media(max-width: 920px) {
          .foot-top {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media(max-width: 560px) {
          .foot-top {
            grid-template-columns: 1fr;
          }
        }

        .foot-brand h3 {
          font-family: 'Fraunces', serif;
          font-size: 22px;
          margin: 0 0 12px 0;
          color: #fbf9f1;
        }

        .foot-tagline {
          font-family: 'Fraunces', serif;
          font-style: italic;
          color: #dba425;
          font-size: 15px;
          margin-bottom: 20px;
        }

        .foot-brand p {
          max-width: 280px;
          font-size: 14px;
          color: rgba(250,242,220,.55);
          line-height: 1.5;
          margin: 0;
        }

        .foot-col h5 {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11.5px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #dba425;
          margin: 0 0 18px 0;
        }

        .foot-col a {
          display: block;
          font-size: 14px;
          color: rgba(250,242,220,.68);
          margin-bottom: 12px;
          transition: color 0.3s;
          text-decoration: none;
        }

        .foot-col a:hover {
          color: #fbf9f1;
        }

        .foot-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 28px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .foot-bottom p {
          font-size: 12.5px;
          color: rgba(250,242,220,.45);
          margin: 0;
        }

        .foot-social {
          display: flex;
          gap: 14px;
        }

        .foot-social a {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s;
          color: #fbf9f1;
          text-decoration: none;
        }

        .foot-social a:hover {
          border-color: #dba425;
          background: rgba(219,164,37,.1);
        }

        .newsletter {
          display: flex;
          gap: 8px;
          margin-top: 16px;
          max-width: 300px;
        }

        .newsletter input {
          flex: 1;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 999px;
          padding: 10px 16px;
          font-size: 13px;
          color: #fbf9f1;
          outline: none;
        }

        .newsletter input::placeholder {
          color: rgba(250,242,220,.4);
        }

        .newsletter button {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f4d07e 0%, #c29b38 100%);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          cursor: pointer;
          font-weight: bold;
        }

        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .reveal.in {
          opacity: 1;
          transform: translateY(0);
        }

        .stagger .reveal:nth-child(1) { transition-delay: 0.05s; }
        .stagger .reveal:nth-child(2) { transition-delay: 0.14s; }
        .stagger .reveal:nth-child(3) { transition-delay: 0.23s; }
        .stagger .reveal:nth-child(4) { transition-delay: 0.32s; }
        .stagger .reveal:nth-child(5) { transition-delay: 0.41s; }
        .stagger .reveal:nth-child(6) { transition-delay: 0.5s; }
      `}</style>

      <div className="footer-wrapper">
        <footer>
          <div className="footer-container">
            <div className="foot-top stagger">
              
              {/* Brand Info / Newsletter Column */}
              <div className="foot-brand reveal">
                <h3>Sheetometer Lab</h3>
                <div className="foot-tagline">&quot;The single source of truth for modern operations.&quot;</div>
                <p>Streamline your financial close, inventory, and supply chain with unified real-time architecture.</p>
                
                <div className="newsletter">
                  <input type="email" placeholder="Enter your work email" />
                  <button aria-label="Subscribe">→</button>
                </div>
              </div>

              {/* Product Column */}
              <div className="foot-col reveal">
                <h5>Product</h5>
                <a href="#">Features</a>
                <a href="#">Integrations</a>
                <a href="#">Financial Close</a>
                <a href="#">Manufacturing</a>
                <a href="#">Pricing</a>
              </div>

              {/* Solutions Column */}
              <div className="foot-col reveal">
                <h5>Solutions</h5>
                <a href="#">Retail & POS</a>
                <a href="#">Wholesale</a>
                <a href="#">Healthcare</a>
                <a href="#">Construction</a>
                <a href="#">Distribution</a>
              </div>

              {/* Resources Column */}
              <div className="foot-col reveal">
                <h5>Resources</h5>
                <a href="#">Documentation</a>
                <a href="#">API Reference</a>
                <a href="#">Case Studies</a>
                <a href="#">Spreadsheet Migration</a>
                <a href="#">Community</a>
              </div>

              {/* Company Column */}
              <div className="foot-col reveal">
                <h5>Company</h5>
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Contact</a>
              </div>

            </div>

            {/* Footer Bottom Bar */}
            <div className="foot-bottom">
              <p>&copy; 2026 Sheetometer Lab Inc. All rights reserved.</p>
              
              <div className="foot-social">
                <a href="#" aria-label="Twitter">𝕏</a>
                <a href="#" aria-label="LinkedIn">in</a>
                <a href="#" aria-label="GitHub">gh</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}