angular.module('githubDashboard.users.user-list', [
  'ui.router'
])
  .config(function($stateProvider) {
    $stateProvider
      .state('userList', {
        url: '/users',
        templateUrl: 'users/user-list/user-list.tpl.html',
        controller: 'UserListCtrl as userList'
      })
  })
  .controller('UserListCtrl', function UserListCtrl($http) {
    var userList = this;

    $http.get('/api/users').then(function (results) {
      userList.users = results.data;
    })
  })
;

