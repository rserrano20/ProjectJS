import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/style.css';

let registroJuegos = [];
let bodyDetalle;
bodyDetalle = document.getElementById('bodyDetalle');

/* window.onload = function() { 
    bodyDetalle = document.getElementById('bodyDetalle');
    cargarDetalle();
} */

/* export default function cargarDetalle(ob, cat){ */

window.cargarDetalle = function(ob, cat){
/* export function cargarDetalle(ob, cat){ */
    console.log(ob);
    alert(ob);
    alert(ob.id);
    alert(cat);
    leerLS();
    let codigo = ob.id;
    console.log("codigo en cargarDetalle = "+codigo);
    /* let bodyDetalle = document.getElementById('bodyDetalle'); */
    /* bodyDetalle = document.getElementById('bodyDetalle'); */
    bodyDetalle = document.getElementById('bodyDetalle');
    console.log(bodyDetalle);
    let juego = registroJuegos.find(function(item){
        return item.codigo == codigo;
    });
    bodyDetalle.innerHTML = `
    <article>
        <div class="text-center">
            <img src="img/categorias/${cat}/${juego.url}" alt="${juego.nombre} imagen" width="200px" class="efectoimg">
        </div>
        <p class="lead text-center white-t">Checkea nuestros proximos lanzamientos. Pre-ordenalos y obten un 20% de descuento!</p>
        <hr>
        <ul>
            <li><strong>Nombre:</strong> ${juego.nombre}</li>
            <li><strong>Descripcion del juego:</strong> ${juego.detalle} </li>
            <li><strong>Categoria:</strong> ${juego.categoria} </li>
            <a href="error404.html" class="btn btn-primary mx-1 efectoimg">Comprar</a>
        </ul>
    </article>`;

}

function leerLS(){
    console.log("LeerLS en detalle.js")
    if(localStorage.length>0){
        registroJuegos = JSON.parse(localStorage.getItem('Juegos'));
    }
}


