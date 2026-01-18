# Setup Guide - Clemente Brothers Services Website

## Google Analytics Setup

The website includes Google Analytics tracking code. To enable tracking:

1. Create a Google Analytics account at https://analytics.google.com
2. Create a new property for your website
3. Get your Measurement ID (format: G-XXXXXXXXXX)
4. Replace `G-XXXXXXXXXX` in `index.html` with your actual Measurement ID (appears twice in the Google Analytics script section)

The Google Analytics code is located in the `<head>` section of `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Social Media Links

The footer includes placeholder social media links. Update these URLs in `index.html` with your actual social media profiles:

- Facebook: `https://www.facebook.com/clementebrothersservices`
- Instagram: `https://www.instagram.com/clementebrothersservices`
- LinkedIn: `https://www.linkedin.com/company/clemente-brothers-services`

If you don't have certain social media accounts, you can remove those links from the footer section.

## Contact Form

The contact form uses a `mailto:` link to open the user's email client. The email is sent to:
- `clementetiago186@gmail.com`

To change the contact email, update it in `script.js` in the form submission handler.

## Domain Configuration

The website is configured for the domain: `clementebrothersservices.com`

All canonical URLs, Open Graph tags, and structured data use this domain. The CNAME file is also set to this domain for GitHub Pages hosting.

## Testing Checklist

### SEO Testing
- [ ] Test structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Validate sitemap.xml at [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
- [ ] Test Open Graph tags with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Test Twitter Cards with [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### Performance Testing
- [ ] Run [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Test mobile responsiveness with Chrome DevTools
- [ ] Verify image loading on various devices

### Accessibility Testing
- [ ] Test with screen readers
- [ ] Verify keyboard navigation
- [ ] Check color contrast ratios
- [ ] Validate ARIA labels

### Cross-Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Microsoft Edge
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment to GitHub Pages

1. Ensure all changes are committed to the repository
2. Push changes to the `gh-pages` branch (or configure GitHub Pages to use the main branch)
3. In GitHub repository settings:
   - Go to Settings → Pages
   - Set source to the appropriate branch
   - Ensure custom domain is set to `clementebrothersservices.com`
4. Configure DNS records at your domain registrar:
   - Add CNAME record pointing to `tclemente0617-sudo.github.io`
   - Wait for DNS propagation (can take up to 48 hours)

## Local Development

To test locally:

```bash
# Start a simple HTTP server
python3 -m http.server 8080

# Open browser to http://localhost:8080
```

## Performance Optimization

The website includes several performance optimizations:

- **Image optimization**: Logo available in PNG and WebP formats
- **Browser caching**: Configured via .htaccess
- **GZIP compression**: Enabled via .htaccess
- **DNS prefetch**: For external resources like Google Fonts
- **Favicon optimization**: Multiple sizes for different devices

## Security Features

Security headers are configured in `.htaccess`:

- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- X-XSS-Protection: enabled
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: restricted geolocation, microphone, camera

## Files Overview

- `index.html` - Main website page
- `styles.css` - All styling
- `script.js` - Interactive features (nav toggle, form handling)
- `robots.txt` - Search engine crawler instructions
- `sitemap.xml` - Site structure for search engines
- `.htaccess` - Performance and security configuration
- `CNAME` - Custom domain configuration
- `manifest.json` - Progressive Web App manifest
- `favicon.*` - Various favicon formats
- `assets/` - Logo images
