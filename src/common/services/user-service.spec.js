describe('user-service', function() {
  var userService,
    allUsers,
    $httpBackend;

  beforeEach(module('githubDashboard.services.user-service'));
  beforeEach(inject(function(_userService_, _$httpBackend_) {
    userService = _userService_;
    $httpBackend = _$httpBackend_;
    setupMocks();
  }));

  it("should create an instance of userService", function () {
    expect(userService).toBeDefined();
  });

  it("should load the users", function () {
    userService.getUsers().then(function(users) {
      expect(users.length).toBeGreaterThan(0);
    });
    $httpBackend.flush();
  });

  function setupMocks() {
    jasmine.getJSONFixtures().fixturesPath = 'base/data/users/';
    allUsers = getJSONFixture('default.json');

    $httpBackend.whenGET('/api/users').respond(allUsers);
  }
});