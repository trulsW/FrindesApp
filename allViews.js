function createHtmlLogin() {
  console.log('Currently at createHtmlLogin');
  html = '';

  // Under gotoRegister(), her går vi først innom controller for å sette riktig side først,så videre til "view/page"
  html += /*html*/ `

  <div class="grid-container">

  <h1 class="gradient login_page_klickit_logo">Klickit</h1>
    






  <input class="login_page_userName_input" type="text" oninput="model.inputs.login.userName=this.value" placeholder="Brukernavn">
  <input class="login_page_passWord_input" type='password' oninput="model.inputs.login.passWord=this.value" placeholder="Passord"> </br>
  <p></p>
  <button class="login_page_button_logiIn" onclick="checkLogin()"id="logIn">Logg inn</button>
  <button class="login_page_button_register" onclick="goToRegister()" id="Register">Registrer</button> 
</div>

  `;

  

return html;

}



// dette er din hjemme profil
//Dette er bilde av et hus
// <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
function createHtmlMyProfile() {
  console.log('Currently at createHtmlProfile');
html = '';
html = /*html*/ `
<div class="grid-container">
      <div class="testH2">  
      <h2 class="Profile"> Navn; ${model.users[model.app.currentUser].firstName}  Alder; ${model.users[model.app.currentUser].age}</h2> 
      </div>

      <div class="imgMyProfile"> <img class="myProfile" src=" ${model.users[model.app.currentUser].photos}"  width="100%" height="100%"> </div>


     <div class="aboutMe">om deg selv:</div>

     <div>Dine interesser ${model.users[model.app.currentUser].answers.Q2}</div>





<div class="userLoggedInAs"></div> 
<div class = 'buttons'>${createSameButtons()}</div> 
</div>

`

return html

}

// registrere bruker første spørsmål

function createHtmlRegister() {
  console.log('Currently at createHtmlRegister');

  const checkedIsMale = model.inputs.editNewUser.isMale ? 'checked' : '';


    console.log(checkedIsMale);


  html = '';
 
  html += /*html*/ `
  <div class="grid-container">
  
  <div class="registerMF">
  <h3>Du er?</h3>
  
  <label class="checkContainRadio">En Mann
 <!-- <input id="radioMale" onchange="selectSex('male')" type="radio" name="radioMF"> -->
  <input id="radioMale" onchange="selectSex('male')" type="radio" value="" name="radioMF">
  <span class="checkmarkRadio"></span>
  </label><br>
  <label class="checkContainRadio">En Kvinne
  <input id="radioFemale" onchange="selectSex('female')"  type="radio"  name="radioMF">
  <span class="checkmarkRadio"></span>
  </label>
  </div>

  <div class="MFcross">
  <h3>Du ønsker og krysse veien med:</h3>
  
  <label class="checkContain">Menn
  <input id="checkMale" onchange="newUser(this)" type="checkbox" value="male">
  <span class="checkmark"></span>
  </label>
  <label class="checkContain">Kvinner
  <input id="checkFemale" onchange="newUser(this)" type="checkbox" value="female">
  <span class="checkmark"></span>
  </label>
  </div>

  <button class="continue" onclick="cangeSiteRegister()">fortsett</button>

  </div>
  
  `

  console.log(document.getElementById("radioMale")); 
  return html; // så returnerver vi innholdet av html variabel tilbake i en drittfart.
}
// console.log(document.getElementById("radioMale")); 

// Registrer bruker andre spørsmål...

// oninput="hvor i modellen skal jeg lagre verdien = this.value"
function createNewRegisterSite1(){
  html = '';
  html += /*html*/ `
  <div class="grid-container">

<div class="infoInput1">
<div class="infoLabel"> <p>Fornavn</p> <input oninput="model.inputs.editNewUser.firstName = this.value" type="text" class="infoTextInput"></input> </div>  
<div class="infoLabel"> <p>Etternavn</p> <input oninput="model.inputs.editNewUser.lastName = this.value" type="text" class="infoTextInput"></input></div>
<div class="infoLabel"> <p>E-post adresse</p> <input oninput="model.inputs.editNewUser.mail = this.value" type="mail" class="infoTextInput"></input> </div>
<div class="infoLabel"> <p>Passord</p> <input oninput="model.inputs.editNewUser.passWord = this.value" type="password" class="infoTextInput"></input> </div>
<div class="infoLabel"> <p>Sett fødselsdato</p>  <input id="calendarId" oninput="calcAge(this)" type="date" class="infoTextInput"></input> </div>
</div>    



  
 
  <button onclick="createUser()" class="continue"> Fortsett </button>

  </div>


  </div>
  `;
return html;

}

