var app = angular.module('energyLeaders');

app.controller('ConsultantCtrl', function($scope, $routeParams, UserService) {

  var allConsultants = UserService.consultantData;
  var consultantData = UserService.consultantData[$routeParams.userId]
  // console.log('All Consultants;' , allConsultants);
  // console.log('Consultant: ' , consultantData);


  var allprofilesData = UserService.profilesData;
  var profileData = UserService.profilesData[$routeParams.userId];
  var schoolsData = profileData.schools;
  var workHistoryData = profileData.work_history;
  var skillsData = profileData.skills;
  // console.log("All Profiles Data: ", allprofilesData);
  // console.log("Profile:" , profileData);
  // console.log("Schools:" , schoolsData);
  // console.log("WorkHistory:" , workHistoryData);
  // console.log("Skills" , skillsData);


  $scope.consultants = allConsultants;
  $scope.consultant = consultantData;

  $scope.profiles = allprofilesData;
  $scope.profile = profileData;
  $scope.schools = schoolsData;
  $scope.workHistory = workHistoryData;
  $scope.isCollapsed = true;


  if ($routeParams.userId) {
    $scope.skills = UserService.displayAll(profileData.skills);
  }




});