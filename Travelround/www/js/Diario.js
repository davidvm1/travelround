var btnCrear = document.getElementById('crearEntrada');
var btnVer = document.getElementById('verEntrada');
var lugarViaje = localStorage.getItem("lugar");

btnCrear.onclick = function () {

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    today = mm + '/' + dd + '/' + yyyy;

    const alert = {
        title: 'Entry',
        text: 'Type your journal entry:',
        input: 'textarea',
        inputPlaceholder: 'Type your message here...',
        showCancelButton: true
    };

    Swal.fire(alert).then(function (entry) {

        db.collection('Viajes').where("place", "==", lugarViaje)
            .get()
            .then(function (querySnapshot) {

                querySnapshot.forEach(function (doc) {

                    doc.ref.collection('Entradas').add({

                        date: today,
                        entry: entry
                        
                    });


                });


            });


    });




}

