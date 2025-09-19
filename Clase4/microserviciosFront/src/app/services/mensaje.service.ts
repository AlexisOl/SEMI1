import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as envDevelop } from '../../environments/environment';
import { environment as envDeploy } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Mensaje } from '../models/Mensaje';
import { Usuario } from '../models/Usuario';


@Injectable({
  providedIn: 'root'
})
export class MensajeService {
 readonly urlDevelop = envDevelop.MENSAJE_API
  readonly urlDeploy = envDeploy.MENSAJE_API


  constructor(private http: HttpClient) { }
  obtenerUsuarios(): Observable<Mensaje[]> {
    return this.http.get<Mensaje[]>(`${this.urlDeploy}/`);
  }

  registrarUsuario(mensaje: Mensaje): Observable<Mensaje> {
    return this.http.post<Mensaje>(`${this.urlDevelop}`, mensaje);
  }


}
