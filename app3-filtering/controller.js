angular.module('myapp')

.controller('filterCtrl', function($scope, filterService) {

$scope.employ = filterService.data();


});
