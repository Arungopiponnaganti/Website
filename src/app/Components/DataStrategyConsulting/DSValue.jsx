import React from 'react';
import SectionTitle from '../Common/SectionTitle';

export default function DSValue() {
  return (
    <section className="py-5 pb-5 bg-light border-top border-bottom">
      <div className="container py-4">
        <SectionTitle
          className="text-center"
          SubTitle="Why strategy before execution"
          Title="The cost of building without a strategy"
          Content="Data investments made without a strategy produce the right technology in the wrong sequence — or the wrong technology entirely."
          isDarkMode={false}
        />
        
        <div className="ds-value-grid">
          <div className="dsv shadow-sm">
            <div className="dsv-ic" style={{ background: '#fee2e2' }}>
              <svg viewBox="0 0 14 14" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round">
                <path d="M7 2v5M7 9.5v.5" />
              </svg>
            </div>
            <div>
              <div className="dsv-t">The warehouse no one uses</div>
              <div className="dsv-d">Snowflake was implemented. Pipelines were built. Dashboards were created. But leadership never trusted the numbers — because the business requirements weren&apos;t defined before the platform was chosen. ₹80L spent, adoption near zero.</div>
            </div>
          </div>
          
          <div className="dsv shadow-sm">
            <div className="dsv-ic" style={{ background: '#fef3c7' }}>
              <svg viewBox="0 0 14 14" fill="none" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="7" cy="7" r="5" />
                <path d="M7 4v3l2 2" />
              </svg>
            </div>
            <div>
              <div className="dsv-t">The AI project that waited 18 months for clean data</div>
              <div className="dsv-d">The AI team was hired, the models were scoped, and 18 months later they were still waiting for the data engineering team to produce governed, reliable training data. The right sequence was: data → governance → AI.</div>
            </div>
          </div>
          
          <div className="dsv shadow-sm">
            <div className="dsv-ic" style={{ background: '#d1fae5' }}>
              <svg viewBox="0 0 14 14" fill="none" stroke="#059669" strokeWidth="1.5" strokeLinecap="round">
                <path d="M5 7l2 2 3-3M2 4h10v7H2z" />
              </svg>
            </div>
            <div>
              <div className="dsv-t">Strategy gets you the budget</div>
              <div className="dsv-d">A data strategy document with a clear value map and ROI model converts a ₹50L data investment request from &ldquo;the IT team wants a new tool&rdquo; into &ldquo;a strategic capability that will increase revenue by 12%.&rdquo;</div>
            </div>
          </div>
          
          <div className="dsv shadow-sm">
            <div className="dsv-ic" style={{ background: '#ede9fe' }}>
              <svg viewBox="0 0 14 14" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round">
                <path d="M2 10l3-3 3 3 3-3 3 3" />
              </svg>
            </div>
            <div>
              <div className="dsv-t">Sequencing multiplies ROI</div>
              <div className="dsv-d">The right sequence — foundation first, insights second, AI third — means every layer builds on a solid base. The wrong sequence means rework.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
