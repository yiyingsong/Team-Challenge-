'use strict'		

angular.module('SignUpApp', [])
.controller('MyCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.email = {
        text: 'me@example.com'
      };
		function validatePassword(){
		  var password = document.getElementById("password")
		  var confirm = document.getElementById("confirm");
		  if (password.value != confirm_password.value) {
		  	confirm.setCustomValidity("passwords don't match");
		  } else {
		  	confirm.setCustomValidity('');
		  }
		}
		console.log(Date.parse($scope.birthD));
	var check = function() {
		var birthD = Date.parse($scope.birthD);
		console.log(birthD);
		if (birthD == 'NaN') {
			$scope.validDate = false;
		} else {
		}
	}
}])

