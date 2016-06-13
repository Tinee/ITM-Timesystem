(function () {
    'use strict';

    angular
        .module('app.services')
        .service('menuService', MenuService);

    MenuService.$inject = [];
    function MenuService() {

        var internMenus = [
            {
                link: '',
                title: 'Dashboard',
                icon: 'dashboard'
            },
            {
                link: '',
                title: 'Sjukdom',
                icon: 'report_problem'
            },
        ];

        var customerMenus = [
            {
                link: '/Tidsstämpling',
                title: 'Kundrad',
                icon: 'grade'
            },
        ]

        var mangementMenus = [
            {
                link: '',
                title: 'Profil',
                icon: 'face'
            }
        ];


        return {
            internMenus: internMenus,
            customerMenus: customerMenus,
            mangementMenus: mangementMenus
        }
    }
})();