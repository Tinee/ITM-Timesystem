(function () {
    'use strict';

    angular
        .module('app.auth')
        .factory('authService', AuthService);

    AuthService.$inject = ['$location', '$http', '$q', '$state'];
    function AuthService($location, $http, $q, $state) {


        var serviceBase = 'http://marcuscarlssonapi.azurewebsites.net/';
        var services = {
            login: login,
            logout: logout
        };

        return services;

        function login(loginData) {

            var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

            var deferred = $q.defer();

            $http.post(serviceBase + 'token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

                window.localStorage.setItem('token', angular.toJson({ token: response.access_token }));

                $location.path('/tab/companies');
                window.location.reload();

                deferred.resolve(response);

            }).error(function (err, status) {
                deferred.reject(err);
            });

            return deferred.promise;
        }

        function logout(){

            
        }
    }
})();