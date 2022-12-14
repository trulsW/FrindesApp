
// hvilken data må vi ha i modellen for å kunne tegne opp dette skjermbilde.Admin

// hva kan man gjøre i dette skjermbilde? hvordan skal dette vises i modellen?

// alle inputer på siden trenger et eget felt i modellen.

// model.people = ["Joakim"];



// model.users[model.app.currentUser]
const model = {
    // app: appens tillstand: sidebyte, 
        app: {
            currentPage: 'login', // login, mapView, myProfileView, register, newFriends
            currentUser: 1,
            currentPosition: {lat: 0, lng: 0 }, 
            currentStarUser: 1,
            // userIndex:  7,

            loggedIn: '', // true / false
            // listOfPages: ["login", "mainPage", "registerPage"]
        },
        
    // inputs: alt som påvirkes av bruker.    
        inputs: {
            
            editNewUser: 
                {
                    firstName: '',
                    lastName: '',   
                    userName: '',
                    passWord: '',
                    gender: '', 
                    photos: [],
                    mail: '', 
                    aboutMe: '',
                    birthYear: null,
                    dateRegistered: '',
                    age: 0, // her kan det kjøres en funksjon direkte.
                    activeSince: '',
                    location: '',
                    isMaleChecked: false,
                    isFemaleChecked: false,
                    interestedInMalesChecked: false,
                    interestedInFemalesChecked: false,


                },
                
           
            edit: {
                 Name: '',
                 aboutMe: '',
                 photos: [],
                 newAnswers: [],
                 //flere underkatogorier
                 myPreferences: '',
                 genderInterest:  ["female", "male"],
                 range: 100, //er satt i meter
                 ageScrolling: [],
                },
    
            login: {
                    userName: '',
                    passWord: '',
                },

            matched: {
                    chatBox: '',
                },
            
            rangeRadius: 5000,
        },
    
    // data
    
    
    
       title: 'getFriends',
       welcomeMessage: 'Velkommen til Klickit',
        
       questions: [
        
            {Q1: 'Hva liker du å gjøre sosialt / med venner?'},
            {Q2: 'Har du noen hobbyer?'},
            {Q3: 'Hvordan er du med mat?'},
            {Q4: 'Hvordan er du med røyk og drikke?'},
        
        ],
    
        possibleAnswers: {
            Q1: [
                ' fiske', ' danse', ' synge', ' golf', ' bil', ' byen', ' sole seg', ' lese bok', ' film'
            ],
            Q2: [
                ' Jakt og fiske', ' Data & it', ' Gaming', ' Yoga', ' Trening', ' Matlaging', ' Fotografering', ' Skru på bil', 
                ' Hagearbeid', ' Fugletitting'
            ],
            Q3: [
                ' Jeg er kokk', ' Lager middag hver dag', ' Lager aldri mat', ' Bare ferdigmat',  
                ' Elsker å spise mat', ' Lager middag innimellom', ' Spiser ferdigmat innimellom'
            ],
            Q4: [
                ' Drikker ofte', ' Drikker sjelden', ' Drikker aldri', ' Drikker sosialt',
                ' Stor røyker', ' Røyker ikke', ' Røyker sosialt'
                
            ],
        }, 
    };
    