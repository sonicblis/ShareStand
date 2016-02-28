app.directive ("home", [function () {
	return {
		restrict: 'E',
		templateUrl: 'app/home/home.html',
		controller: 'HomeController',
		link: function ($scope, $el, $attr) {

		}
	}
}]);