import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/style.css'
import $ from 'jquery';
import '@fortawesome/fontawesome-free/js/all.min.js'
import Usuario from './modelo/usuario';
import Juego from './modelo/juego';
import Cliente from './modelo/cliente';
import {leerRegistros, validarDatos} from './registro';

let registroClientes = [];

console.log('desde admin.js');

function aprobarCliente(){
    registroClientes = leerRegistros();

    //Debemos seleccionar la linea del cliente que vamos a aprobar como hicimos con modificar en funkopop

    //Cambiar el estado

    //Guardar Cambios

    //En el caso que quieramos mostrar solo los estados pendiente, hay que actualizar la tabla
    //O podemos mostrar todos los usuarios y agregarle un check a los que esten validados
}

window.nuevoAdministrador = function(){
    let administrador = new Usuario(document.getElementById('').value, 
        document.getElementById('').value, document.getElementById('').value, document.getElementById('').value);
    
    //Validacion de campos
    validarDatos(document.getElementById('').value, 
    document.getElementById('').value, document.getElementById('').value, document.getElementById('').value);


}


