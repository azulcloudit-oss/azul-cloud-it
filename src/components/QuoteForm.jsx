import { useState } from 'react'

const styles = {
  section: {
    padding: '96px 24px',
    background: '#fff',
  },
  inner: {
    maxWidth: '680px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '48px',
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
    fontSize: 'clamp(28px, 4vw, 38px)',
    fontWeight: 800,
    color: '#0F172A',
    letterSpacing: '-0.8px',
    marginBottom: '12px',
  },
  sub: {
    fontSize: '16px',
    color: '#64748B',
    lineHeight: 1.6,
  },
  card: {
    background: '#F8FAFC',
    border: '1px solid #E2E8F0',
    borderRadius: '20px',
    padding: '40px',
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  },
  field: {
    marginBottom: '20px',
  },
  fieldFull: {
    marginBottom: '20px',
  },
  fieldLabel: {
    display: 'block',
    fontSize: '13px',
    fontWeight: 600,
    color: '#374151',
    marginBottom: '6px',
    letterSpacing: '0.01em',
  },
  input: {
    width: '100%',
    padding: '11px 14px',
    border: '1.5px solid #E2E8F0',
    borderRadius: '8px',
    fontSize: '15px',
    color: '#0F172A',
    background: '#fff',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxSizing: 'border-box',
  },
  select: {
    width: '100%',
    padding: '11px 14px',
    border: '1.5px solid #E2E8F0',
    borderRadius: '8px',
    fontSize: '15px',
    color: '#0F172A',
    background: '#fff',
    outline: 'none',
    transition: 'border-color 0.2s',
    appearance: 'none',
    cursor: 'pointer',
    boxSizing: 'border-box',
  },
  textarea: {
    width: '100%',
    padding: '11px 14px',
    border: '1.5px solid #E2E8F0',
    borderRadius: '8px',
    fontSize: '15px',
    color: '#0F172A',
    background: '#fff',
    outline: 'none',
    resize: 'vertical',
    minHeight: '120px',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxSizing: 'border-box',
    fontFamily: "'Inter', sans-serif",
  },
  submit: {
    width: '100%',
    background: '#2563EB',
    color: '#fff',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 700,
    fontSize: '16px',
    padding: '14px',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.2s, transform 0.1s',
    marginTop: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  },
  success: {
    textAlign: 'center',
    padding: '48px 24px',
  },
  successIcon: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    background: '#EFF6FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px',
  },
  successTitle: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '24px',
    fontWeight: 800,
    color: '#0F172A',
    marginBottom: '10px',
  },
  successBody: {
    fontSize: '15px',
    color: '#64748B',
    lineHeight: 1.6,
  },
  note: {
    fontSize: '12px',
    color: '#94A3B8',
    textAlign: 'center',
    marginTop: '16px',
  },
  error: {
    color: '#DC2626',
    fontSize: '13px',
    marginTop: '12px',
    textAlign: 'center',
  },
}

const focusStyle = 'border-color: #3B82F6; box-shadow: 0 0 0 3px rgba(59,130,246,0.12);'

