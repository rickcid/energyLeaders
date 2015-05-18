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
    .when('/testing', {
      templateUrl: 'views/registerCompanyTmpl.html',
      controller: 'AuthCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});