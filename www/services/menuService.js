(function () {
    'use strict';

    angular
        .module('app.services')
        .service('menuService', MenuService);

    MenuService.$inject = ['dataService'];
    function MenuService(dataService) {


        var internMenus = [
            {
                link: '',
                title: 'Vård av barn',
                icon: 'child_care',
            },
            {
                link: '',
                title: 'Semester',
                icon: 'pool',
            },
            {
                link: '',
                title: 'Möte',
                icon: 'supervisor_account',
            },
            {
                link: '',
                title: 'Sjukdom',
                icon: 'sentiment_very_dissatisfied',
            },
        ];

        var customerMenus = [
            {
                link: '/Tidsstämpling',
                title: 'Kundrad',
                icon: 'grade',
                color: 'gold',
            },
            {
                link: '/Historik',
                title: 'Historik',
                icon: 'public',
                color: '#33CCFF'
            },
        ]

        var mangementMenus = [
            {
                link: '',
                title: 'Profil',
                icon: 'face',
            },
            {
                link: '',
                title: 'Logga ut',
                icon: 'vertical_align_bottom',
            }
        ];

        return {
            internMenus: internMenus,
            customerMenus: customerMenus,
            mangementMenus: mangementMenus,
        }
    }
})();