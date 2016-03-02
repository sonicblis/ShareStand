(function () {
	'use strict';

	var app = angular.module('ShareStand');

	app.directive("eula", ['peopleService', function (peopleService) {
		return {
			restrict: 'E',
			scope: true,
			templateUrl: 'app/haveFood/eula/eula.html',
			controllerAs: 'eulaController',
			controller: [function () {
				var self = this;

				this.user = peopleService.user;
				this.criteriaItems = [
					{
						agreed: false,
						terms: 'The food was produced by you or someone in your family'
					},
					{
						agreed: false,
						terms: 'The food was produced or grown withing 10 miles of where it\'s being provided'
					},
					{
						agreed: false,
						terms: 'The food was produced using sustainable methods of production'
					}
				];
				this.allAgreed = false;
				this.address = {};
				this.valid = function () {
					return self.allAgreed && self.addressForm.$valid;
				};
				this.toggleCriteriaItem = function (item) {
					item.agreed = !item.agreed;
					self.allAgreed = self.criteriaItems.map(function (item) {
							return item.agreed ? 1 : 0;
						}).join('') === '111';
				};
				this.accept = function () {
					peopleService.userRef.child('hasAgreed').set(true);
					peopleService.userRef.child('address').set(self.address);
				};
			}],
			link: function ($scope, $el, $attr) {

			}
		}
	}]);
}());