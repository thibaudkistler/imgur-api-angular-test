'use strict';

/**
 * @ngdoc service
 * @name dribbleApp.user
 * @description
 * # user
 * Service in the dribbleApp.
 */
angular.module('dribbleApp')
  .service('Auth', function ($http, $q) {

  	var Auth = this;

  	Auth.postUser = function (newUser){
  		console.log(newUser);
  		var defer = $q.defer();

  		$http.post("http://towing.api.com/user.php", newUser)
  		.success(function(result){

  			defer.resolve(result);

  		})
  		.error(function(errorCode){
  			defer.reject(errorCode);
  		})

  		return defer.promise;
  	}

  	return Auth;
    
  });
