angular.module('apiApp')

.controller('mainCtrl', function($scope, serviceD) {

   $scope.hideEp = true;

   var getFilms = function() {

       serviceD.swApi()
       .then(function(response){
           $scope.films = response.data.results;
       });
   };

   getFilms();

   var getPlanets = function() {
      serviceD.planets()
      .then(function(response) {
         $scope.planets = response.data.results;
      });
   };
   getPlanets();

});
