(function(){

  angular
    .module('app')
    .controller('EventsController', [
      'eventsService',
        EventsController
    ]);

  function EventsController(eventsService) {
    var vm = this;

    vm.tableData = [];

    eventsService
      .loadAllItems()
      .then(function(tableData) {
        vm.tableData = [].concat(tableData);
      });
  }


  angular
    .module('app')
    .controller('EventController', [
      'eventsService', '$state',
        EventController
    ]);

  function EventController(eventsService, $state) {
    var vm = this;

    vm.event = [];

    eventsService
      .get($state.params.id).then(function(data){
      vm.event = data;
    });
  }

})();
