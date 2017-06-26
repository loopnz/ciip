'use strict';

/**
 * @ngdoc function
 * @name ciipApp.controller:ServiceLocaldetailCtrl
 * @description
 * # ServiceLocaldetailCtrl
 * Controller of the ciipApp
 */
angular.module('ciipApp')
  .controller('ServiceLocaldetailCtrl', function ($scope,$stateParams) {
 	$scope.selected=0;
 	$scope.continent=$stateParams.continent;
 	
  });
