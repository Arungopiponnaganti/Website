import React from 'react';
import RelatedServices from '../Common/RelatedServices';

const RELATED = [
    {
        title: 'Data Engineering & Pipelines',
        desc: 'The ingestion and transformation layer that feeds the platform',
        href: '/data-solutions/data-engineering-pipelines',
    },
    {
        title: 'Analytics & Business Intelligence',
        desc: 'Dashboards and reporting built on top of the platform data',
        href: '/data-solutions/analytics-business-intelligence',
    },
    {
        title: 'Data Governance & Quality',
        desc: 'Ownership, lineage, and quality rules across the platform',
        href: '/data-solutions/data-governance',
    },
    {
        title: 'Data Strategy Consulting',
        desc: 'Platform design within a broader data roadmap',
        href: '/data-solutions/data-strategy-consulting',
    },
];

export default function CDPRelated() {
    return (
        <RelatedServices
            subTitle="What pairs with cloud data platforms"
            title="Services platform clients commonly add"
            services={RELATED}
            sectionClassName="cd-section cd-section-light py-5 pb-5 border-top"
            contentClassName="container py-4"
        />
    );
}
