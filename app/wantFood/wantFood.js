app.directive('wantFood',[function(){
	return {
		restrict: 'E',
		controller: 'WantFoodController',
		templateUrl: 'app/wantFood/wantFood.html'
	}
}]);
