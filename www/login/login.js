(function () {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['authService'];
    function LoginController(authService) {
        var vm = this;

        vm.loginData = {
            username: "",
            password: ""
        }

        vm.login = login;

        function login(loginData) {
            authService.login(loginData);
        }
    }
})();