import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceServicioService } from 'src/app/Servicio/service.servicio.service';
import { Servicio } from 'src/modelo/servicio';

@Component({
  selector: 'app-modificar-s',
  templateUrl: './modificar-s.component.html',
  styleUrls: ['./modificar-s.component.css']
})
export class ModificarSComponent implements OnInit {

  constructor(private servi:ServiceServicioService, private route:Router) { }
  servicio:Servicio= new Servicio(0,"",0);
  ngOnInit(): void {
    this.edit();
  }
  edit(){
    let codigo=String(localStorage.getItem("id"));
    this.servi.getIdServicio(+codigo)
    .subscribe(data=>{
    this.servicio=data;
    })
    
  }
  
Actualizar(){
  this.servi.update(this.servicio)
  .subscribe(data=>{
    alert("Actualizado con Exito...!!");
    this.route.navigate(["listarServicio"]);
})

}
  }
