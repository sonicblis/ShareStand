(function () {
	'use strict';

	var app = angular.module ('ShareStand');

	app.config(function(uiGmapGoogleMapApiProvider) {
		uiGmapGoogleMapApiProvider.configure({
			key: 'AIzaSyAzusH0gxLQhOm7JWPwOyNtKwd5jddx3o4',
			v: '3.20', //defaults to latest 3.X anyhow
			libraries: 'weather,geometry,visualization'
		});
	});
} ());
