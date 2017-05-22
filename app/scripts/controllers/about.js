'use strict';

/**
 * @ngdoc function
 * @name ciipApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ciipApp
 */
angular.module('ciipApp')
    .controller('AboutCtrl', function($scope, $backdrop, $timeout, $pcPopup) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];


        $scope.openBg = function() {
            $backdrop.show();
            $timeout(function() {
                $backdrop.hide();
            }, 3000);
        };

        $scope.alert = function() {
            $pcPopup.showAlert({
                title: "警告",
                template: "发生错误"
            });
        };

        $scope.confirm = function() {
            var popup = $pcPopup.showConfirm({
                title: "确认框",
                template: "确定删除吗"
            });

            popup.then(function(res) {
                if (res) {
                    console.log('do confirm');
                } else {
                    console.log('click cancel,do nothing');
                }
            });
        };

        $scope.showPopup = function() {
            var popup = $pcPopup.showPopup({
                templateUrl: "views/popup.html",
                title: "提示框",
                cssClass:"popup-wrap",
                buttons: [{
                    onClick: function(e) {
                        console.log(e.target);
                        return true;
                    },
                    text: "确认"
                }]
            });
            popup.then(function(res) {
                console.log('clicked', res);
            });
        };

    });
