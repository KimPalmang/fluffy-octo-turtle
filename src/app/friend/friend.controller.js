(function(){
  'use strict';

  angular
    .module('test2')
    .controller('FriendController', FriendController);

    function FriendController(friendFactory, $routeParams){
      var vm = this;
      var getMyFriend = function(){
        friendFactory.getFriend($routeParams.id)
        .success(function(data){
          vm.friend = data;
        });
      };
      getMyFriend();
    }
})();
