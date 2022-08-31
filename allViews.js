function createHtmlLogin() {
  html = '';

  // Under gotoRegister(), her går vi først innom controller for å sette riktig side først,så videre til "view/page"
  html += /*html*/ `
  <input type="text" oninput="model.inputs.login.userName=this.value" placeholder="Brukernavn">
  <input type='text' oninput="model.inputs.login.passWord=this.value" placeholder="Passord"> </br>
  <p></p>
  <button onclick="checkLogin()"id="logIn">Logg inn</button>
  <button onclick="goToRegister()" id="Register">Registrer</button> 
  `;

return html;

}

// dette er din hjemme profil

function createHtmlMyProfile() {
html = '';
html = /*html*/ `
  
<button onclick="goToMap()">til kart</button>
<button onclick="intrest()">Dine interesser</button>
<button onclick="aboutMe()">Om meg</button>
<button onclick="editProfil()">Endre profil</button>
<button onclick="myFrindes()"> til dine nye venner</button>


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
  html = '';
  html += /*html*/ `
  
  <button>hehehe</button>
  
  
  
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
// dette er og endre profil settings
function createHtmlEditProfil(){
  html = '';
  html += /*html*/ `
  
  <h1>endre profil</h1>
  
  
  `;
  return html; 
}
// til dine nye venner box
function createHtmlNewFrindes(){
    html = '';
    html += /*html*/ `
    
    <h1>dine nye venner </h1>
    
    
    
    `;


  return html;
}