// //tullemodell
// let activeView = "home";

// //tulleview
// let brødtekst = "";
// function selectActiveView(){
//     if(activeView == "home"){
//         brødtekst= makeHomeHTML();
//     }
//     else if(activeView== "map"){
//         brødtekst = makeBrødtekstHTML();
//     }
//     else if(activeView== "alerts"){
//         brødtekst =
//     }
// }

// function makeHomeHTML(){
//     return"<div> button etc.. tekst hei hå </div>"
// }

// function makeBrødtekstHTML(){
//     return"<div> button etc.. tekst hei hå </div>"
// }


function updateViewProfileView(){
    
     
    let html = '';

    
    html += /*html*/ `


    

        <h2 style= "background-color: #dc143c; text-align:center; "   > Din profil </h2> 
        ${ /* øverst på venstre side ned// Din profil*/'' }
        ${ /*   <button onclick="myFriends()">Venne boks</button> 

        ${ /* Være sentrertmitpå på venstre side */'' }
        ${ /*   <button onclick="goToMap()">Til Kart</button>  
        <br/>

        <button onclick="myIntrest()">Dine interesser</button>
        <br/>
        <button onclick="myBio()">Om meg</button>

        ${ /* Være sentertmitpå nederst på siden */'' }
        ${ /*   <button onclick="changeProfil()">Endre profil</button>*/'' }
    
       
    <ul>

   
        <div class="PVBtn" style="background-color:#dc143c;" onclick="myFriends()">
             <li><a href="#section1">🏠</a></li>
        </div> 

        <div class="PVBtn" style="background-color:#dc143c;" onclick="goToMap()">
            <li><a href="#section2">🗺️</a></li>
        </div>

        <div class="PVBtn" style="background-color:#dc143c;" onclick="newFrindes()">
            <li><a href="#section3">💌</a></li> 
        </div>  

        <div class="PVBtn" style="background-color:#dc143c;" onclick="varsel()">
            <li><a href="#section4">🔔</a></li>
        </div>

        <div class="PVBtn" style="background-color:#dc143c;" onclick="innstillinger()">   
            <li><a href="#section5">⚙</a></li>
        </div>


 
    </ul>
<div class="home">
         <div class="content"> 
         <section id="section1">

              <input type="text" placeholder="Skriv i meg"/> 
              
     
         </section>
         </div>
 
         <div class="map">
         
         <div class="content"> 
         <section id="section2">
         <h2>section2</h2>
                 
            </section>
            </div>

            <div class ="newFrindes">
            
            <div class="content"> 
            <section id="section3">
            <h2>section3</h2>
                     
            </section>
            </div>
                 
            <div class="notification">

            <section id="section4">
                <h2>section4</h2>
                         
             </section>
             </div>
 
            <div class="settings">

            <section id="section5">
                 <h2>section5</h2>
                             
            </section>
            </div>
 
   
         `;


return html;


};





