'use strict';

describe('Service: skillService', function () {

  // load the service's module
  beforeEach(module('skillsWebApp'));

  // instantiate service
  var skillService;
  beforeEach(inject(function (_skillService_) {
    skillService = _skillService_;
  }));

  it('should do something', function () {
    expect(!!skillService).toBe(true);
  });

});
