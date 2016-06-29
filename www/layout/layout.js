(function () {
  'use strict';

  angular
    .module('app.layout')
    .controller('LayoutController', LayoutController);

  LayoutController.$inject = ['$scope', '$mdSidenav', 'menuService', 'changeView', 'authService'];
  function LayoutController($scope, $mdSidenav, menuService, changeView, authService) {
    var vm = this;

    vm.toggleSidenav = toogleSidenav
    vm.menuItems = menuService;
    vm.changeView = changeView.goToo;
    vm.logout = logout
    $scope.isLoggedIn = authService.checkLoggedInStatus()

    function logout(){
      authService.logout().then(function () {
        $scope.isLoggedIn = false;
      });
    }

    function toogleSidenav(menuId) {
      $mdSidenav(menuId).toggle();
    };
  }
})();









