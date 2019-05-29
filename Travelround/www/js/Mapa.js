

function initMap() {
    var options = {

        zoom: 13,
        center: { lat: 6.2442, lng: -75.5812}

    }

    var lugarViaje = localStorage.getItem("lugar");


    var map = new google.maps.Map(document.getElementById('mapa'), options);

    db.collection('Viajes').where("place", "==", lugarViaje)
        .get()
        .then(function (querySnapshot) {

            querySnapshot.forEach(function (doc1) {
                
                doc1.ref.collection('Marcadores').get().then(function (snapshot) {
                    
                    snapshot.forEach(function (doc2) {

                        console.log(parseFloat(doc2.data().lat));
                        addMarker({
                            coords: { lat: parseFloat(doc2.data().lat), lng: parseFloat(doc2.data().long) },
                            content: doc2.data().content
                        });


                    });

                });


            });


        });


    google.maps.event.addListener(map, 'click', function (event) {

        const alert = {
            title:'Marker Name',
            text: 'Input the name on the marker',
            content: 'input',
            button: {
                text: 'Ready!',
                closeModal: true
            }
        };
        swal(alert).then(function (name) {

            addMarker({
                coords: event.latLng,
                content: name
            });
            

            var docref = db.collection('Viajes').where("place", "==", lugarViaje)
                .get()
                .then(function (querySnapshot) {

                    querySnapshot.forEach(function (doc) {

                        doc.ref.collection('Marcadores').add({

                            lat: event.latLng.lat(),
                            long: event.latLng.lng(),
                            content: name
                        });
                        

                    });


                });

        });
        

    });

    function addMarker(props) {
        var marker = new google.maps.Marker({

            position: props.coords,
            map: map,
            //icon: props.iconImage

        });

        if (props.iconImage) {

            marker.setIcon(props.iconImage);

        }

        if (props.content) {

            var infoWindow = new google.maps.InfoWindow({

                content: props.content

            });

            marker.addListener('click', function () {

                infoWindow.open(map, marker);


            });

        }
    }

/*
    var marker = new google.maps.Marker({

        position: { lat: 6.2423816, lng: - 75.5920504 },
        map: map,
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
       
    });

    var infoWindow = new google.maps.InfoWindow({

        content: '<h1>UPB</h1>'

    });

    marker.addListener('click', function () {

        infoWindow.open(map, marker);

    });
    */

    



    /*addMarker({
        coords: { lat: 6.2423816, lng: - 75.5920504 },
        iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content: '<h1>UPB</h1>'
    });

    addMarker({
        coords: { lat: 6.2407804, lng: -75.5892957 },
        iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content: '<h1>Unicentro</h1>'
    }); */

    

    

}