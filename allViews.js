function createHtmlLogin() {
  console.clear();
  console.log('Currently at createHtmlLogin');
  html = '';

  // Under gotoRegister(), her går vi først innom controller for å sette riktig side først,så videre til "view/page"
  html += /*html*/ `

  <div class="grid-container">

  <h1 class="login_page_klickit_logo">Klickit</h1>
    






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
function createHtmlMyProfile() {
  console.clear();
  console.log('Currently at createHtmlProfile');
html = '';
html = /*html*/ `
<div class="grid-container">
<div>vi er nå på myProfileView</div>
<div class="userLoggedInAs"></div> 

<div class = 'buttons'>${createSameButtons()}</div> 





</div>
`

return html

}

// registrere bruker første spørsmål

function createHtmlRegister() {
  console.clear();
  console.log('Currently at createHtmlRegister');
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
  console.clear();
  console.log('Currently at createHtmlMapView');
  document.getElementById("map").classList.toggle("map"); // skrur på og av css stilen på map diven
 
  
  initMap();
  html = '';
  html += /*html*/ `
  
  
  
  <div class = 'buttons'>${createSameButtons()}</div> 
  `;
return html;

}
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
  console.clear();
  console.log('Currently at createHtmlBio');
      html = '';
      html += /*html*/ `

        <h2> velkommen </h2>
      
      
      `;

  return html;
}

// til dine nye venner box
function createHtmlNewFriends(){
  console.clear();
  console.log('Currently at createHtmlNewFriends');
    html = '';
    html += /*html*/ `
    
    
    <div class="grid-container">
<table class="friendsTableLeft" style="width:100%">
<h2 class='friend'> Mine venner </h2> 
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

    <h2 class="int"> Intriserte </h2>

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