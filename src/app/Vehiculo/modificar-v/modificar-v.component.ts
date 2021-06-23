import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehiculoServicioService } from 'src/app/Servicio/vehiculo-servicio.service';
import { Vehiculo } from 'src/modelo/vehiculo';

@Component({
  selector: 'app-modificar-v',
  templateUrl: './modificar-v.component.html',
  styleUrls: ['./modificar-v.component.css']
})
export class ModificarVComponent implements OnInit {

  constructor(private vehiculos:VehiculoServicioService, private route:Router) { }
  vehiculo:Vehiculo= new Vehiculo(0,"","","","");

  ngOnInit(): void {
    this.edit();
  }
  edit(){
    let codigo=String(localStorage.getItem("id"));
    this.vehiculos.getIdVehiculo(+codigo)
    .subscribe(data=>{
    this.vehiculo=data;
    })
    
  }
  
Actualizar(){
  this.vehiculos.update(this.vehiculo)
  .subscribe(data=>{
    alert("Actualizado con Exito...!!");
    this.route.navigate(["listarVehiculo"]);
})

}
  }
