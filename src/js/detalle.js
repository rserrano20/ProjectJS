import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/style.css';

let registroJuegos = [];

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    console.log("name = "+name);
    leerLS();
    /* name = name.replace(/[\[\]]/g, '\\$&'); */
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    let bodyDetalle = document.getElementById('bodyDetalle');
    console.log(bodyDetalle);
    console.log(decodeURIComponent(results[2].replace(/\+/g, ' ')))
    let juego = registroJuegos.find(function(item){
        return item.codigo == decodeURIComponent(results[2].replace(/\+/g, ' '));
    });
    console.log(juego);
    bodyDetalle.innerHTML = `
    <article>
        <div class="text-center">
            <img src="img/categorias/${juego.categoria}/${juego.url}" alt="${juego.nombre} imagen" width="200px" class="efectoimg">
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
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
let prodId = getParameterByName('Id');
console.log("prodId fuera = "+prodId);

function leerLS(){
    if(localStorage.length>0){
        registroJuegos = JSON.parse(localStorage.getItem('Juegos'));
    }
}


