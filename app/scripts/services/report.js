'use strict';

/**
 * @ngdoc service
 * @name ciipApp.report
 * @description
 * # report
 * Factory in the ciipApp.
 */
angular.module('ciipApp').factory('report', function() {

        function report(paramObj, level) {
            var reportUrl = "http://localhost:8055/report";
            var  paramArray = [],
                paramString = '';
            for (var  key in paramObj) {
                paramArray.push(key + '=' + encodeURIComponent(paramObj[key]));
            }

            reportUrl += (reportUrl.indexOf('?') > -1 ? '&' : '?') + paramArray.join('&');

            new Image().src = reportUrl;
        }

        window.onerror = function(msg, url, row, col, error) {

            var reportMsg = {
                "msg": msg,
                "url": url,
                "row": row,
                "col": col
            }; 
            report(reportMsg);
        };


        return report;
});
