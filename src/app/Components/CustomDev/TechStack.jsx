'use client';
import React from 'react';
import SectionTitle from '../Common/SectionTitle';
import Image from 'next/image';

const techGroups = [
  {
    title: 'FRONTEND',
    items: [
      { name: 'React / Next.js', icon: '/assets/images/technologies/reactImage.svg' },
      { name: 'Vue / Nuxt', icon: '/assets/images/technologies/vuejsImage.svg' },
      { name: 'Angular', icon: '/assets/images/technologies/angularImage.svg' },
      { name: 'React Native', icon: '/assets/images/technologies/reactImage.svg' },
      { name: 'Flutter', icon: null },
    ]
  },
  {
    title: 'BACKEND',
    items: [
      { name: 'Node.js', icon: '/assets/images/technologies/nodejsImage.svg' },
      { name: 'Python / Django', icon: '/assets/images/technologies/pythonImage.svg' },
      { name: 'Java / Spring', icon: '/assets/images/technologies/javaImage.svg' },
      { name: '.NET / C#', icon: '/assets/images/technologies/netImage.svg' },
      { name: 'Go', icon: null },
    ]
  },
  {
    title: 'DATABASE',
    items: [
      { name: 'PostgreSQL', icon: '/assets/images/technologies/postgresqlImage.svg' },
      { name: 'MySQL / MariaDB', icon: '/assets/images/technologies/mySqlImage.svg' },
      { name: 'MongoDB', icon: '/assets/images/technologies/mongodbImage.svg' },
      { name: 'Redis', icon: null },
      { name: 'Elasticsearch', icon: null },
    ]
  },
  {
    title: 'CLOUD & INFRA',
    items: [
      { name: 'AWS', icon: '/assets/images/technologies/awsImage.svg' },
      { name: 'Google Cloud', icon: '/assets/images/technologies/googlecloudImage.svg' },
      { name: 'Azure', icon: '/assets/images/technologies/azureImage.svg' },
      { name: 'Docker / K8s', icon: null },
      { name: 'Terraform', icon: null },
    ]
  },
  {
    title: 'DEV PRACTICES',
    items: [
      { name: 'CI/CD pipelines', icon: null },
      { name: 'Test automation', icon: null },
      { name: 'Code review gates', icon: null },
      { name: 'Security scanning', icon: null },
      { name: 'Observability', icon: null },
    ]
  }
];

export default function TechStack() {
  return (
    <section className="cd-section cd-section-light">
      <div className="container">
        <SectionTitle
          className="text-center mb-5"
          SubTitle="Technology"
          Title="We build on proven, modern platforms"
          Content="We choose the stack that fits your needs — not the one we're most comfortable with."
          isDarkMode={false}
        />

        <div className="row g-4 justify-content-center">
          {techGroups.map((group, index) => (
            <div key={index} className="col-lg col-md-6 col-sm-12">
              <div className="card h-100 border-0 shadow-sm rounded-4" style={{ backgroundColor: '#ffffff' }}>
                <div className="card-body p-4">
                  <h6 className="card-title fw-bold mb-4 text-uppercase" style={{letterSpacing: '0.5px', fontSize: '0.85rem', color: '#6c757d'}}>
                    {group.title}
                  </h6>
                  <ul className="list-unstyled mb-0">
                    {group.items.map((tech, i) => (
                      <li 
                        key={i} 
                        className={`d-flex align-items-center py-2 ${i !== group.items.length - 1 ? 'border-bottom' : ''}`}
                        style={{ borderColor: '#f1f1f1' }}
                      >
                         <div className="me-3 d-flex align-items-center justify-content-center" style={{width: '24px', height: '24px'}}>
                          {tech.icon ? (
                            <Image src={tech.icon} alt={tech.name} width={20} height={20} style={{objectFit: 'contain'}} />
                          ) : (
                            <div style={{width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#dee2e6'}}></div>
                          )}
                        </div>
                        <span className="fw-medium" style={{fontSize: '0.95rem', color: '#333'}}>{tech.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cd-tech-note text-center mt-5">
          Don&apos;t see your existing stack? We work with most established technologies. <br className="d-none d-md-block" />
          Tell us what you have and we&apos;ll scope around it.
        </div>
      </div>
    </section>
  );
}
