const fn = document.getElementById("fn");
const ln = document.getElementById("ln");
const email = document.getElementById("email");
const phone = document.getElementById("tel");
const pass = document.getElementById("pass");
const rpass = document.getElementById("rpass");

const submit = document.getElementById("sub");

const from_wrapper = document.querySelector(".from_wrapper");

function validFname() {
  if (fn.value == "") {
    //toggling border class
    fn.classList.remove("valid");
    fn.classList.add("error");
    // targeting input seblings
    const aprovedSpan = fn.nextElementSibling;
    const nonAprovedSpan = aprovedSpan.nextElementSibling;
    const errMsg = nonAprovedSpan.nextElementSibling;
    //toggling icons class
    aprovedSpan.style.display = "none";
    nonAprovedSpan.style.display = "block";
    // costum error msg
    errMsg.textContent = "Not valid";
    errMsg.style.display = "block";
  } else if (fn.value) {
    // targeting input seblings
    const aprovedSpan = fn.nextElementSibling;
    const nonAprovedSpan = aprovedSpan.nextElementSibling;
    const errMsg = nonAprovedSpan.nextElementSibling;
    //toggling border class
    fn.classList.add("valid");
    fn.classList.remove("error");
    //toggling icons class
    nonAprovedSpan.style.display = "none";
    aprovedSpan.style.display = "block";
    errMsg.style.display = "none";
  }
}
function validLname() {
  if (ln.value == "") {
    // targeting input seblings
    const aprovedSpan = ln.nextElementSibling;
    const nonAprovedSpan = aprovedSpan.nextElementSibling;
    const errMsg = nonAprovedSpan.nextElementSibling;
    //toggling border class
    ln.classList.remove("valid");
    ln.classList.add("error");
    //toggling icons class
    aprovedSpan.style.display = "none";
    nonAprovedSpan.style.display = "block";
    errMsg.textContent = "Not valid";
    errMsg.style.display = "block";
  } else {
    // targeting input seblings
    const aprovedSpan = ln.nextElementSibling;
    const nonAprovedSpan = aprovedSpan.nextElementSibling;
    const errMsg = nonAprovedSpan.nextElementSibling;
    //toggling border class
    ln.classList.add("valid");
    ln.classList.remove("error");
    //toggling icons class
    nonAprovedSpan.style.display = "none";
    aprovedSpan.style.display = "block";
    errMsg.style.display = "none";
  }
}
function validEmailAdress() {
  function containsSpecialChars(str) {
    const specialChars = /[`!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
    return specialChars.test(str);
  }

  if (email.value == "") {
    // targeting input seblings
    const aprovedSpan = email.nextElementSibling;
    const nonAprovedSpan = aprovedSpan.nextElementSibling;
    const errMsg = nonAprovedSpan.nextElementSibling;
    //toggling border class
    email.classList.remove("valid");
    email.classList.add("error");
    //toggling icons class
    aprovedSpan.style.display = "none";
    nonAprovedSpan.style.display = "block";
    errMsg.textContent = "input need to be not empty";
    errMsg.style.display = "block";
  }

  if (containsSpecialChars(email.value)) {
    // targeting input seblings
    const aprovedSpan = email.nextElementSibling;
    const nonAprovedSpan = aprovedSpan.nextElementSibling;
    const errMsg = nonAprovedSpan.nextElementSibling;
    //toggling border class
    email.classList.remove("valid");
    email.classList.add("error");
    //toggling icons class
    aprovedSpan.style.display = "none";
    nonAprovedSpan.style.display = "block";
    errMsg.textContent = "Not valid Email";
    errMsg.style.display = "block";
  }
  if (!email.value.match("@", "com")) {
    // targeting input seblings
    const aprovedSpan = email.nextElementSibling;
    const nonAprovedSpan = aprovedSpan.nextElementSibling;
    const errMsg = nonAprovedSpan.nextElementSibling;
    //toggling border class
    email.classList.remove("valid");
    email.classList.add("error");
    //toggling icons class
    aprovedSpan.style.display = "none";
    nonAprovedSpan.style.display = "block";
    errMsg.textContent = "Not correct formated!";
    errMsg.style.display = "block";
  } else {
    // targeting input seblings
    const aprovedSpan = email.nextElementSibling;
    const nonAprovedSpan = aprovedSpan.nextElementSibling;
    const errMsg = nonAprovedSpan.nextElementSibling;
    //toggling border class
    email.classList.add("valid");
    email.classList.remove("error");
    //toggling icons class
    nonAprovedSpan.style.display = "none";
    aprovedSpan.style.display = "block";
    errMsg.style.display = "none";
  }
}

function validNumber() {
  if (phone.value == "") {
    // targeting input seblings
    const aprovedSpan = phone.nextElementSibling;
    const nonAprovedSpan = aprovedSpan.nextElementSibling;
    const errMsg = nonAprovedSpan.nextElementSibling;
    //toggling border class
    phone.classList.remove("valid");
    phone.classList.add("error");
    //toggling icons class
    aprovedSpan.style.display = "none";
    nonAprovedSpan.style.display = "block";
    errMsg.textContent = "can't be blanc";
    errMsg.style.display = "block";
  } else if (phone.value.length < 9) {
    // targeting input seblings
    const aprovedSpan = phone.nextElementSibling;
    const nonAprovedSpan = aprovedSpan.nextElementSibling;
    const errMsg = nonAprovedSpan.nextElementSibling;
    //toggling border class
    phone.classList.remove("valid");
    phone.classList.add("error");
    //toggling icons class
    aprovedSpan.style.display = "none";
    nonAprovedSpan.style.display = "block";
    errMsg.textContent = "Not valid Phone number";
    errMsg.style.display = "block";
  } else {
    // targeting input seblings
    const aprovedSpan = phone.nextElementSibling;
    const nonAprovedSpan = aprovedSpan.nextElementSibling;
    const errMsg = nonAprovedSpan.nextElementSibling;
    //toggling border class
    phone.classList.add("valid");
    phone.classList.remove("error");
    //toggling icons class
    nonAprovedSpan.style.display = "none";
    aprovedSpan.style.display = "block";
    errMsg.style.display = "none";
  }
}

function validPassword() {
  if (pass.value == "") {
    // targeting input seblings
    const aprovedSpan = pass.nextElementSibling;
    const nonAprovedSpan = aprovedSpan.nextElementSibling;
    const errMsg = nonAprovedSpan.nextElementSibling;
    //toggling border class
    pass.classList.remove("valid");
    pass.classList.add("error");
    //toggling icons class
    aprovedSpan.style.display = "none";
    nonAprovedSpan.style.display = "block";
    errMsg.textContent = "Fill the password please!";
    errMsg.style.display = "block";
  } else if (pass.value.length <= 8) {
    // targeting input seblings
    const aprovedSpan = pass.nextElementSibling;
    const nonAprovedSpan = aprovedSpan.nextElementSibling;
    const errMsg = nonAprovedSpan.nextElementSibling;
    //toggling border class
    pass.classList.remove("valid");
    pass.classList.add("error");
    //toggling icons class
    aprovedSpan.style.display = "none";
    nonAprovedSpan.style.display = "block";
    errMsg.textContent = "Password length must be atleast 8 character";
    errMsg.style.display = "block";
  } else if (pass.value.length >= 15) {
    // targeting input seblings
    const aprovedSpan = pass.nextElementSibling;
    const nonAprovedSpan = aprovedSpan.nextElementSibling;
    const errMsg = nonAprovedSpan.nextElementSibling;
    //toggling border class
    pass.classList.remove("valid");
    pass.classList.add("error");
    //toggling icons class
    aprovedSpan.style.display = "none";
    nonAprovedSpan.style.display = "block";
    errMsg.textContent = "Password length must not exceed 15 characters";
    errMsg.style.display = "block";
  } else {
    // targeting input seblings
    const aprovedSpan = pass.nextElementSibling;
    const nonAprovedSpan = aprovedSpan.nextElementSibling;
    const errMsg = nonAprovedSpan.nextElementSibling;
    //toggling border class
    pass.classList.add("valid");
    pass.classList.remove("error");
    //toggling icons class
    nonAprovedSpan.style.display = "none";
    aprovedSpan.style.display = "block";
    errMsg.style.display = "none";
  }
}

function validConformPassword() {
  if (rpass.value == "") {
    // targeting input seblings
    const aprovedSpan = rpass.nextElementSibling;
    const nonAprovedSpan = aprovedSpan.nextElementSibling;
    const errMsg = nonAprovedSpan.nextElementSibling;
    //toggling border class
    rpass.classList.remove("valid");
    rpass.classList.add("error");
    //toggling icons class
    aprovedSpan.style.display = "none";
    nonAprovedSpan.style.display = "block";
    errMsg.textContent = "Fill the password please!";
    errMsg.style.display = "block";
  } else if (!rpass.value == pass.value) {
    // targeting input seblings
    const aprovedSpan = rpass.nextElementSibling;
    const nonAprovedSpan = aprovedSpan.nextElementSibling;
    const errMsg = nonAprovedSpan.nextElementSibling;
    //toggling border class
    rpass.classList.remove("valid");
    rpass.classList.add("error");
    //toggling icons class
    aprovedSpan.style.display = "none";
    nonAprovedSpan.style.display = "block";
    errMsg.textContent = "Password not matching";
    errMsg.style.display = "block";
  } else if (rpass.value == pass.value) {
    // targeting input seblings
    const aprovedSpan = rpass.nextElementSibling;
    const nonAprovedSpan = aprovedSpan.nextElementSibling;
    const errMsg = nonAprovedSpan.nextElementSibling;
    //toggling border class
    rpass.classList.add("valid");
    rpass.classList.remove("error");
    //toggling icons class
    nonAprovedSpan.style.display = "none";
    aprovedSpan.style.display = "block";
    errMsg.style.display = "none";
  }
}
submit.addEventListener("click", (e) => {
  e.preventDefault();
  validFname();
  validLname();
  validEmailAdress();
  validNumber();
  validPassword();
  validConformPassword();
});
