import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const CARDS = [
  {
    icBg: '#E1F5EE',
    icStroke: '#0F6E56',
    icPath: 'M7 2a5 5 0 100 10A5 5 0 007 2zM5 7l2 2 3-3',
    t: 'Automation-first, not automation-only',
    d: 'We automate everything that can be automated — and apply human judgment to exploratory testing, edge cases, and UX validation where tools can\'t replace domain expertise.',
  },
  {
    icBg: '#EEEDFE',
    icStroke: '#534AB7',
    icPath: 'M2 4h10M2 7.5h7M2 11h5',
    t: 'Shift-left is our default, not an upgrade',
    d: 'Every engagement starts with QA in the design review — not the staging gate. Requirements are reviewed for testability before development begins, catching ambiguity before it becomes a bug.',
  },
  {
    icBg: '#FAEEDA',
    icStroke: '#854F0B',
    icPath: 'M2 2h10v10H2zM5 7.5l2 2 3-4',
    t: 'We own the test strategy, not just execution',
    d: 'We write the test plan, design the coverage model, select the toolchain, and build the automation framework. You get a QA function — not a team that runs whatever tests you hand them.',
  },
  {
    icBg: '#E6F1FB',
    icStroke: '#185FA5',
    icPath: 'M7 1v2M7 11v2M1 7h2M11 7h2M3 3l1.5 1.5M9.5 9.5L11 11M3 11l1.5-1.5M9.5 4.5L11 3',
    t: 'CI/CD-native pipeline integration',
    d: 'Every test suite we build is designed to run in your pipeline from day one. Parallel test execution, coverage gates, and automatic failure reporting — not an afterthought integration.',
  },
  {
    icBg: '#FAECE7',
    icStroke: '#993C1D',
    icPath: 'M7 1l1.6 3.3L12 5l-2.5 2.4.6 3.6L7 9.3l-3.1 1.7.6-3.6L2 5l3.4-.7z',
    t: 'Knowledge transfer built in',
    d: 'We document every test suite, every framework decision, and every coverage model. Your team inherits a QA capability, not a black box. Pairing sessions with your engineers are standard, not optional.',
  },
  {
    icBg: '#EAF3DE',
    icStroke: '#27500A',
    icPath: 'M2 9l3-3 3 3 5-6',
    t: 'Metrics-driven, not effort-driven',
    d: 'We measure defect escape rate, mean time to detect, and test coverage per release — not hours billed. You see quality improving in numbers, not reports about how busy the QA team was.',
  },
];

export default function QEWhyUs() {
  return (
    <section className="cd-section cd-section-white">
      <div className="container">

        <div className="row mb-4">
          <div className="col-lg-12">
            <SectionTitle
              className="text-center"
              SubTitle="Why MayuraSoft"
              Title="What separates our <span>quality practice</span>"
            />
          </div>
        </div>

        <div className="qe-why-grid">
          {CARDS.map((c, i) => (
            <div className="qe-wc" key={i}>
              <div className="qe-wc-ic" style={{ background: c.icBg }}>
                <svg viewBox="0 0 14 14" fill="none" stroke={c.icStroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={c.icPath} />
                </svg>
              </div>
              <div>
                <div className="qe-wc-t">{c.t}</div>
                <div className="qe-wc-d">{c.d}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
