(function() {
  'use strict';

  angular
    .module('test2')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/friends/friends.html',
        controller: 'FriendsController',
        controllerAs: 'ctrl'
      })
      .when('/friend/:id', {
          templateUrl: 'app/friend/friend.html',
          controller: 'FriendController',
          controllerAs: 'ctrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
