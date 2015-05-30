var app = angular.module('energyLeaders');

app.controller('CompanyCtrl', function($scope, $routeParams, $location, toaster, UserService) {

  $scope.updateCompanyInfo = function(user) {
    UserService.updateContactInfo(user).then(function() {
      toaster.pop('success', 'You have successfully updated your information.')
      $location.path('/consultants/:userId/contact-info');
    }, function(err) {
      console.log('updateContactInfo', err)
      toaster.pop('error', 'Sorry, something went wrong!');
    });
  };

/*** SEEDED DATA METHODS **/
  $scope.companies = UserService.companyData;
  console.log('Company Data:', $scope.companies);
  
  console.log("routeParams.companyId:", $routeParams.companyId);
  $scope.company = UserService.companyData[$routeParams.companyId];



});