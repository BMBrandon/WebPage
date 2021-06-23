import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioClienteService } from 'src/app/Servicio/servicio-cliente.service';
import { Persona } from 'src/modelo/Persona';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {

  constructor(private service: ServicioClienteService, private route:Router) { }
  public persona:Persona= new Persona(0,"","","","");
  ngOnInit(): void {
  }
  Guardar(){
    this.service.setPersona(this.persona)
    .subscribe(data=>{
      alert("Se agrego con Exito...!!");
      this.route.navigate(["listaPersonas"]);
    })
  }

}
