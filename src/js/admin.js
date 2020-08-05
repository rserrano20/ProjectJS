console.log('desde admin.js');
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/style.css';
import 'popper.js'
import $ from 'jquery';
import '@fortawesome/fontawesome-free/js/all.min.js'
import Usuario from './usuario.js';
import Juego from './juego.js';
import {revisar} from './registro.js';


let registroUsuarios = [];
let registroJuegos = [];
cargarTablas();

let registroUsuariosActivos = [];
leerLSActivo();
function leerLSActivo(){
    if(localStorage.getItem('UsuariosActivos')!= null){
        leerLS();
        
        let nav = document.getElementById('tipoNav');
        nav.innerHTML = `
        <div class="container">
            <a class="navbar-brand efectoimg" href="index.html" target="blank">
                <img src="img/logo3.png" alt="logo startGamer" class="logo">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto list-unstyled">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">INICIO |</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contacto.html">CONTACTO |</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="acerca.html">ACERCA DE |</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link efectoimg" href="">${registroUsuariosActivos[0].nombre}
                            <i class="fas fa-user"></i>
                        </a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link efectoimg" onclick="cerrarSesion()">
                            <i class="fas fa-sign-out-alt"></i></a>
                    </li>
                </ul>
            </div>
        </div>`
    }
}
window.cerrarSesion = function(){
    localStorage.removeItem('UsuariosActivos');
    document.location.reload(true);
}

function leerLS(){
    if(localStorage.length>0){
        registroUsuarios = JSON.parse(localStorage.getItem('Usuarios'));
        registroJuegos = JSON.parse(localStorage.getItem('Juegos'));
        registroUsuariosActivos = JSON.parse(localStorage.getItem('UsuariosActivos'));
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
    let bodyCliente = document.getElementById('bodyCliente');
    let listadoClientes = registroUsuarios.filter(function(cliente){
        return cliente.tipo == 'Cliente';
    })
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
    codHTML = '';
    for(let i in listadoClientes){
        if(listadoClientes[i].estado == 'Pendiente'){
            codHTML = ``;
            bodyCliente.innerHTML += codHTML;
        }
    }

}
function nuevoAdminitrador(){
    let admin = new Usuario(document.getElementById('').value, document.getElementById('').value, document.getElementById('').value, document.getElementById('').value, 'Administrador');
    console.log(admin);
    leerLS();
    registroUsuarios.push(admin);
    localStorage.setItem('Usuarios', JSON.stringify(registroUsuarios));
    alert("Administrador agregado con Exito!");
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
