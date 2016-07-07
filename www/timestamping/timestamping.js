

(function () {
    'use strict';

    angular
        .module('app.timestamping')
        .controller('TimestampingController', TimestampingController);

    TimestampingController.$inject = ['$scope', '$filter', '$mdpTimePicker', '$mdDialog', 'dataService', 'autoCompleteValues'];
    function TimestampingController($scope, $filter, $mdpTimePicker, $mdDialog, dataService, autoCompleteValues) {

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

        vm.iconsAndColorsList = {
            colors: ['red','blue','green', 'pink','grey','purple'],
            icons: ['grade','accessibility','settings','touch_app','trending_up','visibility','view_week','work','train','refresh','power','casino','golf_course','school','sentiment_very_satisfied']
        }

        vm.timestamp = {
        };

        vm.searchTexts = {
            bookmark: '',
            customer: '',
            occupation: '',
            acctivity: '',
            taxes: '',
            project: '',
            agreement: '',
            service: '',
            debit: '',
        }

        vm.debitOptions = [
            { value: true, description: 'Ja' },
            { value: false, description: 'Nej' },
            { description: 'Kanske' },
        ]

        vm.customerSearch = autoCompleteValues.customerSearch;
        vm.bookmarkSearch = autoCompleteValues.bookmarkSearch;
        vm.occupationSearch = autoCompleteValues.occupationSearch;
        vm.acctivitySearch = autoCompleteValues.acctivitySearch;
        vm.taxesSearch = autoCompleteValues.taxesSearch;
        vm.projectsSearch = autoCompleteValues.projectsSearch;
        vm.servicesSearch = autoCompleteValues.servicesSearch;
        vm.agreementsSearch = autoCompleteValues.agreementsSearch;

        vm.getAgreements = getAgreements;
        vm.getServices = getServices;
        vm.agreements = [];
        vm.services = [];

        vm.saveBookmark = saveBookmark;
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

        function getAgreements(customerId) {
            dataService.agreementsCompleteValues().query({ customerId: customerId }, function (res) {
                vm.agreements = res;
            });
        }

        function getServices(contractId) {
            dataService.servicesCompleteValues().query({ contractId: contractId }, function (res) {
                vm.services = res;

                vm.services.forEach(function (element) {
                    if (element.used === true) {
                        element.icon = 'grade';
                    }
                }, this);
            });
        }

        function saveBookmark() {
            dataService.bookmarks().save(vm.timestamp, function (res) {
                vm.bookmarks.push(vm.timestamp);
                vm.bookmark = false;

            }, function (err) {
                alert(err);
            });
        }
    }
})();

