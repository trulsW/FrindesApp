
//  function haversine_distance(mk1, mk2) {
    //     var R = 3958.8; // Radius of the Earth in miles
    //     var rlat1 = mk1.position.lat() * (Math.PI/180); // Convert degrees to radians
    //     var rlat2 = mk2.position.lat() * (Math.PI/180); // Convert degrees to radians
    //     var difflat = rlat2-rlat1; // Radian difference (latitudes)
    //     var difflon = (mk2.position.lng()-mk1.position.lng()) * (Math.PI/180); // Radian difference (longitudes)
    
    //     var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
    //     return d * 1.6;
    //   }








    /////////////////////////////////////////////////////////////////
    // let user1 = model.users[0].positionOnMap[0].lat;

    // console.log(user1);
    // console.log(model.users[0].positionOnMap[0].lat);

    // haversine_distance()
    //  function haversine_distance(user1) {

    //     for(let i = 0; i < model.users[i].length; i++){s
    //         model.users[i].positionOnMap[i] 
    //     }
///////////////////////////////////////////////////////////////////
   ////////////////////Dette er en test///////////////////////////////
   ////////////////////////////////////////////////////////////////////
   




const arr = [];
        function compareDistance(){
            for(let i = 0; i < model.users.length; i++){
                
                // console.log({user});
                    for(let y = 0; y < model.users[i].positionOnMap.length; y++){
                     
                     
                    //  let objPosition = {lat: model.users[i].positionOnMap[y].lat, lng: model.users[i].positionOnMap[y].lng }
                    
                    //  arr.push(objPosition)
                    
                         
                        let mainUserCurrentPosition = {lat: model.app.currentPosition.lat, lng: model.app.currentPosition.lng}
                        let userToCompareAgainst = {lat: model.users[i].positionOnMap[y].lat, lng: model.users[i].positionOnMap[y].lng}

                        haversine_distance(mainUserCurrentPosition, userToCompareAgainst, i)

                    }     



        }
    }
        // console.log(arr);

function haversine_distance(mainUserCurrentPosition, userToCompareAgainst, i) {
        // console.log('mainUserCurrentPosition-----------------------------------');
        // console.log(mainUserCurrentPosition.lat, mainUserCurrentPosition.lng);
        // console.log('userToCompareAgainst-----------------------------------');

        // console.log(userToCompareAgainst.lat, userToCompareAgainst.lng);
        

            var R =  6371; // Radius of the Earth in kilometres


        var rlat1 = mainUserCurrentPosition.lat * (Math.PI/180); // Convert degrees to radians
        // console.log(rlat1);
        var rlat2 =  userToCompareAgainst.lat * (Math.PI/180); // Convert degrees to radians
        // console.log({rlat2});
        var difflat = rlat2-rlat1; // Radian difference (latitudes)
        // console.log(difflat);
        var difflon = (userToCompareAgainst.lng - mainUserCurrentPosition.lng) * (Math.PI/180); // Radian difference (longitudes)
        // console.log(userToCompareAgainst.lng);
        // console.log(mainUserlng);
        // console.log({difflon});    
        var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
        

        
        // console.log(R);
        // // return d * 1.6;
        // console.log(d); // KIloMeter !!!..

        if(d < 5 ) {
               
           
        
            let objectListOfMapPersons = {
                    firstName: model.users[i].firstName, 
                    lastName: model.users[i].lastName, 
                    age: model.users[i].age, 
                    kms: d.toFixed(2),
                };

                let index = model.app.currentUser;
                model.users[index].newFriendsMap.push(objectListOfMapPersons);

            // console.log(index);
            // console.log(objectListOfMapPersons);

    
        }


        

        
        
      }



    function start() {
        
    
    setTimeout(() => {
        
        let mk1 = {lat: model.app.currentPosition.lat, lng: model.app.currentPosition.lng}
        let mk2 =  {lat: model.users[6].positionOnMap[0].lat, lng: model.users[6].positionOnMap[0].lng}
        // console.log({mk2});
        haversine_distance2(mk1, mk2)
    }, 2000);
    
    }


     // må teste noe.
        function haversine_distance2(mk1, mk2) {

            var R = 6371; // Radius of the Earth in kilometres
            var rlat1 = mk1.lat * (Math.PI/180); // Convert degrees to radians
            var rlat2 = mk2.lat * (Math.PI/180); // Convert degrees to radians
            var difflat = rlat2-rlat1; // Radian difference (latitudes)
            var difflon = (mk2.lng -mk1.lng) * (Math.PI/180); // Radian difference (longitudes)
      
            var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
            
            // console.log(d);

            // firstname_d3 = 16km , index 3
            // team1 = 14km, index 0
            // thomasTest1 = 
            // team1_ 14.69




            // return d;
          }
        
    





    // let user1 = model.users[0].positionOnMap[0].lat;
    // let user2 = model.users[3].positionOnMap[0];
    
    
    

    
    
    //////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////// distance calculation ////////////////////////////////////////
        
    
    
        // const dakota = {lat: 59.1296864, lng: 10.1646336};
        // const frick = {lat:  59.2674370, lng: 9.9166592};
    
        // var mk1 = new google.maps.Marker({position: dakota, map: map});
        // var mk2 = new google.maps.Marker({position: frick, map: map});
    
    
    
    let map;
    function initMap() {
        let mapOptions = {
        
            

        // model.app.currentPosition.lat
        // model.app.currentPosition.lng
        center: new google.maps.LatLng(`${model.app.currentPosition.lat}`, `${model.app.currentPosition.lng}`), // ny google.maps API, LatLng= latitude and longtitude.
        zoom: 15, // how zoomed in should map be after render.
         mapTypeControl: false,
         fullscreenControl: false,
         streetViewControl: false,
        //  center: {}
    }
    map = new google.maps.Map(document.getElementById("map"),mapOptions);


    
//////////////////////////Thomas tester Polyline////////////////////////////////////////////////////////
    //  const dakota = {lat: 40.7767644, lng: -73.9761399}
    // var line = new google.maps.Polyline({path: [dakota, frick], map: map});
    // var line = new.google.maps.Polyline({path: [ , ], map: map});
////////////////////////////////////////////////////////////////////////////////


///////////////Tester ut sirkel på mappet////////////////

// Create marker 
var marker = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(model.app.currentPosition.lat, model.app.currentPosition.lng),
    title: 'Admin',
    icon: {
        // url: currMarker[3],
        url: "img/ninja.png",
        scaledSize: new google.maps.Size(38, 31),
    },
  });
  
  // Add circle overlay and bind to marker
  var circle = new google.maps.Circle({
    map: map,
    radius: model.inputs.rangeRadius,    // meter
    fillColor: '#AA0000'
  });
  circle.bindTo('center', marker, 'position');




