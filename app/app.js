var app = angular.module('angularApp', ['firebase', 'ui.router', 'ct.ui.router.extras.dsr']);
app.run(['logProvider', function(logProvider){
    logProvider.setLoggingLevels({
        warn: true,
        error: true,
        debug: false,
        info: true
    });
}]);