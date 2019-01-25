(function () {
    'use strict';
    angular
        .module('app')
        .controller('StarshipsController', StarshipsController)
        .component('customMdList', {
            template: '<ul>' +
                '<li ng-repeat="ship in $ctrl.allShips">' +
                '<span>{{ship.name}}</span>' +
                '</li>' +
                '</ul>',
            controller: StarshipsController
        });

    StarshipsController.$inject = ['ShipService'];
    function StarshipsController(ShipService) {
        var vm = this;
        vm.allShips = [];

        initController();

        function initController() {
            loadAllShips();
        }

        function loadAllShips() {
            ShipService.GetAll()
                .then(function (ships) {
                    vm.allShips = ships.results;
                })
                .catch(function (err) {
                    console.error(err.message)
                });
        }

    }

})();