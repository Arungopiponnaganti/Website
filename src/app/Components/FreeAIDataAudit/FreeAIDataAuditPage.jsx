"use client";

import Link from "next/link";
import { useState } from "react";
import CtaBand from "../Common/CtaBand";
import DynamicFormModal from "../Common/DynamicFormModal";
import FreeAIDataAuditProcess from "./FreeAIDataAuditProcess";
import styles from "./FreeAIDataAuditPage.module.css";

const auditFormFields = [
  { label: "Name", name: "name", type: "text", placeholder: "John Smith", required: true, colSize: 6 },
  { label: "Work Email", name: "email", type: "email", placeholder: "john@company.com", required: true, colSize: 6 },
  { label: "Company", name: "company", type: "text", placeholder: "Company name", required: true, colSize: 6 },
  { label: "Role", name: "role", type: "text", placeholder: "CTO, COO, Founder, Data Lead...", required: false, colSize: 6 },
  { label: "Website", name: "website", type: "url", placeholder: "https://company.com", required: false, colSize: 6 },
  {
    label: "What are you exploring?",
    name: "interest",
    type: "select",
    placeholder: "Select one",
    required: true,
    options: [
      "AI automation",
      "Software modernization",
      "Data engineering",
      "Product engineering",
      "Not sure yet",
    ],
  },
  {
    label: "Briefly describe the workflow, system, or data challenge",
    name: "message",
    type: "textarea",
    placeholder: "Tell us about the workflow, software system, or data challenge you want to review.",
    required: true,
    colSize: 12,
  },
  {
    label: "Preferred contact method",
    name: "preferred_contact_method",
    type: "select",
    placeholder: "Select one",
    required: false,
    colSize: 6,
    options: ["Email", "Phone", "WhatsApp", "LinkedIn"],
  },
];

const reviewAreas = [
  {
    icon: "bi-diagram-3",
    title: "Workflow Readiness",
    text: "Repeated tasks, handoffs, bottlenecks, decision points, and automation candidates.",
    tags: ["process", "ownership", "handoffs"],
  },
  {
    icon: "bi-database-check",
    title: "Data Readiness",
    text: "Data access, reliability, metric definitions, quality gaps, and reporting trust.",
    tags: ["quality", "access", "definitions"],
  },
  {
    icon: "bi-cpu",
    title: "System Readiness",
    text: "Existing software, integrations, cloud setup, constraints, and delivery risks.",
    tags: ["software", "APIs", "cloud"],
  },
];

const outcomeCards = [
  {
    icon: "bi-robot",
    title: "Know where AI should assist",
    text: "Separate deterministic steps, AI-assisted judgment calls, and human review points before building.",
    tags: ["AI automation", "guardrails", "handoff"],
  },
  {
    icon: "bi-code-square",
    title: "Avoid the wrong rebuild",
    text: "Understand whether the better path is refactor, API layer, phased migration, QA improvement, or a new build.",
    tags: ["modernization", "architecture", "scope"],
  },
  {
    icon: "bi-bar-chart-line",
    title: "Find trust gaps early",
    text: "Identify why dashboards, pipelines, or metrics are unreliable before adding another BI layer.",
    tags: ["data quality", "BI", "ownership"],
  },
];

const heroProofPoints = [
  "Workflow, data, and system readiness reviewed together",
  "One written recommendation for the safest first move",
  "No tool pitch, rebuild pressure, or commitment required",
];

const recommendationItems = [
  { label: "Priority opportunity", value: "Intake workflow and reporting cleanup", status: "High value" },
  { label: "Data readiness", value: "Usable with cleanup", status: "Medium" },
  { label: "System risk", value: "API dependency needs review", status: "Manageable" },
];

