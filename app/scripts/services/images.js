'use strict';

/**
 * @ngdoc service
 * @name dribbleApp.images
 * @description
 * # images
 * Service in the dribbleApp.
 */
angular.module('dribbleApp')
  .service('images', function ($http, $q, $rootScope) {
    var images = this

    images.init = function init(){

    }

    images.getViral = function getViral(){

    	var defer = $q.defer();

    	$http.get($rootScope.endPoint + '/gallery/hot/viral/0.json').
		  success(function(res, status) {
		    defer.resolve(res);
		  }).
		  error(function(err, status) {
		    defer.resolve(err);
		  });

		  return defer.promise;
    }

    images.getImageById = function getImageById(id){
    	var defer = $q.defer();

    	$http.get($rootScope.endPoint + '/image/' + id).
		  success(function(res, status) {
		    defer.resolve(res);
		  }).
		  error(function(err, status) {
		    defer.resolve(err);
		  });

		  return defer.promise;
    }

    images.getImageCommentsById = function getImageCommentsById(id){
    	var defer = $q.defer();

    	$http.get($rootScope.endPoint + '/gallery/image/' + id + "/comments/best").
		  success(function(res, status) {
		    defer.resolve(res);
		  }).
		  error(function(err, status) {
		    defer.resolve(err);
		  });

		  return defer.promise;
    }



  });
