import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/style.css'
import $ from 'jquery';
import Cliente from './cliente.js';
import Usuario from './usuario';
import Juego from './juego';
import Swal from 'sweetalert2';

let registroUsuarios = [];
let registroJuegos = [];

            //el Key en el LocalStorage será "Usuarios" y "Juegos"
            
            //Agregar un administradorActivo, para saber si hay un adminsitrador iniciado sesion y dar permisos para ejecutar funciones
            //Al cerrar sesion, eliminar los datos del administradorActivo

function nuevoCliente() {
    //Accedo cuando los datos YA ESTAN VALIDADOS!
    let cliente = new Cliente(document.getElementById('').value, document.getElementById('').value, 
    document.getElementById('').value, document.getElementById('').value, 'Cliente', 'Pendiente');
    console.log(cliente);
    leerLS();
    registroUsuarios.push(cliente);
    localStorage.setItem('Usuarios', JSON.stringify(registroUsuarios));
    alert("Bienvenido! Ahora debe esperar que habiliten su cuenta.");

}

function nuevoAdminitrador(){
    let admin = new Usuario(document.getElementById('').value, document.getElementById('').value, document.getElementById('').value, document.getElementById('').value, 'Administrador');
    console.log(admin);
    leerLS();
    registroUsuarios.push(admin);
    localStorage.setItem('Usuarios', JSON.stringify(registroUsuarios));
    alert("Administrador agregado con Exito!");
}



