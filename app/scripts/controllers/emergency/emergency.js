'use strict';

/**
 * @ngdoc function
 * @name ciipApp.controller:EmergencyCtrl
 * @description
 * # EmergencyCtrl
 * Controller of the ciipApp
 */
 
angular.module('ciipApp')
    .controller('EmergencyCtrl', function($rootScope,$scope,$timeout,$cacheFactory) {

    	$rootScope.active="emergency";
    	var cache=$cacheFactory.get('detailCache');
    	console.log(cache.get('name'));
        $timeout(function() {
            var map = new BMap.Map("emergencyMap");
            map.centerAndZoom(new BMap.Point(116.404, 39.915), 1);
            map.enableScrollWheelZoom();
        });
    });
