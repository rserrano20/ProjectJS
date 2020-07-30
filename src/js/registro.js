import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/style.css'
import $ from 'jquery';
import Cliente from './modelo/cliente';
let registroClientes = [];

            //el Key en el LocalStorage será "administradores" y "clientes"



window.nuevoCliente = function () {
    let cliente = new Cliente(document.getElementById('').value, document.getElementById('').value, 
    document.getElementById('').value, document.getElementById('').value, 'Pendiente');
    console.log(cliente);
    leerLS();

    //Validacion
    if(validarDatos(cliente.miNombre, cliente.miApellido, cliente.miContraseña, cliente.miCorreo)){
        //Datos validados
        registroClientes.push(cliente);
        localStorage.setItem('clientes', JSON.stringify(listaProductos));
    }

}

export function leerLS(){
    if(localStorage.length>0){
        registroClientes = JSON.parse(localStorage.getItem('clientes'));
    }
}



/* CUANDO TENGA EL FORMULARIO DEL REGISTRO TRAER LOS CAMPOS POR SU ID Y APLICAR LA VALIDACION */

//EJEMPLO con addEventListener
/* document.getElementById('').addEventListener('onblur', function(){
    if(codigo.value == ""){
        codigo.className = "form-control is-invalid";
    }else{
        codigo.className = "form-control is-valid";
    }
}); */

//EJEMPLO con .onblur
/* codigo.onblur = function(){
    if(codigo.value == ""){
        codigo.className = "form-control is-invalid";
    }else{
        codigo.className = "form-control is-valid";
    }
}; */



export function validarDatos(nombre, apellido, contraseña, correo){
    if(revisar(nombre) && revisar(apellido) && validarContra(contraseña) && validarCorreo(correo)){
        return true;
    }else{
        return false;
    }
}
function validarContra(){
    if(document.getElementById('') == document.getElementById('')){
        return true;
    }else{
        false;
    }
}

function validarCorreo(correo){
    //Agregar Expresion logica con un return

}


function revisar(input){
    if(input.value == ""){
        input.className = "form-control is-invalid";
        return false;
    }else{
        input.className = "form-control is-valid";
        return true;
    }
}