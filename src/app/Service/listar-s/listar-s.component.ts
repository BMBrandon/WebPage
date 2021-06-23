import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceServicioService } from 'src/app/Servicio/service.servicio.service';
import { Servicio } from 'src/modelo/servicio';

@Component({
  selector: 'app-listar-s',
  templateUrl: './listar-s.component.html',
  styleUrls: ['./listar-s.component.css']
})
export class ListarSComponent implements OnInit {

  lservicios:Servicio[]=[];


  constructor(private servicio:ServiceServicioService, private router:Router) { }

  ngOnInit(): void {
    this.servicio.getServicio()
    .subscribe(data=>{
      this.lservicios=data;
    })
  
}
Modificar(servicios:Servicio):void { 
  localStorage.setItem("id", servicios.id.toString());
  this.router.navigate(["modificarServicio"]);
}
Eliminar(servicios:Servicio){
  this.servicio.delete(servicios)
    .subscribe(data=>{
      this.lservicios=this.lservicios.filter(p=>p!==servicios);
      alert (("Eliminar Servicio ...!!"))
})
  }

}
