var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

// Function to validate name input field
function validateName() {
  var name = document.getElementById("contact-name").value;

  // When name is 0 (nothing entered) 'name is required' displays
  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  // If value doesn't match the format:
  // The first character is a letter
  // The second is a space
  // The third is another character
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  // If there is no error, display 'valid':
  nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}

function validatePhone() {
  var phone = document.getElementById("contact-phone").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone number is required";
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = "Phone number should be 10 digits";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Only Digits";
    return false;
  }

  phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}

function validateEmail() {
  var email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }

  if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
    emailError.innerHTML = "Email Invalid";
    return false;
  }

  emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
