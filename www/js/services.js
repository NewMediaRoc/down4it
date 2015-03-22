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
      { fromUser: false, text: 'Hey, you seem like you could be cool, want to go with me?' }
    ],
    1: [
      { fromUser: false, text: 'Hey, you seem like you could be cool, want to go with me?' },
      { fromUser: true, text: 'Sure, want to meet up for a beer before?' },
      { fromUser: false, text: 'Sounds good, how about the bar next door?' },
      { fromUser: true, text: 'Perfect, see you at 7:30.' }
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
    users: [0,1,2]
  },
  {
    id: 1,
    name: 'Katy Perry',
    description: 'Katy Perry live in concert at CMAC',
    category: 'concert',
    date: '3/26/15',
    imgUrl: '/img/events/1.jpg',
    userIsUpForIt: false,
    users: [0,1]
  },
  {
    id: 2,
    name: 'Jog Around Cobbs Hill',
    description: 'Just looking for someone to go on a run with',
    category: 'activity',
    date: 'Tonight',
    imgUrl: '/img/events/2.jpg',
    userIsUpForIt: false,
    users: [2]
  },
  {
    id: 3,
    name: 'Kelly Clarkson',
    description: 'Kelly Clarkson, who began singing as a young girl in her school choir, rose to national fame as the first-ever winner of the popular television show American Idol. While 10,000 hopeful singers auditioned for the show, Clarkson excelled throughout the competition, ultimately taking home the title of American Idol and winning a recording contract with RCA.',
    category: 'concert',
    date: '7/21/2015',
    imgUrl: '/img/events/3.jpg',
    userIsUpForIt: false,
    users: [0,1,2,7,8]
  },
  {
    id: 4,
    name: 'Lindsay Stirling',
    description: 'indsey Stirling\'s unconventional combination of classical violin and dubstep beats coupled with a ballet-type dancing style has garnered more than 3.5 million subscribers and counting on her YouTube channel, Lindseystomp. Indeed the outre performance artist has paved her own way, working with director/cinematographer Devin Graham to produce her series of uniquely styled videos.',
    category: 'concert',
    date: '3/25/2015',
    imgUrl: '/img/events/4.jpg',
    userIsUpForIt: true,
    users: [0,3,5,6,7,8]
  },
  {
    id: 5,
    name: 'The Price Is Right',
    description: 'What a great fun show. Took my family to see this even though they hadn\'t seen the tv version, and it had been years since I had. From the moment the announcer, a very talented Andy Martello, picks up his microphone until the Wheel has spun for the last time it was a blast.',
    category: 'activity',
    date: '5/12/2015',
    imgUrl: '/img/events/5.jpg',
    userIsUpForIt: false,
    users: [0,1,6,7,8]
  },
  {
    id: 6,
    name: 'Kenny Chesney',
    description: 'I have been to three Kenny Chesney shows and he does amazing!! He makes you have a good time, you\'re money is well spent, always have tricks up his sleeve that leave you wanting more! I know people blame Kenny for echo but that\'s what happens when a concert is played in a sports stadium. Kenny is also not an egomatic for those of you who think he is. I have gone to other concerts and they are boring compared to Kenny Chesney. Keep up the good work Kenny!!!',
    category: 'concert',
    date: '3/30/2015',
    imgUrl: '/img/events/6.jpg',
    userIsUpForIt: false,
    users: [0,1,2,3,8]
  },
  {
    id: 7,
    name: 'One Direction',
    description: 'The sound is fantastic. Very fun to attend. They involve fans in different things. I had a blast last year and can\'t wait for this year.',
    category: 'concert',
    date: '4/15/2015',
    imgUrl: '/img/events/7.jpg',
    userIsUpForIt: false,
    users: [0,5,6,7,8]
  },
  {
    id: 8,
    name: 'Daniel Tosh',
    description: 'Daniel was great live..... Incredibly offensive but in all the right comedian ways. House was packed. His opening comedian was great too!',
    category: 'comedy',
    date: '5/18/2015',
    imgUrl: '/img/events/8.jpg',
    userIsUpForIt: true,
    users: [7,8]
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
    },
    {
      id: 5,
      name: 'Joe Smith',
      blurb: 'I like to have fun',
      profileImage: '/img/users/5.jpg',
      gender: 'Male'
    },
    {
      id: 6,
      name: 'Jenna Greer',
      blurb: 'Where\'s the party',
      profileImage: '/img/users/6.jpg',
      gender: 'Female'
    },
    {
      id: 7,
      name: 'Alphonso Michaels',
      blurb: 'Will you be my friend',
      profileImage: '/img/users/7.jpg',
      gender: 'Male'
    },
    {
      id: 8,
      name: 'Alex Johnson',
      blurb: 'Don’t go alone',
      profileImage: '/img/users/8.jpg',
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
