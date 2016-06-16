(function () {
  'use strict';

  angular
    .module('app.layout')
    .controller('LayoutController', LayoutController);

  LayoutController.$inject = ['$scope', '$mdSidenav', 'menuService', 'changeView'];
  function LayoutController($scope, $mdSidenav, menuService, changeView) {
    var vm = this;

    vm.toggleSidenav = toogleSidenav
    vm.menuItems = menuService;
    vm.changeView = changeView.goToo;

    function toogleSidenav(menuId) {
      $mdSidenav(menuId).toggle();
    };

  }
})();









