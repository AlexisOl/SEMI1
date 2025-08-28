import { Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { poemas } from '../../models/poemas';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoemasServicioService {
  readonly direccion: string = environment.URL+"/poemas";


  //usar signal
  public listadoPoemas = signal<poemas[]>([]);

  constructor(private http: HttpClient) {
    this.obtenerListadoPoemas()
  }

    obtenerBodegas(): Observable<poemas[]> {
      return this.http.get<poemas[]>(this.direccion);
    }

  obtenerListadoPoemas() {
    return this.http.get<poemas[]>(
      this.direccion
    ).subscribe(
      {
        next: (p) => {
          console.log(p);
          this.listadoPoemas.set(p)
        },
        error: (er) => {
          console.error(er);

        }
      }
    )
  }


}
