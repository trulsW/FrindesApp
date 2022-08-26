
function updateViewLogInView(){
    
    let html = '';

    
    html += /*html*/ `
    
    <input type="text" oninput="model.inputs.login.userName=this.value" > Brukernavn: <br>
    <input type='text' oninput="model.inputs.login.passWord=this.value"> Password:  <br><br><br>
    
    <button onclick="checkLogin()">Login</button>
    <button onclick="register()">Registrer</button>
    
    `;


return html;


};









