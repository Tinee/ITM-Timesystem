(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('dataService', dataService);

    dataService.$inject = ['$resource'];
    function dataService($resource) {

        var baseAdress = 'http://localhost:50944/';

        var services = {
        };

        return services;


    }
})();