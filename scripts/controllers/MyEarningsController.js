app.controller('myEarningsController', [
	'$scope',
	'CalculatorService',
	function($scope, CalculatorService) {
		$scope.tipTotal = CalculatorService.getTipTotal();
		$scope.mealCount = CalculatorService.getMealCount();

		// handler for start over button
		$scope.reset = function () {
			$scope.submitted = false;
			$scope.tipTotal = 0;
			$scope.mealCount = 0;
			CalculatorService.resetCounters();
		};
	}
]);