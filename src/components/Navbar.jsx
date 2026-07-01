import { useState, useEffect } from 'react'

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    transition: 'all 0.3s ease',
  },
  navScrolled: {
    background: 'rgba(255,255,255,0.95)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid #E2E8F0',
    boxShadow: '0 1px 12px rgba(0,0,0,0.06)',
  },
  navTop: {
    background: 'transparent',
  },
  inner: {
    maxWidth: '1120px',
    margin: '0 auto',
    padding: '0 24px',
    height: '68px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logoMark: {
    width: '36px',
    height: '36px',
    borderRadius: '10px',
    background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  logoText: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 700,
    fontSize: '18px',
    color: '#0F172A',
    letterSpacing: '-0.3px',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
  },
  link: {
    fontSize: '14px',
    fontWeight: 500,
    color: '#475569',
    cursor: 'pointer',
    transition: 'color 0.2s',
  },
  cta: {
    background: '#2563EB',
    color: '#fff',
    fontSize: '14px',
    fontWeight: 600,
    padding: '9px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background 0.2s, transform 0.1s',
    border: 'none',
    fontFamily: "'Inter', sans-serif",
  },
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : styles.navTop) }}>
      <div style={styles.inner}>
        <div style={styles.logo}>
          <div style={styles.logoMark}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 3L17 7V13L10 17L3 13V7L10 3Z" stroke="white" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
              <circle cx="10" cy="10" r="2.5" fill="white"/>
            </svg>
          </div>
          <span style={styles.logoText}>Azul Cloud IT</span>
        </div>

        <div style={styles.links}>
          {[['Services', 'services'], ['Why Us', 'why-us'], ['About', 'about'], ['Contact', 'quote']].map(([label, id]) => (
            <span
              key={id}
              style={styles.link}
              onClick={() => scrollTo(id)}
              onMouseEnter={e => e.target.style.color = '#2563EB'}
              onMouseLeave={e => e.target.style.color = '#475569'}
            >
              {label}
            </span>
          ))}
          <button
            style={styles.cta}
            onClick={() => scrollTo('quote')}
            onMouseEnter={e => e.currentTarget.style.background = '#1D4ED8'}
            onMouseLeave={e => e.currentTarget.style.background = '#2563EB'}
          >
            Get a quote
          </button>
        </div>
      </div>
    </nav>
  )
}
