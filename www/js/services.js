angular.module('starter.services', [])
  .factory('Connections', function() {
    var connections = [
      { id: 0, userId: 0, eventId: 0 },
      { id: 1, userId: 1, eventId: 0 },
      { id: 2, userId: 2, eventId: 0 },
      { id: 3, userId: 0, eventId: 1 },
      { id: 4, userId: 1, eventId: 1 },
      { id: 5, userId: 2, eventId: 2 }
    ];
    return {
      all: function() {
        return connections;
      },
      get: function(chatId) {//this probably doesn't work
        for (var i = 0; i < connections.length; i++) {
          if (connections[i].id === parseInt(chatId)) {
            return connections[i];
          }
        }
        return null;
      }
    };
  })
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
    //Keys are the user ID
  var chats = {
    0: [
      { fromUser: false, text: 'Hey, you seem like you could be cool, want to go with me?' },
      { fromUser: true, text: 'Sure, want to meet up for a beer before?' },
      { fromUser: false, text: 'Sounds good, how about the bar next door?' },
      { fromUser: true, text: 'Perfect, see you at 7:30.' }
    ],
    1: [
      { fromUser: false, text: 'Hey, you seem like you could be cool, what to go with me?' }
    ],
    2: [
      { fromUser: false, text: 'Hey, you seem like you could be cool, what to go with me?' }
    ],
    3: [
      { fromUser: false, text: 'Hey, you seem like you could be cool, what to go with me?' }
    ],
    4: [
      { fromUser: false, text: 'Hey, you seem like you could be cool, what to go with me?' }
    ],
    5: [
      { fromUser: false, text: 'Hey, you seem like you could be cool, what to go with me?' }
    ]
  };

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(userId) {
      return chats[userId];
    }
  };
})
.factory('Events', function() {
  var events = [{
    id: 0,
    name: 'Startup Weekend',
    description: 'Startup Weekend is an awesome event.',
    date: '3/21/15',
    imgUrl: 'data:image/png;base64,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',
    userIsUpForIt: true,
    userPreferences: {
      relationshipType: 'friendship',
      genderInterest: 'any'
    },
    users: [{
      id: 0,
      userPreferences: {
        relationshipType: 'friendship',
        genderInterest: 'any'
      }
    },
    {
      id: 1,
      userPreferences: {
        relationshipType: 'dating',
        genderInterest: 'women'
      }
    },
    {
      id: 2,
      userPreferences: {
        relationshipType: 'friendship',
        genderInterest: 'any'
      }
    }]
  },
  {
    id: 1,
    name: 'Katy Perry',
    description: 'Katy Perry live in concert at CMAC',
    category: 'concert',
    date: '3/26/15',
    imgUrl: 'http://s1.ticketm.net/tm/en-us/dbimages/163544a.jpg',
    userIsUpForIt: false,
    users: [{
      id: 0,
      userPreferences: {
        relationshipType: 'friendship',
        genderInterest: 'any'
      }
    },
    {
      id: 1,
      userPreferences: {
        relationshipType: 'dating',
        genderInterest: 'women'
      }
    }]
  },
  {
    id: 2,
    name: 'Jog Around Cobbs Hill',
    description: 'Just looking for someone to go on a run with',
    category: 'activity',
    date: 'Tonight',
    userIsUpForIt: false,
    users: [{
      id: 2,
      userPreferences: {
        relationshipType: 'friendship',
        genderInterest: 'any'
      }
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
})
.factory('Users', function() {
  var users = [{
      id: 0,
      name: 'Kelly Programmer',
      blurb: 'I love the codez',
      profileImage: 'http://bashny.net/uploads/images/00/00/01/2013/07/25/3359235012.jpg',
      gender: 'Female'
    },
    {
      id: 1,
      name: 'Sarah Analyst',
      blurb: 'Algorithms drive me wild',
      profileImage: 'http://www2.pictures.stylebistro.com/gi/Zooey+Deschanel+Long+Hairstyles+Long+Straight+vfshTCL90Nyl.jpg',
      gender: 'Female'
    },
    {
      id: 2,
      name: 'Steve Designer',
      blurb: 'Helvetica forever!',
      profileImage: 'http://whitneyleephotography.com/blog/andrew%20headshot/2.jpeg',
      gender: 'Male'
    },
    {
      id: 3,
      name: 'Brian Witt',
      blurb: 'I hate going to the grocery store alone',
      profileImage: 'https://scontent-iad.xx.fbcdn.net/hphotos-xfp1/t31.0-8/q83/s960x960/10482319_10100981404444665_795167157213236177_o.jpg',
      gender: 'Male'
    }];

  return { 
    get: function(userId) {
      for (var i = 0; i < users.length; i++) {
        if (users[i].id === parseInt(userId)) {
          return users[i];
        }
      }
      return null;
    },
    all: function() {
      return users;
    }
  };
})
.factory('CurrentUser', function() {
  return {
    id: 4,
    name: 'Tegan Jenner',
    blurb: 'Life is but a dream...',
    profileImage: 'https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-9/409634_10100367216402425_2089169789_n.jpg?oh=9d6d64834df238d378d2ea39158570d2&oe=55AFBF15&__gda__=1437668510_a8f18d206be0adb715a6c90bcb04f46d',
    gender: 'Female'
  };
});
