(function(){
	'use strict';

	var app = angular.module('ShareStand');

	app.directive ("ok", [function () {
		return {
			restrict: 'E',
			scope: {title: '@', message: '@'},
			templateUrl: 'app/global/directive/ok/ok.html',
			link: function ($scope, $el, $attr) {

			}
		}
	}]);
}());
