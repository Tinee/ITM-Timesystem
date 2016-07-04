(function () {
  'use strict';

  angular.module('app.core').config(Config);

  Config.$inject = ['$mdThemingProvider','$httpProvider'];
  function Config($mdThemingProvider,$httpProvider ) {

    //Themeconfig to change colors on the client.
    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey')
      .accentPalette('green')
      .warnPalette('red')
      .backgroundPalette('grey');

    //Authinterceptor bootstrapping.
$httpProvider.interceptors.push('authInterceptorService');
        $httpProvider.defaults.headers.post = { 'Content-Type': 'application/json' };
  }
})();