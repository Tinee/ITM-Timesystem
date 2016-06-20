(function () {
    'use strict';

    angular
        .module('app.auth')
        .factory('authService', AuthService);

    AuthService.$inject = ['$location', '$http', '$q', '$state', 'localstorageFactory'];
    function AuthService($location, $http, $q, $state, localstorageFactory) {


        var serviceBase = '';
        var services = {
            login: login,
            logout: logout,
            checkLoggedInStatus: checkLoggedInStatus
        };

        return services;

        function login(loginData) {

            var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

            var deferred = $q.defer();

            $http.post(serviceBase + 'token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

                window.localStorage.setItem('token', angular.toJson({ token: response.access_token }));

                $location.path('/Inlogg');

                deferred.resolve(response);

            }).error(function (err, status) {
                deferred.reject(err);
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