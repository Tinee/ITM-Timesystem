

(function () {
    'use strict';

    angular
        .module('app.timestamping')
        .controller('TimestampingController', TimestampingController);

    TimestampingController.$inject = ['$scope', '$filter', '$mdpTimePicker', '$mdDialog', 'dataService','autoCompleteValues',];
    function TimestampingController($scope, $filter, $mdpTimePicker, $mdDialog, dataService,autoCompleteValues) {

        var vm = this;

        vm.bookmarks = dataService.bookmarks().query();
        vm.autoCompleteValues = dataService.autoCompleteValues().get();

        vm.readableDate;
        vm.selectedDate;
        vm.searchText = "";
        vm.bookmark = false;
        
        vm.saveBookmarkProperties = {
            color: '',
            name: '',
            icon: ''
        }

        vm.selectedItem = null
        vm.searchTexts = {
            bookmark: '',
            customer: '',
            occupation: '',
            acctivity: '',
            taxes: '',
            project: '',
        }

        vm.customerSearch = autoCompleteValues.customerSearch;
        vm.bookmarkSearch = autoCompleteValues.bookmarkSearch;
        vm.occupationSearch = autoCompleteValues.occupationSearch;
        vm.acctivitySearch = autoCompleteValues.acctivitySearch;
        vm.taxesSearch = autoCompleteValues.taxesSearch;
        vm.projectsSearch = autoCompleteValues.projectsSearch;
        
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


    }
})();

