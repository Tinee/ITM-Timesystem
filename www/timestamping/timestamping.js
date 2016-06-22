(function () {
    'use strict';

    angular
        .module('app.timestamping')
        .controller('TimestampingController', TimestampingController);

    TimestampingController.$inject = ['$scope', '$filter', '$mdpTimePicker', '$mdDialog', 'dataService'];
    function TimestampingController($scope, $filter, $mdpTimePicker, $mdDialog, dataService) {

        var vm = this;

        vm.bookmarks = dataService.bookmarks().query();
        vm.readableDate;
        vm.selectedDate;
        vm.searchText = "";

        vm.dayClick = function (date) {

            if (date === undefined) return;
            vm.readableDate = $filter("date")(date, "MMMM d");
            vm.selectedDate = date;
        };

        vm.setDayContent = function (date) {
            return "<p></p>";
        };

        vm.showConfirm = function (ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                .title('Spara bokmärke')
                .textContent('Fyll i uppgifterna nedan.')
                .targetEvent(ev)
                .ok('Spara')
                .cancel('Avbryt');
            $mdDialog.show(confirm).then(function () {
                $scope.status = 'You decided to get rid of your debt.';
            }, function () {
                $scope.status = 'You decided to keep your debt.';
            });
        };
    }
})();