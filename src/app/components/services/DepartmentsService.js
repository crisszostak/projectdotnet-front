(function(){
  'use strict';

  angular.module('app')
        .service('departmentsService', [
        '$q',
          departmentsService
  ]);

  function departmentsService($q){
    var tableData = [
      {
        id: 1,
        name: 'Departament 1',
        description: 'Maecenas nisl at magna. Suspendisse semper nec, sem.',
        admin: 1
      },{
        id: 2,
        name: 'Departament 2',
        description: 'Sed aliquet commodo id, cursus.',
        admin: 1
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(tableData);
      },
      getOrganizationDepartments: function(id) {
        return $q.when(tableData);
      },
    };
  }
})();
