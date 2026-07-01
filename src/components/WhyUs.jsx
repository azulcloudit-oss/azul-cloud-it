const styles = {
  section: {
    padding: '96px 24px',
    background: 'linear-gradient(160deg, #EFF6FF 0%, #F8FAFC 100%)',
    borderTop: '1px solid #E2E8F0',
    borderBottom: '1px solid #E2E8F0',
  },
  inner: {
    maxWidth: '1120px',
    margin: '0 auto',
  },
  layout: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '64px',
    alignItems: 'center',
  },
  label: {
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#2563EB',
    marginBottom: '12px',
  },
  h2: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 'clamp(28px, 3.5vw, 38px)',
    fontWeight: 800,
    color: '#0F172A',
    letterSpacing: '-0.8px',
    lineHeight: 1.2,
    marginBottom: '16px',
  },
  body: {
    fontSize: '16px',
    color: '#64748B',
    lineHeight: 1.7,
    marginBottom: '32px',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  },
  stat: {
    background: '#fff',
    border: '1px solid #E2E8F0',
    borderRadius: '12px',
    padding: '20px',
  },
  statNum: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '32px',
    fontWeight: 800,
    color: '#2563EB',
    lineHeight: 1,
    marginBottom: '4px',
  },
  statLabel: {
    fontSize: '13px',
    color: '#64748B',
    fontWeight: 500,
  },
  reasons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  reason: {
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
  },
  reasonIcon: {
    width: '44px',
    height: '44px',
    borderRadius: '10px',
    background: '#EFF6FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  reasonTitle: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '16px',
    fontWeight: 700,
    color: '#0F172A',
    marginBottom: '4px',
  },
  reasonDesc: {
    fontSize: '14px',
    color: '#64748B',
    lineHeight: 1.6,
  },
}

const stats = [
  { num: '99.9%', label: 'Azure uptime target' },
  { num: '<4hr', label: 'Initial response time' },
  { num: '100%', label: 'Certified engineers' },
  { num: '24/7', label: 'Monitoring coverage' },
]

const reasons = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2l2.9 5.9L20 9l-4.5 4.4 1.1 6.4L11 17l-5.6 2.8 1.1-6.4L2 9l6.1-1.1L11 2z" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Azure-native expertise',
    desc: 'We design and operate inside Azure daily — from IaaS to identity to security — not generalist IT consultants.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 11l5 5 9-9" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="11" cy="11" r="9" stroke="#2563EB" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Transparent, flat-rate pricing',
    desc: 'No surprise invoices. We quote your scope upfront and deliver against it — no hourly billing gotchas.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="16" height="16" rx="3" stroke="#2563EB" strokeWidth="1.5"/>
        <path d="M7 11l3 3 5-5" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Security-first approach',
    desc: 'Zero Standing Privilege, conditional access, and ZTNA principles baked into every engagement by default.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="#2563EB" strokeWidth="1.5"/>
        <path d="M11 6v5l3 3" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Fast, clear communication',
    desc: 'You get a direct line to your engineer — no ticket queues, no offshore hand-offs, no runaround.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" style={styles.section} className="section-pad">
      <div style={styles.inner}>
        <div style={styles.layout} className="two-col-layout">
          <div>
            <p style={styles.label}>Why Azul Cloud IT</p>
            <h2 style={styles.h2}>Built by engineers,<br />for engineers.</h2>
            <p style={styles.body}>
              We're not a call center. Azul Cloud IT is a boutique managed services practice run by
              infrastructure and cloud engineers who have operated large-scale Azure environments.
              That experience comes standard with every engagement.
            </p>
            <div style={styles.statsGrid} className="stats-grid">
              {stats.map(s => (
                <div key={s.label} style={styles.stat}>
                  <div style={styles.statNum}>{s.num}</div>
                  <div style={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.reasons}>
            {reasons.map(r => (
              <div key={r.title} style={styles.reason}>
                <div style={styles.reasonIcon}>{r.icon}</div>
                <div>
                  <div style={styles.reasonTitle}>{r.title}</div>
                  <div style={styles.reasonDesc}>{r.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
