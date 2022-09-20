// Hei og velkommen firstName_d1
model.users = [
   {
   //activeUser 
   //  chat:[{userid1:1, userid2:2, chatText:[{id:1,text:"hei"},{id:2,text:"hei"},]}],   eventuelt trekk denne ut i eget dokument
   // chat:["hei","hallo"],

   personId: 0,   
   firstName: 'truls',
   lastName: 'wallum',  
   userName: '33',
   passWord: '33',   
   gender: 'male', 
   age: 26,
   photos: [],
   mail: 'ActiveUser_@demomail.com', 
   activeSince: '',
  newFriendsMap: [],
  kms: 0,
   answers: {  // kun for demo, skal være tom.
      Q1: [''],
      Q2: [''],
      Q3: [''],
      Q4: [''],

     
   },
   positionOnMap: [
      { lat: 59.1756864, lng: 10.164633},
      { lat: 59.3674370, lng: 9.5166592},


   ],
},



    {
      //dummy
      // chat:[{id:1,text:"hei"},{id:2,text:"hei"}],
     personId: '',   
     firstName: 'henrik',
     lastName: 'lastName_d1',  
     userName: '11',
     passWord: '11',   
     gender: 'male', 
     age: 26,
     photos: [],
     mail: 'demo_1@demomail.com', 
     activeSince: '',
     newFriendsMap: [],
     kms: 0,
     answers: {  // kun for demo, skal være tom.
        Q1: ['sove', 'gå tur', 'være med venner'],
        Q2: ['yoga', 'maling'],
        Q3: ['Picky eater', 'Frossenpizza', 'grillkrydder'],
        Q4: ['Røyker ikke', 'Røyker sosialt', 'Drikker sosialt'],
     },
     positionOnMap: [
      { lat: 59.1196864, lng: 10.1346336},
      { lat: 59.2296840, lng: 10.1746355},
      
     ],
    },
    
    {
      //dummy
     personId: '',   
     firstName: 'firstName_d2',
     lastName: 'lastName_d2',  
     userName: '22',
     passWord: '22',   
     gender: 'male', 
     age: 34,
     photos: [],
     mail: 'demo_2@demomail.com', 
     activeSince: '',
     newFriendsMap: [],
     kms: 0,
     yourpossesionOnMap: '',
     answers: {
        Q1: ['trene', 'fjellturer', 'være med familie'],
        Q2: ['Gaming', 'Sykling'],
        Q3: ['Spiser det meste', 'Organisk', 'Ferskt er best'],
        Q3: ['Drikker ofte', 'Drikker sjelden', 'Drikker aldri'],
     },
     positionOnMap: [
      { lat: 59.1296864, lng: 10.1646336},
      { lat: 59.2296864, lng: 10.1746336},
     ],
    },

   {
      //dummy
    personId: '',   
    firstName: 'firstName_d3',
    lastName: 'lastName_d3',  
    userName: '33',
    passWord: '33',   
    gender: 'male', 
    age: 50,
    photos: [],
    mail: 'demo_3@demomail.com', 
    activeSince: '',
    newFriendsMap: [],
    kms: 0,
    answers: {
      Q1: ['trene', 'fjellturer', 'være med familie'],
      Q2: ['Gaming', 'Sykling'],
      Q3: ['Spiser det meste', 'Organisk', 'Ferskt er best'],
      Q3: ['Drikker ofte', 'Drikker sjelden', 'Drikker aldri'],
     },
     positionOnMap: [
      { lat: 59.1456864, lng: 10.1646336},
      { lat: 59.1496864, lng: 10.1846336},

     ],
   },

      {
         //dummy
         personId: '',   
         firstName: 'firstName_d4',
         lastName: 'lastName_d4',  
         userName: '44',
         passWord: '44',   
         gender: 'female', 
         age: 38,
         photos: [],
         mail: 'demo_4@demomail.com', 
         activeSince: '',
         newFriendsMap: [],
         kms: 0,
         answers: {
            Q1: ['trene', 'fjellturer', 'være med familie'],
            Q2: ['Gaming', 'Sykling'],
            Q3: ['Spiser det meste', 'Organisk', 'Ferskt er best'],
            Q3: ['Drikker ofte', 'Drikker sjelden', 'Drikker aldri'],
         },
         positionOnMap: [
         { lat: 59.1296864, lng: 10.1646336},
         { lat: 59.2096864, lng: 10.2046336},

         ],

      },
/////////////////////////////////////////////////////////////////////////////////////////////////////      
//////////// --------------- laget 2 brukere som thomas bruker til testing. pga gps greine. /////////
      {
         //dummy
         personId: '',   
         firstName: 'thomasTest1',
         lastName: 'thomasLastNameTest',  
         userName: 't1',
         passWord: 't1',   
         gender: 'male', 
         age: 43,
         photos: [],
         mail: 'thomas79mail@demomail.com', 
         activeSince: '',
         newFriendsMap: [],
         kms: 0,
         answers: {
            Q1: ['trene', 'fjellturer', 'være med familie'],
            Q2: ['Gaming', 'Sykling'],
            Q3: ['Spiser det meste', 'Organisk', 'Ferskt er best'],
            Q3: ['Drikker ofte', 'Drikker sjelden', 'Drikker aldri'],
         },
         positionOnMap: [
            { lat: 59.1396864, lng: 10.2246336},
            { lat: 59.2674390, lng: 9.9166560},
         ], // thomas kordinater:
         //{currentLatitude: 59.2674364}
         //{currentLongitude: 9.9166587}
      },
      {
         //dummy
         personId: '',   
         firstName: 'thomasTest2',
         lastName: 'thomasLastNameTest',  
         userName: 't2',
         passWord: 't2',   
         gender: 'male', 
         age: 43,
         photos: [],
         mail: 'thomas79mail@demomail.com', 
         activeSince: '',
         newFriendsMap: [],
         kms: 0,
         answers: {
            Q1: ['trene', 'fjellturer', 'være med familie'],
            Q2: ['Gaming', 'Sykling'],
            Q3: ['Spiser det meste', 'Organisk', 'Ferskt er best'],
            Q3: ['Drikker ofte', 'Drikker sjelden', 'Drikker aldri'],
         },
         positionOnMap: [
            { lat: 59.1396864, lng: 10.1946336},
            { lat: 59.2674320, lng: 9.9176599},
         ],
      },
      
      
/////////////////////////////////////////////////////////////////////////////////////////////////////      
/////////////////////////////////////////////////////////////////////////////////////////////////////      






];

