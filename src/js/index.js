import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/style.css';
import 'jquery';
import 'popper.js'
import {cargarDetalle} from './detalle'
import Juego from './juego.js';

let accion1 = new Juego('1', 'AC: Origins', 'Accion/Aventura', 'Un juego que no conozco!', true, '59.99', 'acoo.png')
let accion2 = new Juego('2', 'Prince of Persia', 'Accion/Aventura', 'Agregar Detalle', true, '49.99', 'prince.jpg');
let accion3 = new Juego('3', 'Space Junkies', 'Accion/Aventura', 'Agregar Detalle', true, '29.99', 'spacejunkies-keyart-compofinal_560x698_mobile_292672.jpg');
let accion4 = new Juego('4', 'Far Cry Primal', 'Accion/Aventura', 'Agregar Descrip', true, '39.99', 'primal.jpg');

let disparo1 = new Juego('5', 'Far Cry 3', 'Disparos', 'Agregar descp', true, '79.99', 'farcry3.jpg');
let disparo2 = new Juego('6', 'Splinter Cell: Blacklist', 'Disparos', 'descp', true, '49.99', 'splinter.jpg');
let disparo3 = new Juego('7', 'Rainbow 6 Siege', 'Disparos', 'Descóp', true, '39.99', 'rainbow6.jpg');
let disparo4 = new Juego('8', 'GR: Breakpoint', 'Disparos', 'Descp', true, '69.99', 'ghost.jpg');

let carrera1 = new Juego('9', 'Trials Rising', 'Carreras', 'descp', true, '29.99', 'moto.jpg');
let carrera2 = new Juego('10', 'The Crew 2', 'Carreras', 'descp', true, '59.99', 'thecrew2.jpg');
let carrera3 = new Juego('11', 'Trackmania: Lagoon', 'Carreras', 'Descp', true, '9.99', 'trackmania.jpg');
let carrera4 = new Juego('12', 'Trackmania: Canyon', 'Carreras', 'desap', true, '19.99', 'canyon.jpg');

let infantil1 = new Juego('12', 'Hungry Shark: Evo', 'Infantiles', 'Descp', true, '19.99', 'shark.jpg');
let infantil2 = new Juego('13', 'Just Dance: Disney', 'Infantiles', 'Descp', true, '39.99', 'disney.png');
let infantil3 = new Juego('14', 'Horse Heaven', 'Infantiles', 'Descp', true, '9.99', 'horse.jpg');
let infantil4 = new Juego('15', 'Grow Up', 'Infantiles', 'Descp', true, '59.99', 'gr.png');

let registroJuegos= [accion1, accion2, accion3, accion4, disparo1, disparo2, disparo3, 
    disparo4, carrera1, carrera2, carrera3, carrera4, infantil1, infantil2, infantil3, infantil4];
cargarIndex();



function leerLS(){
    if(localStorage.length>0){
        registroJuegos = JSON.parse(localStorage.getItem('Juegos'));
    }else{
        localStorage.setItem('Juegos', JSON.stringify(registroJuegos));
    }
}

function cargarIndex(){
    leerLS();
    escribirIndex();
}

