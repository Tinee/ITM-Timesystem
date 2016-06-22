(function() {
'use strict';

    angular
        .module('app.history')
        .controller('HistoryController', HistoryController);

    HistoryController.$inject = [];
    function HistoryController() {
        var vm = this;
    }
})();