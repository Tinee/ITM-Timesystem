(function () {
    'use strict';

    angular
        .module('app.factories')
        .factory('localstorageFactory', LocalstorageFactory);

    LocalstorageFactory.$inject = [];
    function LocalstorageFactory() {
        var services = {
            get: get,
            remove: remove,
            set:set
        };

        return services;

        function get(key) {
            return window.localStorage.getItem(key);
        }

        function remove(key) {
            return window.localStorage.removeItem(key);
        }

        function set(key,data) {
            return window.localStorage.setItem(key,angular.toJson(data));
        }
    }
})();