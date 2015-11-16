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
		console.log(Date.parse($scope.birthdate));
	$scope.checkBirth = function() {
		var birthD = Date.parse($scope.birthdate);
		console.log(birthD);
		if (birthD == 'NaN') {
			return false;
		} else {
			if (birthD == 0) {
				return false;
			} else {
				return true;
			}
		}
	}
	$scope.reset = function() {
		$scope.firstname = '';
		$scope.lastname = '';
		$scope.email = '';
		$scope.birthdate = '';
	}
}])

