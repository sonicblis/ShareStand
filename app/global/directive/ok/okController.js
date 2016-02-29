(function(){
	'use strict';

	var app = angular.module('ShareStand');

	app.controller('OKController', ['$uibModalInstance', function ($uibModalInstance) {
		this.ok = function(){
			$uibModalInstance.close();
		};
	}]);
}());
