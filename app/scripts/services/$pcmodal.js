'use strict';

/**
 * @ngdoc service
 * @name ciipApp.$pcModal
 * @description
 * # $pcModal
 * Service in the ciipApp.
 */
angular.module('ciipApp')
    .service('$pcModal', function($compile, $rootScope, $loadTemplate) {
        // AngularJS will instantiate a singleton by calling "new" on this function

        function Modal(options) {
            this.$el = options.$el;
            this.el = options.el;
            this.modalEl = options.modalEl;
            this.scope = options.scope;
        }

        Modal.prototype.show = function() {
            var self = this;
            self.$el.on("click", function(e) {
                var target = angular.element(e.target);
                if (!target.closest('.modal').length) {
                    self.hide();
                }
            });
            self.$el.fadeIn();
        };

        Modal.prototype.hide = function() {
            this.$el.off('click');
            this.$el.fadeOut();
        };

        Modal.prototype.remove = function() {
            this.$el.remove();
            this.scope.$broadcast('$destroy');
        };

        function rejustPosition(el) {
            var height = el.outerHeight();
            var width = el.outerWidth();
            el.css({
                "marginTop": -height / 2,
                "marginLeft": -width / 2
            });
        }

        function createModal(template, options) {
            var scope;
            if (options.scope) {
                scope = options.scope.$new();
            } else {
                scope = $rootScope.$new();
            }
            var element = $compile('<pc-modal>' + template + '</pc-modal>')(scope);
            element.hide();
            angular.element(document.body).append(element);

            options.$el = element;
            options.el = element[0];
            options.modalEl = options.el.querySelector('.modal');
            rejustPosition(angular.element(options.modalEl));
            options.scope = scope;
            var modal = new Modal(options);
            scope.$parent.$on('$destroy', function() {
                modal.remove();
            });
            return modal;
        }

        this.fromTemplateUrl = function(templateUrl, options) {

            return $loadTemplate.load(templateUrl).then(function(template) {

                return createModal(template, options);
            });
        };

        this.fromTemplate = function(templateStr, options) {

            return createModal(templateStr, options);
        };

    });
