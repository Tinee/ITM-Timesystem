(function () {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope','authService', '$mdToast', '$log', 'localstorageFactory', '$state'];
    function LoginController($scope,authService, $mdToast, $log, localstorageFactory, $state) {
        var vm = this;

        vm.loginData = {
            username: "",
            password: ""
        }

        particlesJS.load('particles-js', '../particles.json');

        vm.login = login;

        function login(loginData) {
            authService.login(loginData).then(function (res) {
                localstorageFactory.set('user', res)
                $scope.$parent.isLoggedIn = true;
                $state.go('layout.timestamping')

            }, function (err) {
                
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Fel vid inloggningen')
                        .position('top right')
                        .hideDelay(3000)
                );
                $log.warn(err);
            });
        }
    }
})();