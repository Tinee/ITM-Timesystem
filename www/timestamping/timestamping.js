(function () {
    'use strict';

    angular
        .module('app.timestamping')
        .controller('TimestampingController', TimestampingController);

    TimestampingController.$inject = ['$scope', '$filter', '$mdpTimePicker'];
    function TimestampingController($scope, $filter, $mdpTimePicker) {

        var vm = this;

        vm.readableDate;
        vm.selectedDate;

        vm.dayClick = function (date) {

            if (date === undefined) return;
            vm.readableDate = $filter("date")(date, "MMMM d");
            vm.selectedDate = date;
        };

        vm.setDayContent = function (date) {
            return "<p></p>";
        };
    }
})();