'use strict'		

		function validatePassword(){
		  var password = document.getElementById("password")
		  var confirm = document.getElementById("confirm");
		  if (password.value != confirm_password.value) {
		  	confirm.setCustomValidity("passwords don't match");
		  } else {
		  	confirm.setCustomValidity('');
		  }
		}

