(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataService', dataService);

    dataService.$inject = ['$resource'];
    function dataService($resource) {

        var baseAdress = 'http://localhost:50944/';

        var mongoDbAdress = 'http://127.0.0.1:3000/'


        var services = {
            bookmarks: bookmarks
        };

        return services;

        function bookmarks() {
            return $resource(mongoDbAdress + 'bookmarks/:id', { id: '@id' });
        }
    }
})();