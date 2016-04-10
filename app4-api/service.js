angular.module('poke')

.service('pokeService', function($http) {


var baseUrl = 'http://pokeapi.co/api/v2/';

   this.pokemon = function() {
      return $http({
         method : "GET",
         url    : baseUrl + 'pokemon/1'
      })
      .then(function(response) {
         console.log(response.data.results);
         return response;

      });
   };


});
