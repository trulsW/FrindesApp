function createHtmlLogin() {
  html = '';

  // Under gotoRegister(), her går vi først innom controller for å sette riktig side først,så videre til "view/page"
  html += /*html*/ `

  <div class="grid-container">

  <h1 class="login_page_klickit_logo"><span>K</span>l<span></span><span>i</span><span>c</span><span>k</span><span>i</span><span>t</span></h1>
    






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

function createHtmlMyProfile() {
html = '';
html = /*html*/ `

<div class="grid-container">

<button class="globalBtn map" onclick="goToMap()">🗺️</button>
<button class="globalBtn interests" onclick="interests()">🔔</button>
<button class="globalBtn aboutMe" onclick="aboutMe()">🏠</button>
<button class="globalBtn editProfile" onclick="editProfil()">⚙</button>
<button class="globalBtn myFriends" onclick="myFrindes()"> 💌</button>

</div>
`
return html
}

// registrere bruker første spørsmål

function createHtmlRegister() {
  html = '';
  
  html += /*html*/ `
  <button onclick="firstQ1()">Du er?</button>
  <button>en kvinne</button>
  <button>En mann</button>
  <h2>Du ønsker og krysse veien med...</h2>
  
   <div>Menn</div> 
  <div>Kvinner</div>

  <button onclick="cangeSite()">fortesett</button>
  
  `
  return html; // så returnerver vi innholdet av html variabel tilbake i en drittfart.
}













//Dette er til kartet

function createHtmlMapView(){
  document.getElementById("map").classList.toggle("map"); // skrur på og av css stilen på map diven
 
  
  initMap();
  html = '';
  html += /*html*/ `
  
  
  
  
  `;
return html;

}
// Her kan du se om hvem som er dine interesser
function createHtmlMatchBox(){
  html = '';
  html += /*html*/ `
  
  <h1>hihi</h1>
  
  
  
  
  `;
  return html;
}

// Dette er her du kan skrive lit om deg selv
function createHtmlBio(){
      html = '';
      html += /*html*/ `

        <h2> velkommen </h2>
      
      
      `;

  return html;
}

// til dine nye venner box
function createHtmlNewFriends(){
    html = '';
    html += /*html*/ `
    
    <h1>dine nye venner </h1>
    
    
    
    `;


  return html;
}