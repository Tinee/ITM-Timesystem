(function () {
    'use strict';

    angular
        .module('app.timestamping')
        .controller('TimestampingController', TimestampingController);

    TimestampingController.$inject = ['$scope', '$filter', '$mdpTimePicker', '$mdDialog', 'dataService', '$q', '$timeout'];
    function TimestampingController($scope, $filter, $mdpTimePicker, $mdDialog, dataService, $q, $timeout) {

        var vm = this;

        vm.bookmarks = dataService.bookmarks().query();
        vm.readableDate;
        vm.selectedDate;
        vm.searchText = "";

        vm.selectedItem = null;
        vm.searchText = null;

        vm.showConfirm = showConfirm;
        vm.querySearch = querySearch;
        vm.dayClick = dayClick;
        vm.setDayContent = setDayContent;
        

        function dayClick(date) {

            if (date === undefined) return;
            vm.readableDate = $filter("date")(date, "MMMM d");
            vm.selectedDate = date;
        };

        function setDayContent(date) {
            return "<p></p>";
        };

        function querySearch(query) {
            var results = query ? vm.bookmarks.filter(createFilterFor(query)) : vm.bookmarks;
            var deferred = $q.defer();
            $timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);
            return deferred.promise;
        }

        function createFilterFor(query) {
            return function filterFn(state) {
                var p = state.bookmarkTitle.indexOf(query)
                return (p === 0);
            };
        }

        function showConfirm(ev) {
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