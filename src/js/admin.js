console.log('desde admin.js');
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/style.css';
import 'popper.js'
import $ from 'jquery';
import '@fortawesome/fontawesome-free/js/all.min.js'
import Usuario from './usuario.js';
import Juego from './juego.js';
import {validarDatos} from './registro.js';

let registroUsuarios = [];

console.log('desde admin.js');

function leerLS(){
    if(localStorage.length>0){
        registroUsuarios = JSON.parse(localStorage.getItem('Usuarios'));
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




