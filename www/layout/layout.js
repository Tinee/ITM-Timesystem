(function () {
  'use strict';

  angular
    .module('app.layout')
    .controller('LayoutController', LayoutController);

  LayoutController.$inject = ['$rootScope', '$scope', '$mdSidenav', 'menuService', 'changeView', 'authService'];
  function LayoutController($rootScope, $scope, $mdSidenav, menuService, changeView, authService) {
    var vm = this;

    vm.toggleSidenav = toogleSidenav
    vm.menuItems = menuService;
    vm.changeView = changeView.goToo;
    vm.logout = logout
    vm.yell = yell;
    $scope.isLoggedIn = authService.checkLoggedInStatus()


    function logout() {
      authService.logout().then(function () {
        $scope.isLoggedIn = false;
      });
    }

    function yell(staticObject) {
      $rootScope.$broadcast('scanner-started', staticObject);
    }

    function toogleSidenav(menuId) {
      $mdSidenav(menuId).toggle();
    };
  }
})();









