(function () {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['authService', '$mdToast', '$log', 'localstorageFactory', '$state'];
    function LoginController(authService, $mdToast, $log, localstorageFactory, $state) {
        var vm = this;

        vm.loginData = {
            username: "",
            password: ""
        }

        vm.login = login;

        function login(loginData) {
            authService.login(loginData).then(function (res) {
                localstorageFactory.set('user', res)
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