'use strict';

/**
 * @ngdoc directive
 * @name ciipApp.directive:dropdownmenu
 * @description
 * # dropdownmenu
 */
angular.module('ciipApp')
    .directive('dropdownmenu', function() {
        return {
            restrict: 'A',
            link: function postLink(scope, element, attrs) {

                var li = angular.element(element);
                li.on('mouseenter', function() {
                    var ul = angular.element(this).find('.dropdownmenu');
                        ul.slideDown();

                });

                li.on('mouseleave', function() {
                    var ul = angular.element(this).find('.dropdownmenu');
                        ul.hide();
                });

                li.on('click',".dropdownmenu li",function(){
                     var ul = angular.element(this).parent();
                    if (ul.is(":visible")) {
                        ul.hide();
                    }
                });
            }
        };
    });
