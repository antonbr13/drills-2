angular.module("arrayApp")

.controller("arrayController", function($scope, service2) {

   $scope.employeeInfo = service2.data();



});
