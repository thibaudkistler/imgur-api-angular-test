'use strict';

/**
 * @ngdoc function
 * @name dribbleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dribbleApp
 */
angular.module('dribbleApp')
  .controller('MainCtrl', function ($scope, images, $location) {

  	var init = function init(){
  		$scope.imageService = images;

	  	$scope.imageService.getViral().then(
			function(res){
				//success
				$scope.images = res;
			}
	  	)
  	}	

  	$scope.goToDetails = function goToDetails(image){
  		$location.path("/details/" + image.id);
  	}

  	init();
});

  	