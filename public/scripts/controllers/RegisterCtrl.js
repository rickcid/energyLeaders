var app = angular.module('energyLeaders');

app.controller('RegisterCtrl', function($scope, $routeParams, $location, AuthService, toaster) {

  $scope.registerConsultant = function(user) {
    user['user_type'] = 'consultant';
    AuthService.registerUser(user).then(function(res) {
      toaster.pop('success', 'You have registered successfully.');
      $location.path('/projects');
    }, function(err) {
      console.log('controller', err)
      if(err.status ===  11000) toaster.pop('error', 'This email is already registered.');
      else toaster.pop('error', 'Sorry, something went wrong!');
    });
  };

  $scope.registerCompany = function(user) {
    //adds type
    user['user_type'] = 'company';
    AuthService.registerUser(user).then(function(res) {
      toaster.pop('success', 'You have registered successfully.');
      $location.path('/projects');
    }, function(err) {
      console.log('controller', err)
      if(err.status ===  11000) toaster.pop('error', 'This email is already registered.');
      else toaster.pop('error', 'Sorry, something went wrong!');
    });
  };
});