var app = angular.module('energyLeaders');

app.controller('LoginCtrl', function($scope, $routeParams, $location, AuthService, toaster) {

  $scope.loginUser = function(user) {

    AuthService.loginUser(user).then(function() {
      toaster.pop('success', 'You have logged in successfully.');
      $location.path('/projects');
    }, function(err) {
      console.log('loginController', err)
      toaster.pop('error', 'Sorry, something went wrong!');
      //console.log("Error...");
    });
  };


  // $scope.changePassword = function(consultant) {

  //   AuthService.changePassword(consultant).then(function() {

  //     //This resets modal form
  //     $scope.consultant.email = '';
  //     $scope.consultant.oldPass = '';
  //     $scope.consultant.newPass = '';

  //     toaster.pop('success', "Password change was successfull.");
  //     //console.log("Password changed successfully!");
  //   }, function(err) {
  //     toaster.pop('error', 'Oops, something went wrong!');
  //     //console.log("Error...");
  //   });
  // };


});


