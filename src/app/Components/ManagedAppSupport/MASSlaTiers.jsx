'use client';
import React from 'react';
import SectionTitle from '../Common/SectionTitle';

export default function MASSlaTiers() {
  return (
    <section className="cd-section py-5 bg-white">
      <div className="container py-4">
        <SectionTitle
          className="text-center mb-5"
          SubTitle="Service levels"
          Title="Clear SLA commitments — no vague 'best effort' language"
          Content="Every plan includes explicit, contractual response and resolution times. You'll see exactly what you're getting before you sign."
          isDarkMode={false}
        />

        <div className="mt-5 overflow-auto" style={{ paddingBottom: '20px' }}>
          <div className="mas-sla-table" style={{ minWidth: '800px' }}>
            <div className="mas-sla-head">
              <div className="mas-sla-hcell">Commitment</div>
              <div className="mas-sla-hcell">Essential</div>
              <div className="mas-sla-hcell">Professional</div>
              <div className="mas-sla-hcell hl">Enterprise</div>
            </div>
            <div className="mas-sla-row"><div className="mas-sla-cell label">Support hours</div><div className="mas-sla-cell">Business hours</div><div className="mas-sla-cell">18/7</div><div className="mas-sla-cell hl">24/7/365</div></div>
            <div className="mas-sla-row"><div className="mas-sla-cell label">P1 first response</div><div className="mas-sla-cell">4 hours</div><div className="mas-sla-cell">1 hour</div><div className="mas-sla-cell hl">&lt;15 minutes</div></div>
            <div className="mas-sla-row"><div className="mas-sla-cell label">P2 first response</div><div className="mas-sla-cell">8 hours</div><div className="mas-sla-cell">4 hours</div><div className="mas-sla-cell hl">1 hour</div></div>
            <div className="mas-sla-row"><div className="mas-sla-cell label">Uptime SLA</div><div className="mas-sla-cell">99.5%</div><div className="mas-sla-cell">99.9%</div><div className="mas-sla-cell hl">99.95%</div></div>
            <div className="mas-sla-row"><div className="mas-sla-cell label">Monitoring frequency</div><div className="mas-sla-cell">5 min</div><div className="mas-sla-cell">1 min</div><div className="mas-sla-cell hl">30 sec</div></div>
            <div className="mas-sla-row">
              <div className="mas-sla-cell label">Dedicated engineer</div>
              <div className="mas-sla-cell"><div className="mas-dash"></div></div>
              <div className="mas-sla-cell"><div className="mas-check-circle"><i className="bi bi-check" style={{ fontSize: '18px' }}></i></div></div>
              <div className="mas-sla-cell hl"><div className="mas-check-circle"><i className="bi bi-check" style={{ fontSize: '18px' }}></i></div></div>
            </div>
            <div className="mas-sla-row">
              <div className="mas-sla-cell label">Post-incident RCA report</div>
              <div className="mas-sla-cell"><div className="mas-dash"></div></div>
              <div className="mas-sla-cell"><div className="mas-check-circle"><i className="bi bi-check" style={{ fontSize: '18px' }}></i></div></div>
              <div className="mas-sla-cell hl"><div className="mas-check-circle"><i className="bi bi-check" style={{ fontSize: '18px' }}></i></div></div>
            </div>
            <div className="mas-sla-row">
              <div className="mas-sla-cell label">Monthly performance review</div>
              <div className="mas-sla-cell"><div className="mas-dash"></div></div>
              <div className="mas-sla-cell"><div className="mas-dash"></div></div>
              <div className="mas-sla-cell hl"><div className="mas-check-circle"><i className="bi bi-check" style={{ fontSize: '18px' }}></i></div></div>
            </div>
            <div className="mas-sla-row">
              <div className="mas-sla-cell label">Quarterly business review</div>
              <div className="mas-sla-cell"><div className="mas-dash"></div></div>
              <div className="mas-sla-cell"><div className="mas-dash"></div></div>
              <div className="mas-sla-cell hl"><div className="mas-check-circle"><i className="bi bi-check" style={{ fontSize: '18px' }}></i></div></div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4 text-tertiary" style={{ fontSize: '14px' }}>
          Exact pricing is scoped after a 30-min discovery call. All plans are month-to-month after the initial committed period.
        </div>

      </div>
    </section>
  );
}
