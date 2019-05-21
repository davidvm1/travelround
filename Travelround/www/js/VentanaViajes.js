

const listaViajes = document.querySelector('#listaViajes');


//crear elementos y renderizar 
function renderViajes(doc) {

    let a = document.createElement('a');
    //let lugar = document.createElement('span');
    let cross = document.createElement('button');

    a.className += "list-group-item list-group-item-action";
    a.setAttribute('href', '#');
    //a.setAttribute('onclick',"window.location.href = 'Viaje.html';")
    a.setAttribute('data-id', doc.id);
    a.textContent = doc.data().place;
    a.onclick = function () {

        variableLugar = doc.data().place;
        localStorage.setItem("lugar", variableLugar);
        window.location.href = 'Viaje.html';

    };
    cross.className += "btn btn-danger";
    cross.textContent = 'delete';

    //li.appendChild(lugar);
    a.appendChild(cross);

    listaViajes.appendChild(a);

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
            let a = listaViajes.querySelector('[data-id=' + cambio.doc.id + ']');
            listaViajes.removeChild(a);
        }
    });

});



/*$(document).ready(function () {

    var rootRef = firebase.database().ref();

    rootRef.on("child_added", snap => {

        $("#listaViajes").append("<div clas='row'><div class='col - md - 4'><a href='#' class='list - group - item'>" + snap.val() + "</a></div>" + "<div class='col - md - 4'><button type='button' class='btn btn - light'>Borrar</button id='button"  +  + "'></div></div>");

    });


});*/