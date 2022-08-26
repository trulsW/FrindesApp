function checkLogin(){
    model.app.currentPage = 'mainPage';
    
    let userLogin = model.inputs.login;

    for(let i = 0; i <model.users.length; i++) {
        // console.log(model.users[i]);
        let user = model.users[i]
            if(model.inputs.login.userName === model.users[i].userName && model.inputs.login.passWord === model.users[i].passWord) {
                updateView();
                console.log('username match');

                console.log(user);
                
                
            }else {
                console.log('No match');
            }
            

    }
}