const services = [
  'Azure Infrastructure & IaaS',
  'Microsoft 365 Administration',
  'Entra ID & Identity Management',
  'Security & Zero Trust',
  'Device Management (Intune)',
  'SQL Server & Data Services',
  'Full Managed IT (All services)',
  'Other / Not sure yet',
]

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '',
    service: '', size: '', description: '',
  })
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
          subject: `New MSP quote request — ${form.company || form.name}`,
          from_name: 'Azul Cloud IT Website',
          ...form,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
      } else {
        throw new Error(data.message || 'Submission failed')
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg('Something went wrong. Please email us directly at hello@azulcloudit.com')
    }
  }

  const inputFocus = (e) => {
    e.target.style.borderColor = '#3B82F6'
    e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.12)'
  }
  const inputBlur = (e) => {
    e.target.style.borderColor = '#E2E8F0'
    e.target.style.boxShadow = 'none'
  }

  return (
    <section id="quote" style={styles.section}>
      <div style={styles.inner}>
        <div style={styles.header}>
          <p style={styles.label}>Get started</p>
          <h2 style={styles.h2}>Request a quote</h2>
          <p style={styles.sub}>
            Tell us about your environment and what you need. We'll follow up within one business day.
          </p>
        </div>

        <div style={styles.card} className="quote-card">
          {status === 'success' ? (
            <div style={styles.success}>
              <div style={styles.successIcon}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M7 16l6 6 12-12" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div style={styles.successTitle}>Request received!</div>
              <p style={styles.successBody}>
                Thanks for reaching out. We'll review your request and get back to you
                within one business day to discuss next steps.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={styles.row} className="form-row">
                <div style={styles.field}>
                  <label style={styles.fieldLabel}>Your name *</label>
                  <input
                    required
                    style={styles.input}
                    placeholder="Anthony Fabian"
                    value={form.name}
                    onChange={set('name')}
                    onFocus={inputFocus}
                    onBlur={inputBlur}
                  />
                </div>
                <div style={styles.field}>
                  <label style={styles.fieldLabel}>Company</label>
                  <input
                    style={styles.input}
                    placeholder="Acme Corp"
                    value={form.company}
                    onChange={set('company')}
                    onFocus={inputFocus}
                    onBlur={inputBlur}
                  />
                </div>
              </div>

              <div style={styles.row} className="form-row">
                <div style={styles.field}>
                  <label style={styles.fieldLabel}>Email address *</label>
                  <input
                    required
                    type="email"
                    style={styles.input}
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={set('email')}
                    onFocus={inputFocus}
                    onBlur={inputBlur}
                  />
                </div>
                <div style={styles.field}>
                  <label style={styles.fieldLabel}>Phone number</label>
                  <input
                    style={styles.input}
                    placeholder="(619) 555-0100"
                    value={form.phone}
                    onChange={set('phone')}
                    onFocus={inputFocus}
                    onBlur={inputBlur}
                  />
                </div>
              </div>

              <div style={styles.row} className="form-row">
                <div style={styles.field}>
                  <label style={styles.fieldLabel}>Service needed *</label>
                  <select
                    required
                    style={styles.select}
                    value={form.service}
                    onChange={set('service')}
                    onFocus={e => e.target.style.borderColor = '#3B82F6'}
                    onBlur={e => e.target.style.borderColor = '#E2E8F0'}
                  >
                    <option value="">Select a service</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div style={styles.field}>
                  <label style={styles.fieldLabel}>Company size</label>
                  <select
                    style={styles.select}
                    value={form.size}
                    onChange={set('size')}
                    onFocus={e => e.target.style.borderColor = '#3B82F6'}
                    onBlur={e => e.target.style.borderColor = '#E2E8F0'}
                  >
                    <option value="">Select range</option>
                    <option>1–10 employees</option>
                    <option>11–50 employees</option>
                    <option>51–250 employees</option>
                    <option>250+ employees</option>
                  </select>
                </div>
              </div>

              <div style={styles.fieldFull}>
                <label style={styles.fieldLabel}>Describe your environment and needs *</label>
                <textarea
                  required
                  style={styles.textarea}
                  placeholder="Tell us about your current setup, pain points, or what you'd like help with..."
                  value={form.description}
                  onChange={set('description')}
                  onFocus={inputFocus}
                  onBlur={inputBlur}
                />
              </div>

              {/* Honeypot — hidden from real users, bots fill it and get rejected */}
              <input
                type="text"
                name="botcheck"
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
              />

              {errorMsg && <div style={styles.error}>{errorMsg}</div>}

              <button
                type="submit"
                disabled={status === 'loading'}
                style={{ ...styles.submit, opacity: status === 'loading' ? 0.7 : 1 }}
                onMouseEnter={e => { if (status !== 'loading') e.currentTarget.style.background = '#1D4ED8' }}
                onMouseLeave={e => e.currentTarget.style.background = '#2563EB'}
              >
                {status === 'loading' ? 'Sending...' : (
                  <>
                    Send quote request
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 8h12M10 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>

              <p style={styles.note}>
                We respond within one business day. No spam, no cold calls.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
