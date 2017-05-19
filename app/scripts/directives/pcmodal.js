'use strict';

/**
 * @ngdoc directive
 * @name ciipApp.directive:pcModal
 * @description
 * # pcModal
 */
angular.module('ciipApp')
    .directive('pcModal', function() {
        return {
            transclude: true,
            replace:true,
            controller: [function() {}],
            template: '<div class="modal-backdrop">' +
                '<div class="modal-backdrop-bg"></div>' +
                '<div class="modal-wrapper" ng-transclude></div>' +
                '</div>'
        };
    });

angular.module('ciipApp')
    .directive('pcModalView', function() {
        return {
        	compile:function(element){
        		element.addClass('modal');
        	}
        };
    });
