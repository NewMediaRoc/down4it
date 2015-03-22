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
      { fromUser: false, text: 'Hey, you seem like you could be cool, want to go with me?' }
    ],
    2: [
      { fromUser: false, text: 'Hey, you seem like you could be cool, want to go with me?' }
    ],
    3: [
      { fromUser: false, text: 'Hey, you seem like you could be cool, want to go with me?' }
    ],
    4: [
      { fromUser: false, text: 'Hey, you seem like you could be cool, want to go with me?' }
    ],
    5: [
      { fromUser: false, text: 'Hey, you seem like you could be cool, want to go with me?' }
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
    imgUrl: '/img/events/0.png',
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
    imgUrl: '/img/events/1.jpg',
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
      profileImage: '/img/users/0.jpg',
      gender: 'Female'
    },
    {
      id: 1,
      name: 'Sarah Analyst',
      blurb: 'Algorithms drive me wild',
      profileImage: '/img/users/1.jpg',
      gender: 'Female'
    },
    {
      id: 2,
      name: 'Steve Designer',
      blurb: 'Helvetica forever!',
      profileImage: '/img/users/2.jpg',
      gender: 'Male'
    },
    {
      id: 3,
      name: 'Brian Witt',
      blurb: 'I hate going to the grocery store alone',
      profileImage: '/img/users/3.jpg',
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
    profileImage: '/img/users/4.jpg',
    gender: 'Female'
  };
});
