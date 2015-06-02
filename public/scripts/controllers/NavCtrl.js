var app = angular.module('energyLeaders');

app.controller('NavCtrl', function($scope, $routeParams, $location, toaster, AuthService) {




  // $scope.loggedIn = AuthService.requireAuth();
  // // AuthService.requireAuth();
  // console.log("NavCtrl Auth", AuthService);


  // if(currentAuth.isCompany) {
  //   $scope.isCompany === true;
  // }if (currentAuth.isConsultant) {
  //   $scope.isConsultant === true;
  // }


  // $scope.currentUser = Auth.user;
//   $scope.nosignedIn = function() {
//     if(currentAuth)
//     return AuthService.requireAuth.isCompany;//Checks if user is signed in, uses method in 'Auth' service
//   };

//   $scope.logout = function() {//This uses logout function from 'Auth'
//     Auth.logout();
//     toaster.pop('success', 'You have logged out successfully.');
//     //console.log("Logged out!");
//     $location.path('/');
//   };



});