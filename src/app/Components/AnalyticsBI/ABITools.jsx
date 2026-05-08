'use client';
import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const abiTools = [
  {
    name: 'Power BI',
    desc: 'Microsoft-ecosystem organisations; best for finance-heavy reporting and Excel-familiar users; strong DAX measure language',
    pattern: [1, 0, 1, 0, 1, 0, 1, 0, 1],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4361EE" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="4" height="18" rx="1" />
        <rect x="10" y="8" width="4" height="13" rx="1" />
        <rect x="17" y="13" width="4" height="8" rx="1" />
      </svg>
    ),
  },
  {
    name: 'Tableau',
    desc: 'Design-first analytics; best for complex visualisations, large datasets, and data exploration by analysts',
    pattern: [0, 1, 0, 1, 1, 1, 0, 1, 0],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4361EE" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18" />
        <path d="M3 12h18" />
        <path d="M8.5 8.5l7 7" />
        <path d="M15.5 8.5l-7 7" />
      </svg>
    ),
  },
  {
    name: 'Looker',
    desc: 'Code-first analytics; best for organisations that want a single semantic layer; strong for product analytics',
    pattern: [1, 1, 0, 0, 1, 0, 0, 1, 1],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4361EE" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M11 8v6" />
        <path d="M8 11h6" />
      </svg>
    ),
  },
  {
    name: 'Metabase',
    desc: 'Startup and SMB analytics; fast to deploy, low cost, excellent for teams without deep BI expertise',
    pattern: [0, 0, 1, 1, 0, 1, 1, 1, 0],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4361EE" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
        <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    ),
  },
];

function DotGrid({ pattern }) {
  return (
    <div className="abit-dot-grid">
      {pattern.map((filled, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        return (
          <div
            key={i}
            className={`abit-dot ${filled ? 'filled' : 'hollow'}`}
            style={{ animationDelay: `${(col + row) * 0.18}s` }}
          />
        );
      })}
    </div>
  );
}

export default function ABITools() {
  return (
    <section className='py-5 pb-5' style={{ background: '#fff'}}>
      <div className="container py-4">
        <div className="row mb-2">
          <SectionTitle
            SubTitle="BI platform expertise"
            Title="We work across all major BI platforms — and help you choose the right one"
            className="text-center"
            isDarkMode={false}
            Content="From enterprise Power BI deployments to nimble Metabase setups, we bring hands-on expertise across every major business intelligence platform."
          />
        </div>

        <div className="abit-list">
          {[0, 2].map((rowStart) => (
            <div key={rowStart} className="abit-row">
              {[abiTools[rowStart], abiTools[rowStart + 1]].map((tool, col) => (
                <div key={col} className={`abit-item ${col === 0 ? 'abit-item-left' : 'abit-item-right'}`}>
                  <div className="abit-icon-col">
                    <DotGrid pattern={tool.pattern} />
                  </div>
                  <div className="abit-text-col">
                    {/* <div className="abit-tool-icon">{tool.icon}</div> */}
                    <h3 className="abit-title">{tool.name}</h3>
                    <p className="abit-desc">{tool.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .abit-list {
          width: 100%;
        }

        .abit-row {
          display: grid;
          gap: 24px;
          grid-template-columns: 1fr 1fr;
        }

        .abit-item {
          display: flex;
          align-items: flex-start;
          gap: 24px;
          padding: 40px 20px;
          border-top: 1px solid #e0e0e0;
          transition: background 0.2s ease;
        }

        .abit-item:hover {
          background: rgba(67, 97, 238, 0.03);
        }

        .abit-icon-col {
          flex-shrink: 0;
          padding-top: 4px;
        }

        .abit-dot-grid {
          display: grid;
          grid-template-columns: repeat(3, 10px);
          grid-template-rows: repeat(3, 10px);
          gap: 5px;
        }

        .abit-dot {
          width: 10px;
          height: 10px;
          transform: rotate(45deg) scale(0.65);
        }

        @keyframes abit-fill-pulse {
          0%, 100% { transform: rotate(45deg) scale(0.65); opacity: 1; }
          50% { transform: rotate(45deg) scale(0.45); opacity: 0.5; }
        }
        .abit-dot.filled {
          background: #4361EE;
          animation: abit-fill-pulse 2.6s ease-in-out infinite;
        }

        @keyframes abit-hollow-pulse {
          0%, 100% { transform: rotate(45deg) scale(0.65); opacity: 0.3; }
          50% { transform: rotate(45deg) scale(0.85); opacity: 0.65; }
        }
        .abit-dot.hollow {
          background: transparent;
          border: 1.5px solid #4361EE;
          animation: abit-hollow-pulse 2.6s ease-in-out infinite;
        }

        .abit-item:hover .abit-dot.filled { animation-duration: 1s; }
        .abit-item:hover .abit-dot.hollow { animation-duration: 1s; }

        .abit-title {
          font-size: 17px;
          font-weight: 700;
          color: #1a1e2d;
          margin-bottom: 10px;
          line-height: 1.35;
        }

        .abit-desc {
          font-size: 13.5px;
          color: #6c757d;
          line-height: 1.72;
          margin: 0 0 16px 0;
        }

        .abit-tool-icon {
          margin-bottom: 12px;
        }

        @media (max-width: 767px) {
          .abit-row {
            grid-template-columns: 1fr;
          }
          .abit-item,
          .abit-item-right {
            padding: 28px 0;
          }
        }
      `}</style>
    </section>
  );
}
