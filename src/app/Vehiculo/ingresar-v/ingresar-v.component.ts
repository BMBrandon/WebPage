import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehiculoServicioService } from 'src/app/Servicio/vehiculo-servicio.service';
import { Vehiculo } from 'src/modelo/vehiculo';

@Component({
  selector: 'app-ingresar-v',
  templateUrl: './ingresar-v.component.html',
  styleUrls: ['./ingresar-v.component.css']
})
export class IngresarVComponent implements OnInit {

  constructor(private vehiculos:VehiculoServicioService, private route:Router) { }
  public vehiculo:Vehiculo=new Vehiculo(0,"","","","");

  ngOnInit(): void {
  }
  Guardar(){
    this.vehiculos.setVehiculo(this.vehiculo)
    .subscribe(data=>{
      alert("Se agrego con Exito...!!");
      this.route.navigate(["listarVehiculo"]);
    })
  }
}