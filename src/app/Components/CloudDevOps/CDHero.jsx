'use client';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import DynamicFormModal from '../Common/DynamicFormModal';

const defaultFormFields = [
  {
    label: 'Full Name',
    name: 'name',
    type: 'text',
    placeholder: 'John Smith',
    required: true,
    colSize: 6
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'john@company.com',
    required: true,
    colSize: 6
  },
  {
    label: 'Subject',
    name: 'subject',
    type: 'text',
    placeholder: 'Your Subject Here',
    required: true,
    colSize: 6
  },
  {
    label: 'Phone',
    name: 'phone',
    type: 'tel',
    placeholder: '+1 (555) 000-0000',
    required: true,
    colSize: 6
  },
  {
    label: 'Message',
    name: 'message',
    type: 'textarea',
    placeholder: 'Tell us more about your project...',
    required: false,
    colSize: 12
  },
];

const TAGS = [
  'Cloud migration',
  'Kubernetes & containers',
  'CI/CD pipelines',
  'Infrastructure as code',
  'Cost optimisation',
  'SRE & monitoring',
];

// ── Timing (ms) ──────────────────────────────────────────────
const T = {
  char: 48,
  out: 105,
  preOut: 360,
  step: 480,
  loop: 2400,
};

// ── Terminal scripts ──────────────────────────────────────────
const SCRIPT = [
  {
    cmd: 'terraform apply',
    out: [
      { k: 's', t: 'terraform apply completed' },
      { k: 'parts', parts: [['tc-cyan', '│'], ['tc-gray', ' Apply complete! Resources: '], ['tc-yellow', '12 added'], ['tc-gray', ', 0 changed']] },
    ],
  },
  {
    cmd: 'kubectl get pods -n production',
    out: [
      { k: 'plain', cls: 'tc-gray', t: 'NAME              STATUS   READY' },
      { k: 'plain', cls: 'tc-green', t: 'api-deployment    Running  3/3' },
      { k: 'plain', cls: 'tc-green', t: 'web-deployment    Running  2/2' },
      { k: 'plain', cls: 'tc-green', t: 'worker-7x9kp      Running  1/1' },
    ],
  },
  {
    cmd: 'gh workflow run deploy.yml',
    out: [
      { k: 'parts', parts: [['tc-cyan', '▸'], ['tc-gray', ' Triggered '], ['tc-yellow', 'deploy.yml'], ['tc-gray', ' on main']] },
      { k: 's', t: 'Build passed · 2m 14s' },
      { k: 's', t: 'Tests passed · 138/138' },
      { k: 's', t: 'Deploy to production · 0 downtime' },
    ],
  },
  {
    cmd: 'terraform plan -out=tfplan',
    out: [
      { k: 'parts', parts: [['tc-cyan', '│'], ['tc-gray', ' Refreshing state… done']] },
      { k: 's', t: 'Plan: 4 to add, 1 to change, 0 to destroy' },
    ],
  },
  {
    cmd: 'kubectl rollout status deploy/api',
    out: [
      { k: 's', t: 'deployment "api-deployment" successfully rolled out' },
    ],
  },
];

const SCRIPT_2 = [
  {
    cmd: 'kubectl top pods -n prod',
    out: [
      { k: 'plain', cls: 'tc-gray', t: 'NAME         CPU   MEMORY' },
      { k: 'parts', parts: [['tc-green', 'api  '], ['tc-yellow', '45m  '], ['tc-cyan', '312Mi']] },
      { k: 'parts', parts: [['tc-green', 'web  '], ['tc-yellow', '12m  '], ['tc-cyan', '128Mi']] },
      { k: 'parts', parts: [['tc-green', 'wrk  '], ['tc-yellow', ' 8m  '], ['tc-cyan', ' 64Mi']] },
    ],
  },
  {
    cmd: 'helm upgrade monitoring .',
    out: [
      { k: 's', t: 'Prometheus: running' },
      { k: 's', t: 'Grafana: dashboards ready' },
      { k: 's', t: 'Alertmanager: configured' },
    ],
  },
  {
    cmd: 'aws ce get-cost-and-usage',
    out: [
      { k: 'parts', parts: [['tc-cyan', '▸'], ['tc-gray', ' spend: '], ['tc-green', '$1,847'], ['tc-gray', ' / $2,200']] },
      { k: 's', t: 'Savings vs last month: 23%' },
    ],
  },
];

