import Usuario from "./usuario";

export default class Cliente extends Usuario{
    constructor(nombre, apellido, contraseña, correo, estado){
        super(nombre, apellido, contraseña, correo);
        this.estado = estado;
    }
    get miEstado(){
        return this.estado;
    }
}