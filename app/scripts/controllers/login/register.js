'use strict';

/**
 * @ngdoc function
 * @name ciipApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the ciipApp
 */
angular.module('ciipApp')
  .controller('RegisterCtrl', function ($rootScope,$scope) {
   	
   		$rootScope.bgContainer=true;//用来控制.bg_container的背景是否需要100%高;


   		$scope.$on('$destroy',function(){
   			$rootScope.bgContainer=false;
   		});

  });
