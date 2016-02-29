(function() {
	'use strict';

	var app = angular.module ('ShareStand');

	app.directive ("login", [function () {
		return {
			restrict: 'E',
			templateUrl: 'app/login/login.html',
			controller: 'LoginController as loginController',
			link: function ($scope, $el, $attr) {

			}
		}
	}]);
}());
