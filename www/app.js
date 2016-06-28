(function () {
    'use strict';

    angular.module('app', [
        'app.core',
        'app.layout',
        'app.timestamping',
        'app.services',
        'app.factories',
        'app.login',
        'app.auth',
        'app.directives',
        'app.history',
        'app.bookmarks',
        'app.profile'
    ])
        .config([
            '$stateProvider',
            '$locationProvider',
            '$urlRouterProvider',
            Routes])
        .run([
            '$rootScope',
            '$state',
            Run]);

    function Routes($stateProvider, $locationProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/Tidsstämpling');

        var isLoggedIn = {
            security: ['$q', 'authService', function ($q, authService) {
                if (!authService.checkLoggedInStatus()) {
                    return $q.reject("Not Authorized");
                }
            }]
        };

        $stateProvider
            .state('layout', {
                url: '/',
                controller: 'LayoutController as vm',
                templateUrl: '/www/layout/layout.html',
                abstract: true
            })
            .state('layout.login', {
                url: 'Inlogg',
                controller: 'LoginController as vm',
                templateUrl: '/www/login/login.html',
            })
            .state('layout.timestamping', {
                url: 'Tidsstämpling',
                templateUrl: '/www/timestamping/timestamping.html',
                controller: 'TimestampingController as vm',
                resolve: isLoggedIn
            })
            .state('layout.history', {
                url: 'Historik',
                templateUrl: '/www/history/history.html',
                controller: 'HistoryController as vm',
                resolve: isLoggedIn
            })
            .state('layout.bookmark', {
                url: 'Bokmärken',
                templateUrl: '/www/bookmarks/bookmarks.html',
                controller: 'BookmarksController as vm',
                resolve: isLoggedIn
            })
            .state('layout.profile', {
                url: 'Profil',
                templateUrl: '/www/profile/profile.html',
                controller: 'ProfileController as vm',
                resolve: isLoggedIn
            });


        $locationProvider.html5Mode(true);
    }

    function Run($rootScope, $state) {

        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            if (error === "Not Authorized") {
                $state.go("layout.login");
            }
        });
    }
})();