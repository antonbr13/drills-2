angular.module('myApp')

.controller('filterCtrl', function($scope, filterService) {

   $scope.employInfo = filterService.getData();
   $scope.search = "";

});
