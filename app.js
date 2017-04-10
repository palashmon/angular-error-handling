var app = angular.module('myFirstApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider

		.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'HomeController'
	})

	.when('/Schedule', {
		templateUrl: 'pages/schedule.html',
		controller: 'ScheduleController'
	})

	.when('/Request', {
		templateUrl: 'pages/request.html',
		controller: 'RequestController'
	})

	.otherwise({
		redirectTo: '/'
	});
});

app.controller('HomeController', function($scope) {
	$scope.message = 'Hello from Home controller!';
});

app.controller('ScheduleController', function($scope) {
	$scope.message = 'Welcome this is the Schedule page!';

	// Testng simple error
	someFunction();
});

app.controller('RequestController', function($scope) {
	$scope.message = 'Welcome to the Request page';

	// Testing api call error
	var onSuccess = function(response) {
		$scope.status = response.status;
		$scope.data = response.data;
	};

	var onError = function(response) {
		$scope.status = response.status;
		$scope.data = response.data;
	}

	$scope.getStudent = function() {
		$http.get("/getStudent").then(onSuccess, onError);
	};
});

// Exception Handler
app.factory('$exceptionHandler', ['$log', function($log) {

	return function(exception, cause) {
		//Exception.LogError(exception);
		console.error({
			exception: exception,
			cause: cause
		});
	};

}]);