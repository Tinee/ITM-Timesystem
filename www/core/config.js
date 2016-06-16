(function () {
  'use strict';

  angular.module('app.core').config(ThemingProvider);

  ThemingProvider.$inject = ['$mdThemingProvider'];
  function ThemingProvider($mdThemingProvider) {

$mdThemingProvider.theme('default')
    .primaryPalette('light-blue')
    .accentPalette('amber')
    .warnPalette('red')
    .backgroundPalette('grey');
  }

})();