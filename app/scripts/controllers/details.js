'use strict';

/**
 * @ngdoc function
 * @name dribbleApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the dribbleApp
 */
angular.module('dribbleApp')
  .controller('DetailsCtrl', function ($scope, $route, images) {
  	var init = function init(){
  		$scope.imageService = images;

  		if($route.current.params.id){
  			$scope.imageService.getImageById($route.current.params.id)
  			.then(function(res){
  				$scope.image = res.data;
  			})

  			$scope.imageService.getImageCommentsById($route.current.params.id)
  			.then(function(res){
  				$scope.comments = res.data;
  			})
  		}
  	}

  	init();

  });
