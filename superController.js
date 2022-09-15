

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
                model.app.loggedIn = true;
                model.app.currentPage = 'myProfileView'; 
                getLocation()
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
    // log current position
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


    //hvor en du er på kartet. Så for du alle sammen opp som er innafor din km rekke vidde..
  
    //Du kan få en push melding hvis du er nerme nok en annen bruker. feks.. Hei har du sette denne brukeren sin profil.



