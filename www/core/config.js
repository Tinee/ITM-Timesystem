(function() {
    'use strict';

    angular.module('app.core').config(ThemingProvider);

    ThemingProvider.$inject = ['$mdThemingProvider','$mdIconProvider'];
    function ThemingProvider($mdThemingProvider,$mdIconProvider) {


 $mdThemingProvider.theme("default").primaryColor("blue-grey").accentColor("red");
    //     var customBlueMap = $mdThemingProvider.extendPalette('black', {
    //         'contrastDefaultColor': 'light',
    //         'contrastDarkColors': ['50'],
    //         '50': 'ffffff'
    //     });
    //     $mdThemingProvider.definePalette('customBlue', customBlueMap);
    //     $mdThemingProvider.theme('default')
    //         .primaryPalette('customBlue', {
    //             'default': '500',
    //             'hue-1': '50'
    //         })
    //         .accentPalette('pink');
    //     $mdThemingProvider.theme('input', 'default')
    //         .primaryPalette('grey');
   }

})();