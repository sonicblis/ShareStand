(function () {
	'use strict';

	var app = angular.module('ShareStand');

	app.controller("HaveFoodController", ['peopleService', '$uibModal', 'firebase', function (peopleService, $uibModal, firebase) {
		var self = this;
		this.user = peopleService.user;
		this.foodItem = {ownerId: peopleService.user.$id};
		this.saveHaveFood = function () {
			firebase.haveFood.push(firebase.cleanAngularObject(self.foodItem));
		};
	}]);
}());