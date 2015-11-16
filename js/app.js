'use strict'		

angular.module('SignUpApp', [])
.controller('MyCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.email = {
        text: 'me@example.com'
    };

	$scope.compareTo = function() {
		if ($scope.password != null && $scope.passwordConfirm != null && $scope.password === $scope.passwordConfirm) {
			return true;
		}
	}
    
}]);




