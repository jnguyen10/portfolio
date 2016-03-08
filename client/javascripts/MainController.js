portfolio_app.controller('MainController', function($scope, $location, $anchorScroll){

	$scope.myInterval = 5000;
	$scope.noWrapSlides = false;
	var jbmi_pics = ['jbmi_1', 'jbmi_2', 'jbmi_3', 'jbmi_4'];
	var jbmi_names = ['JBMI - Front Page', 'JBMI - NBA Collection', 'JBMI - Breaks', 'JBMI - Shopping Cart'];
	var appt_pics = ['appt_1', 'appt_2', 'appt_3', 'appt_4'];
	var appt_names = ['Appointment Reminder - Python-based Appointment Tracker', 'Appointment Reminder', 'Appointment Reminder', 'Appointment Reminder'];
	var jamz_pics = ['jamz_1', 'jamz_2', 'jamz_3', 'jamz_4'];
	var jamz_names = ['JAMZ - iOS/Swift Music Player', 'JAMZ', 'JAMZ', 'JAMZ'];

	$scope.jbmi_slides = [];
	$scope.appt_slides = [];
	$scope.jamz_slides = [];

	$scope.addSlide = function(index){
		$scope.jbmi_slides.push({
			image: 'images/'+jbmi_pics[index]+'.png',
			name: jbmi_names[index]
		});

		$scope.appt_slides.push({
			image: 'images/'+appt_pics[index]+'.png',
			name: appt_names[index]
		});

		$scope.jamz_slides.push({
			image: 'images/'+jamz_pics[index]+'.png',
			name: jamz_names[index]
		});
	}

	for (var i=0; i<jbmi_names.length; i++){
		$scope.addSlide(i);

	}

	// Scroll Tags
	$scope.goToProjects = function() {
		$location.hash('bottom');

		$anchorScroll();
	}

	$scope.goToMain = function() {
		$location.hash('main-content');

		$anchorScroll();
	}
})

