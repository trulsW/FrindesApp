
function updateViewLogInView(){
    
    let html = '';

    
    html += /*html*/ `

    

    <form class="box" action="index.html" method="post">

   

   
    
    <input type="text" oninput="model.inputs.login.userName=this.value" placeholder="Username">
    <input type='text' oninput="model.inputs.login.passWord=this.value" placeholder="password">
    
    <div class="Loginn" onclick="checkLogin()">
    <p style="color:White;">Login</p>
    </div>
     
    <div class="Register" onclick="register()">
    <p style= "color:White;">Register</p>
    </div>

    
     
     ${ /*<input type="submit" name="" value="Login">*/'' }




</form>

    
    `;


return html;

};
 












