(function () {
	'use strict';

	var app = angular.module ('ShareStand');

	app.controller ("HaveFoodController", ['peopleService', '$uibModal', function (peopleService, $uibModal) {
		this.user = peopleService.user;
	}]);
} ());
