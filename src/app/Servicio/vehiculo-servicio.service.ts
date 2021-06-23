import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehiculo } from 'src/modelo/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoServicioService {

  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/api/vehiculo/'
  getVehiculo(){
    return this.http.get<Vehiculo[]>(this.Url)
  }
  setVehiculo(vehiculo:Vehiculo){
    return this.http.post<Vehiculo>(this.Url, vehiculo)
  }
  delete(vehiculo:Vehiculo){
    return this.http.delete<Vehiculo[]>(this.Url+vehiculo.id)
  }
  getIdVehiculo(id:number){
    return this.http.get<Vehiculo>(this.Url+id);
  }
  update(vehiculo:Vehiculo){
    return this.http.put<Vehiculo>(this.Url+vehiculo.id,vehiculo);
  }
}
