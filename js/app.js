'use strict'		

angular.module('SignUpApp', [])
.controller('MyCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.resetBtn = function() {
    	location.reload();
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
	};

	$scope.compareTo = function() {
		console.log($scope.password);
		console.log($scope.confirmPassword);
		if ($scope.password != null && $scope.confirmPassword != null && $scope.password === $scope.confirmPassword) {
			return true;
		} else {
			return false;
		}
	};

	$scope.clicked = false;

	$scope.showMessage = function() {
		$scope.resetBtn;
		$scope.clicked = true;
	};

}])



