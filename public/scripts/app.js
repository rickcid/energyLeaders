var app = angular.module('energyLeaders', ['ngRoute', 'toaster', 'angularMoment', 'ui.bootstrap']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
    })
    .when('/register/company', {
      templateUrl: 'views/register/registerCompanyTmpl.html',
      controller: 'RegisterCtrl',
      resolve: {
        currentAuth: function(AuthService) {
          return AuthService.requireAuth();
        }
      }
    })
    .when('/register/consultant', {
      templateUrl: 'views/register/registerConsultantTmpl.html',
      controller: 'RegisterCtrl',
      resolve: {
        currentAuth: function(AuthService) {
          return AuthService.requireAuth();
        }
      }
    })
    .when('/login', {
      templateUrl: 'views/login/loginUserTmpl.html',
      controller: 'LoginCtrl'
    })
    .when('/companies/create-profile', {
      templateUrl: 'views/companies/createCompanyProfileTmpl.html',
      controller: 'CompanyCtrl'
    })    
    .when('/companies/:companyId/profile', {
      templateUrl: 'views/companies/companyProfileTmpl.html',
      controller: 'CompanyCtrl',
      resolve: {
        currentAuth: function(AuthService) {
          return AuthService.requireAuth();
        }
      }
    })
    .when('/projects', {
      templateUrl: 'views/browseProjectsTmpl.html',
      controller: 'BrowseProjectsCtrl',
      resolve: {
        currentAuth: function(AuthService) {
          return AuthService.requireAuth();
        }
      }
    })
    .when('/projects/:projectId', {
      templateUrl: 'views/browseProjectsTmpl.html',
      controller: 'BrowseProjectsCtrl',
      resolve: {
        currentAuth: function(AuthService) {
          return AuthService.requireAuth();
        }
      }
    })
    //Needs to be assigned Authed id, currently hardcoded
    .when('/consultants/:userId', {
      templateUrl: 'views/consultants/consultantProfileTmpl.html',
      controller: 'ConsultantCtrl',
      resolve: {
        currentAuth: function(AuthService) {
          return AuthService.requireAuth();
        }
      }
    })
    .when('/consultants/:userId/contact-info', {
      templateUrl: 'views/consultants/consultantContactInfoTmpl.html',
      controller: 'ConsultantCtrl',
      resolve: {
        currentAuth: function(AuthService) {
          return AuthService.requireAuth();
        }
      }
    })
    .when('/consultants/:userId/contact-info/edit', {
      templateUrl: 'views/consultants/updateConsultantContactInfoTmpl.html',
      controller: 'ConsultantCtrl',
      resolve: {
        currentAuth: function(AuthService) {
          return AuthService.requireAuth();
        }
      }
    })   
    .when('/consultants/:userId/profile/edit', {
      templateUrl: 'views/consultants/updateConsultantProfileTmpl.html',
      controller: 'ConsultantCtrl',
      resolve: {
        currentAuth: function(AuthService) {
          return AuthService.requireAuth();
        }
      }
    })
    .otherwise({
      redirectTo: '/'
    });
});