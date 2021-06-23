import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioClienteService } from 'src/app/Servicio/servicio-cliente.service';
import { Persona } from 'src/modelo/Persona';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  constructor( private service: ServicioClienteService, private route:Router) { }
persona:Persona= new Persona(0,"","","","");

  ngOnInit(): void {
    this.edit();
    }
    edit(){
      let codigo=String(localStorage.getItem("id"));
      this.service.getIdPersona(+codigo)
      .subscribe(data=>{
      this.persona=data;
      })
      
    }
    
  Actualizar(){
    this.service.update(this.persona)
    .subscribe(data=>{
      alert("Actualizado con Exito...!!");
      this.route.navigate(["listarPersonas"]);
  })

}
}

