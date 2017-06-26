'use strict';

/**
 * @ngdoc function
 * @name ciipApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ciipApp
 */
angular.module('ciipApp')
  .controller('MainCtrl', function ($rootScope,$scope,$cacheFactory) {


  	$scope.msg="this is can say";

  	var cache=$cacheFactory.get('detailCache')||$cacheFactory('detailCache');

  	cache.put('name',"埃及");

  	     $scope.country = {};
        $scope.countries = [ // Taken from https://gist.github.com/unceus/6501985
            { name: '近一年' },
            { name: '近3个月'},
            { name: '近6个月' },
            { name: '近三年' }
        ];

    
  });
