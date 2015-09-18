app.factory('CalculatorService', [
	function () {
		var tipTotal = 0;
		var mealCount = 0;
		return {
			updateTipTotal: function (valueToAdd) {
				tipTotal += valueToAdd;
			},
			updateMealCount: function () {
				mealCount++;
			},
			getTipTotal: function () {
				return tipTotal;
			},
			getMealCount: function () {
				return mealCount;
			},
			resetCounters: function () {
				tipTotal = 0;
				mealCount = 0;
			}
		};
	}
]);