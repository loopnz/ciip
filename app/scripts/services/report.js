'use strict';

/**
 * @ngdoc service
 * @name ciipApp.report
 * @description
 * # report
 * Factory in the ciipApp.
 */
angular.module('ciipApp')
    .factory('report', function() {

        function report(paramObj, level) {
            var reportUrl = "http://localhost:8055/report";
            let paramArray = [],
                paramString = '';
            for (let key in paramObj) {
                paramArray.push(key + '=' + encodeURIComponent(paramObj[key]));
            }

            reportUrl += (reportUrl.indexOf('?') > -1 ? '&' : '?') + paramArray.join('&');

            new Image().src = reportUrl;
        }

        window.onerror = function(msg, url, row, col, error) {
            /*console.log('onerror 错误信息 ↙');
            console.log(msg)
            if (error) {
                console.error(error.stack || msg);
            }*/
            var reportMsg = {
                msg: msg,
                url: url,
                row: row,
                col: col,
            }; // 错误信息
            //console.log(reportMsg)
            report(reportMsg); // 将消息上报到错误收集平台
        };


        return report;
    });
