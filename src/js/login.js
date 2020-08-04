import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/style.css';
import 'jquery';
import 'popper.js'
import Usuario from './usuario.js';
import {cargarAdministradorDefecto} from './registro.js';

let registroUsuarios=[];


function leerLS(){
    if(localStorage.length>0){
        registroUsuarios = JSON.parse(localStorage.getItem('Usuarios'));
    }
}

function buscarUsuario(correoCliente){
    leerLS();
    let usuarioEncontrado = registroUsuarios.find(function(cliente){
        if(cliente.correo == correoCliente){
            let usuario = new Usuario(registroUsuarios.nombre, registroUsuarios.apellido, 
                registroUsuarios.cotraseña, registroUsuarios.correo, registroUsuarios.tipo);
            return usuario;
        }else{
            return null;
        }
    });
    return usuarioEncontrado;
}
//Para saber si el Correo es valido
document.getElementById('').addEventListener('onblur', function(){
    if(document.getElementById('').value == buscarUsuario(document.getElementById('').value).correo){
        
        document.getElementById('').className = "form-control is-valid";
    }else{
        document.getElementById('').className = "form-control is-invalid";
    }
});
//Para comprobar que la contraseña no sea vacia
document.getElementById('').addEventListener('onblur', function(){
    if(document.getElementById('').value == ""){
        document.getElementById('').className = "form-control is-invalid";
    }else{
        document.getElementById('').className = "form-control is-valid";
    }
});

window.validarSesion = function(e){
    e.preventDefault();
    let usuario = buscarUsuario(document.getElementById('').value);
    if(usuario.correo == document.getElementById('').value && usuario.contraseña == document.getElementById('').value){
        alert("BIENVENIDO "+usuario.nombre)
        //Deberiamos mandar al perfil del usuario o mandar al index y remplzar su nombre por el de "iniciar sesion" del nav
    }else{
        document.getElementById('').className = "form-control is-invalid"; //Contraseña
    }
}
