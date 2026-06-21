document.addEventListener('DOMContentLoaded', function () {
  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open', !expanded);
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var form = document.getElementById('bookingForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      function value(id) {
        var el = document.getElementById(id);
        return el ? el.value.trim() : '';
      }

      var name = value('name');
      var company = value('company');
      var phone = value('phone');
      var email = value('email');
      var officeAddress = value('officeAddress');
      var businessType = value('businessType');
      var squareFootage = value('squareFootage');
      var frequency = value('frequency');
      var walkthroughTime = value('walkthroughTime');
      var message = value('message');

      var subject = encodeURIComponent('New Free Office Cleaning Walkthrough Request');
      var body = encodeURIComponent(
        'New walkthrough request from Clemente Brothers website\n\n' +
        'Full Name: ' + name + '\n' +
        'Company Name: ' + company + '\n' +
        'Phone Number: ' + phone + '\n' +
        'Email Address: ' + email + '\n' +
        'Office Address: ' + officeAddress + '\n' +
        'Business Type: ' + businessType + '\n' +
        'Approximate Square Footage: ' + squareFootage + '\n' +
        'Cleaning Frequency: ' + frequency + '\n' +
        'Best Time for Walkthrough: ' + walkthroughTime + '\n\n' +
        'Additional Notes:\n' + message
      );

      window.location.href = 'mailto:clementetiago186@gmail.com?subject=' + subject + '&body=' + body;
    });
  }
});
