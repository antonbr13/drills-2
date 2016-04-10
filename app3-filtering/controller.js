angular.module('myApp')

.controller('mainCtrl', function($scope, mainService) {


   $scope.employs = mainService.getData();

   $scope.inputShow = false;

   $scope.orderShow = false;

   $scope.sortOptions = [
      {display: 'A-Z',
       value: false
      },
      {display: 'Z-A',
       value: true
      }
];


// --------------------------


      $scope.friends = [
           {name:'John', phone:'555-1212', age:10},
           {name:'Mary', phone:'555-9876', age:19},
           {name:'Mike', phone:'555-4321', age:21},
           {name:'Adam', phone:'555-5678', age:35},
           {name:'Julie', phone:'555-8765', age:29}
        ];


      $scope.predicate = 'age';
      $scope.reverse = true;

      $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
      };






});
