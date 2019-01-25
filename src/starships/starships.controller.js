(function () {
    'use strict';
    angular
        .module('app')
        .controller('StarshipsController', StarshipsController);

    StarshipsController.$inject = ['ShipService'];
    function StarshipsController(ShipService) {

    }

})();