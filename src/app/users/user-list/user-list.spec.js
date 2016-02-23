describe('user-list', function() {
  var userList;

  beforeEach(module('githubDashboard.users.user-list'));
  beforeEach(inject(function($controller) {
    userList = $controller('UserListCtrl');
  }));

  it('should create a user list instance', function() {
    expect(userList).toBeDefined();
  })
});