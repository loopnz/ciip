'use strict';

/**
 * @ngdoc function
 * @name ciipApp.controller:ServiceLocalCtrl
 * @description
 * # ServiceLocalCtrl
 * Controller of the ciipApp
 */
angular.module('ciipApp')
  .controller('ServiceLocalCtrl', function ($scope,$state,$stateParams) {
    
  	$scope.selected=$stateParams.continent;


  });
