angular.module('app1')

.controller('mainCtrl', function($scope, serviceD) {



   $scope.datas = serviceD.getData();

})
