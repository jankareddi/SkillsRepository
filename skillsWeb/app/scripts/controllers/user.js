'use strict';

angular.module('skillsWebApp')
  .controller('UserCtrl', function ($scope, $routeParams, $userService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.userData = '';
    $scope.userID = $routeParams.id;
    $scope.getUserData = function() {
        $userService.getData($scope.userID).then(function(promise) {
            $scope.userData = promise.data;
          });
      };

    $scope.getUserData();
  });
