angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('data', function() {
  var events = [{
    id: 0,
    name: 'Startup Weekend',
    description: 'Startup Weekend is an awesome event.',
    date: '3/21/15',
    imgUrl: 'https://www.filepicker.io/api/file/AQR9NAIiTw6grdY5OpWn?signature=80b5fd73e82069fda0bf5c96decc872f123e86ee60bea9358441babbbc44206f&policy=eyJleHBpcnkiOjE0MjY5Nzg4MTksImNhbGwiOlsicGljayIsInJlYWQiLCJ3cml0ZSIsInN0b3JlIl19',
    userIsUpForIt: true,
    userPreferences: {
      relationshipType: 'friendship',
      genderInterest: 'any'
    },
    users: [{
      name: 'Kelly Programmer',
      blurb: 'I love the codez',
      profileImage: 'http://bashny.net/uploads/images/00/00/01/2013/07/25/3359235012.jpg'
    },
    {
      name: 'Sarah Analyst',
      blurb: 'Algorithms drive me wild',
      profileImage: 'https://lh6.googleusercontent.com/frgSZ_kfkrFWWKQYtsoDS2-KUoUNF2TLPGByhJHWobIGxTj7p437ekTL5K1XC9uJOC-hqp0p5cYNR7cbKaLmdDbejKtidZOevL3xxtWOP-85o_4N6C6AnwGA1sTlOg'
    },
    {
      name: 'Steve Designer',
      blurb: 'Helvetica forever!',
      profileImage: 'http://whitneyleephotography.com/blog/andrew%20headshot/2.jpeg'
    }]
  },
  {
    id: 1,
    name: 'Katy Perry',
    description: 'Katy Perry live in concert at CMAC',
    date: '3/26/15',
    imgUrl: 'http://s1.ticketm.net/tm/en-us/dbimages/163544a.jpg',
    userIsUpForIt: false,
    users: [{
      name: 'Kelly Programmer',
      blurb: 'I love the codez',
      profileImage: 'http://bashny.net/uploads/images/00/00/01/2013/07/25/3359235012.jpg'
    },
    {
      name: 'Steve Designer',
      blurb: 'Helvetica forever!',
      profileImage: 'http://whitneyleephotography.com/blog/andrew%20headshot/2.jpeg'
    }]
  },
  {
    id: 2,
    name: 'Jog Around Cobbs Hill',
    description: 'Just looking for someone to go on a run with',
    date: 'Tonight',
    userIsUpForIt: false,
    users: [{
      name: 'Kelly Programmer',
      blurb: 'I love the codez',
      profileImage: 'http://bashny.net/uploads/images/00/00/01/2013/07/25/3359235012.jpg'
    }]
  }]

  return {
    all: function() {
      return events;
    },
    get: function(eventId) {
      for (var i = 0; i < events.length; i++) {
        if (events[i].id === parseInt(eventId)) {
          return events[i];
        }
      }
      return null;
    }
  };
});
