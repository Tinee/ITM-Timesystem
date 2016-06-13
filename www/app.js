(function () {
    'use strict';

    angular.module('app', [
        'app.core',
        'app.layout',
        'app.timestamping',
        'app.services',
        'app.factories'
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
            .state('layout.timestamping', {
                url: 'Tidsstämpling',
                templateUrl: '/www/timestamping/timestamping.html',
                controller: 'TimestampingController as vm'

            });
        $locationProvider.html5Mode(true);
    }
})();