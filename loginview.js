
function updateViewLogInView(){
    let html = '';

    
    html += /*html*/ `
    
    <input type="text" oninput="model.inputs.editNewUser.userName=this.value" > Brukernavn: <br>
    <input type='text' oninput="model.inputs.editNewUser.passWord=this.value"> Password:  <br><br><br>
    <button onclick = "login()">LOGIN</button> <button onclick="register()">REGISTER</button>
    `;

document.getElementById('app').innerHTML = html;

};

updateViewLogInView();




