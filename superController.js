

// Login Check, compairing usernames and passwords
function checkLogin(){
    
    let userLogin = model.inputs.login;

    for(let i = 0; i <model.users.length; i++) {
        // console.log(model.users[i]);
        
        let user = model.users[i]
            if(model.inputs.login.userName === model.users[i].userName && model.inputs.login.passWord === model.users[i].passWord) {
                console.log('-------- Username & Password check --------');
                console.log({user});
                // indexUsers() // calling function to index users
                model.app.currentUser = model.users[i].personId
                // model.app.loggedIn = true;
                model.app.currentPage = 'myProfileView'; 
                getLocation()
                setTimeout(() => {
                    compareDistance()
                }, 2000);  
                start()
                updateView();
            }else {
                console.log('No match');
            }
            

    }
}

/////////// Deaktivert interavll gps inntil videre ////////////
function getLocationInterval() {
    const intervalID = setInterval(getLocation, 280000);

getLocation()
 // Your code here
 // Parameters are purely optional.
}
///////////////////////////////////////////////////////////////////////////


//////////// Below: onlyf for gps localization /////////////////////////////
let currentLatitude = '';
let currentLongitude = '';

function getLocation() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
      }

      
}
// const yourpositionLat = 'getLocation()';
// const yourpositionIng = 'getLocation()';

function showPosition(position) {
    currentLatitude = position.coords.latitude;
    currentLongitude = position.coords.longitude;
    let accuracy = position.coords.accuracy;
    // log current position
    console.log({accuracy});
    console.log({currentLatitude});
    console.log({currentLongitude});   
    

    model.app.currentPosition.lat = currentLatitude;
    model.app.currentPosition.lng =  currentLongitude;

    
    

//   x.innerHTML = "Latitude: " + position.coords.latitude + 
//   "<br>Longitude: " + position.coords.longitude;
}


function cangeSiteRegister(){
    model.app.currentPage = 'newSiteRegister';
    updateView();
}

//Neste side for registrering 

function cangeSiteRegister(){
    model.app.currentPage = 'newSiteRegister1';
    updateView();
}
//Knappen som går vidre til neste side........
function changeSiteRegister1(){
    model.app.currentPage = 'newSiteRegister2';
    updateView();
}


//Neste side for registering
function createNewRegisterSite2(){
    model.app.currentPage = 'newSiteRegister2';
    updateView();
}



function changeSiteRegister2(){
    model.app.currentPage = 'newSiteRegister3';
    updateView();
}
////////////////////////////////////////////
function fromeRegToMain(){
    model.app.currentPage = 'myProfileView';
    alert("Du er nå på Klickit siden");
    updateView();
}
// Dette er for mapViewController

function goToMap(){
    model.app.currentPage = 'mapView';
    updateView();
}

function goToRegister() {
    // endre side vi skal til.
    model.app.currentPage = 'register'
    // så kjører vil til index,if-statements for å sjekke hvem side vi skal ende på.
    updateView()
}
// Dette er får dine nye venner boks
function goToInterests(){
    model.app.currentPage = 'matchBox'
    updateView();
}

function goToHome(){
    model.app.currentPage = 'myProfileView'
    document.getElementById("map").classList.toggle("map");
    updateView();
}

function goToUserView(i){
    console.log(i);
    model.app.currentStarUser = i;
    model.app.currentPage = 'userProfileView'
    document.getElementById("map").classList.toggle("map");
    updateView();
}



function goToMyFriends(){
    model.app.currentPage = 'newFriends'
    updateView();

}

function goToEditProfile() {
    
    model.app.currentPage = 'editProfile'
    updateView();
}

//Randomize aliens på kartet....

    function goToRandomize() {
        setTimeout(() => {
            runRandomize()            
        }, 1000);
    }         
    let random2 = null;
    let count = 0;
    
    function runRandomize() {
        // console.log('Kun en test'); // denne funker!!
        for(let i =0 ; i < 1000; i++){
            // denne randomiserer kun tallet 0 og 1
           let random1 = Math.floor(Math.random() * model.users[0].positionOnMap.length)
           random2 = Math.floor(Math.random() * model.users[0].positionOnMap.length)
           let tmp = random1
           random1 = random2
           random2 = tmp
        }
        // console.log(random2);
        return random2;

    }

    // function isMale(checkbox) {
    // //    let isMaleChecked = document.getElementById("radioMale")
    // //    model.inputs.editNewUser.isMale checkbox.checked 
    
    
    //    //    isMaleChecked.checked == false ? isMaleChecked.checked = true : isMaleChecked.checked = false;
    // //    console.log(isMaleChecked.checked);
    //     updateView()
    // }

    // function isFemale(checkbox) {

    //     model.inputs.editNewUser.isFemaleChecked != true ? true : false;
        
    // }

    function selectSex(sex){

        if(sex == "male"){
            model.inputs.editNewUser.isMale = sex;
            model.inputs.editNewUser.isFemaleChecked = "";
            document.getElementById("radioMale").toggle
        } 
        if(sex == "female"){
            model.inputs.editNewUser.isFemaleChecked = sex;
            model.inputs.editNewUser.isMale = "";
            document.getElementById("radioFemale").toggle
        }
       
    }

    function newUser(interestCheck) {

      let maleCheck = model.inputs.editNewUser.interestedInMalesChecked;  
      let femaleCheck = model.inputs.editNewUser.interestedInFemalesChecked;

      maleCheck || femaleCheck != true ? true : false
      
    }


                function calcAge(calendar) {
            
                model.inputs.editNewUser.birthYear = parseInt(calendar.value.substr(0, 4)); // 2022
                    console.log( model.inputs.editNewUser.birthYear);
              
                const today = new Date();
                let year = today.getFullYear();
            //regener ut datoen fra idag til din førdselsdag. regner dette ut i år......
                model.inputs.editNewUser.age = year - model.inputs.editNewUser.birthYear
              console.log( model.inputs.editNewUser.age);
      

      
    }
    
    function createUser() {


        let newUser = {
            firstname: '', 
            lastName: '',
            userName: '',
            passWord: '',
            gender: '',
            age: '',
            photos: '',
            mail: '',
            firstTimeRegistered: '',
            activeSince: '',
            newFriendsMap:'',
            kms: '',
            answers: '',
            
        };



        newUser.personId = model.app.userIndex;
        newUser.photos = []
        newUser.firstname = 'thomas';
        model.users.push(newUser)
        model.app.userIndex++
        model.app.currentPage = 'newSiteRegister2';
        updateView();
    }

  
    
  