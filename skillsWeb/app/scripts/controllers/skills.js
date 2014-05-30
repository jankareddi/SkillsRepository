'use strict';

angular.module('skillsWebApp')
  .controller('SkillsCtrl', function ($scope, $skillService) {
    $scope.skills = [];

    $scope.getSkills = function() {
      $skillService.getSkills().then(function(promise) {
        $scope.skills = promise.data;
      });
    };

    $scope.getSkills();

  });
