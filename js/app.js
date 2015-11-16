'use strict'		

angular.module('SignUpApp', [])
.controller('MyCtrl', ['$scope', '$http', function($scope, $http) {

    var reset = function() {
    	$scope.email.text = '';
    	$scope.firstname = '';
    	$scope.lastname = '';
    	$scope.birthdate = '';
    	$scope.password = '';
    	$scope.confirmPassword = '';
    	$scope.submitform.$setPristine();
    }

    $scope.reset = reset();

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
		console.log($scope.password);
		console.log($scope.confirmPassword);
		if ($scope.password != null && $scope.confirmPassword != null && $scope.password === $scope.confirmPassword) {
			return true;
		} else {
			return false;
		}
	}

	$scope.showMessage = function() {
		reset();
		var newM = angular.element('<div class="alert alert-success"><strong>Success!</strong> Indicates a successful or positive action.</div>');
	}

}])



