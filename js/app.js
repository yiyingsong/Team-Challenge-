'use strict'		

angular.module('SignUpApp', [])
.controller('MyCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.email = {
        text: 'me@example.com'
    };
	
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

	$scope.compareTo = function() {
		console.log($scope.password);
		console.log($scope.confirmPassword);
		if ($scope.password != null && $scope.confirmPassword != null && $scope.password === $scope.confirmPassword) {
			return true;
		} else {
			return false;
		}
	}

}])



