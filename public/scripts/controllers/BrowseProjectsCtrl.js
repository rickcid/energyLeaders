var app = angular.module('energyLeaders');

app.controller('BrowseProjectsCtrl', function($scope, $routeParams, UserService) {

  var allProjectsData = UserService.projectData;
  // console.log('All Projects Data:', $scope.projects);

  var selectedProjectData = UserService.projectData[$routeParams.projectId];
  // console.log("routeParams.projectId:", $routeParams.projectId);

  $scope.listMode = true;

  $scope.todayDate = new Date();
  $scope.projects = allProjectsData;
  $scope.project = selectedProjectData;

  if ($routeParams.projectId) {
    $scope.listMode = false;
    $scope.experience = UserService.displayAll(selectedProjectData.desired_candidate.experience);
    $scope.rotationDays = UserService.rotationalDays(selectedProjectData.rotational_days_on); 
  }
  

});