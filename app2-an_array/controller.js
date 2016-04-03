angular.module('arrayApp')

.controller('arrayController', function($scope, serviceTwo) {

$scope.array = serviceTwo.getData();


});
