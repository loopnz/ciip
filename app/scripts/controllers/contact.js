'use strict';

/**
 * @ngdoc function
 * @name ciipApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the ciipApp
 */
angular.module('ciipApp')
    .controller('ContactCtrl', function($pcModal, $scope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.name = "tom";
        $scope.title = "title";
      
       $pcModal.fromTemplateUrl("views/contactModal.html", { scope: $scope }).then(function(modal){
       		$scope.modal=modal;
       });

        $scope.openModal = function() {
            $scope.modal.show();
        };
        $scope.closeModal = function() {
            $scope.modal.hide();
        };
    });
