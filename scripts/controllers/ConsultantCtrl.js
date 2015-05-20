var app = angular.module('energyLeaders');

app.controller('ConsultantCtrl', function($scope, $routeParams, UserService) {

  var allConsultants = UserService.consultantData;
  var consultantData = UserService.consultantData[$routeParams.userId]
  console.log('All Consultants;' , allConsultants);
  console.log('Consultant: ' , consultantData);


  var allprofilesData = UserService.profilesData;
  console.log("All Profiles Data: ", allprofilesData);
  var profileData = UserService.profilesData[$routeParams.userId];
  console.log("Profile:" , profileData);

  $scope.consultants = allConsultants;
  $scope.consultant = consultantData;

  $scope.profiles = allprofilesData;
  $scope.profile = profileData;

  if ($routeParams.userId) {
    $scope.allDegrees = UserService.displayAll(profileData.degrees);
  }



});