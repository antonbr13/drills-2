angular.module('myApp')

.controller('filterCtrl', function($scope, filterService) {

   $scope.employ = filterService.getData();

});
