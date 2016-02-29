(function () {
	'use strict';

	var app = angular.module ('ShareStand');

	app.service ('peopleService', ['$q', 'firebase', '$firebaseObject', 'firebaseArrayWatcher', 'logProvider', '$rootScope', function ($q, firebase, $firebaseObject, firebaseArrayWatcher, logProvider, $rootScope) {
		var _this = this,
			userInfo = function (authData) {
				this.name = authData.google.displayName;
				this.id = authData.uid;
				this.icon = authData.google.profileImageURL;
				this.authenticated = true;
				this.lastLoggedIn = Firebase.ServerValue.TIMESTAMP;
			};

		//internal
		function setUserInfo(authInfo) {
			logProvider.info ('peopleService', 'authInfo provided to setUserInfo', authInfo);
			var userInfo = {
				imgPath: authInfo.google.profileImageURL,
				name: authInfo.google.displayName
			};
			logProvider.info ('peopleService', 'userInfo from auth', userInfo);
			firebase.people.child (authInfo.uid).set (userInfo);
		}
		function loadUser(user) {
			//hook up the current user's ref
			_this.userRef = firebase.people.child (user.uid);
			_this.user = $firebaseObject (_this.userRef);

			//update the user's info
			var _userInfo = new userInfo (user);
			logProvider.info ('userProvider', 'updating user information', _userInfo);
			_this.userRef.update (_userInfo);
			_this.user.$loaded(function(){
				_this.user.$isLoaded = true;
			});
		}

		//exposed
		this.user = {authenticated: false, $isLoaded: false};
		this.userRef = {};
		this.checkAuth = function () {
			var auth = firebase.root.getAuth ();
			if (typeof auth !== 'undefined' && auth != null) {
				loadUser (auth);
			}
			else{
				_this.user.$isLoaded = true;
			}
		};
		this.login = function () {
			logProvider.info ('peopleService', 'user being logged in');
			firebase.root.authWithOAuthPopup ('google', function (error, auth) {
				if (!error) {
					logProvider.info ('peopleService', 'user info retrieved from google', auth);
					setUserInfo (auth);
					if (typeof $rootScope.fromState !== 'undefined' && typeof $rootScope.fromState.state === 'string'){
						$state.go($rootScope.fromState.state, $rootScope.fromState.stateParams);
					}
				}
				else {
					console.error ('couldn\'t log the user in', error);
				}
			}, {
				scope: 'email'
			});
		}
	}]);
} ());