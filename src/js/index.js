import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/style.css';
import 'jquery';
import 'popper.js'

let registroJuegos=[];
cargarIndex();

function leerLS(){
    if(localStorage.length>0){
        registroJuegos = JSON.parse(localStorage.getItem('Juegos'));
    }
}

function cargarIndex(){
    leerLS();
    if(localStorage.length>0){
        let _juegos = JSON.parse(localStorage.getItem('Juegos'));
        if(registroJuegos.length == 0){
            registroJuegos = _juegos;
        }
    }
    escribirIndex(registroJuegos);
}

function escribirIndex(){

    //Aqui por cada categoria voy a tener que tener un id de la etiqueta padre, 
    //y en el switch ir escribiendo respecto a la categoria que pertenece
    let tbodyAccion = document.getElementById('');
    let tbodyDisparos = document.getElementById('');
    let tbodyCarreras = document.getElementById('');
    let tbodyInfantiles = document.getElementById('');
    let codHtml = '';
    for(let i in registroJuegos){
        codHtml ='';
        switch(true){
            case registroJuegos[i].categoria == 'Accion/Aventura':
                codHtml = ``;
                tbodyAccion += codHtml;
                break;
            case registroJuegos[i].categoria == 'Disparos':
                codHtml = ``;
                tbodyDisparos += codHtml;
                break;
            case registroJuegos[i].categoria == 'Carreras':
                codHtml = ``;
                tbodyCarreras += codHtml;
                break;
            case registroJuegos[i].categoria == 'Infantiles':
                codHtml = ``;
                tbodyInfantiles += codHtml;
                break;
        }
    }
}


