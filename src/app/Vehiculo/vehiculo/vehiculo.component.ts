import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  constructor (private router: Router ) { }

  ngOnInit(): void {
  }
  Ingresar(){
    this.router.navigate(["ingresarVehiculo"]);
  
  }
  Listar(){
    this.router.navigate(["listarVehiculo"]);
  }
}
