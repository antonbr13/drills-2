angular.module('apiApp')

.service('serviceD', function($http) {

var baseUrl = "http://swapi.co/api/";

      this.swApi = function () {
         return $http({
            method : "GET",
            url    : baseUrl + 'films/'

         })
         .then(function(response) {
            console.log(response.data.results);
            return response;
         });
      };


      this.planets = function() {
         return $http({
            method : "GET",
            url    : baseUrl + 'planets/'
         })
         .then(function(response) {
            console.log(response.data.results);
            return response;
         });
      };










});
