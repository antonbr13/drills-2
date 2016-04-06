angular.module('filterApp')

.controller('filterCtrl', function($scope, filterService) {

   $scope.employ = filterService.getData();

});
