'use strict';

/**
 * @ngdoc service
 * @name ciipApp.$pcPopup
 * @description
 * # $pcPopup
 * Factory in the ciipApp.
 */
angular.module('ciipApp')
    .factory('$pcPopup', function($compile, $q, $loadTemplate, $backdrop, $rootScope) {

        var POPUP_TPL =
            '<div class="popup-container" ng-class="cssClass">' +
            '<div class="popup">' +
            '<div class="popup-head">' +
            '<h3 class="popup-title">{{title}}</h3>' +
            '<h5 class="popup-sub-title"  ng-if="subTitle">{{subTitle}}</h5>' +
            '</div>' +
            '<div class="popup-body">' +
            '</div>' +
            '<div class="popup-buttons" ng-show="buttons.length">' +
            '<button ng-repeat="button in buttons" ng-click="$buttonClicked(button, $event)" class="button" ng-class="button.type || \'button-default\'" >{{button.text}}</button>' +
            '</div>' +
            '</div>' +
            '</div>';

        function noop() {}

        function rejustPosition(el) {
            var height = el.outerHeight();
            var width = el.outerWidth();
            el.css({
                "marginTop": -height / 2,
                "marginLeft": -width / 2
            });
        }

        function createPopup(opts) {
            var options = angular.extend({
                scope: null,
                title: '',
                buttons: []
            }, opts || {});

            var popup = {};
            popup.scope = (options.scope || $rootScope).$new();
            var el = popup.el = angular.element(POPUP_TPL);
            popup.responseDeferred = $q.defer();
            popup.showDeferred = $q.defer();
            document.body.appendChild(popup.el[0]);
            popup.el.hide();

            popup.remove = function() {
                popup.el.fadeOut(function() {
                    popup.scope.$broadcast('$destroy');
                    popup.el.remove();
                });
            };


            popup.show = function() {
                var el=popup.el[0].querySelector('.popup');
                rejustPosition(angular.element(el));
                $backdrop.show();
                popup.el.fadeIn();
            };

            angular.extend(popup.scope, {
                title: options.title,
                buttons: options.buttons,
                subTitle: options.subTitle,
                cssClass: options.cssClass,
                $buttonClicked: function(button, event) {
                    var result = (button.onClick || noop).apply(popup, [event]);
                    event = event.originalEvent || event; //jquery events
                    if (!event.defaultPrevented) {
                        popup.responseDeferred.resolve(result);
                    }
                }
            });

            var url = "";
            if (options.templateUrl) {
                url = $loadTemplate.load(options.templateUrl);
            } else if (options.template) {
                url = options.template || options.content;
            }
            $q.when(url).then(function(template) {
                var popupBody = angular.element(el[0].querySelector('.popup-body'));
                if (template) {
                    popupBody.html(template);
                    $compile(el)(popup.scope);
                } else {
                    popupBody.remove();
                }
                popup.showDeferred.resolve(true);
            });

            return popup;
        }

        function showPopup(opts) {
            var popup = createPopup(opts);

            popup.showDeferred.promise.then(function() {

                popup.show();
                popup.responseDeferred.promise.then(function(res) {
                    popup.remove();
                    $backdrop.hide();
                    return res;
                });
            });
            return popup.responseDeferred.promise;
        }

        function showAlert(opts) {
            opts = opts || {};
            return showPopup(angular.extend({
                title: "警告框",
                buttons: [{
                    text: opts.okText || '确定',
                    type: opts.okType || 'button-positive',
                    onClick: function() {
                        return true;
                    }
                }]
            }, opts || {}));
        }

        function showConfirm(opts) {
            opts = opts || {};
            return showPopup(angular.extend({
                title: "确认框",
                buttons: [{
                    text: opts.cancelText || '取消',
                    type: opts.cancelType || 'button-default',
                    onClick: function() {
                        return false;
                    }
                }, {
                    text: opts.okText || '确定',
                    type: opts.okType || 'button-positive',
                    onClick: function() {
                        return true;
                    }
                }]
            }, opts || {}));
        }


        return {
            showPopup: function(opts) {
                return showPopup(opts);
            },
            showConfirm: function(opts) {
                return showConfirm(opts);
            },
            showAlert: function(opts) {
                return showAlert(opts);
            }
        };
    });
