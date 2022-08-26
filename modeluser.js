// Hei og velkommen firstName_d1
model.users = [
   {
   //activeUser 
   //  chat:[{userid1:1, userid2:2, chatText:[{id:1,text:"hei"},{id:2,text:"hei"},]}],   eventuelt trekk denne ut i eget dokument
   // chat:["hei","hallo"],
   personId: 0,   
   firstName: 'Team1',
   lastName: 'bestTeam',  
   userName: '0',
   passWord: 'pw123',   
   gender: 'male', 
   age: 30,
   photos: [],
   mail: 'ActiveUser_@demomail.com', 
   activeSince: '',
   answers: {  // kun for demo, skal være tom.
      Q1: [''],
      Q2: [''],
      Q3: [''],
      Q4: [''],
   },
   positionOnMap: { lat: 41.881832, lng: -87.623177}
},



    {
      //dummy
      // chat:[{id:1,text:"hei"},{id:2,text:"hei"}],
     personId: 1,   
     firstName: 'firstName_d1',
     lastName: 'lastName_d1',  
     userName: '11',
     passWord: '11',   
     gender: 'male', 
     age: 26,
     photos: [],
     mail: 'demo_1@demomail.com', 
     activeSince: '',
     answers: {  // kun for demo, skal være tom.
        Q1: ['sove', 'gå tur', 'være med venner'],
        Q2: ['yoga', 'maling'],
        Q3: ['Picky eater', 'Frossenpizza', 'grillkrydder'],
        Q4: ['Røyker ikke', 'Røyker sosialt', 'Drikker sosialt'],
     },
     positionOnMap: { lat: 41.881832, lng: -87.623177}
    },
    
    {
      //dummy
     personId: 2,   
     firstName: 'firstName_d2',
     lastName: 'lastName_d2',  
     userName: '22',
     passWord: '22',   
     gender: 'male', 
     age: 34,
     photos: [],
     mail: 'demo_2@demomail.com', 
     activeSince: '',
     answers: {
        Q1: ['trene', 'fjellturer', 'være med familie'],
        Q2: ['Gaming', 'Sykling'],
        Q3: ['Spiser det meste', 'Organisk', 'Ferskt er best'],
        Q3: ['Drikker ofte', 'Drikker sjelden', 'Drikker aldri'],
     },
     positionOnMap: { lat: 41.901832, lng: -87.632977}
    },

   {
      //dummy
    personId: 3,   
    firstName: 'firstName_d3',
    lastName: 'lastName_d3',  
    userName: '33',
    passWord: '33',   
    gender: 'male', 
    age: 50,
    photos: [],
    mail: 'demo_3@demomail.com', 
    activeSince: '',
    answers: {
      Q1: ['trene', 'fjellturer', 'være med familie'],
      Q2: ['Gaming', 'Sykling'],
      Q3: ['Spiser det meste', 'Organisk', 'Ferskt er best'],
      Q3: ['Drikker ofte', 'Drikker sjelden', 'Drikker aldri'],
     },
     positionOnMap: { lat: 41.901832, lng: -87.632977}
   },

      {
         //dummy
         personId: 4,   
         firstName: 'firstName_d4',
         lastName: 'lastName_d4',  
         userName: '44',
         passWord: '44',   
         gender: 'female', 
         age: 38,
         photos: [],
         mail: 'demo_4@demomail.com', 
         activeSince: '',
         answers: {
            Q1: ['trene', 'fjellturer', 'være med familie'],
            Q2: ['Gaming', 'Sykling'],
            Q3: ['Spiser det meste', 'Organisk', 'Ferskt er best'],
            Q3: ['Drikker ofte', 'Drikker sjelden', 'Drikker aldri'],
         },
         positionOnMap: { lat: 41.901832, lng: -87.632977}
      },
      ];

