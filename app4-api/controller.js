angular.module('poke')

.controller('mainCtrl', function($scope, pokeService) {

var getPokemon = function(pokeService) {
   pokeService.pokemon()
   .then(function(response) {
         $scope.pokes = response.data.results;
   });

};





});
