(function(){
  'use strict';

  angular.module('app')
        .service('organizationsService', [
        '$q', 'API_CONFIG',
          organizationsService
  ]);

  function organizationsService($q, API_CONFIG){
    var tableData = [
      {
        id: 1,
        name: 'Organization 1',
        description: 'In porttitor eros, id eros quis lectus ut viverra sit amet quam. Nam laoreet urna. Donec consectetuer pede, nec eros. Aliquam urna.',
        admin: 1
      },{
        id: 2,
        name: 'Organization 2',
        description: 'Sed placerat. Mauris et magnis dis parturient montes, nascetur ridiculus mus. Morbi tellus. Ut.',
        admin: 1
      }
      //{
      //  issue: 'Dashboard tiles',
      //  progress: 100,
      //  status: 'Done',
      //  class: 'md-accent'
      //},
      //{
      //  issue: 'Panel widget',
      //  progress: 84,
      //  status: 'In progress',
      //  class: 'orange'
      //},
      //{
      //  issue: 'Form',
      //  progress: 100,
      //  status: 'Done',
      //  class: 'md-accent'
      //},
      //{
      //  issue: 'Custom CSS',
      //  progress: 20,
      //  status: 'Feedback',
      //  class: ''
      //},
      //{
      //  issue: 'Add backend',
      //  progress: 1,
      //  status: 'To do',
      //  class: 'md-warn'
      //},
      //{
      //  issue: 'Layout with sidebar',
      //  progress: 100,
      //  status: 'Done',
      //  class: 'md-accent'
      //}
    ];



    var _organizations = [];

    var _getOrganization = function (id, forceReload) {

      forceReload = forceReload ? true : false;

      return $http.get('/api/Organizations/List', {cache: forceReload})
          .then(function (response) {
                _organizations = response.data.hosts;
                return _organizations;
              },
              function () {
                return false;
              });
    };

    var _getOrganizations = function (id, forceReload) {

      forceReload = forceReload ? true : false;

      return $http.get('/api/Organizations/List', {cache: forceReload})
          .then(function (response) {
                _organizations = response.data.hosts;
                return _organizations;
              },
              function () {
                return false;
              });
    };

    return {
      loadAllItems : function() {
        if(API_CONFIG.enabled){

        }
        return $q.when(tableData);
      },
      get : function(id){
        return $q.when(tableData[id-1]);
      }
    };
  }
})();
