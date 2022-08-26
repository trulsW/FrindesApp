// fra start kjører denne automatisk og indexerer model.users
// denne funksjonen kan etterspørres flere ganger hvis vi trenger å oppdatere indexeringen.
indexUsers()
function indexUsers() {
    for(let i = 0; i < model.users.length; i++) {
        model.users[i].personId = i;
    }
    // console.log(model.users);
}