// ── Deploy log table rows ─────────────────────────────────────
const DEPLOY_LOGS = [
  { id: 1, pipeline: 'deploy-prod', branch: 'main', status: 'pass', time: '14:32', dur: '2m 14s' },
  { id: 2, pipeline: 'build-test', branch: 'feat/auth', status: 'pass', time: '13:21', dur: '1m 08s' },
  { id: 3, pipeline: 'deploy-staging', branch: 'develop', status: 'pass', time: '12:45', dur: '3m 22s' },
  { id: 4, pipeline: 'security-scan', branch: 'main', status: 'pass', time: '11:30', dur: '0m 47s' },
  { id: 5, pipeline: 'infra-plan', branch: 'infra/k8s', status: 'warn', time: '10:58', dur: '4m 01s' },
];

// ── Line renderer ─────────────────────────────────────────────
function renderLine(line) {
  if (line.k === 's') {
    return (
      <div className="cd-tl">
        <span className="tc-green">✓</span>
        <span className="tc-gray">{' ' + line.t}</span>
      </div>
    );
  }
  if (line.k === 'plain') {
    return <div className={`cd-tl ${line.cls}`}>{line.t}</div>;
  }
  if (line.k === 'parts') {
    return (
      <div className="cd-tl">
        {line.parts.map(([cls, text], i) => (
          <span key={i} className={cls}>{text}</span>
        ))}
      </div>
    );
  }
  return <div className="cd-tl">&nbsp;</div>;
}

// ── Reusable animated terminal ────────────────────────────────
function AnimatedTerminal({ script, bodyClass = 'cd-term-body-sm', delay = 0 }) {
  const [lines, setLines] = useState([]);
  const [typing, setTyping] = useState(null);
  const bodyRef = useRef(null);
  const cancelRef = useRef(false);
  const idRef = useRef(0);

  const nid = () => ++idRef.current;

  useEffect(() => {
    cancelRef.current = false;
    let tid;
    const wait = (ms) => new Promise(res => { tid = setTimeout(res, ms); });

    async function run() {
      if (delay) await wait(delay);

      while (!cancelRef.current) {
        let committed = [];
        setLines([]);
        setTyping(null);

        for (const step of script) {
          if (cancelRef.current) return;

          for (let len = 1; len <= step.cmd.length; len++) {
            if (cancelRef.current) return;
            setTyping({ text: step.cmd, len });
            await wait(T.char);
          }

          await wait(T.preOut);
          if (cancelRef.current) return;

          const cmdEntry = {
            id: nid(),
            node: (
              <div className="cd-tl">
                <span className="tc-blue">$</span>
                <span className="tc-white"> {step.cmd}</span>
              </div>
            ),
          };
          committed = [...committed, cmdEntry];
          setLines([...committed]);
          setTyping(null);

          for (const outLine of step.out) {
            if (cancelRef.current) return;
            await wait(T.out);
            committed = [...committed, { id: nid(), node: renderLine(outLine) }];
            setLines([...committed]);
          }

          await wait(T.step / 2);
          if (cancelRef.current) return;
          committed = [...committed, { id: nid(), node: <div className="cd-tl">&nbsp;</div> }];
          setLines([...committed]);
          await wait(T.step / 2);
        }

        await wait(T.loop);
      }
    }

    run();
    return () => {
      cancelRef.current = true;
      clearTimeout(tid);
    };
  }, []);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines, typing]);

  return (
    <div className={bodyClass} ref={bodyRef}>
      {lines.map(({ id, node }) => (
        <React.Fragment key={id}>{node}</React.Fragment>
      ))}
      {typing ? (
        <div className="cd-tl">
          <span className="tc-blue">$</span>
          <span className="tc-white"> {typing.text.slice(0, typing.len)}</span>
          <span className="cd-cursor"></span>
        </div>
      ) : (
        <div className="cd-tl">
          <span className="tc-blue">$</span>
          <span> </span>
          <span className="cd-cursor"></span>
        </div>
      )}
    </div>
  );
}

