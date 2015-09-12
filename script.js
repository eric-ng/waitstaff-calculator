angular.module('app', [])
.controller('mainCtrl', function($scope) {
	$scope.submitted = false;

	$scope.mealPrice = 0;
	$scope.taxRate = 0;
	$scope.tipPercentage = 0;
	$scope.customerSubtotal = 0;
	$scope.customerTip = 0;
	$scope.tipTotal = 0;
	$scope.mealCount = 0;

	$scope.submit = function () {
		if( $scope.inputForm.$valid ) {
		    //console.log('The form is valid');
		    $scope.mealCount++;
		    $scope.customerSubtotal = $scope.mealPrice * (1 + $scope.taxRate / 100);
		    $scope.customerTip = $scope.mealPrice * (1 + $scope.taxRate / 100) * ($scope.tipPercentage / 100);
		    $scope.tipTotal += $scope.customerTip;
		    $scope.inputForm.$submitted = false;
		} else {
		    //console.log('The form is invalid');
		}
	};

	$scope.cancel = function () {
		$scope.mealPrice = 0;
		$scope.taxRate = 0;
		$scope.tipPercentage = 0;
		$scope.inputForm.$submitted = false;
	};

	// handler for start over button
	$scope.reset = function () {
		$scope.submitted = false;
		$scope.mealPrice = 0;
		$scope.taxRate = 0;
		$scope.tipPercentage = 0;
		$scope.customerSubtotal = 0;
		$scope.customerTip = 0;
		$scope.tipTotal = 0;
		$scope.mealCount = 0;
	};

	$scope.numberMatching = new RegExp(/^\d*\.?\d+$/);
});