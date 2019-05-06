const listaViajes = document.querySelector('#listaViajes');

//crear elementos y renderizar 
function renderViajes(doc) {

    let li = document.createElement('li');
    let lugar = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);
    lugar.textContent = doc.data().place;
    cross.textContent = 'x';

    li.appendChild(lugar);
    li.appendChild(cross);

    listaViajes.appendChild(li);

    //borrar data
    cross.addEventListener('click', (e) => {

        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('Viajes').doc(id).delete();

    });

}

//obtener data
/*db.collection('Viajes').get().then((snapshot) => {

    snapshot.docs.forEach(doc => {
        renderViajes(doc);
    });

});*/

//real tiem listener
db.collection('Viajes').orderBy('place').onSnapshot(snapshot => {

    let cambios = snapshot.docChanges();
    cambios.forEach(cambio => {
        if (cambio.type == 'added') {

            renderViajes(cambio.doc);

        }
        else if (cambio.type == 'removed') {
            let li = listaViajes.querySelector('[data-id=' + cambio.doc.id + ']');
            listaViajes.removeChild(li);
        }
    });

});



/*$(document).ready(function () {

    var rootRef = firebase.database().ref();

    rootRef.on("child_added", snap => {

        $("#listaViajes").append("<div clas='row'><div class='col - md - 4'><a href='#' class='list - group - item'>" + snap.val() + "</a></div>" + "<div class='col - md - 4'><button type='button' class='btn btn - light'>Borrar</button id='button"  +  + "'></div></div>");

    });


});*/