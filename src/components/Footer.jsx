const styles = {
  footer: {
    background: '#0F172A',
    color: '#94A3B8',
    padding: '48px 24px',
  },
  inner: {
    maxWidth: '1120px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '24px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logoMark: {
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  logoText: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 700,
    fontSize: '16px',
    color: '#F1F5F9',
  },
  copy: {
    fontSize: '13px',
    color: '#475569',
  },
  links: {
    display: 'flex',
    gap: '24px',
  },
  link: {
    fontSize: '13px',
    color: '#64748B',
    cursor: 'pointer',
    transition: 'color 0.2s',
  },
}

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.logo}>
          <div style={styles.logoMark}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M10 3L17 7V13L10 17L3 13V7L10 3Z" stroke="white" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
              <circle cx="10" cy="10" r="2.5" fill="white"/>
            </svg>
          </div>
          <span style={styles.logoText}>Azul Cloud IT</span>
        </div>

        <div style={styles.links}>
          {[['Services', 'services'], ['Why Us', 'why-us'], ['About', 'about'], ['Get a quote', 'quote']].map(([label, id]) => (
            <span
              key={id}
              style={styles.link}
              onClick={() => scrollTo(id)}
              onMouseEnter={e => e.target.style.color = '#93C5FD'}
              onMouseLeave={e => e.target.style.color = '#64748B'}
            >
              {label}
            </span>
          ))}
        </div>

        <span style={styles.copy}>
          © {new Date().getFullYear()} Azul Cloud IT. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
