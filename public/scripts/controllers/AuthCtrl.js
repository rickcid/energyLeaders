var app = angular.module('energyLeaders');

app.controller('AuthCtrl', function($scope, $routeParams, $location, UserService, toaster) {
  $scope.test = 'test';

  $scope.registerConsultant = function(consultant) {
    UserService.registerConsultant(consultant).then(function() {
      toaster.pop('success', 'You have registered successfully.');
      $location.path('/projects');
    }, function(err) {
      toaster.pop('error', 'Sorry, something went wrong!');
    });
  };

  
});