var app = angular.module('energyLeaders', ['ngRoute', 'toaster', 'angularMoment']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
    })
    .when('/companies/:companyId', {
      templateUrl: 'views/companyProfileTmpl.html',
      controller: 'CompanyCtrl'
    })
    .when('/projects', {
      templateUrl: 'views/browseProjectsTmpl.html',
      controller: 'BrowseProjectsCtrl'
    })
    .when('/projects/:projectId', {
      templateUrl: 'views/browseProjectsTmpl.html',
      controller: 'BrowseProjectsCtrl'
    })
    .when('/consultants', {
      templateUrl: 'views/consultantsTmpl.html',
      controller: 'ConsultantCtrl'
    })
    .when('/consultants/:id', {
      templateUrl: 'views/consultantProfileTmpl.html',
      controller: 'ConsultantCtrl'
    })
    .when('/register/company', {
      templateUrl: 'views/registerCompanyTmpl.html',
      controller: 'AuthCtrl'
    })
    .when('/register/consultant', {
      templateUrl: 'views/registerConsultantTmpl.html',
      controller: 'AuthCtrl'
    })
    //Needs to be assigned Authed id
    .when('/consultant/profile/:userId', {
      templateUrl: 'views/consultantProfileTmpl.html',
      controller: 'ConsultantCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});