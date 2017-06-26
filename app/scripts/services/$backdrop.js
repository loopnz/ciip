'use strict';

/**
 * @ngdoc service
 * @name ciipApp.$backdrop
 * @description
 * # $backdrop
 * Factory in the ciipApp.
 */
angular.module('ciipApp')
    .factory('$backdrop', function() {

        var count = 0;

        var el = angular.element('<div class="bg"></div>');

        document.body.appendChild(el[0]);

        el.hide();

        return {
            show: function() {
                count++;
                if (count === 1) {
                    el.fadeIn();
                }

            },
            hide: function() {
                count--;
                if (count === 0) {
                    el.fadeOut();
                }
            }
        };
    });
