angular.module('app1')

.controller('mainCtrl', function($scope, serviceD) {


$scope.employees = serviceD.getData();


});
