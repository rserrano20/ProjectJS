console.log('desde admin.js');
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/style.css';
import 'popper.js'
import $ from 'jquery';
import '@fortawesome/fontawesome-free/js/all.min.js'
import Usuario from './usuario.js';
import Juego from './juego.js';
/* import {validarDatos} from './registro.js'; */


let registroUsuarios = [];
let registroJuegos = [];
cargarTablas();

console.log('desde admin.js');

function leerLS(){
    if(localStorage.length>0){
        registroUsuarios = JSON.parse(localStorage.getItem('Usuarios'));
        registroJuegos = JSON.parse(localStorage.getItem('Juegos'));
    }
}

function aprobarCliente(){
    leerLS();

    //Debemos seleccionar la linea del cliente que vamos a aprobar como hicimos con modificar en funkopop

    //Cambiar el estado

    //Guardar Cambios

    //En el caso que quieramos mostrar solo los estados pendiente, hay que actualizar la tabla
    //O podemos mostrar todos los usuarios y agregarle un check a los que esten validados
}

function cargarTablas(){
    leerLS();
    console.log("En cargarTabla")
    let bodyJuegos = document.getElementById('bodyJuego');
    let codHTML = '';
    let estado;
    console.log(registroJuegos);
    for(let i in registroJuegos){
        if(registroJuegos[i].publicado){
            estado = "SI";
        }else{
            estado = "NO";
        }
        codHTML=`
        <tr>
            <td>${registroJuegos[i].codigo}</td>
            <td>${registroJuegos[i].nombre}</td>
            <td>${registroJuegos[i].categoria}</td>
            <td>${registroJuegos[i].descripcion}</td>
            <td>${estado}</td>
            <td>${registroJuegos[i].precio}</td>
            <td>
                <button class="btn btn-primary"><i class="far fa-edit"></i></button>
                <button class="btn btn-danger"><i class="far fa-trash-alt"></i></button> 
                <button class="btn btn-primary"><i class="far fa-star"></i></button>        
            </td>
        </tr>`;
        bodyJuegos.innerHTML += codHTML; 
    }

}