export default function FreeAIDataAuditPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={`custom-dev-page ara-page ${styles.auditPage}`}>
        <section className="hero-area style-three d-flex align-items-center">
          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            <div className="row hero align-items-center g-4">
              <div className="col-lg-6 col-md-12">
                <div className="hero-contant" style={{ paddingTop: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                    <div className="age-kicker-line" />
                    <div className="age-kicker-text">Free AI/Data Audit</div>
                  </div>

                  <h1 className="mb-4 d-block" style={{ fontSize: "clamp(34px, 4.4vw, 58px)", lineHeight: 1.08, maxWidth: "650px" }}>
                    Know what to automate, modernize, or fix first.
                  </h1>

                  <p className="subheadline text-white" style={{ fontSize: "18px", lineHeight: 1.65, maxWidth: "610px", marginBottom: "30px", color: "#d8deeb" }}>
                    MayuraSoft reviews your workflow, software, and data context, then gives you a practical recommendation before you commit budget to AI, dashboards, or a rebuild.
                  </p>

                  <div className="d-flex flex-wrap align-items-center gap-2 mb-4">
                    <div className="solutek-btn">
                      <Link href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn-2">
                        Book a Free AI/Data Audit &rarr;
                      </Link>
                    </div>
                    <div className="hero-btn-3">
                      <div className="hero-btn-profile">
                        <Link
                          href="/service"
                          onClick={(e) => {
                            e.currentTarget.blur();
                          }}
                          style={{ textDecoration: "none" }}
                        >
                          <div style={{ color: "#ff3c00", cursor: "pointer", fontSize: "16px", fontWeight: 600 }}>
                            Explore Services &rarr;
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "grid", gap: "10px", maxWidth: "600px" }}>
                    {heroProofPoints.map((point) => (
                      <div key={point} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "#cbd5e1" }}>
                        <div
                          style={{
                            width: "18px",
                            height: "18px",
                            borderRadius: "50%",
                            background: "rgba(255,60,0,0.16)",
                            color: "#ff8a5c",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "10px",
                            fontWeight: 700,
                            flexShrink: 0,
                            marginTop: "1px",
                          }}
                        >
                          ✓
                        </div>
                        {point}
                      </div>
                    ))}
                  </div>

                </div>
              </div>

              <div className="col-lg-6 col-md-12 mt-4 mt-lg-0">
                <div
                  style={{
                    maxWidth: "520px",
                    marginLeft: "auto",
                    background: "linear-gradient(145deg, rgba(255,255,255,0.09), rgba(255,255,255,0.035))",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    borderRadius: "18px",
                    padding: "26px",
                    boxShadow: "0 28px 70px rgba(0,0,0,0.35)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", alignItems: "flex-start", marginBottom: "24px" }}>
                    <div>
                      <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#a0a7b8", marginBottom: "8px" }}>
                        Sample audit output
                      </div>
                      <h2 style={{ margin: 0, color: "#fff", fontSize: "24px", lineHeight: 1.25 }}>
                        Recommendation brief
                      </h2>
                    </div>
                    <div style={{ padding: "6px 10px", borderRadius: "999px", background: "rgba(16,185,129,0.12)", color: "#6ee7b7", fontSize: "11px", fontWeight: 700 }}>
                      48 hrs
                    </div>
                  </div>

                  <div style={{ padding: "16px", borderRadius: "12px", background: "rgba(255,255,255,0.055)", border: "1px solid rgba(255,255,255,0.08)", marginBottom: "14px" }}>
                    <div style={{ fontSize: "12px", color: "#9aa4b8", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 700 }}>
                      Recommended first move
                    </div>
                    <div style={{ color: "#fff", fontSize: "19px", lineHeight: 1.35, fontWeight: 700 }}>
                      Simplify intake and reporting before rebuilding the full system.
                    </div>
                  </div>

                  <div style={{ display: "grid", gap: "10px" }}>
                    {recommendationItems.map((item) => (
                      <div key={item.label} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "14px", alignItems: "center", padding: "13px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                        <div>
                          <div style={{ fontSize: "11px", color: "#8e98ad", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 700 }}>
                            {item.label}
                          </div>
                          <div style={{ fontSize: "14px", color: "#e5e7eb", lineHeight: 1.4 }}>
                            {item.value}
                          </div>
                        </div>
                        <div style={{ fontSize: "11px", fontWeight: 700, color: "#ffb299", padding: "5px 8px", borderRadius: "999px", background: "rgba(255,60,0,0.12)", whiteSpace: "nowrap" }}>
                          {item.status}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      marginTop: "18px",
                      padding: "14px",
                      background: "rgba(255,255,255,0.045)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "10px",
                      fontSize: "12px",
                      color: "#cbd5e1",
                      lineHeight: 1.55,
                    }}
                  >
                    You leave with a written next-step recommendation based on your actual workflow, systems, data, and delivery constraints.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cd-section cd-section-light" id="audit-review">
          <div className="container">
            <div className="cd-problem-header">
              <span className="eyebrow">What we review</span>
              <h2>One audit across workflow, software, and data.</h2>
              <p>
                We look at the three areas that decide whether an AI, software, or data initiative will work in practice.
              </p>
            </div>

            <div className="row g-4">
              {reviewAreas.map((area) => (
                <div className="col-lg-4 col-md-6" key={area.title}>
                  <article className="cd-cap-card">
                    <div className="cd-cap-icon" style={{ background: "#fff1eb", color: "#ff3c00" }}>
                      <i className={`bi ${area.icon}`} />
                    </div>
                    <h3>{area.title}</h3>
                    <p>{area.text}</p>
                    <div className="cd-cap-tags">
                      {area.tags.map((tag) => (
                        <span className="cd-cap-tag" key={tag}>{tag}</span>
                      ))}
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FreeAIDataAuditProcess />

        <section className="cd-section cd-section-light">
          <div className="container">
            <div className="cd-problem-header">
              <span className="eyebrow">Best fit</span>
              <h2>Useful when your team needs to choose the right first move.</h2>
            </div>
            <div className="row g-4">
              {outcomeCards.map((card) => (
                <div className="col-lg-4 col-md-6" key={card.title}>
                  <article className="cd-cap-card">
                    <div className="cd-cap-icon" style={{ background: "#f3f4ff", color: "#534ab7" }}>
                      <i className={`bi ${card.icon}`} />
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                    <div className="cd-cap-tags">
                      {card.tags.map((tag) => (
                        <span className="cd-cap-tag" key={tag}>{tag}</span>
                      ))}
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBand
          title="Choose the right first move before committing build budget"
          description="Share your workflow, software, or data challenge. We will review the fit and return a practical recommendation you can act on."
          primaryBtn={{ text: "Book a Free AI/Data Audit →", dataCta: "cta-primary-free-ai-data-audit" }}
          secondaryBtn={{ variant: "link", text: "Explore Services", dataCta: "cta-secondary-free-ai-data-audit" }}
          trustText="Written recommendation · No commitment required · Built around your current systems"
          bgClass="bg-white border-top py-5"
          useModal={true}
          primaryModalTitle="Book a Free AI/Data Audit"
          primaryModalDescription="Tell us what you are trying to improve. MayuraSoft will review your workflow, software, data readiness, and delivery constraints before recommending the next step."
          primaryModalFields={auditFormFields}
          secondaryModalTitle="Ask About The Audit"
          secondaryModalDescription="Send us your question about the audit process, fit, or expected output."
          secondaryModalFields={auditFormFields}
          modalMetadata={{ service: "free-ai-data-audit", pageTitle: "Free AI/Data Audit" }}
        />
      </div>

      <DynamicFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Book a Free AI/Data Audit"
        description="Tell us what you are trying to improve. MayuraSoft will review your workflow, software, data readiness, and delivery constraints before recommending the next step."
        submitButtonText="Request Audit"
        fields={auditFormFields}
        metadata={{
          service: "free-ai-data-audit",
          pageTitle: "Free AI/Data Audit",
          source: "audit-page-hero",
        }}
      />
    </>
  );
}
