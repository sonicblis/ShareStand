(function () {
	'use strict';

	var app = angular.module('ShareStand');

	app.controller("HaveFoodController", ['peopleService', '$uibModal', 'firebase', 'firebaseArrayWatcher', function (peopleService, $uibModal, firebase, firebaseArrayWatcher) {
		var self = this;
		this.user = peopleService.user;
		this.foodItem = {ownerId: peopleService.user.$id};
		this.listings = firebaseArrayWatcher.getWatcher(firebase.haveFood.orderByChild('ownerId').valueOf(self.user.id));
		this.saveFood = function () {
			if (angular.isNumber(self.foodItem.goodForDays)){
				self.foodItem.expires = new Date();
				self.foodItem.expires.setDate(self.foodItem.expires.getDate() + self.foodItem.goodForDays);
			}
			firebase.haveFood.push(firebase.cleanAngularObject(self.foodItem));
			self.foodItem = {ownerId: peopleService.user.$id};
		};
		this.add = function(listing){
			firebase.haveFood.child(listing.$id).child('quantity').set(listing.quantity + 1);
		};
		this.subtract = function(listing){
			firebase.haveFood.child(listing.$id).child('quantity').set(listing.quantity - 1);
		};
	}]);
}());