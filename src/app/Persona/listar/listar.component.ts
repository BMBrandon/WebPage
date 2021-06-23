import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioClienteService } from 'src/app/Servicio/servicio-cliente.service';
import { Persona } from 'src/modelo/Persona';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  
lpersonas:Persona[]=[];
persona:Persona= new Persona(0,"","","","");
  constructor(private servicio:ServicioClienteService,private router:Router) { }

  ngOnInit(): void {
    this.servicio.getPersona()
      .subscribe(data=>{
        this.lpersonas=data;
      })
    
  }
  Modificar(persona:Persona):void { 
    localStorage.setItem("id", persona.id.toString());
    this.router.navigate(["modificarPersonas"]);
  }
  Eliminar(persona:Persona){
    this.servicio.delete(persona)
      .subscribe(data=>{
        this.lpersonas=this.lpersonas.filter(p=>p!==persona);
        alert (("Eliminar persona ...!!"))
  })

}
}