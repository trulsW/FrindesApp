

// Login Check, compairing usernames and passwords
function checkLogin(){
    
    let userLogin = model.inputs.login;

    for(let i = 0; i <model.users.length; i++) {
        // console.log(model.users[i]);
        
        let user = model.users[i]
            if(model.inputs.login.userName === model.users[i].userName && model.inputs.login.passWord === model.users[i].passWord) {
                console.log('-------- Username & Password check --------');
                console.log({user});
                model.app.currentUser = model.users[i].personId
                model.app.currentPage = 'myProfileView'; 
                updateView();
            }else {
                console.log('No match');
            }
            

    }
}

// Thomas forslag: ---------------------------------------------------------------
// ha en div ell noe som viser hvem som har logget inn etter passord match o.s.value
// må ta i bruk setInterval() for at de skal rekke å se det, 3 sekunder, som de meldingen str fremme ..
//-----------------------------------------------------------------------------------

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
function intrest(){
    model.app.currentPage = 'matchBox'
    updateView();
}

function aboutMe(){
    model.app.currentPage = 'bio'
    updateView();
}

function editProfil(){
    model.app.currentPage = 'changeProfil'
    updateView();
}
function myFrindes(){
    model.app.currentPage = 'newFrindes'
    updateView();

}