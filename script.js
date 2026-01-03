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
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
}
