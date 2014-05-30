'use strict';

describe('Service: userService', function () {

  // load the service's module
  beforeEach(module('skillsWebApp'));

  // instantiate service
  var $userService,
    $httpBackend,
    appSettings;
  
  beforeEach(inject(function (_$userService_, _$httpBackend_, _appSettings_) {
    $userService = _$userService_;
    $httpBackend = _$httpBackend_;
    appSettings = _appSettings_;
  }));

  it('should get user data by ID', function () {

    $httpBackend.when('GET', appSettings.apiUrl + '/users/1').respond([{firstName : 'Jane', lastName: 'Doe', role: 'Developer', skills: [{type: 'ASP.NET', level: 4}]}]);

    var promiseResult;
    $userService.getData(1).then(function(result) {
      promiseResult = result;
    });
    $httpBackend.flush();
    
    expect(!!$userService).toBe(true);
    $httpBackend.expectGET(appSettings.apiUrl + '/users/1');
    expect(promiseResult.data.length).toBe(1);
    expect(promiseResult.data[0].firstName).toBe('Jane');
    expect(promiseResult.data[0].role).toBe('Developer');

  });

  it('should get user data by skill', function () {

    $httpBackend.when('GET', appSettings.apiUrl + '/users?searchBy=skill&p=ASP.NET').respond([{firstName : 'Jane', lastName: 'Doe', role: 'Developer', skills: [{type: 'ASP.NET', level: 4}]}]);

    var promiseResult;
    $userService.getBySkill('ASP.NET').then(function(result) {
      promiseResult = result;
    });
    $httpBackend.flush();
    
    expect(promiseResult.data.length).toBe(1);
    expect(promiseResult.data[0].firstName).toBe('Jane');
    expect(promiseResult.data[0].role).toBe('Developer');

  });

  it('should get user data by Name', function () {

    $httpBackend.when('GET', appSettings.apiUrl + '/users?searchBy=name&p=Jane').respond([{firstName : 'Jane', lastName: 'Doe', role: 'Developer', skills: [{type: 'ASP.NET', level: 4}]}]);

    var promiseResult;
    $userService.getByName('Jane').then(function(result) {
      promiseResult = result;
    });
    $httpBackend.flush();
    
    expect(promiseResult.data.length).toBe(1);
    expect(promiseResult.data[0].firstName).toBe('Jane');
    expect(promiseResult.data[0].role).toBe('Developer');

  });

});
