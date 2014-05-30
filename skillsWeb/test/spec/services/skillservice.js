'use strict';

describe('Service: skillService', function () {

  // load the service's module
  beforeEach(module('skillsWebApp'));

  // instantiate service
  var $skillService,
    $httpBackend,
    appSettings;

  beforeEach(inject(function (_$skillService_, _$httpBackend_, _appSettings_) {
    $skillService = _$skillService_;
    $httpBackend = _$httpBackend_;
    appSettings = _appSettings_;
  }));

  it('should list all skills', function () {

    $httpBackend.when('GET', appSettings.apiUrl + '/skills').respond([{name : 'JavaScript'}]);

    var promiseResult;
    $skillService.getSkills().then(function (result) {
      promiseResult = result;
    });
    $httpBackend.flush();
    
    $httpBackend.expectGET(appSettings.apiUrl + '/skills');
    expect(promiseResult.data.length).toBe(1);
    expect(promiseResult.data[0].name).toBe('JavaScript');
    
  });

});
