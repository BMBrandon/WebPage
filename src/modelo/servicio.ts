export class Servicio{
    id:number;
    descripcion:string;
    precio:number;
  
    constructor(id:number , descripcion:string, precio:number){
        this.id=id;
        this.descripcion=descripcion;
        this.precio=precio;
    }
}