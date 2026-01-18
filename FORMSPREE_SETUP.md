# Formspree Setup Instructions

The contact form in `index.html` is configured to use Formspree. To activate it:

1. Go to https://formspree.io/
2. Sign up for a free account
3. Create a new form
4. Copy your form endpoint ID
5. In `index.html`, replace `YOUR_FORM_ID` in the form action attribute with your actual Formspree form ID:
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   
   For example:
   ```html
   <form class="contact-form" action="https://formspree.io/f/xyzabc123" method="POST">
   ```

## Features Included:
- Spam prevention via honeypot field (`_gotcha`)
- Redirect to `/thank-you.html` on successful submission
- Custom email subject line
- Required fields: Name, Email, Phone, Message

## Alternative: Netlify Forms

If you're hosting on Netlify, you can use Netlify Forms instead:

1. Add `netlify` attribute to the form tag:
   ```html
   <form class="contact-form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/thank-you.html">
   ```

2. Add a hidden field for Netlify:
   ```html
   <input type="hidden" name="form-name" value="contact">
   ```

3. The form will automatically be processed by Netlify.
