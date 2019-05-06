const form = document.querySelector('#agregarViajes');

form.addEventListener('submit', (e) => {

    e.preventDefault();
    db.collection('Viajes').add({

        place: form.lugar.value

    });

});


/*var inputLugar = document.getElementById("inputLugar");
var botonCrear = document.getElementById("botonCrear");

function crearViaje() {

    var database = firebase.database().ref();
    var lugar = inputLugar.value;

    database.push().set(lugar);

}*/