function escribirIndex(){
    //Aqui por cada categoria voy a tener que tener un id de la etiqueta padre, 
    //y en el switch ir escribiendo respecto a la categoria que pertenece
    let tbodyAccion = document.getElementById('filaAccion');
    let tbodyDisparos = document.getElementById('filaDisparo');
    let tbodyCarreras = document.getElementById('filaCarrera');
    let tbodyInfantiles = document.getElementById('filaInfantil');
    let codHtml = '';
    let juegoPublicados = registroJuegos.filter(function(item){
        return item.publicado == true;
    });  
    for(let i in juegoPublicados){
        switch(true){
            case juegoPublicados[i].categoria == 'Accion/Aventura':
                codHtml = 
                `<div class="col-sm-12 col-md-6 col-lg-3 mb-3">
                    <div class="card-deck darkgrey" id="">
                        <img class="card-img-top " alt="100x280" src="img/categorias/carreras/${juegoPublicados[i].url}">
                        <div class="card-body white-t" id="">
                            <h4 class="card-title">${juegoPublicados[i].nombre}</h4>
                            <h5 class="card-text"><strong> >> ${juegoPublicados[i].precio} US$</strong></h5>
                            <div class="container text-right mb-2">
                                <a href="detalle.html?Id=${juegoPublicados[i].codigo}" class="btn btn-dark mx-1 efectoimg black">Ver mas</a>
                                <a href="error404.html" class="btn btn-dark efectoimg orange" id="">Comprar</a>
                            </div>
                            <i class="fab fa-xbox mx-1" style="color:#c7c7c7"></i>
                            <i class="fab fa-playstation mx-1" style="color:#c7c7c7"></i>
                            <i class="fab fa-windows mx-1" style="color:#c7c7c7"></i>
                        </div>
                    </div>
                </div>`;
                tbodyAccion.innerHTML += codHtml;
                break;
            case juegoPublicados[i].categoria == 'Disparos':
                codHtml = `
                <div class="col-sm-12 col-md-6 col-lg-3 mb-3">
                    <div class="card-deck darkgrey" id="">
                        <img class="card-img-top " alt="100x280" src="img/categorias/Disparos/${juegoPublicados[i].url}">
                        <div class="card-body white-t" id="">
                            <h4 class="card-title">Far Cry 3</h4>
                            <h5 class="card-text"><strong> >> ${juegoPublicados[i].precio} US$</strong></h5>
                            <div class="container text-right mb-2">
                                <a href="detalle.html?Id=${juegoPublicados[i].codigo}" class="btn btn-dark mx-1 efectoimg black">Ver mas</a>
                                <a href="error404.html" class="btn btn-dark efectoimg orange" id="">Comprar</a>
                            </div>
                            <i class="fab fa-xbox mx-1" style="color:#c7c7c7"></i>
                            <i class="fab fa-playstation mx-1" style="color:#c7c7c7"></i>
                            <i class="fab fa-windows mx-1" style="color:#c7c7c7"></i>
                        </div>
                    </div>
                </div>`;
                tbodyDisparos.innerHTML += codHtml;
                break;
            case juegoPublicados[i].categoria == 'Carreras':
                codHtml = `
                <div class="col-sm-12 col-md-6 col-lg-3 mb-3">
                    <div class="card-deck darkgrey" id="">
                        <img class="card-img-top " alt="100x280" src="img/categorias/carreras/${juegoPublicados[i].url}">
                        <div class="card-body white-t" id="">
                            <h4 class="card-title">Trials Rising</h4>
                            <h5 class="card-text"><strong> >> ${juegoPublicados[i].precio} US$</strong></h5>
                            <div class="container text-right mb-2">
                                <a href="detalle.html?Id=${juegoPublicados[i].codigo}" class="btn btn-dark mx-1 efectoimg black">Ver mas</a>
                                <a href="error404.html" class="btn btn-dark efectoimg orange" id="">Comprar</a>
                            </div>
                            <i class="fab fa-xbox mx-1" style="color:#c7c7c7"></i>
                            <i class="fab fa-playstation mx-1" style="color:#c7c7c7"></i>
                            <i class="fab fa-windows mx-1" style="color:#c7c7c7"></i>
                        </div>
                    </div>
                </div>`;
                tbodyCarreras.innerHTML += codHtml;
                break;
            case juegoPublicados[i].categoria == 'Infantiles':
                codHtml = `
                <div class="col-sm-12 col-md-6 col-lg-3 mb-3">
                    <div class="card-deck darkgrey" id="">
                        <img class="card-img-top " alt="100x280" src="img/categorias/Infantil/${juegoPublicados[i].url}">
                        <div class="card-body white-t" id="">
                            <h4 class="card-title">Hungry Shark: Evo</h4>
                            <h5 class="card-text"><strong> >> ${juegoPublicados[i].precio} US$</strong></h5>
                            <div class="container text-right mb-2">
                                <a href="detalle.html?Id=${juegoPublicados[i].codigo}" class="btn btn-dark mx-1 efectoimg black">Ver mas</a>
                                <a href="error404.html" class="btn btn-dark efectoimg orange" id="">Comprar</a>
                            </div>
                            <i class="fab fa-xbox mx-1" style="color:#c7c7c7"></i>
                            <i class="fab fa-playstation mx-1" style="color:#c7c7c7"></i>
                            <i class="fab fa-windows mx-1" style="color:#c7c7c7"></i>
                        </div>
                    </div>
                </div>`;
                tbodyInfantiles.innerHTML += codHtml;
                break;
            default:
                alert("Error");
                break;
        }
    }
}
