import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';
import { environment as envDevelop } from '../../environments/environment';
import { environment as envDeploy } from '../../environments/environment.development';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  readonly urlDevelop = envDevelop.USUARIO_API
  readonly urlDeploy = envDeploy.USUARIO_API

  constructor(private http: HttpClient) { }
  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.urlDeploy}/`);
  }

  registrarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.urlDevelop}`, usuario);
  }

  obtenerUsuarioPorId(id: Number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.urlDevelop}/${id}`);
  }

}
