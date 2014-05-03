'use strict';

describe('Service: userService', function () {

  // load the service's module
  beforeEach(module('skillsWebApp'));

  // instantiate service
  var $userService;
  beforeEach(inject(function (_$userService_) {
    $userService = _$userService_;
  }));

  it('should do something', function () {
    expect(!!$userService).toBe(true);
    var svcData = $userService.getData();
    expect(svcData.firstName).toBe('John');
  });

});
