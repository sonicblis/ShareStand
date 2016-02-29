(function(){
	'use strict';

	var app = angular.module('ShareStand');

	app.controller("LoginController", ['peopleService', function(peopleService){
		this.login = function(){
			peopleService.login();
		};
	}]);
}());

