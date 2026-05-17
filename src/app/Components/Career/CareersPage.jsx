"use client";
import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';
import DynamicFormModal from '../Common/DynamicFormModal';

const JOBS_LIST = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    location: 'Remote / Bangalore, India',
    type: 'Full-time',
    experience: '5+ Years',
    description: 'We are looking for an experienced Full Stack Developer to join our growing team. You will be responsible for building and maintaining web applications using React, Node.js, and cloud platforms.',
    requirements: [
      '5+ years of experience in full stack development',
      'Strong proficiency in React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS, Azure, or GCP)',
      'Excellent problem-solving skills'
    ],
    salary: '₹15,00,000 - ₹25,00,000 per annum'
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    location: 'Bangalore, India',
    type: 'Full-time',
    experience: '3+ Years',
    description: 'Join our design team to create beautiful, user-centric digital experiences. You will work closely with developers and stakeholders to deliver exceptional products.',
    requirements: [
      '3+ years of experience in UI/UX design',
      'Proficiency in Figma, Adobe XD, and prototyping tools',
      'Strong portfolio demonstrating design skills',
      'Experience with design systems'
    ],
    salary: '₹8,00,000 - ₹15,00,000 per annum'
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    location: 'Remote',
    type: 'Full-time',
    experience: '4+ Years',
    description: 'We need a DevOps Engineer to streamline our development processes and infrastructure. You will be instrumental in building scalable CI/CD pipelines.',
    requirements: [
      '4+ years of DevOps experience',
      'Expertise in Docker, Kubernetes, and Terraform',
      'Experience with CI/CD tools (Jenkins, GitHub Actions)',
      'Strong scripting skills in Python or Bash'
    ],
    salary: '₹12,00,000 - ₹20,00,000 per annum'
  },
  {
    id: 4,
    title: 'Data Engineer',
    location: 'Remote / Hyderabad, India',
    type: 'Full-time',
    experience: '3+ Years',
    description: 'Looking for a Data Engineer to help us build and maintain data pipelines. You will work with large datasets and create scalable data solutions.',
    requirements: [
      '3+ years in data engineering or similar role',
      'Proficiency in SQL, Python, and Spark',
      'Experience with data warehouses (Snowflake, BigQuery)',
      'Knowledge of data modeling best practices'
    ],
    salary: '₹10,00,000 - ₹18,00,000 per annum'
  },
  {
    id: 5,
    title: 'AI/ML Engineer',
    location: 'Remote / Bangalore, India',
    type: 'Full-time',
    experience: '3+ Years',
    description: 'Join us to build cutting-edge AI solutions for our clients. You will design and implement machine learning models and integrate AI into business workflows.',
    requirements: [
      '3+ years of experience in AI/ML development',
      'Strong background in Python, TensorFlow, or PyTorch',
      'Experience with LLM integration and RAG architectures',
      'Understanding of MLOps practices'
    ],
    salary: '₹14,00,000 - ₹24,00,000 per annum'
  },
  {
    id: 6,
    title: 'Quality Assurance Engineer',
    location: 'Bangalore, India',
    type: 'Full-time',
    experience: '2+ Years',
    description: 'We are seeking a QA Engineer to ensure the quality of our software products. You will design test strategies and implement automation frameworks.',
    requirements: [
      '2+ years of QA experience',
      'Experience with Selenium, Cypress, or similar tools',
      'Strong analytical and problem-solving skills',
      'Knowledge of agile methodologies'
    ],
    salary: '₹6,00,000 - ₹12,00,000 per annum'
  }
];

