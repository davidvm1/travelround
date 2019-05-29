

// Restricciones
//var constraints = { video: { facingMode: "environment" }, audio: false };

// Constantes
const cameraView = document.querySelector("#viewCamara"),
    cameraOutput = document.querySelector("#outputCamara"),
    cameraSensor = document.querySelector("#sensorCamara"),
    cameraTrigger = document.querySelector("#botonCamara")

// Acceso a la camara y stream a cameraView
function cameraStart() {

    navigator.mediaDevices
        .getUserMedia({video: true})
        .then(function (stream) {

            //cameraView.srcObject = stream;
           // cameraView.play();

            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
            cameraView.play();

        })
        .catch(function (error) {

            console.error("Oops. Something is broken.", error);

        });
}

// Tomar foto cuando se presione el boton

/*cameraTrigger.addEventListener("click", function () {


    cameraSensor.drawImage(cameraView, 0, 0, 640, 480);


});*/

cameraTrigger.onclick = function () {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
    

}

// Comenzar la camara cuando cargue la ventana
window.addEventListener("load", cameraStart, false);