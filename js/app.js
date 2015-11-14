var password = document.getElementById("password")

confirm_password = document.getElementById("confirm");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("passwords don't match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm.onkeyup = validatePassword;