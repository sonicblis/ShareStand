(function () {
	'use strict';

	var app = angular.module ('ShareStand');

	app.controller ("WantFoodController", ['uiGmapGoogleMapApi', '$http', WantFoodController]);

	function WantFoodController (uiGmapGoogleMapApi, $http) {
		var self = this;

		self.map = {
			center: {
				latitude: 45, longitude: -73
			},
			zoom: 12
		};

		uiGmapGoogleMapApi.then(function(maps){
			$http.get('https://maps.googleapis.com/maps/api/geocode/json?address=3173 Head River Rd, Virginia Beach, VA&key=AIzaSyCl78XL55A3KExJtetl82YJr6Zbnlr9Wmc').then(function(geoInfo){
				self.map.center.latitude = geoInfo.data.results[0].geometry.location.lat;
				self.map.center.longitude = geoInfo.data.results[0].geometry.location.lng;
			});
		})
	};
}());