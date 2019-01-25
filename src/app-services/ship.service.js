(function () {
    'use strict';

    angular
        .module('app')
        .factory('ShipService', ShipService);

    ShipService.$inject = ['$http'];
    function ShipService($http) {
        var service = {};

        service.GetAll = GetAll;

        return service;

        function GetAll() {
            return $http.get('https://swapi.co/api/starships/', {
                headers: { 'Authorization': 'none' }
            }).then(handleSuccess, handleError('Error getting all users'));
        }

        // private functions

        function handleSuccess(res) {
            console.log(res.data)
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();
