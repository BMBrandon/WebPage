import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Persona } from 'src/modelo/Persona';
@Injectable({
  providedIn: 'root'
})
export class ServicioClienteService {

  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/api/persona/'
  getPersona(){
    return this.http.get<Persona[]>(this.Url)
  }
  setPersona(persona:Persona){
    return this.http.post<Persona>(this.Url, persona)
  }
  delete(persona:Persona){
    return this.http.delete<Persona[]>(this.Url+persona.id)
  }
  getIdPersona(id:number){
    return this.http.get<Persona>(this.Url+id);
  }
  update(persona:Persona){
    return this.http.put<Persona>(this.Url+persona.id,persona);
  }
}
