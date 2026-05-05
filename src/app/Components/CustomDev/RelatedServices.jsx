import Link from 'next/link';
import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const related = [
  {
    title: 'UX / UI Design',
    desc: 'Great software starts with great design. We can handle both.',
    link: '/services/ux-ui-design'
  },
  {
    title: 'Quality Engineering',
    desc: 'Dedicated QA teams for products already in development.',
    link: '/services/quality-engineering'
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Infrastructure and CI/CD for what we build together.',
    link: '/services/cloud-devops'
  },
  {
    title: 'AI & Automation',
    desc: 'Add intelligent features to the product we build for you.',
    link: '/ai/ai-integration'
  }
];

export default function RelatedServices() {
  return (
    <section className="cd-section cd-section-muted">
      <div className="container">

        <SectionTitle
          SubTitle="Explore more"
          Title="Services that pair well with custom development"
          className='text-center'
          Content="We cover the full spectrum of custom software delivery — from a single feature to a complete platform."
          isDarkMode={false}
        />

        <div className="row flex-nowrap flex-md-wrap overflow-auto pb-3 g-4">
          {related.map((r, i) => (
            <div className="col-10 col-md-6 col-lg-3 flex-shrink-0 flex-md-shrink-1" key={i}>
              <Link href={r.link} className="cd-rel-card">
                <h4>{r.title}</h4>
                <p>{r.desc}</p>
                <span className="cd-rel-link">Learn more &rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
