'use strict';

/**
 * @ngdoc directive
 * @name ciipApp.directive:tabmenu
 * @description
 * # tabmenu
 */
angular.module('ciipApp')
    .directive('tabmenu', function() {
        return {
            restrict: 'A',
            scope:{
                selected:"="
            },
            link: function postLink(scope, element, attrs) {
                var head = angular.element(element).find('[tabhead]');
                var body = angular.element(element).find('[tabbody]');

                head.children().on('click', function() {
                    var index = angular.element(this).index();
                    head.children().removeClass('active');
                    angular.element(this).addClass('active');
                    body.children().hide();
                    angular.element(body.children()[index]).fadeIn();
                    scope.selected=index;
                    scope.$apply();
                });

                body.children().hide();
                head.children().removeClass('active');
                angular.element(body.children()[scope.selected]).show();
                angular.element(head.children()[scope.selected]).addClass('active');
            }
        };
    });
