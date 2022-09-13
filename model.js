
// hvilken data må vi ha i modellen for å kunne tegne opp dette skjermbilde.Admin

// hva kan man gjøre i dette skjermbilde? hvordan skal dette vises i modellen?

// alle inputer på siden trenger et eget felt i modellen.

// model.people = ["Joakim"];



const model = {
    // app: appens tillstand: sidebyte, 
        app: {
            currentPage: 'login', // login, mapView, myProfileView, register, newFriends
            currentUser: 1,
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
                    age: 0, // her kan det kjøres en funksjon direkte.
                    photos: [],
                    mail: '', 
                    aboutMe: '',
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
                'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11', 'A12'
            ],
            Q2: [
                'Jakt og fiske', 'Data & it', 'Gaming', 'Yoga', 'Trening', 'Matlaging', 'Fotografering', 'Skru på bil', 
                'Hagearbeid', 'Fugletitting', 'Birøkting', 'A12'
            ],
            Q3: [
                'Jeg er kokk', 'Lager middag hver dag', 'Lager aldri mat', 'Bare ferdigmat', 'Aldri ferdigmat', 
                'Elsker å lage mat', 'Elsker å spise mat', 'Lager middag innimellom', 'Spiser ferdigmat innimellom'
            ],
            Q4: [
                'Drikker ofte', 'Drikker sjelden', 'Drikker aldri', 
                'Røyker en pakke om dagen', 'Røyker en halv pakke om dagen', 
                'Røyker ikke', 'Røyker sosialt', 'Drikker sosialt'
            ],
        }, 
    };
    