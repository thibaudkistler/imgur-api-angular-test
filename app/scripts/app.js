'use strict';

/**
 * @ngdoc overview
 * @name dribbleApp
 * @description
 * # dribbleApp
 *
 * Main module of the application.
 */
angular
  .module('dribbleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'toastr'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });


  })
  .run(function($rootScope, $http){
    $rootScope.token = "";
    $rootScope.endPoint = "https://api.imgur.com/3";
  })
