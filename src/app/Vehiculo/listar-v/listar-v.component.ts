import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehiculoServicioService } from 'src/app/Servicio/vehiculo-servicio.service';
import { Vehiculo } from 'src/modelo/vehiculo';

@Component({
  selector: 'app-listar-v',
  templateUrl: './listar-v.component.html',
  styleUrls: ['./listar-v.component.css']
})
export class ListarVComponent implements OnInit {

  lvehiculo:Vehiculo[]=[];
  vehiculo:Vehiculo= new Vehiculo(0,"","","","");
  constructor(private vehiculos: VehiculoServicioService,private router:Router) { }

  ngOnInit(): void {
    this.vehiculos.getVehiculo()
      .subscribe(data=>{
        this.lvehiculo=data;
      })
    
  }
  Modificar(vehiculos:Vehiculo):void { 
    localStorage.setItem("id", vehiculos.id.toString());
    this.router.navigate(["modificarVehiculo"]);
  }
  Eliminar(vehiculos:Vehiculo){
    this.vehiculos.delete(vehiculos)
      .subscribe(data=>{
        this.lvehiculo=this.lvehiculo.filter(p=>p!==vehiculos);
        alert (("Eliminar Vehiculo ...!!"))
  })

}
}