//   var line = new google.maps.Polyline({path: [dakota, frick], map: map});


//kalkulerer og viser frem km avstand melleom A og B
  
//   var distance = haversine_distance(mk1, mk2);
//   document.getElementById('msg').innerHTML = "Distance between markers: " + distance.toFixed(2) + " km";
// console.log(distance);
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

    
  //Dette er for satelitbilde///
    map.setMapTypeId("satellite")
    map.setTilt(45);
   
   
    // console.log(index);






    //Forloop for alle brukerene sine possisjoner/// Inkluderer bilde og navn
     let markers = [];
     let index = 0;

    for(let i = 0; i < model.users.length; i++) {
        index = runRandomize() // til vurdering//
        console.log('Index inne i loopen: ' + index);
        const pos = new google.maps.LatLng(model.users[i].positionOnMap[index].lat, model.users[i].positionOnMap[index].lng);
         
        markers[i] = new google.maps.Marker({
            position: pos,
            map: map,
            icon:  {
                // url: currMarker[3],
                url:  "img/star.png",
                scaledSize: new google.maps.Size(38, 31),
                
            },

        
               

            description: 'Nothing to describe yet',
            title: model.users[i].firstName,

            id: i,


            
        });



        //Teste ut om man kan bytte ut bilde med mouseover på map////////



//Dette er en hover over test for bilder på kartet//////


// var icon1 = "imageA.png";
// var icon2 = "imageB.png";

// var marker = new google.maps.Marker({
//     position: myLatLng,
//     map: map,
//     icon: icon1,
//     title: "some marker"
// });

// google.maps.event.addListener(marker, 'mouseover', function() {
//     marker.setIcon(icon2);
// });
// google.maps.event.addListener(marker, 'mouseout', function() {
//     marker.setIcon(icon1);
// });






//////////////////////////////////////////////////////////////////////////////
   //Teste ut mouseover for og få bilde når musen er over stjernen////////
   //////////////////////////////////////////////////////////////////////
    

//    google.maps.event.addListener(marker, 'mouseover', function(event){
//     this.setIcon("img/cat.jpg")
// });

// google.maps.event.addListener(marker, 'mouseout', function(event) {
//     this.setIcon('img/star.png');
// });





    


        let infowindow = new google.maps.InfoWindow({

        
            
            // content: model.users[i].firstName +  ' ' + model.users[i].lastName
            content: `Navn: ${model.users[i].firstName} ${model.users[i].lastName}<br>
                      Alder: ${model.users[i].age} <br>
                      kms:    ${!model.users[i].kms ? '' :  model.users[i].kms} <br>
                      SistPålogget: ${model.users[i].activeSince} <br>
                      Kjønn: ${model.users[i].gender = 'male' ? 'mann' : 'Kvinne'} <br>
                      Bruker.nr: ${model.app.currentStarUser = i}  
                      <p>
                      
                      <button onclick="goToUserView(${i})">Se Mer</button>  
            -
                       
                     
    

                      ` 
                    
                     
                      
                     ////////7/ Butten knapp function må endres på. til et annent view.......//////////
            //Dette er en onclick test via navn///////

        });
        //   ${model.app.currentStarUser = i}                       ${showStarUser(i)}

        //  ${clickedStarUserInterest = model.users[i].answers}



        // google.maps.event.addListener(markers[i], 'click', function(){
        //     infowindow.setContent(model.users[i].firstName);
        //     window.open(marker.url)
        // });
        // google.maps.event.addDomListener(window, 'load', initMap);
       

     
        // assuming you also want to hide the infowindow when user mouses-out
        // marker.addListener('mouseout', function() {
        //     infowindow.close();
        // });



       
        markers[i].addListener("click", () => {
            infowindow.open({
                anchor: markers[i],
                map,
                shouldFocus: false,
            });
        })
    }



    console.log({markers});



}
     
  



    