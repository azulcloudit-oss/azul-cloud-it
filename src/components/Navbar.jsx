import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const navLinks = [['Services', 'services'], ['Why Us', 'why-us'], ['About', 'about'], ['Contact', 'quote']]

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'all 0.3s ease',
        ...(scrolled || menuOpen ? {
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #E2E8F0',
          boxShadow: '0 1px 12px rgba(0,0,0,0.06)',
        } : { background: 'transparent' })
      }}>
        <div style={{
          maxWidth: '1120px', margin: '0 auto', padding: '0 20px',
          height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '34px', height: '34px', borderRadius: '9px', flexShrink: 0,
              background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M10 3L17 7V13L10 17L3 13V7L10 3Z" stroke="white" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
                <circle cx="10" cy="10" r="2.5" fill="white"/>
              </svg>
            </div>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '17px', color: '#0F172A', letterSpacing: '-0.3px' }}>
              Azul Cloud IT
            </span>
          </div>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-nav">
            <style>{`
              @media (max-width: 680px) { .desktop-nav { display: none !important; } .mobile-menu-btn { display: flex !important; } }
              @media (min-width: 681px) { .mobile-menu-btn { display: none !important; } .mobile-drawer { display: none !important; } }
            `}</style>
            {navLinks.map(([label, id]) => (
              <span key={id} style={{ fontSize: '14px', fontWeight: 500, color: '#475569', cursor: 'pointer' }}
                onClick={() => scrollTo(id)}
                onMouseEnter={e => e.target.style.color = '#2563EB'}
                onMouseLeave={e => e.target.style.color = '#475569'}
              >{label}</span>
            ))}
            <button style={{
              background: '#2563EB', color: '#fff', fontSize: '14px', fontWeight: 600,
              padding: '9px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer',
              fontFamily: "'Inter', sans-serif",
            }}
              onClick={() => scrollTo('quote')}
              onMouseEnter={e => e.currentTarget.style.background = '#1D4ED8'}
              onMouseLeave={e => e.currentTarget.style.background = '#2563EB'}
            >Get a quote</button>
          </div>

          {/* Hamburger */}
          <button className="mobile-menu-btn" onClick={() => setMenuOpen(o => !o)} style={{
            display: 'none', flexDirection: 'column', gap: '5px', background: 'none',
            border: 'none', cursor: 'pointer', padding: '4px',
          }}>
            <span style={{ display: 'block', width: '22px', height: '2px', background: '#334155', borderRadius: '2px', transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: '#334155', borderRadius: '2px', opacity: menuOpen ? 0 : 1, transition: 'all 0.2s' }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: '#334155', borderRadius: '2px', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile drawer */}
        <div className="mobile-drawer" style={{
          borderTop: '1px solid #E2E8F0',
          display: menuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          padding: '16px 20px 20px',
          gap: '4px',
          background: 'rgba(255,255,255,0.97)',
        }}>
          {navLinks.map(([label, id]) => (
            <span key={id} onClick={() => scrollTo(id)} style={{
              fontSize: '16px', fontWeight: 500, color: '#334155', padding: '12px 8px',
              borderBottom: '1px solid #F1F5F9', cursor: 'pointer',
            }}>{label}</span>
          ))}
          <button onClick={() => scrollTo('quote')} style={{
            marginTop: '12px', background: '#2563EB', color: '#fff', fontSize: '15px',
            fontWeight: 600, padding: '13px', borderRadius: '10px', border: 'none',
            cursor: 'pointer', fontFamily: "'Inter', sans-serif",
          }}>Get a quote</button>
        </div>
      </nav>
    </>
  )
}
