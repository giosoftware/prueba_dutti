(function () {
    'use strict';
    angular
        .module('app')
        .controller('StarshipsController', StarshipsController)
        .component('customMdList', {
            template: '<ul>' +
                '<li ng-repeat="ship in $ctrl.viewShips">' +
                '<span>{{ship.name}}</span>' +
                '</li>' +
                '</ul>' +
                '<button ng-click="$ctrl.getMore($ctrl.viewShips.length)">más datos</button>',
            controller: StarshipsController
        });

    StarshipsController.$inject = ['ShipService'];
    function StarshipsController(ShipService) {
        var vm = this;
        vm.allShips = [];
        vm.viewShips = [];
        vm.showDetails

        initController();

        function initController() {
            loadAllShips();
        }

        function loadAllShips() {
            ShipService.GetAll()
                .then(function (ships) {
                    vm.allShips = ships.results;
                    vm.getMore(0);
                })
                .catch(function (err) {
                    console.error(err.message)
                });
        }

        vm.getMore = function (index) {
            vm.viewShips = vm.viewShips.concat(vm.allShips.slice(index, index + 5));
        }

    }

})();