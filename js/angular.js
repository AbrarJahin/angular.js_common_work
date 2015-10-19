var app = angular.module('myApp', []);
		app.controller('myCtrl', function($scope)	//$scope = whole model
		{
			$scope.firstName= "John";
			$scope.lastName= "Doe";
		});