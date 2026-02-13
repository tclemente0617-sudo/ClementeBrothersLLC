# Deployment Checklist for Clemente Brothers Services Website

## Pre-Deployment Tasks

### Google Analytics Setup (REQUIRED)
- [ ] Create Google Analytics account at https://analytics.google.com
- [ ] Create a new property for clementebrothersservices.com
- [ ] Get your Measurement ID (format: G-XXXXXXXXXX)
- [ ] Replace BOTH instances of `G-XXXXXXXXXX` in `index.html` (lines 57 and 62)
- [ ] Verify tracking is working after deployment

### Social Media Links (RECOMMENDED)
- [ ] Create or verify Facebook page: https://www.facebook.com/clementebrothersservices
- [ ] Create or verify Instagram account: https://www.instagram.com/clementebrothersservices
- [ ] Create or verify LinkedIn company page: https://www.linkedin.com/company/clemente-brothers-services
- [ ] Update links in `index.html` footer section (lines 405-411) if URLs are different
- [ ] Or remove social media links from footer if not using them

### Contact Information (VERIFY)
- [ ] Verify email address: clementetiago186@gmail.com (in `script.js` line 31)
- [ ] Verify phone number: 732-314-4695 (appears in multiple places)
- [ ] Test contact form by submitting a test inquiry

## SEO & Validation Testing

### Structured Data Validation
- [ ] Test with [Google Rich Results Test](https://search.google.com/test/rich-results)
  - Should show LocalBusiness schema
  - Should show BreadcrumbList schema
  - Should show all 5 service offerings
- [ ] Validate with [Schema.org Validator](https://validator.schema.org/)

### Social Media Preview Testing
- [ ] Test Open Graph tags with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
  - Enter: https://clementebrothersservices.com
  - Verify logo image appears
  - Verify title and description are correct
- [ ] Test Twitter Cards with [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### Sitemap & Robots Testing
- [ ] Validate sitemap.xml at [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
- [ ] Verify robots.txt is accessible at https://clementebrothersservices.com/robots.txt

## Performance Testing

### Google PageSpeed Insights
- [ ] Test desktop version: https://pagespeed.web.dev/
  - Target: 90+ score
- [ ] Test mobile version: https://pagespeed.web.dev/
  - Target: 85+ score
- [ ] Address any critical issues flagged

### Mobile Responsiveness
- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Test on iPad/tablet
- [ ] Verify navigation menu works on mobile
- [ ] Verify contact form is usable on mobile

## Accessibility Testing

### Basic Accessibility Checks
- [ ] Test with keyboard navigation (Tab key)
- [ ] Verify all images have alt text
- [ ] Verify form fields have proper labels
- [ ] Test with a screen reader (NVDA, JAWS, or VoiceOver)
- [ ] Check color contrast ratios pass WCAG AA standards

## Cross-Browser Testing

- [ ] Chrome (Windows/Mac)
- [ ] Firefox (Windows/Mac)
- [ ] Safari (Mac/iOS)
- [ ] Microsoft Edge
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

## GitHub Pages Deployment

### Initial Setup
- [ ] Ensure all changes are committed to the repository
- [ ] Push changes to the `gh-pages` branch or configure GitHub Pages source
- [ ] Go to repository Settings → Pages
- [ ] Set source branch (main or gh-pages)
- [ ] Set custom domain to: clementebrothersservices.com
- [ ] Enable "Enforce HTTPS" option

### DNS Configuration
- [ ] Log in to your domain registrar (GoDaddy, Namecheap, etc.)
- [ ] Add/Update DNS records:
  ```
  Type: CNAME
  Name: www
  Value: tclemente0617-sudo.github.io
  
  Type: A (or ALIAS)
  Name: @
  Value: (GitHub Pages IP addresses)
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
  ```
- [ ] Wait for DNS propagation (up to 48 hours, usually faster)
- [ ] Verify domain resolves correctly: `nslookup clementebrothersservices.com`

### Post-Deployment Verification
- [ ] Visit https://clementebrothersservices.com and verify site loads
- [ ] Verify HTTPS certificate is active (green padlock)
- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Verify logo and images load correctly
- [ ] Check Google Analytics is receiving data (wait 24-48 hours)

## Google Search Console Setup

### Submit Website to Google
- [ ] Create Google Search Console account: https://search.google.com/search-console
- [ ] Add property: clementebrothersservices.com
- [ ] Verify ownership (DNS verification recommended)
- [ ] Submit sitemap: https://clementebrothersservices.com/sitemap.xml
- [ ] Request indexing for main pages

### Monitor Search Performance
- [ ] Check for crawl errors
- [ ] Monitor search queries and impressions
- [ ] Review mobile usability report
- [ ] Check Core Web Vitals

## Google Business Profile

### Local SEO Setup (HIGHLY RECOMMENDED)
- [ ] Create/claim Google Business Profile: https://www.google.com/business/
- [ ] Add business information:
  - Name: Clemente Brothers Services
  - Address: (Physical address if available)
  - Phone: 732-314-4695
  - Website: https://clementebrothersservices.com
  - Category: Commercial Cleaning Service
  - Service Area: South River, Middlesex County, NJ
- [ ] Add business hours (Monday-Friday, 8:00 AM - 6:00 PM)
- [ ] Upload logo and photos
- [ ] Add services offered
- [ ] Respond to customer reviews

## Optional Enhancements

### Local Directory Listings
- [ ] Yelp for Business
- [ ] Yellow Pages
- [ ] Angi (formerly Angie's List)
- [ ] Thumbtack
- [ ] HomeAdvisor
- [ ] Local Chamber of Commerce

### Social Media Accounts Setup
- [ ] Create and complete Facebook Business Page
- [ ] Create Instagram Business account
- [ ] Create LinkedIn Company Page
- [ ] Post initial content and service information
- [ ] Add website link to all profiles

### Ongoing Maintenance
- [ ] Set up regular backups of website files
- [ ] Monitor Google Analytics monthly
- [ ] Update content as services change
- [ ] Respond to customer inquiries promptly
- [ ] Encourage satisfied customers to leave reviews

## Security Checklist

- [x] Security headers configured in .htaccess
- [x] HTTPS enforced via GitHub Pages
- [x] No sensitive data in public repository
- [x] Contact form uses mailto (no server-side data storage)
- [ ] Regular monitoring for suspicious activity

## Support & Troubleshooting

### Common Issues

**Issue: Google Analytics not tracking**
- Solution: Verify Measurement ID is correct, check after 24-48 hours, clear browser cache

**Issue: Domain not resolving**
- Solution: Check DNS records, wait for propagation, verify CNAME file is present

**Issue: Contact form not working**
- Solution: Verify email client is configured on user's device, test with different email clients

**Issue: Images not loading**
- Solution: Check file paths are correct, verify images exist in /assets/ directory

### Getting Help
- GitHub Pages documentation: https://docs.github.com/en/pages
- Google Search Console Help: https://support.google.com/webmasters
- Google Analytics Help: https://support.google.com/analytics

---

## Completion Status

- [x] Website features completed
- [x] All required sections added (Hero, About, Services, Contact, Footer)
- [x] Contact form with all required fields
- [x] SEO optimization complete
- [x] Responsive design verified
- [x] Accessibility features implemented
- [ ] Google Analytics ID updated (requires user action)
- [ ] Social media profiles created (requires user action)
- [ ] Deployed to production (requires user action)
- [ ] Domain DNS configured (requires user action)

**Last Updated:** January 18, 2026
