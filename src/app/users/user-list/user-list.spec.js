describe('user-list', function() {
  var userList,
    userService;

  beforeEach(module('githubDashboard.users.user-list'));
  beforeEach(inject(function($controller) {
    userService = {
      wasCalled: false,
      getUsers: function () {
        this.wasCalled = true;
        return {
          then: function (success) {
            success([{}])
          }
        }
      }
    };
    userList = $controller('UserListCtrl', {
      userService: userService
    });
  }));

  it('should create a user list instance', function() {
    expect(userList).toBeDefined();
  });

  it("should call the getUsers method on userService", function () {
    expect(userService.wasCalled).toBe(true);
  });

  it("should set the users when results are returned", function () {
    expect(userList.users.length).toBeGreaterThan(0);
  });
});