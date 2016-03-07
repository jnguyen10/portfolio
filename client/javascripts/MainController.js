portfolio_app.controller('MainController', function($scope, $location, $anchorScroll){

	$scope.products = [];
	$scope.breaks = [];
	$scope.product_count = -3;

	$scope.myInterval = 5000;
	$scope.noWrapSlides = false;
	var players = ['code_bkg', 'jbmi_bkg', 'kat_russ'];
	var product_type = ['nba/breaks', 'nba/breaks', 'nba/breaks']
	var names = ['2015-2016 Panini Court Kings - 2 Box Break', 'Anthony Davis - Box Topper', 'On-Card Rookie Autographs'];


	var slides = $scope.slides = [];

	$scope.addSlide = function(index){
		slides.push({
			image: 'images/'+players[index]+'.png',
			name: names[index],
			product_type: product_type[index]
		});
	}

	for (var i=0; i<names.length; i++){
		$scope.addSlide(i);

	}

	// Scroll Tags
	$scope.goToJBMI = function() {
		$location.hash('jbmi');

		$anchorScroll();
	}

	$scope.goToMain = function() {
		$location.hash('main-content');

		$anchorScroll();
	}
})

