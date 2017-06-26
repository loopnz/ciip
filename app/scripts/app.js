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
        'ui.select',
        'ngSanitize'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/login/login");

        $stateProvider
            .state({
                name: 'login',
                url: '/login',
                templateUrl: 'views/login/loginIndex.html',
                controller: 'LoginindexCtrl',
                abstract: true
            }).state({
                name: 'login.login',
                url: '/login',
                templateUrl: 'views/login/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'login'
            }).state({
                name: 'login.register',
                url: '/register',
                templateUrl: 'views/login/register.html',
                controller: 'RegisterCtrl'
            }).state({
                name: 'login.findPwd',
                url: '/findPwd',
                templateUrl: 'views/login/findPwd.html'
            })
            .state({
                name: 'main',
                url: '/main',
                templateUrl: 'views/index/main.html',
                controller: 'MainCtrl',
                abstract: true
            }).state({
                name: 'main.index',
                url: '/index',
                templateUrl: 'views/index/index.html',
                controller: 'IndexCtrl',
                controllerAs: 'index'
            }).state({
                name:'main.service',
                url:'/service',
                template:'<div ui-view class="fade-in"></div>'
            }).state({
                name:'main.service.local',
                url:'/local/:continent',
                templateUrl:'views/service/local.html',
                controller:'ServiceLocalCtrl'
            }).state({
                name:'main.service.localDetail',
                url:'/localDetail/:continent',
                templateUrl:'views/service/localdetail.html',
                controller:'ServiceLocaldetailCtrl'
            }).state({
                name:'main.service.business',
                url:'/business',
                templateUrl:'views/service/business.html',
                controller:'ServiceBusinessCtrl'
            })
            .state({
                name: 'main.emergency',
                url: '/emergency',
                template:'<div ui-view class="fade-in"></div>',
                controller: 'EmergencyCtrl',
                controllerAs: 'emergency'
            }).state({
                name:'main.emergency.emergency',
                url:'/emergency',
                templateUrl:'views/emergency/emergency/emergency.html',
                controller: 'EmergencyEmergencyIndexCtrl'
            }).state({
                name:'main.emergency.emergencydetail',
                url:'/emergencydetail',
                templateUrl:'views/emergency/emergency/detail.html', 
                controller: 'EmergencyEmergencyDetailCtrl'
            })
            .state({
                name:'main.emergency.safewarn',
                url:'/safewarn',
                templateUrl:'views/emergency/safewarn/safewarn.html',
                controller: 'EmergencySafewarnIndexCtrl'
            }).state({
                 name:'main.emergency.command',
                url:'/command',
                templateUrl:'views/emergency/ecommand/command.html',
                controller: 'EmergencyCommandIndexCtrl'
            })
            .state({
                name: 'main.company',
                url: '/company',
                controller: 'CompanyCtrl',
                controllerAs: 'company',
                template:'<div ui-view class="fade-in"></div>',
                abstract:true
            })
            .state({
                name: 'main.company.organ',
                url: '/organ',
                templateUrl: 'views/company/organ/index.html',
                controller: 'CompanyOrganOrganCtrl'
            }).state({
                name: 'main.company.organ.overview',
                url: '/overview',
                templateUrl: 'views/company/organ/overview.html',
                controller: 'CompanyOrganOverviewCtrl'
            }).state({
                name: 'main.company.organ.fill',
                url: '/fill',
                templateUrl: 'views/company/organ/fill.html',
                controller: 'CompanyOrganFillCtrl'
            })
            .state({
                name: 'main.company.project',
                url: '/project',
                templateUrl: 'views/company/project/index.html',
                controller: 'ProjectCtrl'
            }).state({
                name: 'main.company.project.overview',
                url: '/overview',
                controller: 'ProjectoverviewCtrl',
                templateUrl: 'views/company/project/overview.html'
            }).state({
                name: 'main.company.project.fill',
                url: '/fill',
                controller: 'ProjectfillCtrl',
                templateUrl: 'views/company/project/fill.html'
            })       
            .state({
                name: 'main.company.employ',
                url: '/employ',
                templateUrl: 'views/company/employ/index.html',
                controller: 'CompanyEmployEmployCtrl'
            }).state({
                name: 'main.company.employ.overview',
                url: '/overview',
                controller: 'CompanyEmployOverviewCtrl',
                templateUrl: 'views/company/employ/overview.html'
            }).state({
                name: 'main.company.employ.fill',
                url: '/fill',
                controller: 'CompanyEmployFillCtrl',
                templateUrl: 'views/company/employ/fill.html'
            }).state({
                name:'main.company.oversea',
                url:'/oversea',
                controller:'CompanyOverseaOverviewCtrl',
                templateUrl:'views/company/oversea/overview.html'
            });
    });


//AIzaSyAdN3VHyPt_L5WLr7ufcm5pT1_Gan6jEuA
