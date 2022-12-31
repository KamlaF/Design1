const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const adress = document.querySelector("#adress");
const adressError = document.querySelector("#adressError");

function validateForm() {
  var isValid = true;

  event.preventDefault();

  if (checkLength(fullName.value, 0) === true) {
    fullNameError.style.display = "none";
  } else {
    isValid = false;
    fullNameError.style.display = "block";
  }

  if (checkLength(subject.value, 9) === true) {
    subjectError.style.display = "none";
  } else {
    isValid = false;
    subjectError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    isValid = false;
    emailError.style.display = "block";
  }

  if (checkLength(adress.value, 9) === true) {
    adressError.style.display = "none";
  } else {
    isValid = false;
    adressError.style.display = "block";
  }

  if (isValid) {
    var thankYouMessage = document.getElementById("thankYouMessage");
    thankYouMessage.style.display = "block";
  }

  console.log("hello");
}

// if(fullName.value.trim().lenght>0){
//   firstNameError ="none";
//  }else {
//     name.style.display = "block";
// }

// if(subject.value.trim().lenght>9){
//   subjectError ="none";
//  }else {
//     subject.style.display = "block";
// }

// if(adress.value.trim().lenght>24){
//   adressError ="none";
//  }else {
//     adress.style.display = "block";
// }

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
