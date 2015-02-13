//Define angular app
var app = angular.module('app', ['ngRoute', 'ngAnimate'])

//configure application routes
app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/src/views/home.html',
        controller: 'main-controller'
      })

      .when('/view1', {
        templateUrl: '/src/views/view1.html',
        controller: 'main-controller'
      })

      .when('/view2', {
        templateUrl: '/src/views/view2.html',
        controller: 'main-controller'
      })

      .otherwise({
      	redirectTo: '/#'
      });

    $locationProvider.html5Mode(false);
}])

//The main controller
app.controller('main-controller', function($scope){
	$scope.angularTest = "Angular is working correctly!";




});