// ── Animated deploy log table ─────────────────────────────────
function DeployTable() {
  const [visibleRows, setVisibleRows] = useState(0);
  const cancelRef = useRef(false);

  useEffect(() => {
    cancelRef.current = false;

    async function run() {
      await new Promise(r => setTimeout(r, 900));

      while (!cancelRef.current) {
        setVisibleRows(0);
        await new Promise(r => setTimeout(r, 400));

        for (let i = 1; i <= DEPLOY_LOGS.length; i++) {
          if (cancelRef.current) return;
          setVisibleRows(i);
          await new Promise(r => setTimeout(r, 380));
        }

        await new Promise(r => setTimeout(r, 5200));
      }
    }

    run();
    return () => { cancelRef.current = true; };
  }, []);

  return (
    <div className="cd-log-table-wrap">
      <div className="cd-log-table-header">
        <span>PIPELINE</span>
        <span>BRANCH</span>
        <span>STATUS</span>
        <span>TIME</span>
        <span>DUR</span>
      </div>
      {DEPLOY_LOGS.slice(0, visibleRows).map((row) => (
        <div key={row.id} className="cd-log-row">
          <span className="tc-white">{row.pipeline}</span>
          <span className="tc-cyan">{row.branch}</span>
          <span className={row.status === 'pass' ? 'tc-green' : 'tc-yellow'}>
            {row.status === 'pass' ? '✓ pass' : '⚠ warn'}
          </span>
          <span className="tc-gray">{row.time}</span>
          <span className="tc-gray">{row.dur}</span>
        </div>
      ))}
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────
export default function CDHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="cd-hero-split">

      {/* ── LEFT: Terminals + table ── */}
      <div className="cd-hero-left">
        <div className="cd-terminal-fullpane pt-5 mt-5">

          {/* Primary terminal */}
          <div className="cd-term-pane-main">
            <div className="cd-term-pane-label">$ pipeline · production</div>
            <AnimatedTerminal script={SCRIPT} bodyClass="cd-term-body-main" />
          </div>

          {/* Bottom row: monitoring terminal + deploy log table */}
          <div className="cd-term-pane-bottom">
            <div className="cd-term-pane-secondary">
              <div className="cd-term-pane-label">$ monitoring · live</div>
              <AnimatedTerminal script={SCRIPT_2} bodyClass="cd-term-body-sm" delay={1400} />
            </div>
            <div className="cd-term-pane-table">
              <div className="cd-term-pane-label">▸ deploy.log</div>
              <DeployTable />
            </div>
          </div>

        </div>
      </div>

      {/* ── RIGHT: Content ── */}
      <div className="cd-hero-right">
        <div className="cd-hero-content">

          <div className="cd-eyebrow-pill">
            <span className="cd-eyebrow-dot"></span>
            $ cloud --provider=any --risk=zero
          </div>

          <h1 className="cd-hero-heading">
            Infrastructure that ships faster, fails&nbsp;less, and costs less to&nbsp;run
          </h1>

          <p className="cd-hero-sub">
            MayuraSoft designs, builds, and manages cloud infrastructure and CI/CD pipelines — so your engineering team deploys with confidence every single day, not once a quarter.
          </p>

          <div className="cd-hero-tags">
            {TAGS.map(tag => (
              <span key={tag} className="cd-hero-tag">{tag}</span>
            ))}
          </div>

          <div className="cd-hero-ctas">
            {/* <Link href="/free-audit?service=cloud-devops" className="cd-cta-primary" data-cta="hero-primary"> */}
            <Link href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="cd-cta-primary" data-cta="hero-primary">
              Get a free cloud audit &rarr;
            </Link>
            <button
              className="cd-cta-ghost"
              onClick={() => document.getElementById('cd-architecture')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See our stack
            </button>
          </div>

        </div>

      </div>

      <DynamicFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get a Free Cloud Audit"
        description="Fill out the form below and we'll get back to you shortly."
        submitButtonText="Submit"
        fields={defaultFormFields}
        metadata={{ service: 'cloud-devops', pageTitle: 'Cloud DevOps' }}
      />
    </section>

  );
}
