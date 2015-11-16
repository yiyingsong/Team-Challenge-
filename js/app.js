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
		var newD = new Date();
		console.log(newD);
		if (birthD == 'NaN') {
			$scope.check = false;
		} else {
			console.log(Date.parse(newD));
			console.log(Date.parse(newD) - 410290189000);
			if (birthD < Date.parse(newD) - 410290189000) {
				$scope.check = false;
			} else {
				$scope.check = true;
			}
		}
	}
	$scope.compareTo = function() {
		if ($scope.password != null && $scope.passwordConfirm != null && $scope.password === $scope.passwordConfirm) {
			return true;
		}
	}

}])



