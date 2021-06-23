import { Component } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trabajo';
  constructor (private router: Router){}
  persona(){
    this.router.navigate(["persona"]);
}
  servicio(){
    this.router.navigate(["servicio"]);
}
  vehiculo(){
  this.router.navigate(["vehiculo"]);
}
}
