'use strict';

describe('Controller: SearchCtrl', function () {

  // load the controller's module
  beforeEach(module('skillsWebApp'));

  var SearchCtrl,
    scope,
    userService,
    q,
    deferred;

  beforeEach(function() {
    userService = {
      getData: function(id) {
        id = '';
        deferred = q.defer();
        deferred.resolve({data:{firstName : 'Jane', lastName: 'Doe', role: 'Developer', skills: [{type: 'ASP.NET', level: 4}]}});
        return deferred.promise;
      },

      getBySkill: function(skill) {
        skill = '';
        deferred = q.defer();
        deferred.resolve({data:[{firstName : 'Jane', lastName: 'Doe', role: 'Developer', skills: [{type: 'ASP.NET', level: 4}]}]});
        return deferred.promise;
      },

      getByName: function(name) {
        name = '';
        deferred = q.defer();
        deferred.resolve({data:[{firstName : 'Jane', lastName: 'Doe', role: 'Developer', skills: [{type: 'ASP.NET', level: 4}]}]});
        return deferred.promise;
      }

    };

  });

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q) {
    scope = $rootScope.$new();
    q = $q;
    SearchCtrl = $controller('SearchCtrl', {
      $scope: scope,
      $userService: userService
    });
  }));


  it('should search by skill', function () {
    scope.searchText = 'ASP.NET';
    scope.searchBySkill(scope.searchText);
    scope.$apply();

    expect(scope.users.length).toBe(1);
    expect(scope.users[0].firstName).toBe('Jane');
    expect(scope.users[0].role).toBe('Developer');
    expect(scope.users[0].skills.length).toBe(1);
  });

  it('should search by name', function () {
    scope.searchText = 'Jane';
    scope.searchByName(scope.searchText);
    scope.$apply();

    expect(scope.users.length).toBe(1);
    expect(scope.users[0].firstName).toBe('Jane');
    expect(scope.users[0].role).toBe('Developer');
    expect(scope.users[0].skills.length).toBe(1);
  });

  it('should search by mode', function () {
    scope.searchText = 'Jane';
    scope.mode = 'By Skill';
    scope.searchByMode();
    scope.$apply();

    expect(scope.users.length).toBe(1);
    expect(scope.users[0].firstName).toBe('Jane');
    expect(scope.users[0].role).toBe('Developer');
    expect(scope.users[0].skills.length).toBe(1);
  });

});
