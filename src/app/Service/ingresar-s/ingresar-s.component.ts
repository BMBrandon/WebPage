import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceServicioService } from 'src/app/Servicio/service.servicio.service';
import { Servicio } from 'src/modelo/servicio';

@Component({
  selector: 'app-ingresar-s',
  templateUrl: './ingresar-s.component.html',
  styleUrls: ['./ingresar-s.component.css']
})
export class IngresarSComponent implements OnInit {

  constructor(private service:ServiceServicioService, private route:Router) { }
  public servicio:Servicio=new Servicio(0,"",0);

  ngOnInit(): void {
  }
  Guardar(){
    this.service.setServicio(this.servicio)
    .subscribe(data=>{
      alert("Se agrego con Exito...!!");
      this.route.navigate(["listaservicio"]);
    })
  }
}
