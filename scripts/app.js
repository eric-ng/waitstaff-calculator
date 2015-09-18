var app = angular.module('app', [
	'ngRoute',
	'ngAnimate'
])
.config([
	'$routeProvider', 
	function ($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'scripts/templates/home.html',
			controller: 'homeController',
			resolve: {}
		})
		.when('/newMeal', {
			templateUrl: 'scripts/templates/newMeal.html',
			controller: 'homeController',
			resolve: {}
		})
		.when('/myEarnings', {
			templateUrl: 'scripts/templates/myEarnings.html',
			controller: 'myEarningsController',
			resolve: {}
		})
		.otherwise('/');
	}
]);