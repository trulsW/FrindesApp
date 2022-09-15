
 function haversine_distance(mk1, mk2) {
    var R = 3958.8; // Radius of the Earth in miles
    var rlat1 = mk1.position.lat() * (Math.PI/180); // Convert degrees to radians
    var rlat2 = mk2.position.lat() * (Math.PI/180); // Convert degrees to radians
    var difflat = rlat2-rlat1; // Radian difference (latitudes)
    var difflon = (mk2.position.lng()-mk1.position.lng()) * (Math.PI/180); // Radian difference (longitudes)

    var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
    return d * 1.6;
  }

 
 let map;
 function initMap() {
    let mapOptions = {
        
        

        
        center: new google.maps.LatLng(`${model.users[0].positionOnMap.lat}`, `${model.users[0].positionOnMap.lng}`), // ny google.maps API, LatLng= latitude and longtitude.
        zoom: 15, // how zoomed in should map be after render.
         mapTypeControl: false,
         fullscreenControl: false,
         streetViewControl: false,
         // center: {}
    }






    //  map = new google.maps.Map(document.getElementById("map"),mapOptions);
    //  map = new google.maps.Map(document.getElementById("map"),{
    //     center: new google.maps.LatLng('41.881832', '-87.623177'), // ny google.maps API, LatLng= latitude and longtitude.
    //     zoom: 18,
    //     mapTypeControl: false,
    //     fullscreenControl: false,
    //     streetViewControl: false,
    // });



    // let html = '';
    // position data kan sendes også via et objekt: { lat: 41.881832, lng: -87.623177}
   

    // Name
    // Latitude, Longtitude
    // Image url
    // scaledSize width, height

    
//////////////////////////Thomas tester Polyline////////////////////////////////////////////////////////
    //  const dakota = {lat: 40.7767644, lng: -73.9761399}
    // var line = new google.maps.Polyline({path: [dakota, frick], map: map});
    // var line = new.google.maps.Polyline({path: [ , ], map: map});
////////////////////////////////////////////////////////////////////////////////


///////////////Tester ut sirkel på mappet////////////////

// Create marker 
// var marker = new google.maps.Marker({
//     map: map,
//     position: new google.maps.LatLng(),
//     title: 'Some location'
//   });
  
//   // Add circle overlay and bind to marker
//   var circle = new google.maps.Circle({
//     map: map,
//     radius: 16093,    // 10 miles in metres
//     fillColor: '#AA0000'
//   });
//   circle.bindTo('center', marker, 'position');




    const markers = [
        // [
        //     "Alien hideout",
        //     41.881830, 
        //     -87.623600, 
        //     "img/alien.png", 
        //     38, 31,
        //     "This alien still working on a analprobe!"
          

        // ],
        [   
            model.users[0].firstName,
            model.users[0].positionOnMap.lat, 
            model.users[0].positionOnMap.lng, 
            "img/alien.png", 
            38, 31,
            "This alien still working on a analprobe!"
          
        ],
        [
            model.users[1].firstName,
            model.users[1].positionOnMap.lat, 
            model.users[1].positionOnMap.lng,
            "img/alien.png", 
            38, 31,
            "Escaped from AREA-52"
        ],
        [
            model.users[2].firstName,
            model.users[2].positionOnMap.lat, 
            model.users[2].positionOnMap.lng, 
            "img/alien.png", 
            38, 31,
            "The alien named: Truls!"
        ],
        [
            model.users[3].firstName,
            model.users[3].positionOnMap.lat, 
            model.users[3].positionOnMap.lng, 
            "img/alien.png", 
            38, 31,
            "Alien 4!"
        ],
    ];

    const dakota = {lat: 59.1296864, lng: 10.1646336};
    const frick = {lat:  59.2674370, lng: 9.9166592};

    var mk1 = new google.maps.Marker({position: dakota, map: map});
    var mk2 = new google.maps.Marker({position: frick, map: map});

    // Draw a line showing the straight distance between the markers
  var line = new google.maps.Polyline({path: [dakota, frick], map: map});


//kalkulerer og viser frem km avstand melleom A og B
  
  var distance = haversine_distance(mk1, mk2);
  document.getElementById('msg').innerHTML = "Distance between markers: " + distance.toFixed(2) + " km";
console.log(distance);

    //   // her peker du til hvor kartet ska tegnes opp. kan legge inn flere under hver sin div, teste ut styling o.s.v
    // // let map = new google.maps.Map(document.getElementById("map"),mapOptions);
    map.setMapTypeId("satellite")
    map.setTilt(45);
    // // let map2 = new google.maps.Map(document.getElementById("map2"),mapOptions);
    // // html = document.getElementById("map");
    // // console.log(html);


    for(let i = 0; i < markers.length; i++) {
        const currMarker = markers[i];
    
        const marker = new google.maps.Marker({
        position: {lat: currMarker[1], lng: currMarker[2] },
        map,
        title: currMarker[0],
        icon: {
            url: currMarker[3],
            scaledSize: new google.maps.Size(38, 31),
        },
        animation: google.maps.Animation.Drop
        });

        const infowindow = new google.maps.InfoWindow({
        content: currMarker[6]
        });

        marker.addListener("click", () => {
        infowindow.open(map, marker);
        });
    }
    
  
 //Dette er en sikrel test på karet....


//  const source = 'model.users[0].positionOnMap';
//  const destination = 'model.users[1].positionOnMap';

//  function getDistance(source, destination) {
//      console.log(source);
//      return google.maps.geometry.spherical.computeDistanceBetween(
//        new google.maps.LatLng(source.lat, source.lng),
//        new google.maps.LatLng(destination.lat, destination.lng)
//      );
     
//    }
     //Dette er en sikrel test på karet....

 //Dette er en sikrel test på karet....




     
}

         
     
  



    