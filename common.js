// fra start kjører denne automatisk og indexerer model.users
// denne funksjonen kan etterspørres flere ganger hvis vi trenger å oppdatere indexeringen.


// indexUsers() // har deaktivert, slik at denne indexerer alle brukere, KUN, når vi trenger det.(fks,hvis man fjerner en bruker eller what-eva!)
function indexUsers() {
    for(let i = 0; i < model.users.length; i++) {
        model.users[i].personId = i;
    }
    // console.log(model.users);
}