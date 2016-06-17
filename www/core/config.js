(function () {
  'use strict';

  angular.module('app.core').config(ThemingProvider);

  ThemingProvider.$inject = ['$mdThemingProvider'];

  function ThemingProvider($mdThemingProvider) {

    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey')
      .accentPalette('amber')
      .warnPalette('red')
      .backgroundPalette('grey');
  }

})();