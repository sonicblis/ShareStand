(function(){
	'use strict';

	var app = angular.module('ShareStand');

	app.directive('wantFood',[function(){
		return {
			restrict: 'E',
			controller: 'WantFoodController as wantFood',
			templateUrl: 'app/wantFood/wantFood.html'
		}
	}]);
}());
