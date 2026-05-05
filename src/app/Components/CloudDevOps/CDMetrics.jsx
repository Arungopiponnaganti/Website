import React from 'react';

const METRICS = [
  {
    n: '99.95%',
    l: 'Uptime SLA on managed infrastructure',
    trend: '↑ from typical 97.x% on unmanaged',
  },
  {
    n: '<15 min',
    l: 'Mean time to recovery on monitored systems',
    trend: 'vs. industry avg of 4.5 hrs',
  },
  {
    n: '40%',
    l: 'Average cloud cost reduction after our audit',
    trend: '↓ from rightsizing & reserved instances',
  },
  {
    n: '10×',
    l: 'Deployment frequency after CI/CD implementation',
    trend: 'From monthly to daily or more',
  },
  {
    n: '2 wks',
    l: 'To first automated pipeline from kickoff',
    trend: 'Day-1 value, not month 3',
  },
];

export default function CDMetrics() {
  return (
    <div className="cd-metrics-strip">
      {METRICS.map((m, i) => (
        <div className="cd-met" key={i}>
          <div className="cd-met-n">{m.n}</div>
          <div className="cd-met-l">{m.l}</div>
          <div className="cd-met-trend">{m.trend}</div>
        </div>
      ))}
    </div>
  );
}
