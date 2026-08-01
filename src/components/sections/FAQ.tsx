'use client';

import React, { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does it take to set up Sheetometer Lab?",
      answer: "Most teams are fully onboarded within 3 to 5 business days. Our automated migration tools map your existing spreadsheets directly into our unified system of record without data loss."
    },
    {
      question: "Can we connect our existing ERP and accounting tools?",
      answer: "Yes, Sheetometer Lab offers native integrations with Stripe, QuickBooks, Shopify, WooCommerce, and over 50+ enterprise tools to ensure real-time data synchronization across departments."
    },
    {
      question: "Is our financial and operational data secure?",
      answer: "We use enterprise-grade encryption both in transit and at rest, along with role-based access controls and custom SSO options to meet strict regulatory compliance standards."
    },
    {
      question: "What kind of support is included during onboarding?",
      answer: "All plans include dedicated customer success assistance, technical documentation, and video walkthroughs. Business and Enterprise tiers receive priority round-the-clock support."
    }
  ];

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600&family=JetBrains+Mono:wght@400;600&family=Inter:wght@400;500;600&display=swap');

        .faq-wrapper {
          background-color: #f7f4eb;
          padding: 60px 20px;
          font-family: 'Inter', sans-serif;
          width: 100%;
          box-sizing: border-box;
        }

        .faq-container {
          max-width: 900px;
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
          margin-bottom: 50px;
          line-height: 1.15;
        }

        .faq-list {
          max-width: 760px;
          margin: 0 auto;
          text-align: left;
        }

        .faq-item {
          border-bottom: 1px solid #e6dfc9;
        }

        .faq-q {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 4px;
          cursor: pointer;
          gap: 20px;
        }

        .faq-q h4 {
          font-size: 17px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          color: #1a1916;
          margin: 0;
        }

        .faq-plus {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 1px solid #e6dfc9;
          flex-shrink: 0;
          position: relative;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s;
        }

        .faq-plus::before, .faq-plus::after {
          content: '';
          position: absolute;
          background: #33312c;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
        }

        .faq-plus::before {
          width: 10px;
          height: 1.6px;
        }

        .faq-plus::after {
          width: 1.6px;
          height: 10px;
          transition: opacity 0.3s;
        }

        .faq-item.open .faq-plus {
          transform: rotate(135deg);
          border-color: #c29b38;
        }

        .faq-a {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .faq-item.open .faq-a {
          max-height: 200px;
        }

        .faq-a p {
          padding: 0 4px 24px;
          font-size: 15px;
          max-width: 640px;
          color: #66635c;
          margin: 0;
          line-height: 1.6;
        }
      `}</style>

      <div className="faq-wrapper">
        <div className="faq-container">
          <div className="section-subtitle">FAQ</div>
          <h2 className="section-title">Frequently asked questions</h2>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${openIndex === index ? 'open' : ''}`}
              >
                <div className="faq-q" onClick={() => toggleFAQ(index)}>
                  <h4>{faq.question}</h4>
                  <div className="faq-plus"></div>
                </div>
                <div className="faq-a">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}