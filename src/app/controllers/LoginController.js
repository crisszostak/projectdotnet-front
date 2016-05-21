(function(){

  angular
      .module('app')
      .controller('LoginController', [
        'AUTH_EVENTS', 'AuthService', '$rootScope',
        LoginController
      ]);

  function LoginController(AUTH_EVENTS,AuthService, $rootScope) {
    var vm = this;

        vm.tableData = [];

          vm.credentials = {
              username: '',
              password: '',
              test: 'test'
          };

    vm.login = function (credentials) {
        AuthService.login(credentials).then(function (user) {
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            $scope.setCurrentUser(user);
        }, function () {
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
    };
  }

})();
