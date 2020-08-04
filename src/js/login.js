import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/style.css';
import 'jquery';
import 'popper.js'
import Usuario from './usuario.js';

let registroUsuarios=[];

let usuarioActivo = null;

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
document.getElementById('email').addEventListener('onblur', function(){
    if(document.getElementById('email').value == buscarUsuario(document.getElementById('email').value).correo){
        
        document.getElementById('email').className = "form-control is-valid";
    }else{
        document.getElementById('email').className = "form-control is-invalid";
    }
});
//Para comprobar que la contraseña no sea vacia
document.getElementById('pass').addEventListener('onblur', function(){
    if(document.getElementById('pass').value == ""){
        document.getElementById('pass').className = "form-control is-invalid";
    }else{
        document.getElementById('pass').className = "form-control is-valid";
    }
});

window.validarSesion = function(e){
    e.preventDefault();
    let usuario = buscarUsuario(document.getElementById('email').value);
    if(usuario.correo == document.getElementById('email').value && usuario.contraseña == document.getElementById('pass').value){
        alert("BIENVENIDO "+usuario.nombre);
        usuarioActivo = usuario;
        //Deberiamos mandar al perfil del usuario o mandar al index y remplzar su nombre por el de "iniciar sesion" del nav
        if(usuario.tipo == 'Administrador'){
            location.href = '../admin.html';
        }else{
            location.href = '../index.html';
        }
    }else{
        document.getElementById('pass').className = "form-control is-invalid"; //Contraseña
    }
}

function getUsuarioActivo(){
    return usuarioActivo;
}

function cleanUsuarioActivo(){
    usuarioActivo = null;
}