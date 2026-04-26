document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('copy-year');
  if (el) el.textContent = new Date().getFullYear();

  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('main-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      nav.style.display = expanded ? '' : 'block';
    });
  }

  var form = document.getElementById('bookingForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = encodeURIComponent(document.getElementById('name').value);
      var phone = encodeURIComponent(document.getElementById('phone').value);
      var email = encodeURIComponent(document.getElementById('email').value);
      var company = encodeURIComponent(document.getElementById('company').value);
      var town = encodeURIComponent(document.getElementById('town').value);
      var service = encodeURIComponent(document.getElementById('serviceType').value);
      var frequency = encodeURIComponent(document.getElementById('frequency').value);
      var time = encodeURIComponent(document.getElementById('preferredTime').value);
      var message = encodeURIComponent(document.getElementById('message').value);

      var subject = encodeURIComponent('New Cleaning Quote Request');
      var body =
        'Name: ' + name + '%0D%0A' +
        'Phone: ' + phone + '%0D%0A' +
        'Email: ' + email + '%0D%0A' +
        'Company: ' + company + '%0D%0A' +
        'Location: ' + town + '%0D%0A' +
        'Service: ' + service + '%0D%0A' +
        'Frequency: ' + frequency + '%0D%0A' +
        'Preferred Time: ' + time + '%0D%0A%0D%0A' +
        'Details:%0D%0A' + message;

      window.location.href = 'mailto:clementetiago186@gmail.com?subject=' + subject + '&body=' + body;
    });
  }
});