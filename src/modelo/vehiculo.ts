export class Vehiculo{
    setVehiculo(vehiculo: Vehiculo) {
      throw new Error('Method not implemented.');
    }
    id:number;
    placa:string;
    color:string;
    modelo:string;
    anio:string;
    constructor(id:number , placa:string , color:string , modelo:string , anio:string ){
        this.id=id;
        this.placa=placa;
        this.color=color;
        this.modelo=modelo;
        this.anio=anio;
    }
}