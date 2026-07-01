const styles = {
  section: {
    padding: '96px 24px',
    background: '#fff',
    borderTop: '1px solid #E2E8F0',
  },
  inner: {
    maxWidth: '1120px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '64px',
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
    maxWidth: '560px',
    margin: '0 auto',
    lineHeight: 1.65,
  },
  missionGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    marginBottom: '72px',
  },
  missionCard: {
    background: '#F8FAFC',
    border: '1px solid #E2E8F0',
    borderRadius: '16px',
    padding: '28px',
  },
  missionIcon: {
    width: '44px',
    height: '44px',
    borderRadius: '10px',
    background: '#EFF6FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '14px',
  },
  missionTitle: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '16px',
    fontWeight: 700,
    color: '#0F172A',
    marginBottom: '8px',
  },
  missionDesc: {
    fontSize: '14px',
    color: '#64748B',
    lineHeight: 1.65,
  },
  divider: {
    borderTop: '1px solid #E2E8F0',
    marginBottom: '72px',
  },
  founderLayout: {
    display: 'grid',
    gridTemplateColumns: '340px 1fr',
    gap: '56px',
    alignItems: 'start',
  },
  founderCard: {
    background: 'linear-gradient(160deg, #EFF6FF 0%, #DBEAFE 100%)',
    border: '1px solid #BFDBFE',
    borderRadius: '20px',
    padding: '32px',
    textAlign: 'center',
  },
  avatar: {
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    margin: '0 auto 16px',
    overflow: 'hidden',
    border: '4px solid #fff',
    boxShadow: '0 4px 20px rgba(37,99,235,0.2)',
  },
  avatarImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center top',
  },
  founderName: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '22px',
    fontWeight: 800,
    color: '#0F172A',
    marginBottom: '4px',
  },
  founderTitle: {
    fontSize: '14px',
    color: '#2563EB',
    fontWeight: 600,
    marginBottom: '20px',
  },
  certGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    textAlign: 'left',
  },
  cert: {
    background: 'rgba(255,255,255,0.7)',
    border: '1px solid #BFDBFE',
    borderRadius: '10px',
    padding: '10px 14px',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  certIssuer: {
    fontSize: '10px',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
  certName: {
    fontSize: '13px',
    color: '#1E3A8A',
    fontWeight: 600,
    lineHeight: 1.3,
  },
  founderBio: {},
  bioLabel: {
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#2563EB',
    marginBottom: '12px',
  },
  bioH3: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '28px',
    fontWeight: 800,
    color: '#0F172A',
    letterSpacing: '-0.5px',
    marginBottom: '16px',
    lineHeight: 1.2,
  },
  bioBody: {
    fontSize: '15px',
    color: '#475569',
    lineHeight: 1.75,
    marginBottom: '16px',
  },
  highlights: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
    marginTop: '24px',
  },
  highlight: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    background: '#F8FAFC',
    border: '1px solid #E2E8F0',
    borderRadius: '10px',
    padding: '14px',
  },
  highlightIcon: {
    flexShrink: 0,
    marginTop: '1px',
  },
  highlightText: {
    fontSize: '13px',
    color: '#334155',
    fontWeight: 500,
    lineHeight: 1.5,
  },
}

const mission = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2l8 4v6c0 5-3.5 9.7-8 11-4.5-1.3-8-6-8-11V6l8-4z" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M8 11l2 2 4-4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Our mission',
    desc: 'Make enterprise-grade Azure infrastructure and security accessible to growing businesses — without the enterprise price tag or the big-firm runaround.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="#2563EB" strokeWidth="1.5"/>
        <path d="M7 11l3 3 5-5" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Our approach',
    desc: 'Every engagement is led by a senior engineer — not delegated to a tier-1 help desk. We design, build, and operate alongside your team.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 7h16M3 11h10M3 15h7" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Our commitment',
    desc: 'Transparent pricing, documented runbooks, and knowledge transfer so you\'re never held hostage to a vendor. Your environment, your knowledge.',
  },
]

