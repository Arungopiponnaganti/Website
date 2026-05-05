import React from 'react';

const METRICS = [
  {
    n: '85%',
    l: 'Fewer production bugs after QA implementation',
    trend: '↓ defect escape rate, sprint over sprint',
  },
  {
    n: '3×',
    l: 'Faster release cycles with automated regression',
    trend: 'From bi-weekly to daily deploys',
  },
  {
    n: '100×',
    l: 'Cheaper to catch a bug in design vs. production',
    trend: 'Shift-left ROI in every engagement',
  },
  {
    n: '2 wks',
    l: 'To first automated test suite from kickoff',
    trend: 'Day-1 value, not month 3',
  },
  {
    n: '138',
    l: 'Tests passing on every commit — zero regressions',
    trend: 'CI/CD pipeline gate on every PR',
  },
];

export default function QEMetrics() {
  return (
    <div className="qe-metrics-strip">
      {METRICS.map((m, i) => (
        <div className="qe-met" key={i}>
          <div className="qe-met-n">{m.n}</div>
          <div className="qe-met-l">{m.l}</div>
          <div className="qe-met-trend">{m.trend}</div>
        </div>
      ))}
    </div>
  );
}
