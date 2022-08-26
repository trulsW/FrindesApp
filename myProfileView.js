function updateViewProfileView(){
    
     
    let html = '';

    
    html += /*html*/ `

        <h2>Din profil </h2> 
        ${ /* øverst på venstre side ned// Din profil*/'' }
        <button onclick="myFriends()">Venne boks</button> 
        ${ /* Være sentrertmitpå på venstre side */'' }
        <button onclick="goToMap()">Til Kart</button>  
        <br/>
        <button onclick="myIntrest()">Dine interesser</button>
        <br/>
        <button onclick="myBio()">Om meg</button>
        ${ /* Være sentertmitpå nederst på siden */'' }
        <button onclick="changeProfil()">Endre profil</button>
       

        
 
    
    `;


return html;


};





