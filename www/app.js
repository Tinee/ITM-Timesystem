(function () {
    'use strict';

    angular.module('app', [
        'app.core',
        'app.layout',
        'app.customer',
        'app.services',
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
            .state('layout.customer', {
                url: 'Customer',
                templateUrl: '/www/customer/customer.html',
                controller: 'CustomerController as vm'

            });
        $locationProvider.html5Mode(true);
    }
})();