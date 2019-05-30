const listaEntradas = document.querySelector('#listaEntradas');
var lugarViaje = localStorage.getItem("lugar");

db.collection('Viajes').where("place", "==", lugarViaje)
    .get()
    .then(function (querySnapshot) {

        querySnapshot.forEach(function (doc1) {

            doc1.ref.collection('Entradas').get().then(function (snapshot) {

                snapshot.forEach(function (doc2) {



                    let a = document.createElement('a');
                    //let lugar = document.createElement('span');
                    let cross = document.createElement('button');

                    a.className += "list-group-item list-group-item-action";
                    a.setAttribute('href', '#');
                    //a.setAttribute('onclick',"window.location.href = 'Viaje.html';")
                    a.setAttribute('data-id', doc2.id);
                    a.textContent = doc2.data().date;
                    a.onclick = function () {

                        Swal.fire({
                            title: 'Entry',
                            input: 'textarea',
                            inputValue: doc2.data().entry.value,
                            inputPlaceholder: 'Type your message here...',
                            showCancelButton: true
                        }).then(function (entry) {

                            db.collection('Viajes').where("place", "==", lugarViaje)
                                .get()
                                .then(function (querySnapshot) {

                                    querySnapshot.forEach(function (doc) {

                                        doc.ref.collection('Entradas').doc(doc2.id).update({

                                            entry: entry

                                        });


                                    });


                                });

                        });

                    };
                    cross.className += "btn btn-danger";
                    cross.textContent = 'delete';

                    //li.appendChild(lugar);
                    a.appendChild(cross);

                    listaEntradas.appendChild(a);

                    
                    //borrar data
                    cross.addEventListener('click', (e) => {

                        let cambios = snapshot.docChanges();
                        
                        e.stopPropagation();
                        let id = e.target.parentElement.getAttribute('data-id');
                        doc1.ref.collection('Entradas').doc(id).delete();
                        cambios.forEach(cambio => {

                            if(cambio.type == 'removed') {

                                let a = listaEntradas.querySelector('[data-id=' + cambio.doc.id + ']');
                                listaEntradas.removeChild(a);

                            }

                        })
                        
                    });
                    

                });

            });


        });


    });