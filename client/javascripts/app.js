// app.js to create angular module and create routes for partials
// "angularMoment" directive used to customize time
var portfolio_app = angular.module('portfolio_app', ['ui.router','angularMoment', 'ui.bootstrap', 'ngAnimate', 'infinite-scroll']);

// Partials
portfolio_app.config(function($stateProvider, $urlRouterProvider, $locationProvider){

	$urlRouterProvider.otherwise('/home');

	$stateProvider
		// Home states and nested views
		.state('home', {
			url: '/home',
			// for a single home page view
			templateUrl: 'partials/projects.html'

			// for multi-home page views
			// views: {
			// 	'about_me@': {
			// 		templateUrl: 'partials/about_me.html'
			// 	},

			// 	'projects@': {
			// 		template: 'partials/projects.html'
			// 	}
			// }
		})
			// nested pages
			.state('home.jbmi', {
				url: '/jbmi',
				templateUrl: 'partials/jbmi.html'
			})

			.state('home.appt', {
				url: '/appt',
				templateUrl: 'partials/appt.html'
				// controller: function($scope) {
				// 	$scope.players = ['Scope', 'Inside', 'app.js'];
				// }
			})

			.state('home.jamz', {
				url: '/jamz',
				// template: 'Template can just be any arbitrary text.'
				templateUrl: 'partials/jamz.html'
			})

		// About me page and multiple named views
		// .state('about_me', {
		// 	url: '/about_me',
		// 	// testing multiple views (in this case two columns)
		// 	views: {
		// 		// main template (relatively named)
		// 		'': {
		// 			templateUrl: 'partials/about_me.html'
		// 		},

		// 		// child view, columnOne (absolutely named)
		// 		'columnOne@about_me': {
		// 			template: 'Look! I am column one!'
		// 		},

		// 		'columnTwo@about_me': {
		// 			templateUrl: 'partials/hobbies.html',
		// 			controller: 'MainController'
		// 		}
		// 	}
		// })

	// use in conjuction with base tag in index.html to remove hashbang
	//$locationProvider.html5Mode(true);
});
