import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as envDevelop } from '../../environments/environment';
import { environment as envDeploy } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class MensajeService {
 readonly urlDevelop = envDevelop.USUARIO_API
  readonly urlDeploy = envDeploy.USUARIO_API

  constructor(private http: HttpClient) { }
}
