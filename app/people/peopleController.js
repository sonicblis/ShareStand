(function () {
    'use strict';

    var app = angular.module ('ShareStand');

    app.controller ('peopleController', ['$scope', 'peopleService', '$rootScope', 'activityProvider', 'logProvider', function ($scope, peopleService, $rootScope, activityProvider, logProvider) {
        $scope.people = peopleService.people;
        $scope.registerUser = peopleService.registerUser;

        $scope.selectPerson = function (person) {
            $rootScope.selectedPerson = person;
            $rootScope.selectedDate = new Date ();
            activityProvider.reconcileDaysActivities ();
        };

        peopleService.peopleLoaded.then (function () {
            if ($scope.people.length > 0) {
                $rootScope.selectedPerson = $scope.people[0];
            }
        });
    }]);
}());