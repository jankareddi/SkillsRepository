'use strict';

describe('Controller: UserCtrl', function () {

  // load the controller's module
  beforeEach(module('skillsWebApp'));

  var UserCtrl,
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
      }

    };

  });

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q) {
    scope = $rootScope.$new();
    q = $q;
    UserCtrl = $controller('UserCtrl', {
      $scope: scope,
      $userService: userService
    });
  }));


  it('should get user data', function () {
    scope.getUserData();
    scope.$apply();

    expect(scope.userData.firstName).toBe('Jane');
    expect(scope.userData.skills.length).toBe(1);
  });

});
