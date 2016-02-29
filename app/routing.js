(function () {
	'use strict';

	var app = angular.module ('ShareStand');

	app.config (['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
		$locationProvider.html5Mode ({
			enabled: true,
			requireBase: true
		});

		$urlRouterProvider.otherwise ('home');

		$stateProvider
			.state('login', {
				url: '/login',
				template: '<login></login>'
			})
			.state ('wantFood', {
				url: '/wantFood',
				template: '<want-food></want-food>'
			})
			.state ('haveFood', {
				url: '/haveFood',
				template: '<have-food></have-food>',
				data: {
					requiresAccount: true
				}
			})
			.state ('home', {
				url: '/home',
				template: '<home></home>'
			});
	}]);
} ());