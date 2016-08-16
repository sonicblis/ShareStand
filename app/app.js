(function(){
	'use strict';

	var app = angular.module('ShareStand', ['firebase', 'ui.router', 'ct.ui.router.extras.dsr', 'ui.bootstrap', 'uiGmapgoogle-maps']);
	app.run(['logProvider', 'peopleService', '$rootScope', '$state', function(logProvider, peopleService, $rootScope, $state){
		logProvider.setLoggingLevels({
			warn: true,
			error: true,
			debug: false,
			info: true
		});

		peopleService.checkAuth();

		$rootScope.$on('$stateChangeStart', function(event, toState, toStateParams) {
			if (typeof toState.data !== 'undefined' && toState.data.requiresAccount === true && peopleService.user.authenticated === false){
				event.preventDefault();
				$rootScope.fromState = {
					state: toState,
					stateParams: toStateParams
				};
				$state.go('login');
			}
		});
	}]);
}());
