'use client';
import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const SketchIcon = () => (
  <svg width="28" height="28" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <polygon points="50,8 92,32 92,68 50,92 8,68 8,32" fill="#FDAD00" />
    <polygon points="50,26 74,40 74,60 50,74 26,60 26,40" fill="#FDD231" opacity="0.85" />
    <polygon points="50,42 62,49 62,57 50,64 38,57 38,49" fill="#FDE97A" opacity="0.7" />
  </svg>
);

const tools = [
  {
    name: 'Adobe XD',
    icon: '/assets/images/technologies/adobe-xdImage.svg',
    pillClass: 'uxui-pill-adobexd',
  },
  {
    name: 'Sketch',
    icon: null,
    pillClass: 'uxui-pill-sketch',
  },
  {
    name: 'Figma',
    icon: '/assets/images/technologies/figmaImage.svg',
    pillClass: 'uxui-pill-figma',
  },
  {
    name: 'Canva',
    icon: '/assets/images/technologies/canvaImage.svg',
    pillClass: 'uxui-pill-canva',
  },
];

export default function UXUITechnologies() {
  return (
    <section className="cd-section cd-section-light">
      <div className="container">
        <div className="row align-items-center gy-5">

          <div className="col-lg-5 col-md-12">
            <SectionTitle
              SubTitle="Tools & Platforms"
              Title="Technologies We Work On"
              Content="MayuraSoft delivers exceptional design experiences through constant innovation by using cutting-edge, industry-standard design tools."
              isDarkMode={false}
            />
          </div>

          <div className="col-lg-7 col-md-12">
            <div className="d-flex flex-wrap justify-content-center">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className={`border border-0 d-flex align-items-center justify-content-between rounded-pill mb-4 me-4 p-3 uxui-tool-pill ${tool.pillClass}`}
                >
                  <h5 className="mb-0 px-3">{tool.name}</h5>
                  {tool.icon ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={tool.icon}
                      alt={`${tool.name} logo`}
                      width={40}
                      height={40}
                      className="overflow-hidden bg-white shadow-sm rounded-circle p-1 uxui-tool-img"
                    />
                  ) : (
                    <div className="overflow-hidden bg-white shadow-sm rounded-circle p-1 d-flex align-items-center justify-content-center uxui-tool-img">
                      <SketchIcon />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
