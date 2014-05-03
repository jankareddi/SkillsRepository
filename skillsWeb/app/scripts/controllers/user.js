'use strict';

angular.module('skillsWebApp')
  .controller('UserCtrl', function ($scope, $userService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.userData = '';
    $scope.getUserData = function() {
        $scope.userData = $userService.getData();
      };

    $scope.getUserData();
  });
