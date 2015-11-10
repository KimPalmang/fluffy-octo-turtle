(function(){
  'use strict';

  angular
    .module('test2')
    .controller('FriendsController', FriendsController);

    function FriendsController(friendFactory){
      var vm = this;

      var getMyFriends = function(){
        friendFactory.getFriends()
        .success(
          function(data){
            vm.friends = data;
          });
      };

      vm.deleteThisFriend = function(id){
        friendFactory.deleteFriend(id);
      };
      getMyFriends();
    }
})();
