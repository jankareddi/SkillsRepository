'use strict';

angular.module('skillsWebApp')
  .controller('SearchCtrl', function ($scope, $userService) {
    $scope.users = [];
    $scope.mode = 'By Skill';
    $scope.searchText = '';

    $scope.searchBySkill = function() {
      $userService.getBySkill($scope.searchText).then(function(promise) {
        $scope.users = promise.data;
      });
    };

    $scope.searchByName = function() {
      $userService.getByName($scope.searchText).then(function(promise) {
        $scope.users = promise.data;
      });
    };

    $scope.searchByMode = function() {
      if ($scope.mode === 'By Skill') {
        $scope.searchBySkill();
      }
      else if ($scope.mode === 'By Name') {
        $scope.searchByName();
      }
    };

    $scope.setMode = function(eventObject) {
      $scope.mode = eventObject.toElement.innerText;
    };

  });