(function () {
    'use strict';

    angular.module('app', [
        'app.core',
        'app.layout',
        'app.timestamping',
        'app.services',
        'app.factories',
        'app.login'
    ])
        .config([
            '$stateProvider',
            '$locationProvider',
            '$urlRouterProvider',
            Routes]);

    function Routes($stateProvider, $locationProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('layout', {
                url: '/',
                controller: 'LayoutController as vm',
                templateUrl: '/www/layout/layout.html',
            })
            .state('layout.login', {
                url: 'Inlogg',
                controller: 'LoginController as vm',
                templateUrl: '/www/login/login.html',
            })
            .state('layout.timestamping', {
                url: 'Tidsstämpling',
                templateUrl: '/www/timestamping/timestamping.html',
                controller: 'TimestampingController as vm'
            })
            .state('layout.history', {
                url: 'Historik',
                templateUrl: '/www/history/history.html',
                controller: 'HistoryController as vm'
            });
        $locationProvider.html5Mode(true);
    }
})();