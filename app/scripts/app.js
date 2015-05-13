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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/details/:id', {
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl',
        resolve: {

        }
      })
      .otherwise({
        redirectTo: '/'
      });


  })
  .run(function($rootScope, $http){
    $rootScope.token = "";
    $rootScope.endPoint = "https://api.imgur.com/3";

    $http.defaults.headers.common['Authorization'] = "Client-ID 65cf3d5474e3e74"
  })
