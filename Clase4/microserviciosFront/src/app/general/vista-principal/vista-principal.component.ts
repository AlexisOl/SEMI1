import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';
import { MensajeService } from '../../services/mensaje.service';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { Mensaje } from '../../models/Mensaje';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-vista-principal',
  imports: [FormsModule, NzSelectModule],
  templateUrl: './vista-principal.component.html',
  styleUrl: './vista-principal.component.css'
})
export class VistaPrincipalComponent implements OnInit {

  usuarios: Usuario[] = [];
  mensajes: any[] =[]
seleccionado: any;

  // valores 
  username!: string
  password!: string
  pais!: string


  //mensaje
  comentario!:string
  constructor(private usuarioService: UsuarioService,
              private mensajeService: MensajeService
  ) { }

  ngOnInit(): void {
    this.listarUsuarios();
    this.listarMensajes();
  }

  listarUsuarios(): void {
    this.usuarioService.obtenerUsuarios().subscribe({
      next: (data) => this.usuarios = data,
      error: (err) => console.error('Error al obtener usuarios', err)
    });
  }

    listarMensajes(): void {
    this.mensajeService.obtenerUsuarios().subscribe({
      next: (data) => {
        this.mensajes = data

  this.mensajes.forEach((msg) => {
  this.usuarioService.obtenerUsuarioPorId(msg.idUsuario).subscribe((usuario: Usuario) => {
    msg.usuario = usuario.username;
  });
});

        
      },
      error: (err) => console.error('Error al obtener mensajes', err)
    });
  }

  registrarUsuario(){

    const nuevoUsuario : Usuario = {
      username: this.username,
      password: this.password,
      pais: this.pais
    }

    this.usuarioService.registrarUsuario(nuevoUsuario).subscribe(
      (next) => {
        console.log("todo bien", next);
        
      },
      (error) => {
        console.log(error);
        
      }
    )

  }

  registrarMensaje(){

    const nuevoMensaje : Mensaje = {
      fecha: new Date(Date.now()),
      comentario: this.comentario,
      idUsuario: this.seleccionado
    }

    this.mensajeService.registrarUsuario(nuevoMensaje).subscribe(
      (next) => {
        console.log("todo bien", next);
        
      },
      (error) => {
        console.log(error);
        
      }
    )

  }
}