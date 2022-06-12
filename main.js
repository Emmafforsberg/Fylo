/* NO LUCK HERE :( */
function validation() {
  /* The form */
  var form = document.getElementById("form");
  /* input */
  var email = document.getElementById("email").value;
  /* error or success text */
  var text = document.getElementById("validate");
  /* The valid email pattern */
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,4}$/;

  /* If input has the right pattern [a-z / A-Z] / 0-9 / @ and "." */
  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Now you can sign up!";
    text.style.color = "#00ff00";
  } else {
    /* If it doesn't - show as invalid */
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Please enter valid email";
    text.style.color = "#ff0000";
  }
  if (email == "") {
    /* If the input is empty = invalid */
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
    text.style.color = "#00ff00";
  }
}
