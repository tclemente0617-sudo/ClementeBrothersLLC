# Formspree Setup Instructions

The contact form in `index.html` is configured to use Formspree. To activate it:

1. Go to https://formspree.io/
2. Sign up for a free account
3. Create a new form
4. Copy your form endpoint ID
5. In `index.html`, find line with `action="https://formspree.io/f/YOUR_FORM_ID"` and replace `YOUR_FORM_ID` with your actual Formspree form ID:
   
   **Before:**
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   
   **After (example):**
   ```html
   <form class="contact-form" action="https://formspree.io/f/xyzabc123" method="POST">
   ```

## Features Included:
- Spam prevention via honeypot field (`_gotcha`)
- Redirect to `https://clementebrothersservices.com/thank-you.html` on successful submission
- Custom email subject line: "New Quote Request from Website"
- Required fields: Name, Email, Phone, Message

## Alternative: Netlify Forms

If you're hosting on Netlify, you can use Netlify Forms instead:

1. Replace the form opening tag with:
   ```html
   <form class="contact-form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="https://clementebrothersservices.com/thank-you.html">
   ```

2. Add a hidden field for Netlify at the beginning of the form:
   ```html
   <input type="hidden" name="form-name" value="contact">
   ```

3. Remove the Formspree-specific hidden fields (`_next`, `_subject`).

4. The form will automatically be processed by Netlify.

## Testing

After setup, test the form by:
1. Filling out all required fields
2. Submitting the form
3. Verifying you're redirected to the thank-you page
4. Checking your Formspree dashboard (or email) for the submission
