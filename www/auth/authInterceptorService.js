(function () {
    'use strict';

    angular
        .module('app.auth')
        .factory('authInterceptorService', authInterceptorService);

    authInterceptorService.$inject = ['$q', '$location','localstorageFactory'];
    function authInterceptorService($q, $location,localstorageFactory) {

        var services = {
            request: request,
            responseError: responseError
        };

        return services;

        function request(config) {

            config.headers = config.headers || {};


            var user = localstorageFactory.get('user');

            if (user) {
                config.headers.Authorization = 'Bearer ' + user.token;
            }
            else {
                if ($location.path() !== '/Inlogg') {
                    $location.path('/Inlogg');
                }

            }

            return config;
        };

        function responseError(rejection) {
            if (rejection.status === 401) {
                $location.path('/Inlogg');
            }
            return $q.reject(rejection);
        };

    }
})();