const certs = [
  { name: 'Azure Solutions Architect Expert', issuer: 'Microsoft', color: '#0078D4' },
  { name: 'Azure Administrator Associate', issuer: 'Microsoft', color: '#0078D4' },
  { name: 'Windows Server Hybrid Admin Associate', issuer: 'Microsoft', color: '#0078D4' },
  { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', color: '#FF9900' },
  { name: 'Security+ / Network+ / Server+ / A+', issuer: 'CompTIA', color: '#C8202F' },
]

const highlights = [
  { text: '7+ years in enterprise IT and cloud infrastructure' },
  { text: 'Microsoft Enterprise Partner collaboration' },
  { text: 'Multi-subscription Azure estate management' },
  { text: 'NIST, CMMC, PCI-DSS, HIPAA frameworks' },
  { text: 'Adjunct Professor — California Institute of Applied Technology' },
  { text: 'B.A. Computer Information Systems — Point Loma Nazarene University' },
]

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={styles.highlightIcon}>
      <circle cx="8" cy="8" r="7" fill="#EFF6FF"/>
      <path d="M5 8l2 2 4-4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function About() {
  return (
    <section id="about" style={styles.section} className="section-pad">
      <div style={styles.inner}>

        <div style={styles.header}>
          <p style={styles.label}>Our story</p>
          <h2 style={styles.h2}>Built from real engineering experience</h2>
          <p style={styles.sub}>
            Azul Cloud IT was founded by an engineer who spent years inside complex Azure environments —
            and wanted to bring that same depth of expertise to businesses that deserve better than generic IT support.
          </p>
        </div>

        <div style={styles.missionGrid} className="mission-grid">
          {mission.map(m => (
            <div key={m.title} style={styles.missionCard}>
              <div style={styles.missionIcon}>{m.icon}</div>
              <div style={styles.missionTitle}>{m.title}</div>
              <div style={styles.missionDesc}>{m.desc}</div>
            </div>
          ))}
        </div>

        <div style={styles.divider} />

        <div style={styles.founderLayout} className="founder-layout">
          <div style={styles.founderCard} className="founder-card-center">
            <div style={styles.avatar}>
              <img src="/anthony-fabian.jpg" alt="Anthony Fabian, CEO of Azul Cloud IT" style={styles.avatarImg} />
            </div>
            <div style={styles.founderName}>Anthony Fabian</div>
            <div style={styles.founderTitle}>CEO & Founder</div>
            <div style={styles.certGrid}>
              {certs.map(c => (
                <div key={c.name} style={styles.cert}>
                  <span style={{ ...styles.certIssuer, color: c.color }}>{c.issuer}</span>
                  <span style={styles.certName}>{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.founderBio}>
            <p style={styles.bioLabel}>Meet the founder</p>
            <h3 style={styles.bioH3}>Senior engineer.<br />Cloud architect.<br />Your direct point of contact.</h3>
            <p style={styles.bioBody}>
              Anthony Fabian is a Microsoft-certified Azure Solutions Architect Expert with 7+ years
              in IT and a deep focus on cloud architecture, infrastructure-as-code, automation, and
              security. He founded Azul Cloud IT to bring enterprise-level Azure expertise directly
              to growing businesses — without the layers of overhead that come with large MSPs.
            </p>
            <p style={styles.bioBody}>
              Anthony has operated multi-subscription, multi-customer Azure estates, collaborated
              directly with senior Microsoft engineers as a Microsoft Enterprise Partner, and built
              automated, repeatable cloud infrastructure from the ground up using Bicep, PowerShell,
              and Azure-native tooling. His security work spans Zero Standing Privilege architecture,
              FIDO2/YubiKey enforcement, Microsoft Sentinel, Defender XDR, and Global Secure Access —
              with compliance experience across NIST, CMMC, PCI-DSS, and HIPAA.
            </p>
            <p style={styles.bioBody}>
              When you work with Azul Cloud IT, you work directly with Anthony — not a ticketing
              system, not a junior technician. Every project is led and delivered by the same engineer
              who designed it.
            </p>

            <div style={styles.highlights} className="highlights-grid">
              {highlights.map(h => (
                <div key={h.text} style={styles.highlight}>
                  <CheckIcon />
                  <span style={styles.highlightText}>{h.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
