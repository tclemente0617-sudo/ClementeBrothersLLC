// Basic interactivity: toggle nav, form -> mailto, set footer year

document.addEventListener('DOMContentLoaded', function () {
  // Fill current year in footer
  var el = document.getElementById('copy-year');
  if (el) el.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('main-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      if (!expanded) {
        nav.style.display = 'block';
      } else {
        nav.style.display = '';
      }
    });
  }

  // Contact form: builds a mailto: link and opens email client
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = encodeURIComponent(document.getElementById('name').value.trim());
      var company = encodeURIComponent(document.getElementById('company').value.trim());
      var message = encodeURIComponent(document.getElementById('message').value.trim());
      var to = 'clementetiago186@gmail.com'; // <-- Set to your preferred contact email
      var subject = encodeURIComponent('Website Inquiry from ' + (name || 'Website Visitor'));
      var body = 'Name: ' + (name || '') + '%0D%0A' +
                 'Company: ' + (company || '') + '%0D%0A%0D%0A' +
                 'Message:%0D%0A' + (message || '');

      // Build mailto and open
      var mailto = 'mailto:' + to + '?subject=' + subject + '&body=' + body;
      window.location.href = mailto;
    });
  }
});
