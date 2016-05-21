(function(){

  angular
    .module('app')
    .controller('UsersController', [
      'usersService',
        UsersController
    ]);

  function UsersController(usersService) {
    var vm = this;

    vm.tableData = [];

      usersService
      .loadAllItems()
      .then(function(tableData) {
        vm.tableData = [].concat(tableData);
      });
  }

})();
