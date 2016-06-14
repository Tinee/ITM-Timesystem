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
                title: 'Vabbning',
                icon: 'child_care'
            },
            {
                link: '',
                title: 'Semester',
                icon: 'pool'
            },
            {
                link: '',
                title: 'Möte',
                icon: 'supervisor_account'
            },
            {
                link: '',
                title: 'Sjukdom',
                icon: 'sentiment_very_dissatisfied'
            },
        ];

        var customerMenus = [
            {
                link: '/Tidsstämpling',
                title: 'Kundrad',
                icon: 'grade'
            },
            {
                link: '/Historik',
                title: 'Historik',
                icon: 'public'
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