(function(){

  angular
    .module('app')
    .controller('OrganizationsController', [
      'organizationsService', '$state',
        OrganizationsController
    ])
    .controller('OrganizationController', [
      'organizationsService', '$state', 'eventsService', 'departmentsService',
        OrganizationController
    ]);

  function OrganizationsController(organizationsService, $state ) {
    var vm = this;

    if($state) console.log($state.params);
console.log($state)
//console.log($state.current.params.id)

    //debugger;
    vm.tableData = [];

      organizationsService
      .loadAllItems()
      .then(function(tableData) {
        vm.tableData = [].concat(tableData);
      });
  }

  function OrganizationController(organizationsService, $state, eventsService, departmentsService) {
    var vm = this;

    vm.organization = [];

    vm.organizationEvents = [];

    vm.departments = [];

    organizationsService.get($state.params.id).then(function(data){
      vm.organization = data;
    });

    vm.organizationEvents = [];
    eventsService.getOrganizationEvents($state.params.id).then(function(data){
      vm.events = data;
    });

    departmentsService.getOrganizationDepartments($state.params.id).then(function(data){
      vm.departments = data;
    });



  }

})();
