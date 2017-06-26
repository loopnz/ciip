'use strict';

/**
 * @ngdoc function
 * @name ciipApp.controller:CompanyOrganOverviewCtrl
 * @description
 * # CompanyOrganOverviewCtrl
 * Controller of the ciipApp
 */
angular.module('ciipApp')
    .controller('CompanyOrganOverviewCtrl', function($scope) {
        $scope.$parent.active = "overview";
    });
