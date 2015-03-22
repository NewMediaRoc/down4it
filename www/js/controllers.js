angular.module('starter.controllers', [])

  .controller('LoginCtrl', function($scope) {})
  .controller('MeCtrl', function($scope, currentUser) {
    $scope.me = currentUser;
  })
  .controller('EventsCtrl', function($scope, events) {
    $scope.events = events.all();
  })
  .controller('EventsNewCtrl', function($scope) {})
  .controller('EventCtrl', function($scope, $stateParams, events, users) {
    console.log($stateParams.eventId);
//Use $window.innerHeight to get the height of the viewport

    $scope.event = events.get($stateParams.eventId);
    $scope.users = [];
    for (var i = 0; i < $scope.event.users.length; i++) {
      $scope.users.push({
        preferences: $scope.event.users[i].userPreferences,
        profile: users.get($scope.event.users[i].id)
      });
    }   
  })
  .controller('ProfileCtrl', function($scope, $stateParams, users) {
    console.log($stateParams.userId);
    $scope.user = users.get($stateParams.userId);
  })
  .controller('ChatCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })
  .controller('ConnectionsCtrl', function($scope) {})
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

