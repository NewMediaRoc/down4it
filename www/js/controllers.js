angular.module('starter.controllers', [])

  .controller('LoginCtrl', function($scope) {})
  .controller('MeCtrl', function($scope, CurrentUser) {
    $scope.me = CurrentUser;
  })
  .controller('EventsCtrl', function($scope, Events) {
    $scope.events = Events.all();
  })
  .controller('EventsNewCtrl', function($scope) {})
  .controller('EventCtrl', function($scope, $stateParams, Events, Users) {
    console.log($stateParams.eventId);
//Use $window.innerHeight to get the height of the viewport

    $scope.event = Events.get($stateParams.eventId);
    $scope.users = [];
    for (var i = 0; i < $scope.event.users.length; i++) {
      $scope.users.push({
        preferences: $scope.event.users[i].userPreferences,
        profile: Users.get($scope.event.users[i].id)
      });
    }   
  })
  .controller('ProfileCtrl', function($scope, $stateParams, Users) {
    console.log($stateParams.userId);
    $scope.eventId = $stateParams.eventId;
    $scope.user = Users.get($stateParams.userId);
  })
  .controller('ChatCtrl', function($scope, $stateParams, Chats, Events, Users, CurrentUser) {
    $scope.myPic = CurrentUser.profileImage;
    //$scope.user = Users.get($stateParams.userId);
    var event = Events.get($stateParams.eventId);
    $scope.messages = Chats.get($stateParams.userId);
    $scope.user = Users.get($stateParams.userId);
    console.log('eventId', $stateParams.userId, 'event', event, 'userId', $stateParams.userId, 'message', $scope.messages);
  })
  .controller('ConnectionsCtrl', function($scope, Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
      Chats.remove(chat);
    }
  })
;





//.controller('DashCtrl', function($scope) {})
//
//.controller('ChatsCtrl', function($scope, Chats) {
//  $scope.chats = Chats.all();
//  $scope.remove = function(chat) {
//    Chats.remove(chat);
//  }
//})
//
//.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//  $scope.chat = Chats.get($stateParams.chatId);
//})
//
//.controller('AccountCtrl', function($scope) {
//  $scope.settings = {
//    enableFriends: true
//  };
//})

