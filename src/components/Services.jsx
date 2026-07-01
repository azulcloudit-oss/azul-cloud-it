const styles = {
  section: {
    padding: '96px 24px',
    background: '#fff',
  },
  inner: {
    maxWidth: '1120px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '56px',
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
    fontSize: 'clamp(28px, 4vw, 40px)',
    fontWeight: 800,
    color: '#0F172A',
    letterSpacing: '-0.8px',
    marginBottom: '14px',
  },
  sub: {
    fontSize: '17px',
    color: '#64748B',
    maxWidth: '520px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  card: {
    background: '#F8FAFC',
    border: '1px solid #E2E8F0',
    borderRadius: '16px',
    padding: '28px',
    transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
    cursor: 'default',
  },
  iconWrap: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    background: '#EFF6FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '18px',
  },
  cardTitle: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '17px',
    fontWeight: 700,
    color: '#0F172A',
    marginBottom: '8px',
  },
  cardDesc: {
    fontSize: '14px',
    color: '#64748B',
    lineHeight: 1.65,
    marginBottom: '18px',
  },
  bullets: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  bullet: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    fontSize: '13px',
    color: '#475569',
  },
  check: {
    flexShrink: 0,
    marginTop: '2px',
    color: '#3B82F6',
  },
}

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 22V12h6v10" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Azure Infrastructure',
    desc: 'Design, deploy, and manage scalable Azure environments built for reliability and cost efficiency.',
    points: ['Virtual machines & IaaS', 'VNet design & peering', 'Azure Bastion & VPN gateways', 'Cost optimization & tagging'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#2563EB" strokeWidth="1.5"/>
        <path d="M8 21h8M12 17v4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Microsoft 365',
    desc: 'Full lifecycle Microsoft 365 management — from tenant setup to ongoing administration and support.',
    points: ['Exchange & Teams admin', 'SharePoint & OneDrive', 'License management', 'Migration & onboarding'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="#2563EB" strokeWidth="1.5"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Entra ID & Identity',
    desc: 'Secure your organization with modern identity, conditional access, and privileged access management.',
    points: ['Conditional Access policies', 'Zero Standing Privilege / PIM', 'MFA & FIDO2 / YubiKey', 'B2B guest access'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l8 4v6c0 5-3.5 9.7-8 11-4.5-1.3-8-6-8-11V6l8-4z" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Security & Compliance',
    desc: 'Proactive threat detection, hardening, and compliance posture management across your environment.',
    points: ['Defender for Cloud / Endpoint', 'Global Secure Access (ZTNA)', 'Network scanning & alerting', 'Vulnerability management'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="#2563EB" strokeWidth="1.5"/>
        <path d="M12 18h.01" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Device Management',
    desc: 'Manage and secure your fleet of Windows and mobile devices with Microsoft Intune.',
    points: ['Intune enrollment & policies', 'Autopilot provisioning', 'Compliance & app deployment', 'Remote help & support'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="7" rx="9" ry="4" stroke="#2563EB" strokeWidth="1.5"/>
        <path d="M3 7v5c0 2.2 4 4 9 4s9-1.8 9-4V7" stroke="#2563EB" strokeWidth="1.5"/>
        <path d="M3 12v5c0 2.2 4 4 9 4s9-1.8 9-4v-5" stroke="#2563EB" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'SQL & Data Services',
    desc: 'SQL Server management, replication, and hybrid data architecture for business-critical workloads.',
    points: ['SQL Server administration', 'Transactional replication', 'Availability Groups / WSFC', 'Backup & disaster recovery'],
  },
]

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={styles.check}>
      <path d="M2.5 7l3 3 6-6" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Services() {
  return (
    <section id="services" style={styles.section}>
      <div style={styles.inner}>
        <div style={styles.header}>
          <p style={styles.label}>What we do</p>
          <h2 style={styles.h2}>Services built for modern IT</h2>
          <p style={styles.sub}>
            End-to-end Azure and Microsoft cloud services, delivered by engineers who live in the stack.
          </p>
        </div>

        <div style={styles.grid}>
          {services.map((s) => (
            <div
              key={s.title}
              style={styles.card}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#93C5FD'
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(59,130,246,0.1)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#E2E8F0'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={styles.iconWrap}>{s.icon}</div>
              <h3 style={styles.cardTitle}>{s.title}</h3>
              <p style={styles.cardDesc}>{s.desc}</p>
              <ul style={styles.bullets}>
                {s.points.map(p => (
                  <li key={p} style={styles.bullet}>
                    <CheckIcon />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
