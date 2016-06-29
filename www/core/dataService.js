(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataService', dataService);

    dataService.$inject = ['$resource'];
    function dataService($resource) {

        var baseAdress = 'http://aspnetsite.local/api/';
        var mongoDbAdress = 'http://127.0.0.1:3000/';


        var services = {
            bookmarks: bookmarks,
            autoCompleteValues : autoCompleteValues
        };

        return services;

        function bookmarks() {
            return $resource(mongoDbAdress + 'bookmarks/:id', { id: '@id' });
        }

        function autoCompleteValues() {
            return $resource(baseAdress + 'TimestampAutoComplete');
        }
    }
})();