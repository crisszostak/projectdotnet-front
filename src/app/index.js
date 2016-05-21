'use strict';

angular.module('angularMaterialAdmin', ['ngAnimate', 'ngCookies', 'ngTouch',
  'ngSanitize', 'ui.router', 'ngMaterial', 'nvd3', 'app'])
  .constant(
        "API_CONFIG", {
          "enabled": false,
          "url": "http://localhost",
          "port": "5000",
          "endpoints": {
            "organizations": "/api/Organizations/",
            "account": "/api/Account/",
            "admin": "/api/Admin/",
            "event": "/api/Events/"
          }
        }
    )
  .constant('AUTH_EVENTS', {
      loginSuccess: 'auth-login-success',
      loginFailed: 'auth-login-failed',
      logoutSuccess: 'auth-logout-success',
      sessionTimeout: 'auth-session-timeout',
      notAuthenticated: 'auth-not-authenticated',
      notAuthorized: 'auth-not-authorized'
    })
  .constant('USER_ROLES', {
      all: '*',
      admin: 'admin',
      editor: 'editor',
      guest: 'guest'
    })
  .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider,
                    $mdIconProvider) {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'app/views/main.html',
        controller: 'MainController',
        controllerAs: 'vm',
        abstract: true
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/views/login.html',
        controller: 'LoginController',
        controllerAs: 'vm',
        data: {
          title: 'Login'
        }
      })
      .state('home.dashboard', {
        url: '/dashboard',
        templateUrl: 'app/views/dashboard.html',
        data: {
          title: 'Dashboard'
        }
      })
      .state('home.profile', {
        url: '/profile',
        templateUrl: 'app/views/profile.html',
        controller: 'ProfileController',
        controllerAs: 'vm',
        data: {
          title: 'Profile'
        }
      })
      .state('home.users', {
        url: '/users',
        controller: 'UsersController',
        controllerAs: 'vm',
        templateUrl: 'app/views/users.html',
        data: {
          title: 'Users'
        }
      })
      .state('home.user.view', {
          url: '/user/:id',
          controller: 'UserController',
          controllerAs: 'vm',
          templateUrl: 'app/views/user/view.html',
          data: {
            title: 'User'
          }
        })
      .state('home.organizations', {
        url: '/organizations',
        controller: 'OrganizationsController',
        controllerAs: 'vm',
        templateUrl: 'app/views/organizations.html',
        data: {
          title: 'Organizations'
        }
      })
      .state('home.organization', {
        url: '/organization/:id',
        controller: 'OrganizationController',
        controllerAs: 'vm',
        templateUrl: 'app/views/organization/view.html',
        data: {
          title: 'Organization'
        }
      })
      .state('home.departments', {
        url: '/departments',
        controller: 'DepartmentsController',
        controllerAs: 'vm',
        templateUrl: 'app/views/departments.html',
        data: {
          title: 'Departments'
        }
      })
      .state('home.events', {
        url: '/events',
        controller: 'EventsController',
        controllerAs: 'vm',
        templateUrl: 'app/views/events.html',
        data: {
          title: 'Events'
        }
      })
      .state('home.event', {
        url: '/events/:id',
        controller: 'EventController',
        controllerAs: 'vm',
        templateUrl: 'app/views/event/view.html',
        data: {
          title: 'Events'
        }
      });

    $urlRouterProvider.otherwise('/dashboard');

    $mdThemingProvider
      .theme('default')
        .primaryPalette('grey', {
          'default': '600'
        })
        .accentPalette('teal', {
          'default': '500'
        })
        .warnPalette('defaultPrimary');

    $mdThemingProvider.theme('dark', 'default')
      .primaryPalette('defaultPrimary')
      .dark();

    $mdThemingProvider.theme('grey', 'default')
      .primaryPalette('grey');

    $mdThemingProvider.theme('custom', 'default')
      .primaryPalette('defaultPrimary', {
        'hue-1': '50'
    });

    $mdThemingProvider.definePalette('defaultPrimary', {
      '50':  '#FFFFFF',
      '100': 'rgb(255, 198, 197)',
      '200': '#E75753',
      '300': '#E75753',
      '400': '#E75753',
      '500': '#E75753',
      '600': '#E75753',
      '700': '#E75753',
      '800': '#E75753',
      '900': '#E75753',
      'A100': '#E75753',
      'A200': '#E75753',
      'A400': '#E75753',
      'A700': '#E75753'
    });

    $mdIconProvider.icon('user', 'assets/images/user.svg', 64);
  });
