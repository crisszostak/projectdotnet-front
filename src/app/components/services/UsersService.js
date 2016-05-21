(function(){
  'use strict';

  angular.module('app')
        .service('usersService', [
        '$q',
      usersService
  ]);

  function usersService($q){
    var tableData = [
      {
        id: 1,
        username: 'user1',
        email: 'user1@email.com',
        role: 'Admin',
        organization: 'Organization 1'
      },
      {
        id: 2,
        username: 'user2',
        email: 'user2@email.com',
        role: 'Admin',
        organization: 'Organization 2'
      },
      {
        id: 3,
        username: 'user3',
        email: 'user3@email.com',
        role: 'User',
        organization: 'Organization 2'
      },
      {
        id: 4,
        username: 'user4',
        email: 'user4@email.com',
        role: 'User',
        organization: 'Organization 2'
      },
      {
        id: 5,
        username: 'user5',
        email: 'user5@email.com',
        role: 'User',
        organization: 'Organization 1'
      },
      {
        id: 6,
        username: 'user6',
        email: 'user6@email.com',
        role: 'User',
        organization: 'Organization 1'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(tableData);
      }
    };
  }
})();
