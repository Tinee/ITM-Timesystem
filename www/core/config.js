(function() {
    'use strict';

    angular.module('app.core').config(ThemingProvider);

    ThemingProvider.$inject = ['$mdThemingProvider','$mdIconProvider'];
    function ThemingProvider($mdThemingProvider,$mdIconProvider) {


 $mdThemingProvider.theme("default")
 .primaryPalette("indigo")

   }

})();