function createNewRegisterSite2(){
  html = '';
  html += /*html*/`
  <div class="grid-container">

  <h1 class="h1Register2"> Noen spørsmål til deg</h1>   <br>

  <p>Hva liker du å gjøre sosialt / med venner?</p>  <br>
  <p>Dine alternativer</p> <br>

  <h1 class="h1Register2"> Har du noen hobbyer </h1> <br>
  <p>Dine alternativer</p> <br>

  <h1 class="h1Register2">Hvordan er du med mat?</h1> <br>
  <p>Dine alternativer</p> <br>

  <h1 class="h1Register2">Hvordan er du med røyk og drikke?</h1> <br>
  <p>Dine alternativer</p>

  <button onclick="changeSiteRegister2()">Fortsett</button>
 
  </div>
  `;
  return html;
}


function createNewRegisterSite3(){
  html = '';
  html += /*html*/ `
  <div class="grid-container">


  <h1>yoyoyoy</h1>
  
  <butten onclick="fromeRegToMain()"> Gå til Klickit </butten>


  </div>
  `;
  
  return html;
}





//Dette er til kartet

function createHtmlMapView(){
  console.log('Currently at createHtmlMapView');
  
  document.getElementById("map").classList.toggle("map"); // skrur på og av css stilen på map diven
  
  
  initMap();
  html = '';
  html += /*html*/ `
 
  <div class = 'buttonsMap'>${createMapButtons()}</div> 

   
  `;
return html;

}
//  <input type="range" min="1000" max="10000" value="5000" step="1000" id="radiusRange" class="sliderRadius" oninput="rangeInput(this.value)">


// Her kan du se om hvem som er dine interesser
function createHtmlMatchBox(){
  html = '';
  
  html += /*html*/ `
  <div class="grid-container">
  <h1>hihi</h1>
  
  
  

  <div class = 'buttons'>${createSameButtons()}</div> 
  </div> 
  `;
  return html;
}

// Dette er her du kan skrive lit om deg selv
function createHtmlBio(){
  console.log('Currently at createHtmlBio');
      html = '';
      html += /*html*/ `

        <h2> velkommen </h2>
      
      
      `;

  return html;
}

// til dine nye venner box
function createHtmlNewFriends(){
  console.log('Currently at createHtmlNewFriends');
    html = '';
    html += /*html*/ `
    <div class="grid-container">


<table class="friendsTableLeft" style="width:100%">
<h2 class='friend'> Mine Klickit </h2> 
<tr>
    <th> navn </th>            
    <th> Alder </th>
    <th> Land </th>
</tr>
<tr>
    <td> Ditt Navn </td>
    <td> Din alder </td>
    <td> Ditt land </td>
</tr>
<tr>
    <td> Ditt Navn </td>
    <td> Din alder </td>
    <td> Ditt land </td>
</tr>
</table>




<table class="interestsTableRight" style="width:100%">

    <h2 class="int"> interesserte </h2>

<tr>
<th> Navn </th>
</tr>
<tr>
<td> Ditt Navn </td>
</tr>
<tr>
<td> Ditt Navn </td>
</tr>



</table>

<div class = 'buttons'>${createSameButtons()}</div> 



</div>
    `;

  return html;
}

function createHtmlEditProfile(){
html = '';
html += /*html*/ `
<div class="grid-container">
<h1>Fiks på meg</h1>


<div class = 'buttons'>${createSameButtons()}</div> 
</div> 
`;
return html;

}

function createUserProfileView(){
  let i = model.app.currentStarUser;
  console.log(model.app.currentStarUser);
  // console.log(i);
  html = '';
  html += /*html*/ `
  <div class="grid-container">

  
  <h2 class="Profile"> Navn: ${model.users[i].firstName}  Alder: ${model.users[i].age} </h2> 
  </div>

  <div class="imgMyProfile"> <img class="myProfile" src="${model.users[i].photos}"  width="100%" height="100%"> </div>


 <div class="aboutMe">om deg selv: ${model.users[i].answers.Q1[0]}</div>

 
 <div class = 'buttons'>${createSameButtons()}</div> 


 </div>
  `;
  return html;
}

// <!--<div>Dine interesser ${clickedStarUserInterest} </div> -->




























