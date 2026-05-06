'use client';
import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const platforms = [
  {
    name: 'Amazon AWS',
    icon: '/assets/images/technologies/awsImage.svg',
    pillClass: 'cd-pill-aws',
  },
  {
    name: 'Microsoft Azure',
    icon: '/assets/images/technologies/azureImage.svg',
    pillClass: 'cd-pill-azure',
  },
  {
    name: 'Google Cloud',
    icon: '/assets/images/technologies/googlecloudImage.svg',
    pillClass: 'cd-pill-gcp',
  },
  {
    name: 'DigitalOcean',
    icon: '/assets/images/technologies/digitaloceanImage.svg',
    pillClass: 'cd-pill-do',
  },
];

export default function CDCloudProviders() {
  return (
    <section className="cd-section cd-section-muted">
      <div className="container">
        <div className="row align-items-center gy-5">

          <div className="col-lg-5 col-md-12">
            <SectionTitle
              SubTitle="Cloud & DevOps Platforms"
              Title="Platforms We Work On"
              Content="We're provider-agnostic by design — delivering cloud and DevOps excellence across all major platforms using cutting-edge tooling."
              isDarkMode={false}
            />
          </div>

          <div className="col-lg-7 col-md-12">
            <div className="d-flex flex-wrap justify-content-center">
              {platforms.map((platform) => (
                <div
                  key={platform.name}
                  className={`border border-0 d-flex align-items-center justify-content-between rounded-pill mb-4 me-4 p-3 cd-devops-pill ${platform.pillClass}`}
                >
                  <h5 className="mb-0 px-3">{platform.name}</h5>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={platform.icon}
                    alt={`${platform.name} logo`}
                    width={44}
                    height={44}
                    className="overflow-hidden bg-white shadow-sm rounded-circle p-1 cd-devops-img"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .cd-devops-pill  { min-width: 200px; width: 45%; }
        .cd-pill-aws     { background-image: linear-gradient(to right, moccasin, white); }
        .cd-pill-azure   { background-image: linear-gradient(to right, lightcyan, white); }
        .cd-pill-gcp     { background-image: linear-gradient(to right, honeydew, white); }
        .cd-pill-do      { background-image: linear-gradient(to right, lavender, white); }
        .cd-devops-img   { aspect-ratio: unset; height: 44px; width: 44px; }
      `}</style>
    </section>
  );
}
