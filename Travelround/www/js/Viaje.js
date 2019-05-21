var lugarViaje = localStorage.getItem("lugar");
let h1 = document.createElement('h1');
h1.setAttribute('id','tituloViaje')
h1.textContent = lugarViaje;
document.getElementById("colLugar").appendChild(h1);