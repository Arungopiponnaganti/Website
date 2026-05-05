import Link from 'next/link';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SectionTitle from '../Common/SectionTitle';

const related = [
  {
    title: 'UX / UI Design',
    desc: 'Research-led design that converts users, not just looks good.',
    link: '/services/ux-ui-design'
  },
  {
    title: 'AI & Automation',
    desc: 'Add intelligence to your product with embedded AI features.',
    link: '/ai/ai-integration'
  },
  {
    title: 'Quality Engineering',
    desc: 'Automated test coverage for every feature you ship.',
    link: '/services/quality-engineering'
  },
  {
    title: 'Cloud & DevOps',
    desc: 'The infra and pipeline your product needs to scale reliably.',
    link: '/services/cloud-devops'
  }
];

export default function PERelatedServices() {
  return (
    <section className="cd-section cd-section-muted">
      <div className="container">

        <SectionTitle
          SubTitle="You may also need"
          Title="Services that pair with product engineering"
          className='text-center mb-5'
          Content=""
          isDarkMode={false}
        />

        <Row className="flex-nowrap flex-md-wrap overflow-auto pb-3 g-4 mt-2">
          {related.map((r, i) => (
            <Col xs={10} md={6} lg={3} className="flex-shrink-0 flex-md-shrink-1" key={i}>
              <Link href={r.link} className="cd-rel-card h-100 d-flex flex-column">
                <h4 className="mb-2">{r.title}</h4>
                <p className="flex-grow-1 mb-0">{r.desc}</p>
                <span className="cd-rel-link d-inline-block mt-3">Explore &rarr;</span>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
