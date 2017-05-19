'use strict';

/**
 * @ngdoc overview
 * @name ciipApp
 * @description
 * # ciipApp
 *
 * Main module of the application.
 */
angular
    .module('ciipApp', [
        'ngAnimate',
        'ngCookies',
        'ui.router',
        'anim-in-out'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state({
                name: 'main',
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .state({
                name: 'about',
                url: '/about',
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            }).state({
                name: 'contact',
                url: '/contact',
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl',
                controllerAs: 'contact',
                onExit:function(){
                    
                }
            });
    });
