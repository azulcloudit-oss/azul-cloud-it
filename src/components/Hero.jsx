const styles = {
  section: {
    background: 'linear-gradient(160deg, #EFF6FF 0%, #DBEAFE 40%, #F8FAFC 100%)',
    paddingTop: '140px',
    paddingBottom: '96px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  grid: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)
    `,
    backgroundSize: '48px 48px',
    pointerEvents: 'none',
  },
  inner: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative',
    zIndex: 1,
  },
  eyebrow: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '7px',
    background: 'rgba(37,99,235,0.1)',
    color: '#1D4ED8',
    fontSize: '13px',
    fontWeight: 600,
    padding: '5px 14px',
    borderRadius: '100px',
    marginBottom: '24px',
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
  },
  dot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#3B82F6',
    animation: 'pulse 2s infinite',
  },
  h1: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 'clamp(40px, 6vw, 62px)',
    fontWeight: 800,
    color: '#0F172A',
    letterSpacing: '-1.5px',
    lineHeight: 1.1,
    marginBottom: '20px',
  },
  accent: {
    color: '#2563EB',
  },
  sub: {
    fontSize: '18px',
    color: '#475569',
    lineHeight: 1.65,
    maxWidth: '580px',
    margin: '0 auto 36px',
    fontWeight: 400,
  },
  actions: {
    display: 'flex',
    gap: '14px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '60px',
  },
  btnPrimary: {
    background: '#2563EB',
    color: '#fff',
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    fontSize: '15px',
    padding: '13px 28px',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.2s, transform 0.1s',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  btnSecondary: {
    background: '#fff',
    color: '#334155',
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    fontSize: '15px',
    padding: '13px 28px',
    borderRadius: '10px',
    border: '1.5px solid #CBD5E1',
    cursor: 'pointer',
    transition: 'border-color 0.2s, background 0.2s',
  },
  badges: {
    display: 'flex',
    gap: '28px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  badge: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#475569',
    fontSize: '14px',
    fontWeight: 500,
  },
  badgeIcon: {
    width: '20px',
    height: '20px',
    color: '#3B82F6',
    flexShrink: 0,
  },
}

const checks = [
  'Microsoft-certified engineers',
  'Azure-native infrastructure',
  'Response within 4 hours',
]

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section style={styles.section} className="hero-pad">
      <div style={styles.grid} />
      <div style={styles.inner}>
        <div style={styles.eyebrow}>
          <span style={styles.dot} />
          Azure Managed Services
        </div>

        <h1 style={styles.h1}>
          Your cloud,<br />
          <span style={styles.accent}>expertly managed.</span>
        </h1>

        <p style={styles.sub}>
          Azul Cloud IT delivers hands-on Azure infrastructure, Microsoft 365, Entra ID,
          device management, and security services — so your team can focus on what matters.
        </p>

        <div style={styles.actions}>
          <button
            style={styles.btnPrimary}
            onClick={() => scrollTo('quote')}
            onMouseEnter={e => e.currentTarget.style.background = '#1D4ED8'}
            onMouseLeave={e => e.currentTarget.style.background = '#2563EB'}
          >
            Request a quote
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            style={styles.btnSecondary}
            onClick={() => scrollTo('services')}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#3B82F6'; e.currentTarget.style.background = '#F8FAFF' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#CBD5E1'; e.currentTarget.style.background = '#fff' }}
          >
            Explore services
          </button>
        </div>

        <div style={styles.badges} className="badges-row">
          {checks.map(text => (
            <div key={text} style={styles.badge}>
              <svg style={styles.badgeIcon} viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="#3B82F6" strokeWidth="1.5"/>
                <path d="M6.5 10l2.5 2.5 4-5" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
