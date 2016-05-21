(function(){
  'use strict';

  angular.module('app')
          .service('navService', [
          '$q',
          navService
  ]);

  function navService($q){
    var menuItems = [
      {
        name: 'Dashboard',
        icon: 'dashboard',
        sref: '.dashboard'
      },
      {
        name: 'Profile',
        icon: 'person',
        sref: '.profile'
      },
      {
        name: 'Users',
        icon: 'group',
        sref: '.users'
      },
      {
        name: 'Organizations',
        icon: 'work',
        sref: '.organizations'
      }
      //,
      //{
      //  name: 'Departments',
      //  icon: 'view_module',
      //  sref: '.departments'
      //}
      //,
      //{
      //  name: 'Events',
      //  icon: 'view_module',
      //  sref: '.events'
      //}
    ];

    return {
      loadAllItems : function() {
        return $q.when(menuItems);
      }
    };
  }

})();