const jobApplicationFields = [
  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe', required: true },
  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com', required: true },
  { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210', required: true },
  { name: 'linkedin', label: 'LinkedIn Profile', type: 'text', placeholder: 'https://linkedin.com/in/johndoe', required: false },
  { name: 'portfolio', label: 'Portfolio / Website', type: 'text', placeholder: 'https://yourportfolio.com', required: false },
  { name: 'experience', label: 'Years of Experience', type: 'select', placeholder: 'Select experience...', required: true, options: ['0-2 Years', '2-5 Years', '5-8 Years', '8+ Years'] },
  { name: 'resume', label: 'Resume URL', type: 'text', placeholder: 'https://drive.google.com/...', required: true },
  { name: 'coverLetter', label: 'Cover Letter', type: 'textarea', placeholder: 'Tell us why you are a great fit for this role...', required: false, fullWidth: true }
];

const JobCard = ({ job, isOpen, onToggle, onApply }) => {
  return (
    <div
      className="job-card"
      style={{
        background: '#fff',
        borderRadius: '16px',
        marginBottom: '20px',
        border: isOpen ? '2px solid #ff3b00' : '2px solid #e5e7eb',
        transition: 'all 0.3s ease',
        overflow: 'hidden',
        boxShadow: isOpen ? '0 12px 40px rgba(255, 59, 0, 0.15)' : '0 4px 20px rgba(0, 0, 0, 0.06)'
      }}
    >
      <div
        className="job-header"
        onClick={onToggle}
        style={{
          padding: '24px 28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          background: isOpen ? 'linear-gradient(135deg, rgba(255, 59, 0, 0.03) 0%, rgba(255, 107, 53, 0.03) 100%)' : 'transparent'
        }}
      >
        <div style={{ flex: 1 }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '800',
            color: isOpen ? '#ff3b00' : '#1f2937',
            marginBottom: '8px',
            letterSpacing: '-0.3px',
            transition: 'color 0.3s ease'
          }}>
            {job.title}
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.875rem',
              color: '#6b7280',
              fontWeight: '500'
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {job.location}
            </span>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.875rem',
              color: '#6b7280',
              fontWeight: '500'
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {job.type}
            </span>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.875rem',
              color: '#6b7280',
              fontWeight: '500'
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
              {job.experience} experience
            </span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{
            background: 'linear-gradient(135deg, #ff3b00 0%, #ff6b35 100%)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '10px',
            fontSize: '0.8rem',
            fontWeight: '700',
            letterSpacing: '0.5px',
            textTransform: 'uppercase'
          }}>
            Apply Now
          </span>
          <i
            className="bi bi-chevron-down"
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
              color: isOpen ? '#ff3b00' : '#888',
              fontSize: '1.25rem'
            }}
          />
        </div>
      </div>

      <div
        className="job-details"
        style={{
          maxHeight: isOpen ? '600px' : '0',
          padding: isOpen ? '0 28px 28px 28px' : '0 28px',
          opacity: isOpen ? 1 : 0,
          transition: 'all 0.4s ease'
        }}
      >
        <div style={{
          borderTop: '1px solid #e5e7eb',
          paddingTop: '20px',
          marginTop: '0'
        }}>
          <p style={{
            color: '#666',
            fontSize: '0.95rem',
            lineHeight: '1.7',
            marginBottom: '20px'
          }}>
            {job.description}
          </p>

          <div style={{ marginBottom: '20px' }}>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '700',
              color: '#1f2937',
              marginBottom: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Requirements
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '10px'
            }}>
              {job.requirements.map((req, idx) => (
                <li key={idx} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  color: '#4b5563',
                  fontSize: '0.9rem',
                  lineHeight: '1.5'
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff3b00" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(255, 59, 0, 0.05) 0%, rgba(255, 107, 53, 0.05) 100%)',
            padding: '16px 20px',
            borderRadius: '12px',
            borderLeft: '4px solid #ff3b00',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div>
              <strong style={{
                display: 'block',
                fontSize: '0.75rem',
                color: '#6b7280',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '4px'
              }}>
                Salary Range
              </strong>
              <span style={{
                fontSize: '1.1rem',
                fontWeight: '800',
                color: '#ff3b00'
              }}>
                {job.salary}
              </span>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); onApply(job); }}
              style={{
                background: 'linear-gradient(135deg, #ff3b00 0%, #ff6b35 100%)',
                color: 'white',
                border: 'none',
                padding: '12px 28px',
                borderRadius: '12px',
                fontSize: '0.95rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 6px 20px rgba(255, 59, 0, 0.3)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 10px 30px rgba(255, 59, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 6px 20px rgba(255, 59, 0, 0.3)';
              }}>
              Apply for this Role
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CareersFAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqData = [
    {
      q: 'What is the interview process like?',
      a: 'Our interview process typically consists of 3-4 rounds: an initial screening call, a technical interview, a practical assessment, and a final discussion with the team lead. We aim to complete the entire process within 2-3 weeks.'
    },
    {
      q: 'Do you offer remote work options?',
      a: 'Yes! We embrace hybrid work models. Many of our roles offer full remote or hybrid flexibility. We believe in delivering great work regardless of location.'
    },
    {
      q: 'What growth opportunities are available?',
      a: 'We encourage continuous learning and offer various growth pathways including skill development programs, conference attendance, internal mobility, and leadership training.'
    },
    {
      q: 'What benefits do you offer?',
      a: 'Our benefits package includes health insurance, performance bonuses, flexible working hours, learning & development budget, wellness programs, and regular team events.'
    }
  ];

  const toggleOpen = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="cd-section py-5" style={{ background: '#f9fafb' }}>
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <SectionTitle
              className="text-center mb-5"
              SubTitle="KNOW MORE"
              Title="Frequently Asked Questions"
              Content=""
              isDarkMode={false}
            />
            <div className="faq-container mt-4">
              {faqData.map((faq, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#fff',
                    borderRadius: '12px',
                    marginBottom: '16px',
                    border: openIdx === idx ? '2px solid #ff3b00' : '2px solid #e5e7eb',
                    transition: 'all 0.3s ease',
                    overflow: 'hidden',
                    boxShadow: openIdx === idx ? '0 8px 30px rgba(255, 59, 0, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.04)'
                  }}
                >
                  <div
                    onClick={() => toggleOpen(idx)}
                    style={{
                      padding: '20px 24px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      fontWeight: '700',
                      fontSize: '1rem',
                      color: openIdx === idx ? '#ff3b00' : '#1f2937',
                    }}
                  >
                    <span style={{ paddingRight: '20px' }}>{faq.q}</span>
                    <i
                      className="bi bi-plus-lg"
                      style={{
                        transform: openIdx === idx ? 'rotate(45deg)' : 'none',
                        transition: 'transform 0.3s ease',
                        color: openIdx === idx ? '#ff3b00' : '#888',
                        flexShrink: 0,
                        fontSize: '1.25rem'
                      }}
                    />
                  </div>
                  <div
                    style={{
                      maxHeight: openIdx === idx ? '400px' : '0',
                      padding: openIdx === idx ? '0 24px 24px 24px' : '0 24px',
                      opacity: openIdx === idx ? 1 : 0,
                      transition: 'all 0.3s ease',
                      fontSize: '0.95rem',
                      color: '#666',
                      lineHeight: '1.75',
                    }}
                  >
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CareersPage = ({ className = "" }) => {
  const [openJobId, setOpenJobId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applyingJob, setApplyingJob] = useState(null);

  const toggleJob = (id) => {
    setOpenJobId(openJobId === id ? null : id);
  };

  const handleApplyJob = (job) => {
    setApplyingJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setApplyingJob(null);
  };

  return (
    <div className={`careers-page ${className}`}>
      <section className="cd-section" style={{
        background: 'linear-gradient(135deg, #1a1e2d 0%, #2d3548 100%)',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.5
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <span style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, rgba(255, 59, 0, 0.2) 0%, rgba(255, 107, 53, 0.2) 100%)',
                border: '1px solid rgba(255, 59, 0, 0.3)',
                borderRadius: '30px',
                padding: '8px 20px',
                fontSize: '0.85rem',
                fontWeight: '700',
                color: '#ff6b35',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '20px'
              }}>
                We&apos;re Hiring
              </span>
              <h1 style={{
                fontSize: '3rem',
                fontWeight: '800',
                color: '#fff',
                marginBottom: '20px',
                lineHeight: '1.2',
                letterSpacing: '-1px'
              }}>
                Build Your Career at <span style={{
                  background: 'linear-gradient(135deg, #ff3b00 0%, #ff6b35 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>MayuraSoft</span>
              </h1>
              <p style={{
                fontSize: '1.15rem',
                color: 'rgba(255, 255, 255, 0.7)',
                maxWidth: '600px',
                margin: '0 auto 30px',
                lineHeight: '1.7'
              }}>
                Join a team of passionate innovators building cutting-edge software solutions. We are always looking for talented individuals who want to make an impact.
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '16px 24px',
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)'
                }}>
                  <span style={{ display: 'block', fontSize: '2rem', fontWeight: '800', color: '#ff6b35' }}>50+</span>
                  <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Team Members</span>
                </div>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '16px 24px',
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)'
                }}>
                  <span style={{ display: 'block', fontSize: '2rem', fontWeight: '800', color: '#ff6b35' }}>100+</span>
                  <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Projects Delivered</span>
                </div>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '16px 24px',
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)'
                }}>
                  <span style={{ display: 'block', fontSize: '2rem', fontWeight: '800', color: '#ff6b35' }}>15+</span>
                  <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Countries Served</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cd-section py-5" style={{ background: '#fff' }}>
        <div className="container py-4">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-6 text-center">
              <SectionTitle
                SubTitle="OPEN POSITIONS"
                Title="Explore Opportunities"
                Content="We have exciting opportunities across various domains. Find your perfect role and grow with us."
                isDarkMode={false}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {JOBS_LIST.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  isOpen={openJobId === job.id}
                  onToggle={() => toggleJob(job.id)}
                  onApply={handleApplyJob}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CareersFAQ />

      <section className="cd-section py-5" style={{
        background: 'linear-gradient(135deg, #ff3b00 0%, #ff6b35 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.3
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                color: '#fff',
                marginBottom: '16px',
                letterSpacing: '-0.5px'
              }}>
                Don&apos;t See the Perfect Role?
              </h2>
              <p style={{
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '30px',
                lineHeight: '1.6'
              }}>
                We are always on the lookout for exceptional talent. Send us your resume and tell us how you can contribute to our team.
              </p>
              <button
                onClick={() => { setApplyingJob(null); setIsModalOpen(true); }}
                style={{
                  background: '#fff',
                  color: '#ff3b00',
                  border: 'none',
                  padding: '16px 40px',
                  borderRadius: '14px',
                  fontSize: '1rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.2)';
                }}>
                Send Your Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      <DynamicFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={applyingJob ? `Apply for ${applyingJob.title}` : 'Send Your Resume'}
        description={applyingJob ? `Tell us why you would be a great fit for the ${applyingJob.title} role.` : 'Upload your resume and tell us how you can contribute to our team.'}
        submitButtonText="Submit Application"
        fields={jobApplicationFields}
        showContactInfo={false}
      />
    </div>
  );
};

export default CareersPage;
export { JobCard, CareersFAQ };