// Hei og velkommen firstName_d1
model.users = [
   {
   //activeUser 
   //  chat:[{userid1:1, userid2:2, chatText:[{id:1,text:"hei"},{id:2,text:"hei"},]}],   eventuelt trekk denne ut i eget dokument
   // chat:["hei","hallo"],

   personId: 0,   
   firstName: 'truls',
   lastName: 'wallum',  
   userName: '00',
   passWord: '00',   
   gender: 'male', 
   age: 26,
   photos: [],
   mail: 'ActiveUser_@demomail.com',
   firstTimeRegistered: '', 
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
      { lat: 59.127770, lng: 10.211652},    
      { lat: 59.1356864, lng: 10.1846336},


   ],
},



    {
      //dummy
      // chat:[{id:1,text:"hei"},{id:2,text:"hei"}],
     personId: 1,   
     firstName: 'henrik',
     lastName: 'lastName_d1',  
     userName: '11',
     passWord: '11',   
     gender: 'male', 
     age: 26,
     photos: [],
     mail: 'demo_1@demomail.com',
     firstTimeRegistered: '', 
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
      { lat:  59.133328, lng: 10.256946},   
      { lat: 59.095547,  lng: 10.140676},    
      
     ],
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
     firstTimeRegistered: '', 
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
      { lat:  59.121013, lng: 10.237079},   
      { lat: 59.056931,  lng: 10.301704 },      
     ],
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
    firstTimeRegistered: '', 
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
      { lat:  59.108305, lng: 10.219830},  
      { lat: 59.059437,  lng: 10.177148},   

     ],
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
         firstTimeRegistered: '', 
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
         { lat: 59.088838, lng: 10.264449},     
         { lat: 59.131621, lng: 10.328393},     

         ],

      },
/////////////////////////////////////////////////////////////////////////////////////////////////////      
//////////// --------------- laget 2 brukere som thomas bruker til testing. pga gps greine. /////////
      {
         //dummy
         personId: 5,   
         firstName: 'thomasTest1',
         lastName: 'thomasLastNameTest',  
         userName: 't1',
         passWord: 't1',   
         gender: 'male', 
         age: 43,
         photos: [],
         mail: 'thomas79mail@demomail.com',
         firstTimeRegistered: '', 
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
            { lat: 59.075255, lng: 10.222564},    
            { lat: 59.158986, lng: 10.283686},    
         ], // thomas kordinater:
         //{currentLatitude: 59.2674364}
         //{currentLongitude: 9.9166587}
      },
      {
         //dummy
         personId: 6,   
         firstName: 'thomasTest2',
         lastName: 'thomasLastNameTest',  
         userName: 't2',
         passWord: 't2',   
         gender: 'male', 
         age: 43,
         photos: [],
         mail: 'thomas79mail@demomail.com',
         firstTimeRegistered: '', 
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
            { lat:  59.104266, lng: 10.293460},     
            { lat:  59.049387, lng: 10.271369},     
         ],
      },
      
      
/////////////////////////////////////////////////////////////////////////////////////////////////////      
/////////////////////////////////////////////////////////////////////////////////////////////////////      






];




