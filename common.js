// fra start kjører denne automatisk og indexerer model.users
// denne funksjonen kan etterspørres flere ganger hvis vi trenger å oppdatere indexeringen.


// indexUsers() // har deaktivert, slik at denne indexerer alle brukere, KUN, når vi trenger det.(fks,hvis man fjerner en bruker eller what-eva!)
function indexUsers() {
    for(let i = 0; i < model.users.length; i++) {
        model.users[i].personId = i;
    }
    // console.log(model.users);
}


//Dette er knapper som er like på alle sider.

function createSameButtons(){
let html = '';
html += /*html*/ `
<div class="buttonList">

<div class="userLoggedInAs"></div> 


<button class="globalBtn map" onclick="goToMap()">🗺️</button>
<button class="globalBtn interests" onclick="goToInterests()">🔔</button>
<button class="globalBtn aboutMe" onclick="goToHome()">🏠</button>
<button class="globalBtn editProfile" onclick="goToEditProfile()">⚙</button>
<button class="globalBtn myFriends" onclick="goToMyFriends()"> 💌</button>

</div>


`;
return html;
}


function createMapButtons(){
let html = '';
html += /*html*/ `
<div class="buttonList">

<div class="userLoggedInAs"></div> 


<button class="globalBtn map" onclick="goToMap()">🗺️</button>
<button class="globalBtn interests" onclick="goToInterests()">🔔</button>
<button class="globalBtn aboutMe" onclick="goToHome()">🏠</button>
<button class="globalBtn editProfile" onclick="goToEditProfile()">⚙</button>
<button class="globalBtn myFriends" onclick="goToMyFriends()"> 💌</button>
</div>


`;
return html;
}

