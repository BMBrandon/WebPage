import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './Persona/persona/persona.component';
import { IngresarComponent } from './Persona/ingresar/ingresar.component';
import { ModificarComponent } from './Persona/modificar/modificar.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServicioComponent } from './Service/servicio/servicio.component';

import { ListarSComponent } from './Service/listar-s/listar-s.component';
import { IngresarSComponent } from './Service/ingresar-s/ingresar-s.component';
import { ModificarSComponent } from './Service/modificar-s/modificar-s.component';
import { VehiculoComponent } from './Vehiculo/vehiculo/vehiculo.component';
import { IngresarVComponent } from './Vehiculo/ingresar-v/ingresar-v.component';
import { ModificarVComponent } from './Vehiculo/modificar-v/modificar-v.component';
import { ListarVComponent } from './Vehiculo/listar-v/listar-v.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    IngresarComponent,
    ModificarComponent,
    ListarComponent,
    ServicioComponent,
    ListarSComponent,
    IngresarSComponent,
    ModificarSComponent,
    VehiculoComponent,
    IngresarVComponent,
    ModificarVComponent,
    ListarVComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  }

