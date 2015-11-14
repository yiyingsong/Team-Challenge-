'use strict'		


angular.module('myApp', [])
  .controller('MyCtrl', ['$scope', '$http', function($scope, $http) {

	$scope.validatePassword = function(){
	  if (password.value != confirm_password.value) {
	  	alert("passwords don't match");
	  } 
	};
}


