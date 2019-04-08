var inputLugar = document.getElementById("inputLugar");
var botonCrear = document.getElementById("botonCrear");

function crearViaje() {

    var database = firebase.database().ref();
    var lugar = inputLugar.value;

    database.push().set(lugar);

}