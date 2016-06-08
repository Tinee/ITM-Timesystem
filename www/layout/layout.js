(function () {
  'use strict';

  angular
    .module('app.layout')
    .controller('LayoutController', LayoutController);

  LayoutController.$inject = ['$scope', '$mdSidenav', 'menuService'];
  function LayoutController($scope, $mdSidenav, menuService) {
    var vm = this;

    vm.toggleSidenav = toogleSidenav
    vm.menuItems = menuService;

    function toogleSidenav(menuId) {
      $mdSidenav(menuId).toggle();
    };

  }
})();









