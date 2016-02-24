angular.module('project-seed', [
  'githubDashboard.user-detail',
  'githubDashboard.users.user-list',
  'project-seed.common',
  'ngAria',
  'templates-app',
  'ui.router'
])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/users')
  })
;