(function () {
    'use strict';

    angular
        .module('app.services')
        .service('changeView', ChangeView);

    ChangeView.$inject = ['$location'];
    function ChangeView($location) {
        this.goToo = goToo;

        function goToo(viewlink) {
            $location.path(viewlink);
        }
    }
})();

