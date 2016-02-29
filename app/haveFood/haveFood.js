(function () {
	'use strict';

	var app = angular.module ('ShareStand');

	app.directive ("haveFood", [function () {
		return {
			restrict: 'E',
			templateUrl: 'app//haveFood/haveFood.html',
			controller: 'HaveFoodController as haveFoodController',
			link: function ($scope, $el, $attr) {

			}
		}
	}]);
} ());

