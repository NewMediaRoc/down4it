angular.module('starter.controllers', [])

  .controller('LoginCtrl', function($scope) {})
  .controller('MeCtrl', function($scope) {})
  .controller('EventsCtrl', function($scope) {
    $scope.items = [
      {
        name:"Startup Weekend", 
        date: "3/21/15", 
        imgUrl: "https://www.filepicker.io/api/file/AQR9NAIiTw6grdY5OpWn?signature=80b5fd73e82069fda0bf5c96decc872f123e86ee60bea9358441babbbc44206f&policy=eyJleHBpcnkiOjE0MjY5Nzg4MTksImNhbGwiOlsicGljayIsInJlYWQiLCJ3cml0ZSIsInN0b3JlIl19",
        upForItCount: 3,
        userIsUpForIt: false
      },
      {
        name:"Katy Perry",
        date: "3/26/15",
        imgUrl: "http://s1.ticketm.net/tm/en-us/dbimages/163544a.jpg",
        upForItCount: 6,
        userIsUpForIt: false
      },
      {
        name:"Jog Around Cobbs Hill", 
        date: "tonight",
        upForItCount: 2,
        userIsUpForIt: true
      }
    ];


  })
  .controller('EventsNewCtrl', function($scope) {})
  .controller('EventCtrl', function($scope, $stateParams) {
    console.log($stateParams.eventId);
//Use $window.innerHeight to get the height of the viewport

    $scope.event = {

    }
    $scope.items = [
      {name:"Brian Witt", sex:"m",  date: "3/21/15", imgUrl: "https://www.filepicker.io/api/file/AQR9NAIiTw6grdY5OpWn?signature=80b5fd73e82069fda0bf5c96decc872f123e86ee60bea9358441babbbc44206f&policy=eyJleHBpcnkiOjE0MjY5Nzg4MTksImNhbGwiOlsicGljayIsInJlYWQiLCJ3cml0ZSIsInN0b3JlIl19" },
      {name:"Katy Perry", date: "3/26/15", imgUrl: "http://s1.ticketm.net/tm/en-us/dbimages/163544a.jpg" },
      {name:"Jog Around Cobbs Hill", date: "tonight" }
    ];

  })
  .controller('ProfileCtrl', function($scope, $stateParams) {
    console.log($stateParams.eventId);
    $scope.user = {
      name: 'Brian Witt',
      imageUrl: 'https://scontent-iad.xx.fbcdn.net/hphotos-xfp1/t31.0-8/q83/s960x960/10482319_10100981404444665_795167157213236177_o.jpg',
      gender: 'Male',
      relationshipType: 'friendship',
      genderInterest: 'Women',
      tagline: 'Life is but a dream...'
    };
  })
  .controller('ChatCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
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

