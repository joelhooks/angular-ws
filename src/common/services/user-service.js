angular.module('githubDashboard.services.user-service', [])
  .service('userService', function UserService($http) {
    var userService = this;

    userService.getUsers = function() {
      return $http.get('/api/users').then(function (results) {
        return results.data;
      })
    };

    userService.getUser = function(username) {
      return $http.get('/api/users/' + username).then(function(results) {
        return results.data;
      })
    }
  })
;