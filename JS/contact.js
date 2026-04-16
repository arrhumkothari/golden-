/* ======================================================
   Golden Crust Bakery – Contact Form JavaScript
   Handles: form validation, success state
   ====================================================== */

function validateForm () {
  let valid = true;

  const fields = [
    { id: 'firstName', errorId: 'firstNameError', msg: 'Please enter your first name.' },
    { id: 'lastName',  errorId: 'lastNameError',  msg: 'Please enter your last name.' },
    { id: 'email',     errorId: 'emailError',     msg: 'Please enter a valid email address.' },
    { id: 'subject',   errorId: 'subjectError',   msg: 'Please select a subject.' },
    { id: 'message',   errorId: 'messageError',   msg: 'Please enter a message (min 10 characters).' },
  ];

  fields.forEach(f => {
    const input = document.getElementById(f.id);
    const errEl = document.getElementById(f.errorId);
    if (!input || !errEl) return;

    input.classList.remove('error');
    errEl.textContent = '';

    let fieldValid = true;

    if (!input.value.trim()) {
      fieldValid = false;
    }

    // Email-specific validation
    if (f.id === 'email' && input.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value.trim())) {
        fieldValid = false;
      }
    }

    // Message minimum length
    if (f.id === 'message' && input.value.trim().length < 10) {
      fieldValid = false;
    }

    if (!fieldValid) {
      input.classList.add('error');
      errEl.textContent = f.msg;
      valid = false;
    }
  });

  return valid;
}

function submitForm () {
  if (!validateForm()) return;

  // Simulate form submission (no backend)
  const btn = document.getElementById('submitBtn');
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');

  btn.disabled = true;
  btn.textContent = 'Sending…';

  setTimeout(() => {
    form.classList.add('hidden');
    success.classList.remove('hidden');
    success.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 1200);
}

// Live validation on blur
document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('#contactForm input, #contactForm select, #contactForm textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      if (input.value.trim()) {
        input.classList.remove('error');
        const errEl = document.getElementById(input.id + 'Error');
        if (errEl) errEl.textContent = '';
      }
    });
  });
});
