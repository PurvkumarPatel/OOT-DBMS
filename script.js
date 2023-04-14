
// Get the form and submit button
const signupForm = document.querySelector('#signupModal form');
const submitButton = document.querySelector('#signupModal button[type="submit"]');

// Add an event listener to the submit button
submitButton.addEventListener('click', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the name, email, and password fields
  const nameInput = document.querySelector('#signupModal #name');
  const emailInput = document.querySelector('#signupModal #email');
  const passwordInput = document.querySelector('#signupModal #password');

  // Validate the name field
  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    return;
  }

  // Validate the email field
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Validate the password field
  if (passwordInput.value.length < 8) {
    alert('Please enter a password that is at least 8 characters long.');
    return;
  }

  // If all fields are valid, submit the form
  alert('Form submitted successfully!');
  signupForm.submit();
});
