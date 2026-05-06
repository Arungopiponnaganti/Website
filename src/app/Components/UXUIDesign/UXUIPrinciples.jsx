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
    <section className="uxpr-section">
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

    </section>
  );
}
