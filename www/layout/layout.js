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
    vm.logout = authService.logout;

    vm.isLoggedIn = authService.checkLoggedInStatus()


    function toogleSidenav(menuId) {
      $mdSidenav(menuId).toggle();
    };
  }
})();









