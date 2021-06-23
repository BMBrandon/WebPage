export class Persona{
    id:number;
    nombre:string;
    apellido:string;
    correo:string;
    telefono:string;
    constructor(id:number , nombre:string , apellido:string , correo:string , telefono:string ){
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.correo=correo;
        this.telefono=telefono;
    }
}