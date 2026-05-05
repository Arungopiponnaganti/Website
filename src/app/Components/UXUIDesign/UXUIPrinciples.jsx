'use client';

import React from 'react';
import SectionTitle from '../Common/SectionTitle';

// 9-cell pattern (3×3 grid): 1 = filled dot, 0 = hollow dot
const principles = [
  {
    num: '01',
    title: 'Users first, aesthetics second',
    desc: "Beautiful design that confuses users is bad design. Every decision starts with \"does this make the user's task easier?\" If the answer is no, the design changes.",
    pattern: [0, 1, 0, 1, 1, 1, 0, 1, 0],
  },
  {
    num: '02',
    title: 'Design with data, not assumptions',
    desc: "We conduct research before we design. Heatmaps, session recordings, and user interviews inform every wireframe — not gut feel.",
    pattern: [0, 0, 1, 0, 1, 1, 1, 1, 1],
  },
  {
    num: '03',
    title: 'Accessibility is non-negotiable',
    desc: 'WCAG 2.1 AA compliance is a baseline, not a checkbox. Contrast, keyboard navigation, and screen reader support are built in from day one.',
    pattern: [1, 0, 1, 0, 0, 0, 1, 0, 1],
  },
  {
    num: '04',
    title: 'Consistency creates confidence',
    desc: 'Design systems over one-off screens. A coherent visual language reduces cognitive load and builds trust.',
    pattern: [1, 1, 1, 1, 0, 1, 1, 1, 1],
  },
  {
    num: '05',
    title: 'Test before you build',
    desc: "A usability test on a wireframe costs a fraction of fixing the same problem in production. We validate every design with real users before it goes to development.",
    pattern: [1, 0, 0, 1, 1, 0, 0, 1, 1],
  },
  {
    num: '06',
    title: 'Design for the developer handoff',
    desc: "Pixel-perfect specs, component documentation, and annotated Figma files. Developers never have to guess the intent behind a design decision.",
    pattern: [1, 1, 0, 0, 1, 0, 0, 1, 1],
  },
];

function DotGrid({ pattern }) {
  return (
    <div className="uxpr-dot-grid">
      {pattern.map((filled, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        return (
          <div
            key={i}
            className={`uxpr-dot ${filled ? 'filled' : 'hollow'}`}
            style={{ animationDelay: `${(col + row) * 0.18}s` }}
          />
        );
      })}
    </div>
  );
}

export default function UXUIPrinciples() {
  return (
    <section style={{ background: '#f8f9fa', padding: '90px 0 60px' }}>
      <div className="container">

        <div className="row mb-5">
            <SectionTitle
              SubTitle="Our philosophy"
              Title="Six principles every MayuraSoft design is held against"
              className="text-center"
              isDarkMode={false}
              Content={"These aren&apos;t aspirational values — they&apos;re the criteria we use to evaluate every design decision before it leaves our studio."}
            />
          </div>

        {/* 2-column list layout — border-top only */}
        <div className="uxpr-list">
          {[0, 2, 4].map((rowStart) => (
            <div key={rowStart} className="uxpr-row">
              {[principles[rowStart], principles[rowStart + 1]].map((p, col) => (
                <div key={col} className={`uxpr-item ${col === 0 ? 'uxpr-item-left' : 'uxpr-item-right'}`}>
                  <div className="uxpr-icon-col">
                    <DotGrid pattern={p.pattern} />
                  </div>
                  <div className="uxpr-text-col">
                    <h3 className="uxpr-title">{p.title}</h3>
                    <p className="uxpr-desc">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>

      <style>{`
        /* ── List container ── */
        .uxpr-list {
          width: 100%;
        }

        /* ── Row: two items side by side ── */
        .uxpr-row {
          display: grid;
          gap: 24px;
          grid-template-columns: 1fr 1fr;
        }

        /* ── Each item: border-top + padding ── */
        .uxpr-item {
          display: flex;
          align-items: flex-start;
          gap: 24px;
          padding: 40px 20px;
          border-top: 1px solid #e0e0e0;
          transition: background 0.2s ease;
        }
        // .uxpr-item-right {
        //   padding-left: 48px;
        //   padding-right: 0;
        // }
        .uxpr-item:hover {
          background: rgba(67, 97, 238, 0.03);
        }

        /* ── Icon column ── */
        .uxpr-icon-col {
          flex-shrink: 0;
          padding-top: 4px;
        }

        /* ── 3×3 diamond dot grid ── */
        .uxpr-dot-grid {
          display: grid;
          grid-template-columns: repeat(3, 10px);
          grid-template-rows: repeat(3, 10px);
          gap: 5px;
        }

        .uxpr-dot {
          width: 10px;
          height: 10px;
          transform: rotate(45deg) scale(0.65);
        }

        @keyframes uxpr-fill-pulse {
          0%, 100% { transform: rotate(45deg) scale(0.65); opacity: 1; }
          50%       { transform: rotate(45deg) scale(0.45); opacity: 0.5; }
        }
        .uxpr-dot.filled {
          background: #4361EE;
          animation: uxpr-fill-pulse 2.6s ease-in-out infinite;
        }

        @keyframes uxpr-hollow-pulse {
          0%, 100% { transform: rotate(45deg) scale(0.65); opacity: 0.3; }
          50%       { transform: rotate(45deg) scale(0.85); opacity: 0.65; }
        }
        .uxpr-dot.hollow {
          background: transparent;
          border: 1.5px solid #4361EE;
          animation: uxpr-hollow-pulse 2.6s ease-in-out infinite;
        }

        .uxpr-item:hover .uxpr-dot.filled  { animation-duration: 1s; }
        .uxpr-item:hover .uxpr-dot.hollow  { animation-duration: 1s; }

        /* ── Text ── */
        .uxpr-title {
          font-size: 17px;
          font-weight: 700;
          color: #1a1e2d;
          margin-bottom: 10px;
          line-height: 1.35;
        }
        .uxpr-desc {
          font-size: 13.5px;
          color: #6c757d;
          line-height: 1.72;
          margin: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 767px) {
          .uxpr-row {
            grid-template-columns: 1fr;
          }
          .uxpr-item,
          .uxpr-item-right {
            padding: 28px 0;
          }
        }
      `}</style>
    </section>
  );
}
