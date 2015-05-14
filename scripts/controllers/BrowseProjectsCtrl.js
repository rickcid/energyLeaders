var app = angular.module('energyLeaders');

app.controller('BrowseProjectsCtrl', function($scope, $routeParams, UserService) {

  $scope.projects = UserService.projectData;
  console.log('Project Data:', $scope.projects);
  
  console.log("routeParams.projectId:", $routeParams.projectId);
  $scope.project = UserService.projectData[$routeParams.projectId];

  $scope.todayDate = new Date();


});