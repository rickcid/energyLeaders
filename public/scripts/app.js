var app = angular.module('energyLeaders', ['ngRoute', 'toaster', 'angularMoment', 'ui.bootstrap']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
    })
    .when('/register/company', {
      templateUrl: 'views/register/registerCompanyTmpl.html',
      controller: 'AuthCtrl'
    })
    .when('/register/consultant', {
      templateUrl: 'views/register/registerConsultantTmpl.html',
      controller: 'AuthCtrl'
    })
    .when('/companies/create-profile', {
      templateUrl: 'views/companies/createCompanyProfileTmpl.html',
      controller: 'CompanyCtrl'
    })    
    .when('/companies/:companyId', {
      templateUrl: 'views/companies/companyProfileTmpl.html',
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
    //Needs to be assigned Authed id, currently hardcoded
    .when('/consultants/:userId', {
      templateUrl: 'views/consultants/consultantProfileTmpl.html',
      controller: 'ConsultantCtrl'
    })
    .when('/consultants/:userId/contact-info/edit', {
      templateUrl: 'views/consultants/consultantContactInfoTmpl.html',
      controller: 'ConsultantCtrl'
    })    
    .when('/consultants/:userId/profile/edit', {
      templateUrl: 'views/consultants/updateConsultantProfileTmpl.html',
      controller: 'ConsultantCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});