'use strict';

/**
 * @ngdoc service
 * @name ciipApp.$loadTemplate
 * @description
 * # $loadTemplate
 * Factory in the ciipApp.
 */
angular.module('ciipApp')
  .factory('$loadTemplate', function ($http,$templateCache) {
    return {
      load: function (url) {
        return $http.get(url,{cache:$templateCache}).then(function(response){
          return response.data&&response.data.trim();
        });
      }
    };
  });
