import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Servicio } from 'src/modelo/servicio';
@Injectable({
  providedIn: 'root'
})
export class ServiceServicioService {

  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/api/servicio/'
  getServicio(){
    return this.http.get<Servicio[]>(this.Url)
  }
  setServicio(servicio:Servicio){
    return this.http.post<Servicio>(this.Url, servicio)
  }
  delete(servicio:Servicio){
    return this.http.delete<Servicio[]>(this.Url+servicio.id)
  }
  getIdServicio(id:number){
    return this.http.get<Servicio>(this.Url+id);
  }
  update(servicio:Servicio){
    return this.http.put<Servicio>(this.Url+servicio.id,servicio);
  }
}
