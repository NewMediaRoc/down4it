angular.module('starter.controllers', [])

  .controller('LoginCtrl', function($scope) {})
  .controller('MeCtrl', function($scope) {})
  .controller('EventsCtrl', function($scope) {
    $scope.items = [
      {
        name:"Startup Weekend", 
        date: "3/21/15", 
        imgUrl: "https://www.filepicker.io/api/file/AQR9NAIiTw6grdY5OpWn?signature=80b5fd73e82069fda0bf5c96decc872f123e86ee60bea9358441babbbc44206f&policy=eyJleHBpcnkiOjE0MjY5Nzg4MTksImNhbGwiOlsicGljayIsInJlYWQiLCJ3cml0ZSIsInN0b3JlIl19",
        peopleCount: 3
      },
      {
        name:"Katy Perry",
        date: "3/26/15",
        imgUrl: "http://s1.ticketm.net/tm/en-us/dbimages/163544a.jpg",
        peopleCount: 6
      },
      {
        name:"Jog Around Cobbs Hill", 
        date: "tonight",
        peopleCount: 2
      }
    ];


  })
  .controller('EventsNewCtrl', function($scope) {})
  .controller('EventCtrl', function($scope) {})
  .controller('ProfileCtrl', function($scope) {})
  .controller('ChatCtrl', function($scope) {})

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

