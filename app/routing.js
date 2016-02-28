app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: true
	});

	$urlRouterProvider.otherwise('home');

	$stateProvider
		.state('wantFood', {
			url: '/wantFood',
			template: '<want-food></want-food>'
		})
		.state('home', {
			url: '/home',
			template: '<home></home>'
		});
}]);