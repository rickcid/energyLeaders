var app = angular.module('energyLeaders');

app.controller('CompanyCtrl', function($scope, $routeParams, UserService) {

  $scope.companies = UserService.companyData;
  console.log('Company Data:', $scope.companies);
  
  console.log("routeParams.companyId:", $routeParams.companyId);
  $scope.company = UserService.companyData[$routeParams.companyId];



});