(function () {
    'use strict';

    angular
        .module('app.factories')
        .factory('localstorageFactory', LocalstorageFactory);

    LocalstorageFactory.$inject = [];
    function LocalstorageFactory() {
        var services = {
            get: get,
            remove: remove
        };

        return services;

        function get(key) {
            return window.localStorage.getItem(key);
        }

        function remove(key) {
            return window.localStorage.removeItem(key);
        }
    }
})();