'use strict';

/**
 * @ngdoc function
 * @name dribbleApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the dribbleApp
 */
angular.module('dribbleApp')
  .controller('SignupCtrl', function ($scope, toastr, Auth) {
   


  	$scope.signUp=function (){

  		Auth.postUser($scope.user)
  		.then(function(result){

  			//fonction qui s'execute si defer.resolve
  			toastr.success("Congrats! user created");

  		}, function(error){

  			//fonction qui s'execute si defer.reject
  			toastr.error("Problem creating user");
  			console.log(error)
  		})

  	}


  });
