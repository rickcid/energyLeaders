var app = angular.module('energyLeaders');

app.controller('ConsultantCtrl', function($scope, $routeParams, UserService) {

  $scope.consultants = UserService.consultantData;
  console.log("Scope.Consultants: ", $scope.consultants)

  console.log("UserrouteParams.id:", $routeParams.id);
  $scope.consultant = UserService.companyData[$routeParams.id];


});