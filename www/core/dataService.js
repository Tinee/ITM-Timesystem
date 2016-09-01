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
            autoCompleteValues: autoCompleteValues,
            agreementsCompleteValues: agreementsCompleteValues,
            servicesCompleteValues: servicesCompleteValues,
            timestamps: timestamps
        };

        return services;

        function bookmarks() {
            return $resource(mongoDbAdress + 'bookmarks/:id', { id: '@id' });
        }

        function timestamps() {
            return $resource(baseAdress + 'Timestamp');
        }

        function autoCompleteValues() {
            return $resource(baseAdress + 'TimestampAutoComplete');
        }

        function agreementsCompleteValues() {
            return $resource(baseAdress + 'TimestampAutoComplete/Agreements/:customerId', { customerId: '@customerId' });
        }

        function servicesCompleteValues() {
            return $resource(baseAdress + 'TimestampAutoComplete/:contractId', { contractId: '@contractId' });
        }
    }
})();