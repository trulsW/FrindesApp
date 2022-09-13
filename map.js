
 let map;
 function initMap() {
    let mapOptions = {
        
        

        
        center: new google.maps.LatLng(`${model.users[0].positionOnMap.lat}`, `${model.users[0].positionOnMap.lng}`), // ny google.maps API, LatLng= latitude and longtitude.
        zoom: 16, // how zoomed in should map be after render.
         mapTypeControl: false,
         fullscreenControl: false,
         streetViewControl: false,
    }
     map = new google.maps.Map(document.getElementById("map"),mapOptions);
    // map = new google.maps.Map(document.getElementById("map"),{
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
    const markers = [
        [
            "Alien hideout",
            41.881830, 
            -87.623600, 
            "img/alien.png", 
            38, 31,
            "This alien still working on a analprobe!"
          
        ],
        [
            "Alien home",
            41.880850, 
            -87.623200, 
            "img/alien.png", 
            38, 31,
            "Escaped from AREA-52"
        ],
        [
            "Alien home",
            41.881850, 
            -87.622500, 
            "img/alien.png", 
            38, 31,
            "The alien named: Truls!"
        ]
    ];


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
    
    
  
  

}