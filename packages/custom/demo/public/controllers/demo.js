'use strict';

/* jshint -W098 */
angular.module('mean.demo')
  .controller('DemoController', ['$scope', 'Global', 'Demo',
    function($scope, Global, Demo) {
      $scope.global = Global;
      $scope.package = {
        name: 'demo'
      };
      $scope.clock = {
        now: new Date()
      };
      var updateClock = function() {
        $scope.clock.now = new Date();
      };
      setInterval(function() {
        $scope.$apply(updateClock);
      }, 1000);
      updateClock();
    }
  ])

  .controller('ParentController', ['$scope', '$filter', 'Global', 'Demo',
    function($scope, $filter, Global, Demo) {
      $scope.global = Global;
      $scope.person = {
        name: $filter('lowercase')('Ari')
      };
    }
  ])

  .controller('ChildController', ['$scope', 'Global', 'Demo',
    function($scope, Global, Demo){
      $scope.global = Global;
      $scope.change = function() {
        $scope.person.name = 'jack';
      };
    }
  ]);


