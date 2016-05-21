(function(){
  'use strict';

  angular.module('app')
        .service('eventsService', [
        '$q',
          eventsService
  ]);

  function eventsService($q){
    var tableData = [
      {
        id: 1,
        organization: 1,
        categories: [
          {id:1, name: 'category 1'},
          {id:2, name: 'category 2'}
        ],
        name: 'Event 1',
        description: 'In porttitor eros, id eros quis lectus ut viverra sit amet quam. Nam laoreet urna. Donec consectetuer pede, nec eros. Aliquam urna.',
        dateFrom: '1/4/2016',
        dateTo: '18/4/2016',
        location: 'Cracow, Poland'
      },{
        id: 2,
        organization: 1,
        categories: [
          {id:1, name: 'category 1'}
        ],
        name: 'Event 1',
        description: ' placerat. Mauris et magnis dis parturient montes, nascetur ridiculus mus. Morbi tellus. Ut.',
        dateFrom: '4/5/2016',
        dateTo: '10/5/2016',
        location: 'Prague, Czech'
      }
    ];

    var _updateEvent = function (data) {

      return $http({
        'method': 'POST',
        'url': 'api/Events/',
        'data': host
      })
          .then(function (response) {
                return response.data
              },
              function () {
                return false;
              });
    };

    return {
      loadAllItems : function() {
        return $q.when(tableData);
      },
      getOrganizationEvents: function(id) {
        return $q.when(tableData);
      },
      get : function(id){
        return $q.when(tableData[id-1]);
      },
      update: function(data){

      }
    };
  }
})();
