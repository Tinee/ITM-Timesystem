(function () {
    'use strict';

    angular
        .module('app.auth')
        .factory('authService', AuthService);

    AuthService.$inject = ['$location', '$http', '$q', '$state','localstorageFactory'];
    function AuthService($location, $http, $q, $state,localstorageFactory) {


        var serviceBase = 'http://aspnetsite.local/';
        var services = {
            login: login,
            logout: logout,
            checkLoggedInStatus: checkLoggedInStatus
        };

        return services;

        function login(loginData) {

            var data = "grant_type=password&username=" + loginData.username + "&password=" + loginData.password;
            var headers = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };

            var deferred = $q.defer();

            $http.post(serviceBase + 'token', data, headers)
                .success(function (response) {


                    deferred.resolve(response);

                }).error(function (err, status) {
                    deferred.reject(err.error);
                });
                
            return deferred.promise;
        }

        function checkLoggedInStatus() {
            if (localstorageFactory.get('user') === null) {
                return false;
            }
            else {
                return true;
            }
        }

        function logout() {
            localstorageFactory.remove('user');
        }
    }
})();