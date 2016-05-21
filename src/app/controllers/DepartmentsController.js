(function(){

  angular
    .module('app')
    .controller('DepartmentsController', [
      'departmentsService',
        DepartmentsController
    ]);

  function DepartmentsController(departmentsService) {
    var vm = this;

    vm.tableData = [];

    departmentsService
      .loadAllItems()
      .then(function(tableData) {
        vm.tableData = [].concat(tableData);
      });
  }

})();
