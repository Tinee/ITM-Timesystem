(function() {
'use strict';

    angular
        .module('app.profile')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = [];
    function ProfileController() {
        var vm = this;
    }
})();