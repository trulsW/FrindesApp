

// Login Check, compairing usernames and passwords
function checkLogin(){
    
    let userLogin = model.inputs.login;

    for(let i = 0; i <model.users.length; i++) {
        // console.log(model.users[i]);
        
        let user = model.users[i]
            if(model.inputs.login.userName === model.users[i].userName && model.inputs.login.passWord === model.users[i].passWord) {
                console.log('-------- Username & Password check --------');
                console.log({user});
                indexUsers() // calling function to index users
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











///////////////////////////////////////////////////////////////////////////


// Thomas forslag: ---------------------------------------------------------------
// ha en div ell noe som viser hvem som har logget inn etter passord match o.s.value
// må ta i bruk setInterval() for at de skal rekke å se det, 3 sekunder, som de meldingen str fremme ..
//-----------------------------------------------------------------------------------

//Dette er for Registrerings sider.....

function cangeSiteRegister(){
    model.app.currentPage = 'newSiteRegister';
    updateView();
}

//Neste side for registrering 

function cangeSiteRegister(){
    model.app.currentPage = 'newSiteRegister1';
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
        
        console.log({random2});


    }


    