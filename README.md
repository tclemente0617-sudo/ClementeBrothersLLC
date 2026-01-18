# Clemente Brothers — Static Site

This is a small static site for "Clemente Brothers Commercial Services" created from your flyer content.

Quick start
1. Download or clone the repository.
2. Put these files at the repository root (replace existing `index.html` if you want).
3. Run locally:
   - Double-click `index.html` to open in your browser, or
   - Start a simple server:
     - Python 3: `python -m http.server 8000`
     - Then open http://localhost:8000

Files
- `index.html` — main page (responsive).
- `styles.css` — site styles.
- `script.js` — small JS for nav and contact form.
- `README.md` — this file.
- `SETUP_GUIDE.md` — detailed setup instructions for Google Analytics, social media, etc.

Customize
- Change the phone number in `index.html` (tel: links).
- Set the actual email in `script.js` (already set to clementetiago186@gmail.com).
- Replace hero image by changing the background URL in `styles.css` or `index.html`.
- **IMPORTANT**: Replace `G-XXXXXXXXXX` in `index.html` with your actual Google Analytics Measurement ID (appears twice in the GA script).
- Update social media links in the footer with your actual profiles.

Deploy
- Push to GitHub and enable GitHub Pages, or deploy to Netlify / Vercel for free hosting.

Notes
- The contact form opens the user's email client (mailto). If you want inbound form submissions without relying on the user's email client, I can add a Formspree configuration or show how to connect a simple serverless endpoint.
- If you'd like a multi-page site, gallery, or photo assets bundled, tell me which pages or images and I will create them.
- See `SETUP_GUIDE.md` for detailed setup instructions including Google Analytics, social media links, SEO testing, and deployment.
