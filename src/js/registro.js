import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/style.css'
import $ from 'jquery';
import Cliente from './cliente.js';
import Usuario from './usuario';
import Juego from './juego';


leerLS();
let registroUsuarios = [];
let registroJuegos = [];




            //el Key en el LocalStorage será "Usuarios" y "Juegos"
            
            //Agregar un administradorActivo, para saber si hay un adminsitrador iniciado sesion y dar permisos para ejecutar funciones
            //Al cerrar sesion, eliminar los datos del administradorActivo



function nuevoCliente() {
    //Accedo cuando los datos YA ESTAN VALIDADOS!
    let cliente = new Cliente(document.getElementById('nombre').value, document.getElementById('apellido').value, 
    document.getElementById('pass').value, document.getElementById('email').value, 'Cliente', 'Pendiente');
    console.log(cliente);
    leerLS();
    registroUsuarios.push(cliente);
    localStorage.setItem('Usuarios', JSON.stringify(registroUsuarios));
    alert("Bienvenido! Ahora debe esperar que habiliten su cuenta.");
}

function leerLS(){
    if(localStorage.length>0){
        registroUsuarios = JSON.parse(localStorage.getItem('Usuarios'));
        registroJuegos = JSON.parse(localStorage.getItem('Juegos'));
    }
    console.log(registroJuegos);
    console.log(registroUsuarios);
    if(registroUsuarios==null){
        cargarAdministradorDefecto();
    }
}
function cargarAdministradorDefecto(){
    let administrdor = new Usuario('Rosario', 'Serrano', 'admin1234', 'rserrano@gmail.com', 'Administrador');
    registroUsuarios = [administrdor]
    localStorage.setItem('Usuarios', JSON.stringify(registroUsuarios));
}



/* CUANDO TENGA EL FORMULARIO DEL REGISTRO TRAER LOS CAMPOS POR SU ID Y APLICAR LA VALIDACION */
//O NO USAMOS EL OBBLUR Y VALIDAMOS AL DAR ACEPTAR. SI HAY UN ERROR, AHI MARCA EL CAMPO COMO INCORRECTO

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

        //Seran unificado en un solo validarForm()
/* window.validarFormCliente = function(e){
    e.preventDefault();
    if(revisar(document.getElementById('')) && revisar(document.getElementById('')) && validarContra(document.getElementById(''), document.getElementById('')) && validarCorreo(document.getElementById(''))){
        nuevoCliente();
    }else{
        alert("Error en el ingreso de datos!");
    }
}
        //Seran unificado en un solo validarForm()
window.validarFormAdmin = function(e){
    e.preventDefault();
    if(revisar(document.getElementById('')) && revisar(document.getElementById('')) && validarContra(document.getElementById(''), document.getElementById('')) && validarCorreo(document.getElementById(''))){
        nuevoAdminitrador();
    }else{
        alert("Error en el ingreso de datos!");
    }
} */

window.validarFormNuevoCliente = function(e){
    e.preventDefault();
    if(revisar(document.getElementById('nombre')) && revisar(document.getElementById('apellido')) && validarContra(document.getElementById('pass'), document.getElementById('pass2')) && validarCorreo(document.getElementById('email')) && document.getElementById('terminos').checked){
        nuevoCliente();
    }else{
        alert("Error en el ingreso de datos!");
    }
}

/* export function validarDatos(nombre, apellido, contraseña, correo){
    if(revisar(nombre) && revisar(apellido) && validarContra(contraseña) && validarCorreo(correo)){
        return true;
    }else{
        return false;
    }
} */
function validarContra(contraseña, contraseña2){
    if(revisar(contraseña) && revisar(contraseña2)){
        if(contraseña === contraseña2){
            contraseña.className = "form-control is-valid";
            contraseña2.className = "form-control is-valid";
            return true;
        }
    }else{
        correo.className = "form-control is-invalid";
        return false;
    }
}

function validarCorreo(correo){
    let expresion = /\w+@\w+\.[a-z]{2,}$/;
    let bandera = false;
    if(revisar(correo.value)== true && expresion.test(correo.value)){
        //Vamos a comprobar que el correo no se encuentre almacenado
        leerLS();
        for(let i in registroUsuarios){
            if(registroUsuarios[i] == correo.value){
                bandera = true;
            }
        }
        if(bandera == false){
            correo.className = "form-control is-valid";
            return true;
        }else{
            alert("El correo ya es existente!");
            correo.className = "form-control is-invalid";
            return false;
        }
    }else{
        correo.className = "form-control is-invalid";
        return false;
    }
}


export function revisar(input){
    if(input.value == ""){
        input.className = "form-control is-invalid";
        return false;
    }else{
        input.className = "form-control is-valid";
        return true;
    }
}