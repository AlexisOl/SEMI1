import { Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { poetas } from '../../models/poemas';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoetasServiceService {
  readonly direccion: string = environment.URL;


  //usar signal
  public listadoAutores =  signal<poetas[]>([]);

  constructor(private http: HttpClient) {
    this.obtenerListadoPoetas()
   }


  obtenerBodegas(): Observable<poetas[]> {
    return this.http.get<poetas[]>(this.direccion);
  }
  // rutas de peticon
  obtenerListadoPoetas()  {
      return this.http.get<poetas[]>(
          this.direccion
      ).subscribe(
        {
          next: (p) => {
            console.log(p);
            
            this.listadoAutores.set(p)
          }, 
          error: (er) => {
            console.error(er);
            
          }
        }
      )
  }
}