function leerLS(){
    if(localStorage.length>0){
        registroUsuarios = JSON.parse(localStorage.getItem('Usuarios'));
        registroJuegos = JSON.parse(localStorage.getItem('Juegos'));
    }
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

window.validarFormUsuario = function(e, condicion){
    e.preventDefault();
    //true = Administrador. false = Cliente
    switch(true){
        case condicion:
            if(revisar(document.getElementById('')) && revisar(document.getElementById('')) && validarContra(document.getElementById(''), document.getElementById('')) && validarCorreo(document.getElementById(''))){
                nuevoAdminitrador();
            }else{
                alert("Error en el ingreso de datos!");
            }
            break;
        case condicion:
            if(revisar(document.getElementById('')) && revisar(document.getElementById('')) && validarContra(document.getElementById(''), document.getElementById('')) && validarCorreo(document.getElementById(''))){
                nuevoCliente();
            }else{
                alert("Error en el ingreso de datos!");
            }
            break;
        default:
            alert("Problema de servidor.")
            break;
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


function revisar(input){
    if(input.value == ""){
        input.className = "form-control is-invalid";
        return false;
    }else{
        input.className = "form-control is-valid";
        return true;
    }
}


//VALIDACION DE JUEGO codigo, nombre, categoria, descripcion, publicado, precio, url
window.validarFormJuego = function(e){
    e.preventDefault();
    
    //Poner los campos que sean obligatorios!
    if(revisar(document.getElementById('codigo')) && revisar(document.getElementById('nombre')) && revisar(document.getElementById('categoria')) && revisar(document.getElementById('descripcion')) &&revisar(document.getElementById('publicado')) && revisar(document.getElementById('precio'))){
        nuevoJuego();
    }else{
        location.href = '../error404.html';
        alert("Error al ingresar los datos!")
    }
}



window.eliminarCliente=function(cliente){
    Swal.fire({
		title: 'Esta seguro de eliminar este Cliente?',
		text: "No puedes volver esta operacion atras",
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Borrar'
	  }).then((result) => {
		if (result.value) {
            console.log(result.value);
            leerLS;
			registroUsuarios = registroUsuarios.filter(function(item) {
				return item.correo != cliente.correo;
			});
		
			localStorage.setItem('Juegos', JSON.stringify(registroUsuarios));
			leerLS;
			console.log(registroUsuarios);

		  Swal.fire(
			'Producto eliminado',
			'El producto fue eliminado satisfactoriamente',
			'success'
		  )
		}
	  })
}

//con preModificarCliente vamos a cargar los datos en pantalla
window.preModificarCliente=function(correoCliente){
    leerLS();
    //Usare filter para filtrar primero a los clientes unicamente
    registroUsuarios = registroUsuarios.filter(function(item){
        return item.tipo == 'Cliente';
    });
    //Ahora busco en la lista con solo clientes
    let clienteEncontrado = registroUsuarios.find(function(cliente){
        return cliente.correo == correoCliente;
    });
    console.log(clienteEncontrado);
    document.getElementById('').value = clienteEncontrado.nombre;
    document.getElementById('').value = clienteEncontrado.apellido;
    document.getElementById('').value = clienteEncontrado.contraseña;
    document.getElementById('').value = clienteEncontrado.correo;
    document.getElementById('').value = clienteEncontrado.tipo;
    document.getElementById('').value = clienteEncontrado.estado;
    
    //Usar bandera
}


//Con una bandera en agregarUsuario, deberia llamarse a esta funcion
function modificarCliente(){
    let cliente = new Cliente(document.getElementById('').value, document.getElementById('').value, 
    document.getElementById('').value, document.getElementById('').value, document.getElementById('').value, 
    document.getElementById('').value);

    //Actualizar registroUsuarios
    for(let i in registroUsuarios){
        if(registroUsuarios[i]== cliente.correo){
            //Aqui debo preguntar si no existe ya este cliente por el hecho que lo tomaremos como identificador unico que es el correo
            //Debo tener en cuenta los permisos a la hora de modificar, capas que un cliente puede modificarse el estado
            registroUsuarios[i].nombre = cliente.nombre;
            registroUsuarios[i].apellido = cliente.apellido;
            registroUsuarios[i].contraseña = cliente.contraseña;
            registroUsuarios[i].correo = cliente.correo;
            registroUsuarios[i].tipo = cliente.tipo;
            registroUsuarios[i].estado = cliente.estado;
            break;
        }
    }
    localStorage.setItem('Usuarios', JSON.stringify(registroUsuarios));

}

function nuevoJuego(){
                        //Falta agregar el atributo de URL y preguntar si son mas de uno, xq es un array la propiedad
    let juego = new Juego(document.getElementById('codigo'), document.getElementById('nombre'), document.getElementById('categoria'), 
    document.getElementById('descripcion'), document.getElementById('publicado'), document.getElementById('precio'));
    let ventanaModal = document.getElementById('exampleModal');
    console.log(juego);
    if(!juegoExistente(juego.codigo)){
        juegoExistente.push(juego);
        localStorage.setItem('Juegos', JSON.stringify(juegoExistente));
        $(ventanaModal).modal('hide');
        Swal.fire(
            'Operacion Exitosa',
            'Se agrego un nuevo juego al catalogo',
            'success'
        );
    }else{
        alert("ERROR: El juego ya existe!");
        
    }

}

function juegoExistente(codigo){
    leerLS();
    let juegoEncontrado = registroJuegos.find(function(juego){
        return juego.codigo == codigo
    })
    return juegoEncontrado;
}

window.eliminarJuego = function(juego){
    Swal.fire({
		title: 'Esta seguro de eliminar el juego?',
		text: "No puedes volver esta operacion atras",
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Borrar'
	  }).then((result) => {
		if (result.value) {
            console.log(result.value);
            leerLS;
			registroJuegos = registroJuegos.filter(function(item) {
				return item.codigo != juego.codigo;
			});
		
			localStorage.setItem('Juegos', JSON.stringify(registroJuegos));
			leerLS;
			console.log(registroJuegos);

		  Swal.fire(
			'Producto eliminado',
			'El producto fue eliminado satisfactoriamente',
			'success'
		  )
		}
	  });
} 

//con preModificarJuego vamos a cargar los datos en pantalla
window.preModificarJuego = function(codigoJuego){
    leerLS(); //Para refrescar la lista de registroJuegos[]; 
                                                                        //Tener en cuenta un modal si vamos a trabajar con el
    /* let modalJuego = document.getElementById(''); */
    
    
    let juegoEncontrado = registroJuegos.find(function(juego){
        return juego.codigo == codigoJuego;
    });
    console.log(juegoEncontrado);
    //Debo cargar en el modal los datos a ser modificado
    document.getElementById('').value = juegoEncontrado.codigo;
    document.getElementById('').value = juegoEncontrado.nombre;
    document.getElementById('').value = juegoEncontrado.categoria;
    document.getElementById('').value = juegoEncontrado.descripcion;
    document.getElementById('').value = juegoEncontrado.publicado;
    document.getElementById('').value = juegoEncontrado.precio;
    document.getElementById('').value = juegoEncontrado.url;            //Aqui habra que recorrer url por las dudas tenga mas imagenes un juego

                                                                        //Si vamos a reutilizar el modal de agregar Producto, debemos trabajar con bandera
    /* let banderaJuego = true; */                                            //Esto debe ir declarado de manera global si lo utilzaremos
    /* $(modalJuego).modal('show'); */  //mostramos el modal

}

//Con una bandera en agregarJuego, deberia llamarse a esta funcion
function modificarJuego(){
                //Si vamos a tener en cuenta que puede agregar mas de una URL de imagen/video hay q modificar el parametro de juego y pasar un array
    let juego = new Juego(document.getElementById('').value, document.getElementById('').value, 
    document.getElementById('').value, document.getElementById('').value, document.getElementById('').value, 
    document.getElementById('').value, document.getElementById('').value);
    //Actualizar registroJuegos
    for(let i in registroJuegos){
        if(registroJuegos[i].codigo == juego.codigo){
            //Aqui debo preguntar si no existe ya este juego por el hecho que lo tomaremos como identificador unico
            registroJuegos[i].codigo = juego.codigo;
            registroJuegos[i].nombre = juego.nombre;
            registroJuegos[i].categoria = juego.categoria;
            registroJuegos[i].descripcion = juego.descripcion;
            registroJuegos[i].publicado = juego.publicado;
            registroJuegos[i].precio = juego.precio;
            registroJuegos[i].url = juego.url;
            break;
        }
    }
    //Actualizare el LS
    localStorage.setItem('Juegos', JSON.stringify(registroJuegos));

    //Cerrar el modal si usaremos
}
