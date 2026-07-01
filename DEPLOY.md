# Azul Cloud IT — Deployment Guide

## Before deploying: Set up Web3Forms (free contact form)

1. Go to https://web3forms.com and sign up with your email
2. You'll receive a free **Access Key**
3. Open `src/components/QuoteForm.jsx`
4. Find this line: `access_key: 'YOUR_WEB3FORMS_ACCESS_KEY'`
5. Replace with your actual key — form submissions will now email you directly

---

## Deploy to Vercel (free, recommended)

### Option A — Vercel CLI (fastest)

```bash
npm install -g vercel
cd azul-cloud-it
vercel
```
Follow the prompts. Your site will be live at `https://azul-cloud-it.vercel.app` (or similar).

### Option B — GitHub + Vercel (best for ongoing updates)

1. Push this folder to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial Azul Cloud IT site"
   git remote add origin https://github.com/YOUR_USERNAME/azul-cloud-it.git
   git push -u origin main
   ```

2. Go to https://vercel.com → "Add New Project" → import your GitHub repo
3. Vercel auto-detects Vite — just click Deploy
4. Every `git push` auto-deploys — zero config needed

---

## Add a custom domain (optional, ~$10/yr)

1. Buy a domain at https://cloudflare.com/registrar (cheapest registrar)
   - Suggested: `azulcloudit.com` or `azulcloud.it`
2. In Vercel → your project → Settings → Domains → add your domain
3. Follow the DNS instructions (usually just add a CNAME record in Cloudflare)
4. HTTPS is automatic — Vercel handles the SSL cert

---

## Local development

```bash
cd azul-cloud-it
npm install
npm run dev
```
Opens at http://localhost:5173

---

## Customizing your site

| What to change | File |
|---|---|
| Your name/email in the form | `QuoteForm.jsx` — update the submit handler email |
| Services listed | `Services.jsx` — edit the `services` array |
| Stats (uptime %, response time) | `WhyUs.jsx` — edit the `stats` array |
| Hero headline/subtext | `Hero.jsx` |
| Colors | `index.css` — CSS variables at the top |
| Nav links | `Navbar.jsx` |

