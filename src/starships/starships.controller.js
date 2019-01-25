(function () {
    'use strict';
    angular
        .module('app')
        .controller('StarshipsController', StarshipsController)
        .component('customMdList', {
            templateUrl: 'customMdList/customMdList.html',
            controller: StarshipsController
            
        });

    StarshipsController.$inject = ['ShipService'];
    function StarshipsController(ShipService) {
        var vm = this;
        vm.allShips = [];
        vm.viewShips = [];
        vm.details;

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

        vm.showDetails = function(index) {
            if (vm.details == index) {
                vm.details = -1;
            } else {
                vm.details = index;
            vm.details = index;}
        }

        vm.getMore = function (index) {
            vm.viewShips = vm.viewShips.concat(vm.allShips.slice(index, index + 5));
        }

    }

})();