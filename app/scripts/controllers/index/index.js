'use strict';

/**
 * @ngdoc function
 * @name ciipApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the ciipApp
 */
angular.module('ciipApp')
    .controller('IndexCtrl', function($rootScope, $scope, $timeout) {
        $rootScope.active = "index";
        $timeout(function() {
            var map = new BMap.Map("map");
            map.centerAndZoom(new BMap.Point(116.404, 39.915), 1);
            map.enableScrollWheelZoom();
        });

        $scope.country = {};
        $scope.countries = [ // Taken from https://gist.github.com/unceus/6501985
            { name: '近一年' },
            { name: '近3个月'},
            { name: '近6个月' },
            { name: '近三年' }
        ];


    });
