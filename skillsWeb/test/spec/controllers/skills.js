'use strict';

describe('Controller: SkillsCtrl', function () {

  // load the controller's module
  beforeEach(module('skillsWebApp'));

  var SkillsCtrl,
    skillService,
    q,
    deferred,
    scope;

  beforeEach(function() {
    skillService = {
      getSkills: function() {
        deferred = q.defer();
        deferred.resolve({data:[{name : 'JavaScript'}]});
        return deferred.promise;
      }

    };

  });

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q) {
    scope = $rootScope.$new();
    q = $q;
    SkillsCtrl = $controller('SkillsCtrl', {
      $scope: scope,
      $skillService: skillService
    });
  }));

  it('should get a list of all skills', function () {
    scope.getSkills();
    scope.$apply();
    expect(scope.skills.length).toBe(1);
    expect(scope.skills[0].name).toBe('JavaScript');
  });
});
