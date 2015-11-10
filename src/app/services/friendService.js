angular.module('test2')
.factory('friendFactory', ['$http', function($http){
  var friendService = {};

  friendService.getFriends = function(){
    return $http.get('http://private-06bf0-collaborationgrouptest.apiary-mock.com/friends');
  };

  friendService.getFriend = function(id){
    if(id !== null && typeof id === 'undefined'){
      id = -1;
    }
    return $http.get('http://private-06bf0-collaborationgrouptest.apiary-mock.com/friends/'+id);
  };

  friendService.deleteFriend = function(id){
    if(id !== null && typeof id === 'undefined'){
      id = -1;
    }
    return $http.delete('http://private-06bf0-collaborationgrouptest.apiary-mock.com/friends/'+id);
  };

  return friendService;

}]);
