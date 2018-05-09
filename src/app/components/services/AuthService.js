(function(){
  'use strict';

  angular.module('app')
        .service('AuthService', [
        '$q', '$http', 'Session',
          AuthService
  ]).service('Session', function () {
    this.create = function (sessionId, userId, userRole) {
      this.id = sessionId;
      this.userId = userId;
      this.userRole = userRole;
    };
    this.destroy = function () {
      this.id = null;
      this.userId = null;
      this.userRole = null;
    };
  });

  function AuthService($q, $http, Session){
    const todos = [
      {text: 'Continuous integration', done: false},
      {text: 'Implement panel-widget directive', done: true},
      {text: 'Add backend', done: false}
    ];

    return {
      login : function (credentials) {
        return $http
            .post('/login', credentials)
            .then(function (res) {
              Session.create(res.data.id, res.data.user.id,
                  res.data.user.role);
              return res.data.user;
            });
      },
      isAuthenticated : function () {
        return !!Session.userId;
      },
      isAuthorized : function (authorizedRoles) {
        if (!angular.isArray(authorizedRoles)) {
          authorizedRoles = [authorizedRoles];
        }
        return (authService.isAuthenticated() &&
        authorizedRoles.indexOf(Session.userRole) !== -1);
      }
    };
  }
})();


