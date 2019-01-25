(function () {
    'use strict';

    angular
        .module('app')
        .factory('ShipService', ShipService);

    ShipService.$inject = ['$http'];
    function ShipService($http) {
        
    }

})();
