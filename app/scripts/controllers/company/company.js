'use strict';

/**
 * @ngdoc function
 * @name ciipApp.controller:CompanyCtrl
 * @description
 * # CompanyCtrl
 * Controller of the ciipApp
 */
angular.module('ciipApp')
  .controller('CompanyCtrl', function ($rootScope,$scope) {
   	
   	$rootScope.active="company";

   	    $scope.country = {};
        $scope.countries = [ // Taken from https://gist.github.com/unceus/6501985
            { name: '近一年' },
            { name: '近3个月'},
            { name: '近6个月' },
            { name: '近三年' }
        ];


  });
