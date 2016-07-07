(function () {
    'use strict';

    angular
        .module('app.factories')
        .factory('autoCompleteValues', autoCompleteValues);

    autoCompleteValues.$inject = ['dataService', '$q', '$timeout'];
    function autoCompleteValues(dataService, $q, $timeout) {
        var vm = this;

        var services = {
            customerSearch: customerSearch,
            bookmarkSearch: bookmarkSearch,
            occupationSearch: occupationSearch,
            acctivitySearch: acctivitySearch,
            taxesSearch: taxesSearch,
            projectsSearch: projectsSearch,
            servicesSearch: servicesSearch,
            agreementsSearch:agreementsSearch
        };

        return services;

        function customerSearch(query, customers) {


            var results = query ? customers.filter(createFilterFor(query)) : customers
            var deferred = $q.defer();
            $timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);

            return deferred.promise;

            function createFilterFor(query) {
                return function filterFn(state) {
                    query = query.toLowerCase();
                    var checkLowerProperty = state.name.toLowerCase();
                    var p = checkLowerProperty.indexOf(query)
                    return (p >= 0);
                };
            }
        }

        function bookmarkSearch(query, bookmarks) {

            var results = query ? bookmarks.filter(createFilterFor(query)) : bookmarks
            var deferred = $q.defer();
            $timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);
            return deferred.promise;

            function createFilterFor(query) {
                return function filterFn(state) {
                    query = query.toLowerCase();
                    var checkLowerProperty = state.bookmarkTitle.toLowerCase();
                    var p = checkLowerProperty.indexOf(query)
                    return (p >= 0);
                };
            }
        }

        function occupationSearch(query, occupations) {

            var results = query ? occupations.filter(createFilterFor(query)) : occupations
            var deferred = $q.defer();
            $timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);

            return deferred.promise;

            function createFilterFor(query) {
                return function filterFn(state) {
                    query = query.toLowerCase();
                    var checkLowerProperty = state.text.toLowerCase();
                    var p = checkLowerProperty.indexOf(query)
                    return (p >= 0);
                };
            }
        }

        function acctivitySearch(query, activities) {

            var results = query ? activities.filter(createFilterFor(query)) : activities
            var deferred = $q.defer();
            $timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);

            return deferred.promise;

            function createFilterFor(query) {
                return function filterFn(state) {
                    query = query.toLowerCase();
                    var checkLowerProperty = state.description.toLowerCase();
                    var p = checkLowerProperty.indexOf(query)
                    return (p >= 0);
                };
            }
        }

        function taxesSearch(query, taxes) {

            var results = query ? taxes.filter(createFilterFor(query)) : taxes
            var deferred = $q.defer();
            $timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);

            return deferred.promise;

            function createFilterFor(query) {
                return function filterFn(state) {
                    query = query.toLowerCase();
                    var checkLowerProperty = state.name.toLowerCase();
                    var p = checkLowerProperty.indexOf(query)
                    return (p >= 0);
                };
            }
        }

        function projectsSearch(query, projects) {

            var results = query ? projects.filter(createFilterFor(query)) : projects
            var deferred = $q.defer();
            $timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);

            return deferred.promise;

            function createFilterFor(query) {
                return function filterFn(state) {
                    query = query.toLowerCase();
                    var checkLowerProperty = state.name.toLowerCase();
                    var p = checkLowerProperty.indexOf(query)
                    return (p >= 0);
                };
            }
        }

        function servicesSearch(query, services) {

            var results = query ? services.filter(createFilterFor(query)) : services
            var deferred = $q.defer();
            $timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);

            return deferred.promise;

            function createFilterFor(query) {
                return function filterFn(state) {
                    query = query.toLowerCase();
                    if(state.used === true){
                        state.icon = 'grade';
                    }
                    var checkLowerProperty = state.description.toLowerCase();
                    var p = checkLowerProperty.indexOf(query)
                    return (p >= 0);
                };
            }
        }

          function agreementsSearch(query, agreements) {

            var results = query ? agreements.filter(createFilterFor(query)) : agreements
            var deferred = $q.defer();
            $timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);

            return deferred.promise;

            function createFilterFor(query) {
                return function filterFn(state) {
                    query = query.toLowerCase();
                    var checkLowerProperty = state.name.toLowerCase();
                    var p = checkLowerProperty.indexOf(query)
                    return (p >= 0);
                };
            }
        }

    }
})();