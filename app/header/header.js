(function () {
	'use strict';

	var app = angular.module ('ShareStand');

	app.directive ("header", function () {
		return {
			restrict: 'E',
			templateUrl: 'app/header/header.html',
			controller: 'HeaderController',
			link: function (scope, el, attrs) {

			}
		}
	});
} ());